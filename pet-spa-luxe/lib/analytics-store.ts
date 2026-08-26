// Server-only. Never import this from a "use client" file — it reads
// private Redis credentials from process.env. Only app/api/track/route.ts
// and app/analytics-report/page.tsx (both server-side) should import it.
import { Redis } from "@upstash/redis";

// The Vercel "Upstash for Redis" storage integration injects KV_REST_API_*
// when connected with no custom prefix; UPSTASH_REDIS_REST_* is the name
// Upstash's own dashboard/CLI uses if connected manually instead.
const REDIS_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

let cachedClient: Redis | null | undefined;

// Lazy + memoized so a missing env var never throws at import time (e.g.
// during build, or before the storage integration is connected) — every
// caller just gets null and no-ops instead.
function getClient(): Redis | null {
  if (cachedClient !== undefined) return cachedClient;
  cachedClient = REDIS_URL && REDIS_TOKEN ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN }) : null;
  return cachedClient;
}

// The only click events worth paying Redis round-trips for — the site's
// actual conversion CTAs, matching the event names already sent to Vercel
// Analytics in lib/track.ts.
const CLICK_TYPES = ["psl_call_click", "psl_request_click"] as const;
type ClickType = (typeof CLICK_TYPES)[number];

const CLICK_TYPE_LABELS: Record<ClickType, string> = {
  psl_call_click: "Call Now",
  psl_request_click: "Request an Appointment",
};

function isClickType(value: string): value is ClickType {
  return (CLICK_TYPES as readonly string[]).includes(value);
}

function todayUTC(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function lastNDaysUTC(n: number): string[] {
  const days: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

// Keep location keys short, predictable, and safe to interpolate into
// Redis key names — CTAButton/MobileHeaderCall pass short slugs like
// "hero" or "area_sonoma_cta" already, this just guards against anything
// unexpected reaching Redis.
function sanitizeLocation(raw: string): string {
  const trimmed = (raw ?? "").toString().trim().slice(0, 64);
  const safe = trimmed.replace(/[^a-zA-Z0-9_-]/g, "_");
  return safe || "unknown";
}

const KEY_PREFIX = "psl_analytics";
const totalKey = (type: ClickType) => `${KEY_PREFIX}:total:${type}`;
const dayKey = (type: ClickType, day: string) => `${KEY_PREFIX}:day:${day}:${type}`;
const daysSetKey = `${KEY_PREFIX}:days`;
const locKey = (type: ClickType, location: string) => `${KEY_PREFIX}:loc:${type}:${location}`;
const locsSetKey = (type: ClickType) => `${KEY_PREFIX}:locs:${type}`;

// Fire-and-forget from the API route — never throws, so a bad Redis
// connection or a malformed request can never break the page that
// triggered the click.
export async function recordClick(type: string, location: string): Promise<void> {
  if (!isClickType(type)) return;

  const redis = getClient();
  if (!redis) return;

  const day = todayUTC();
  const loc = sanitizeLocation(location);

  try {
    await Promise.all([
      redis.incr(totalKey(type)),
      redis.incr(dayKey(type, day)),
      redis.sadd(daysSetKey, day),
      redis.incr(locKey(type, loc)),
      redis.sadd(locsSetKey(type), loc),
    ]);
  } catch {
    // Swallow — analytics must never be the reason a request fails.
  }
}

export type AnalyticsReport =
  | { connected: false; reason: "not_configured" | "error" }
  | {
      connected: true;
      types: { type: ClickType; label: string }[];
      totals: Record<ClickType, number>;
      last7Days: Record<ClickType, number>;
      dayByDay: { day: string; counts: Record<ClickType, number> }[];
      byLocation: Record<ClickType, { location: string; count: number }[]>;
    };

export async function getReport(): Promise<AnalyticsReport> {
  const redis = getClient();
  if (!redis) return { connected: false, reason: "not_configured" };

  try {
    const totalEntries = await Promise.all(
      CLICK_TYPES.map(async (type) => [type, (await redis.get<number>(totalKey(type))) ?? 0] as const),
    );
    const totals = Object.fromEntries(totalEntries) as Record<ClickType, number>;

    const days30 = lastNDaysUTC(30);
    const dayByDay = await Promise.all(
      days30.map(async (day) => {
        const counts = Object.fromEntries(
          await Promise.all(
            CLICK_TYPES.map(async (type) => [type, (await redis.get<number>(dayKey(type, day))) ?? 0] as const),
          ),
        ) as Record<ClickType, number>;
        return { day, counts };
      }),
    );

    const last7 = new Set(lastNDaysUTC(7));
    const last7Days = CLICK_TYPES.reduce(
      (acc, type) => {
        acc[type] = dayByDay.filter((d) => last7.has(d.day)).reduce((sum, d) => sum + d.counts[type], 0);
        return acc;
      },
      {} as Record<ClickType, number>,
    );

    const byLocationEntries = await Promise.all(
      CLICK_TYPES.map(async (type) => {
        const locs = ((await redis.smembers(locsSetKey(type))) ?? []) as string[];
        const withCounts = await Promise.all(
          locs.map(async (location) => ({
            location,
            count: (await redis.get<number>(locKey(type, location))) ?? 0,
          })),
        );
        withCounts.sort((a, b) => b.count - a.count);
        return [type, withCounts] as const;
      }),
    );
    const byLocation = Object.fromEntries(byLocationEntries) as Record<
      ClickType,
      { location: string; count: number }[]
    >;

    return {
      connected: true,
      types: CLICK_TYPES.map((type) => ({ type, label: CLICK_TYPE_LABELS[type] })),
      totals,
      last7Days,
      dayByDay,
      byLocation,
    };
  } catch {
    return { connected: false, reason: "error" };
  }
}

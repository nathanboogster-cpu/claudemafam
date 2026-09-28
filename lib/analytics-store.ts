import { Redis } from "@upstash/redis";

// Free-tier click tracking for Call Now / Book Now buttons, backed by an
// Upstash Redis database (added to the Vercel project via Storage → Add
// Upstash for Redis). Falls back to a no-op when the integration isn't
// connected yet, so tracking calls never break the site.

export type ClickType = "call_click" | "book_click";

const CLICK_TYPES: ClickType[] = ["call_click", "book_click"];

function isClickType(value: string): value is ClickType {
  return (CLICK_TYPES as string[]).includes(value);
}

let redis: Redis | null | undefined;

function getRedis(): Redis | null {
  if (redis !== undefined) return redis;

  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  redis = url && token ? new Redis({ url, token }) : null;
  return redis;
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD, UTC
}

export async function recordClick(type: string, location: string): Promise<void> {
  if (!isClickType(type)) return;
  const client = getRedis();
  if (!client) return;

  const day = todayKey();
  const safeLocation = location.slice(0, 40).replace(/[^a-zA-Z0-9_-]/g, "_") || "unknown";

  await Promise.all([
    client.incr(`analytics:${type}:total`),
    client.incr(`analytics:${type}:day:${day}`),
    client.incr(`analytics:${type}:location:${safeLocation}`),
    client.sadd("analytics:days", day),
    client.sadd(`analytics:${type}:locations`, safeLocation),
  ]);
}

export type AnalyticsReport = {
  connected: boolean;
  totals: Record<ClickType, number>;
  byDay: { day: string; call_click: number; book_click: number }[];
  byLocation: Record<ClickType, { location: string; count: number }[]>;
};

export async function getReport(): Promise<AnalyticsReport> {
  const client = getRedis();
  if (!client) {
    return {
      connected: false,
      totals: { call_click: 0, book_click: 0 },
      byDay: [],
      byLocation: { call_click: [], book_click: [] },
    };
  }

  const totals = { call_click: 0, book_click: 0 } as Record<ClickType, number>;
  const byLocation = { call_click: [], book_click: [] } as Record<
    ClickType,
    { location: string; count: number }[]
  >;

  for (const type of CLICK_TYPES) {
    totals[type] = Number((await client.get<number>(`analytics:${type}:total`)) ?? 0);

    const locations = (await client.smembers(`analytics:${type}:locations`)) as string[];
    const counts = await Promise.all(
      locations.map(async (location) => ({
        location,
        count: Number((await client.get<number>(`analytics:${type}:location:${location}`)) ?? 0),
      })),
    );
    byLocation[type] = counts.sort((a, b) => b.count - a.count);
  }

  const days = ((await client.smembers("analytics:days")) as string[])
    .sort()
    .reverse()
    .slice(0, 30);

  const byDay = await Promise.all(
    days.map(async (day) => ({
      day,
      call_click: Number((await client.get<number>(`analytics:call_click:day:${day}`)) ?? 0),
      book_click: Number((await client.get<number>(`analytics:book_click:day:${day}`)) ?? 0),
    })),
  );

  return { connected: true, totals, byDay, byLocation };
}

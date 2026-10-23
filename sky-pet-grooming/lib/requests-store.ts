import { Redis } from "@upstash/redis";

// Appointment requests from the /book/ form, stored in an Upstash Redis
// database (added to the Vercel project via Storage → Add Upstash for Redis)
// and listed for the owner at /requests?key=<REQUESTS_SECRET>.
//
// Unlike click tracking, a lost request is a lost customer, so this is not a
// silent no-op: when Redis is not connected, saveRequest() returns false and
// the form tells the visitor it could not send.

export type BookingRequest = {
  id: string;
  receivedAt: string; // ISO timestamp, UTC
  name: string;
  phone: string;
  email: string;
  location: string;
  pets: string;
  timing: string;
  notes: string;
};

const LIST_KEY = "requests:list";
// Keep the newest 1,000. The owner reads them as they arrive; this only stops
// the list growing without bound.
const MAX_STORED = 1000;
// Per-IP cap on sent forms, per hour, to blunt scripted spam.
const RATE_LIMIT_PER_HOUR = 5;

let redis: Redis | null | undefined;

function getRedis(): Redis | null {
  if (redis !== undefined) return redis;

  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  redis = url && token ? new Redis({ url, token }) : null;
  return redis;
}

export function isStoreConnected(): boolean {
  return getRedis() !== null;
}

// True when this IP is still under the hourly cap (and counts this attempt).
// Fails open if Redis is unreachable: saveRequest() will report that anyway.
export async function allowSubmission(ip: string): Promise<boolean> {
  const client = getRedis();
  if (!client) return true;

  const hour = new Date().toISOString().slice(0, 13); // YYYY-MM-DDTHH, UTC
  const key = `requests:rate:${ip}:${hour}`;
  try {
    const count = await client.incr(key);
    if (count === 1) await client.expire(key, 60 * 60);
    return count <= RATE_LIMIT_PER_HOUR;
  } catch {
    return true;
  }
}

export async function saveRequest(request: BookingRequest): Promise<boolean> {
  const client = getRedis();
  if (!client) return false;

  try {
    await client.lpush(LIST_KEY, JSON.stringify(request));
    await client.ltrim(LIST_KEY, 0, MAX_STORED - 1);
    return true;
  } catch {
    return false;
  }
}

export async function listRequests(limit = 200): Promise<BookingRequest[]> {
  const client = getRedis();
  if (!client) return [];

  // The Upstash client parses JSON values on read, so items arrive as objects.
  const items = await client.lrange<BookingRequest | string>(LIST_KEY, 0, limit - 1);
  return items.map((item) => (typeof item === "string" ? (JSON.parse(item) as BookingRequest) : item));
}

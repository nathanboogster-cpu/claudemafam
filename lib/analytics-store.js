// Server-only. Self-hosted click tracker backed by Upstash Redis (free tier),
// so CTA click counts aren't capped by Vercel Web Analytics' Hobby-tier event limit.

const { Redis } = require('@upstash/redis');

const ALLOWED_TYPES = ['call_click', 'booking_click'];

let client;
let attempted = false;

function getRedis() {
  if (attempted) return client;
  attempted = true;
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    client = null;
    return client;
  }
  client = new Redis({ url, token });
  return client;
}

function sanitizeLocation(location) {
  const raw = typeof location === 'string' ? location : '';
  const cleaned = raw.replace(/[^a-zA-Z0-9/_\-.]/g, '').slice(0, 80);
  return cleaned || 'unknown';
}

function todayUTC() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

async function recordClick(type, location) {
  if (!ALLOWED_TYPES.includes(type)) return { ok: false, reason: 'invalid_type' };
  const redis = getRedis();
  if (!redis) return { ok: false, reason: 'not_configured' };

  const loc = sanitizeLocation(location);
  const day = todayUTC();

  await Promise.all([
    redis.incr(`clicks:total:${type}`),
    redis.incr(`clicks:day:${day}:${type}`),
    redis.sadd('clicks:days', day),
    redis.incr(`clicks:loc:${type}:${loc}`),
    redis.sadd(`clicks:locations:${type}`, loc),
  ]);

  return { ok: true };
}

async function getReport() {
  const redis = getRedis();
  if (!redis) return { connected: false };

  const totals = {};
  for (const type of ALLOWED_TYPES) {
    totals[type] = (await redis.get(`clicks:total:${type}`)) || 0;
  }

  const days = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today.getTime() - i * 86400000);
    days.push(d.toISOString().slice(0, 10));
  }
  const byDay = [];
  for (const day of days) {
    const row = { day };
    for (const type of ALLOWED_TYPES) {
      row[type] = (await redis.get(`clicks:day:${day}:${type}`)) || 0;
    }
    byDay.push(row);
  }

  const last7 = {};
  for (const type of ALLOWED_TYPES) {
    last7[type] = byDay.slice(-7).reduce((sum, row) => sum + Number(row[type] || 0), 0);
  }

  const byLocation = {};
  for (const type of ALLOWED_TYPES) {
    const locs = (await redis.smembers(`clicks:locations:${type}`)) || [];
    const rows = [];
    for (const loc of locs) {
      const count = (await redis.get(`clicks:loc:${type}:${loc}`)) || 0;
      rows.push({ location: loc, count: Number(count) });
    }
    rows.sort((a, b) => b.count - a.count);
    byLocation[type] = rows;
  }

  return { connected: true, totals, last7, byDay, byLocation };
}

module.exports = { recordClick, getReport, ALLOWED_TYPES };

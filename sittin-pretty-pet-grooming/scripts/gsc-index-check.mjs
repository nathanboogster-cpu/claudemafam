// Daily index check: asks Google's URL Inspection API for the index status of
// every URL in the built sitemap. Needs GSC_SERVICE_ACCOUNT_JSON (the service
// account's JSON key, added as a user on the Search Console property).
// Usage: node scripts/gsc-index-check.mjs [path-to-sitemap.xml]   (run after `npm run build`)
import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

const SITE = "sc-domain:sittinprettypetgrooming.com";
const sitemapPath = process.argv[2] ?? ".next/server/app/sitemap.xml.body";
const keyJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
if (!keyJson) {
  console.error("GSC_SERVICE_ACCOUNT_JSON is not set; cannot query the URL Inspection API.");
  process.exit(2);
}
const key = JSON.parse(keyJson);
const urls = [...readFileSync(sitemapPath, "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const b64 = (v) => Buffer.from(typeof v === "string" ? v : JSON.stringify(v)).toString("base64url");
async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: "RS256", typ: "JWT" })}.${b64({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const sig = createSign("RSA-SHA256").update(unsigned).sign(key.private_key, "base64url");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${sig}` }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`token request failed (${res.status}): ${JSON.stringify(body)}`);
  return body.access_token;
}

const token = await accessToken();
const rows = [];
for (const url of urls) {
  const res = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE }),
  });
  const body = await res.json();
  if (!res.ok) {
    rows.push({ url, verdict: "ERROR", coverage: `${res.status} ${body?.error?.message ?? ""}`.trim() });
    continue;
  }
  const r = body.inspectionResult?.indexStatusResult ?? {};
  rows.push({
    url,
    verdict: r.verdict ?? "UNKNOWN",
    coverage: r.coverageState ?? "",
    lastCrawl: r.lastCrawlTime ?? "",
    googleCanonical: r.googleCanonical ?? "",
    fetch: r.pageFetchState ?? "",
    robots: r.robotsTxtState ?? "",
    indexing: r.indexingState ?? "",
  });
}
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), total: rows.length, rows }, null, 2));

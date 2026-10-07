#!/usr/bin/env node
// Daily Search Console index check across every client site in this
// monorepo. For each site: fetches its live sitemap.xml, runs the real
// Search Console URL Inspection API (urlInspection.index:inspect) against
// every URL in it, and reports which pages are indexed vs. not.
//
// Google's Indexing API only covers JobPosting/BroadcastEvent pages — there
// is no API to request indexing for an ordinary page. The "Request
// Indexing" button in Search Console is a manual, UI-only action (and
// Google rate-limits it to roughly 10-12 URLs/day per property), so this
// script never attempts it. Instead, for every not-indexed URL it prints a
// direct deep link into the Search Console URL Inspection tool so a human
// can open it and click Request Indexing themselves.
//
// Auth: a Google Cloud service account (GSC_SERVICE_ACCOUNT_JSON env var,
// the full downloaded JSON key) added as at least a Restricted user on each
// property below. See the setup steps in this repo's PR description / the
// workflow file for how to create and attach one.

import { sign } from "node:crypto";
import { appendFile, writeFile } from "node:fs/promises";

// `property` must match the Search Console property EXACTLY as it appears in
// GSC. Every Tongfluence property is a Domain property, so it's the
// `sc-domain:` form — a URL-prefix string (https://www.x.com/) against a
// Domain property returns 403 even when the service account has access.
// `sitemap` is the live sitemap URL (its <loc> host can be www or not; a
// Domain property covers both).
const SITES = [
  { name: "bow-wags", property: "sc-domain:bowwags.com", sitemap: "https://www.bowwags.com/sitemap.xml" },
  { name: "sittin-pretty-pet-grooming", property: "sc-domain:sittinprettypetgrooming.com", sitemap: "https://www.sittinprettypetgrooming.com/sitemap.xml" },
  { name: "bark-and-bork-mobile-pet-spa", property: "sc-domain:barkandbork.com", sitemap: "https://www.barkandbork.com/sitemap.xml" },
  { name: "flos-happy-clipper", property: "sc-domain:floshappyclipper.com", sitemap: "https://floshappyclipper.com/sitemap.xml" },
  { name: "pampered-puppies", property: "sc-domain:pamperedpuppiespetgrooming.com", sitemap: "https://www.pamperedpuppiespetgrooming.com/sitemap.xml" },
  { name: "petssible", property: "sc-domain:petssibleus.com", sitemap: "https://www.petssibleus.com/sitemap.xml" },
  { name: "tongfluence", property: "sc-domain:tongfluence.com", sitemap: "https://www.tongfluence.com/sitemap.xml" },
  // groomer-on-call has no custom domain attached yet (still *.vercel.app),
  // so there is no real Search Console property to check. Add it here once
  // a domain is live. Pet Spa Luxe was removed 2026-10-06 (former client).
];

const INSPECT_DELAY_MS = 350; // stay well under the per-minute quota
const FETCH_TIMEOUT_MS = 30_000; // never let one slow request hang the whole run
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const INSPECT_URL = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function getAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claims = {
    iss: serviceAccount.client_email,
    scope: SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };
  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claims))}`;
  const signature = sign("RSA-SHA256", Buffer.from(unsigned), serviceAccount.private_key)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  const jwt = `${unsigned}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`Token request failed: ${res.status} ${await res.text()}`);
  }
  const { access_token } = await res.json();
  return access_token;
}

// Returns [{ url, lastmod }] — lastmod is the sitemap's date (or null).
async function fetchSitemapUrls(sitemapUrl, depth = 0) {
  const res = await fetch(sitemapUrl, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!res.ok) {
    throw new Error(`Could not fetch ${sitemapUrl}: ${res.status}`);
  }
  const xml = await res.text();
  // A sitemap index lists child sitemaps, not pages — follow them (1 level).
  if (/<sitemapindex/i.test(xml) && depth === 0) {
    const children = [...xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)].map((m) => m[1].trim());
    const nested = [];
    for (const child of children) nested.push(...(await fetchSitemapUrls(child, 1)));
    return dedupe(nested);
  }
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
    const loc = m[1].match(/<loc>\s*(.*?)\s*<\/loc>/)?.[1]?.trim();
    const lastmod = m[1].match(/<lastmod>\s*(.*?)\s*<\/lastmod>/)?.[1]?.trim() ?? null;
    return loc ? { url: loc, lastmod } : null;
  });
  return dedupe(entries.filter(Boolean));
}

function dedupe(entries) {
  const seen = new Map();
  for (const e of entries) if (!seen.has(e.url)) seen.set(e.url, e);
  return [...seen.values()];
}

async function inspectUrl(accessToken, property, inspectionUrl) {
  let res;
  try {
    res = await fetch(INSPECT_URL, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inspectionUrl, siteUrl: property }),
    });
  } catch (err) {
    return { error: `request failed: ${err.name === "TimeoutError" ? "timed out" : err.message}` };
  }
  if (!res.ok) {
    return { status: res.status, error: `${res.status} ${(await res.text()).slice(0, 300)}` };
  }
  const data = await res.json();
  const result = data.inspectionResult?.indexStatusResult;
  return {
    verdict: result?.verdict ?? "UNKNOWN",
    coverageState: result?.coverageState ?? "unknown",
    lastCrawlTime: result?.lastCrawlTime ?? null,
  };
}

// Coverage states where clicking "Request Indexing" is the right move.
const REQUESTABLE = [
  "URL is unknown to Google",
  "Discovered - currently not indexed",
  "Crawled - currently not indexed",
];
// States that are only correct if the LIVE page still redirects / points its
// canonical elsewhere. Google's verdict is often stale (e.g. a domain switch
// since the last crawl), so we check the live page before trusting it.
const VERIFY_LIVE = ["Page with redirect", "Alternate page with proper canonical tag"];

const sameUrl = (a, b) => a.replace(/\/+$/, "") === b.replace(/\/+$/, "");

// What does the page do right now? { ok, note }: ok=true means it serves 200
// with a self-referencing (or no) canonical, so a fresh crawl will fix it.
async function checkLivePage(url) {
  try {
    const res = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
    if (res.status >= 300 && res.status < 400) {
      return { ok: false, note: `live page redirects (${res.status}) to ${res.headers.get("location")}` };
    }
    if (res.status !== 200) return { ok: false, note: `live page returns ${res.status}` };
    const html = await res.text();
    const tag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];
    const canonical = tag?.match(/href=["']([^"']+)["']/i)?.[1];
    if (canonical && !sameUrl(new URL(canonical, url).href, url)) {
      return { ok: false, note: `live canonical points to ${canonical}` };
    }
    return { ok: true, note: "live page is now fine (200, self-canonical); Google's data is stale" };
  } catch (err) {
    return { ok: false, note: `could not load live page: ${err.message}` };
  }
}

function inspectDeepLink(property, pageUrl) {
  const resourceId = encodeURIComponent(property);
  const id = encodeURIComponent(pageUrl);
  return `https://search.google.com/search-console/inspect?resource_id=${resourceId}&id=${id}`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkSite(accessToken, site) {
  const entries = await fetchSitemapUrls(site.sitemap);
  console.log(`[${site.name}] ${entries.length} sitemap URLs — inspecting…`);
  const indexed = [];
  const notIndexed = [];
  const errored = [];

  for (const { url, lastmod } of entries) {
    const result = await inspectUrl(accessToken, site.property, url);
    if (result.error) {
      // 403 on the first URL = the service account isn't a user on this
      // property (or the property string doesn't match). Don't spam one
      // error line per URL — report it once.
      if (result.status === 403 && indexed.length + notIndexed.length + errored.length === 0) {
        return {
          site,
          skipped: `No access to \`${site.property}\` — add the service account as a Restricted user on this property in Search Console (Settings → Users and permissions). API said: ${result.error}`,
        };
      }
      errored.push({ url, error: result.error });
    } else if (result.verdict === "PASS") {
      indexed.push({ url, ...result });
    } else {
      const item = { url, lastmod, ...result, requestable: REQUESTABLE.includes(result.coverageState) };
      if (VERIFY_LIVE.includes(result.coverageState)) {
        const live = await checkLivePage(url);
        item.requestable = live.ok;
        item.note = live.note;
        if (!live.ok) item.needsSiteFix = true;
      }
      notIndexed.push(item);
    }
    await sleep(INSPECT_DELAY_MS);
  }

  console.log(
    `[${site.name}] done: ${indexed.length} indexed, ${notIndexed.length} not indexed, ${errored.length} errors`,
  );
  return { site, total: entries.length, indexed, notIndexed, errored };
}

// Blog posts first, then newest sitemap lastmod, then sitemap order.
function requestQueue(r) {
  const isBlog = (u) => /\/blog\/[^/]+/.test(u);
  return r.notIndexed
    .map((item, i) => ({ ...item, i }))
    .filter((item) => item.requestable)
    .sort(
      (a, b) =>
        isBlog(b.url) - isBlog(a.url) ||
        (b.lastmod ?? "").localeCompare(a.lastmod ?? "") ||
        a.i - b.i,
    );
}

function renderReport(results) {
  const lines = [`# Search Console Index Check — ${new Date().toISOString().slice(0, 10)}`, ""];
  const queue = [];

  for (const r of results) {
    if (r.skipped) {
      lines.push(`## ${r.site.name} — skipped`, "", r.skipped, "");
      continue;
    }
    lines.push(`## ${r.site.name} — ${r.indexed.length}/${r.total} indexed`, "");
    const q = requestQueue(r);
    for (const item of q) {
      queue.push({ site: r.site.name, property: r.site.property, url: item.url, state: item.coverageState });
    }
    if (q.length > 0) {
      lines.push(`**Request indexing (${q.length}, in priority order):**`, "");
      for (const item of q) {
        const extra = item.note ? ` — ${item.note}` : "";
        lines.push(
          `- [${item.url}](${inspectDeepLink(r.site.property, item.url)}) — ${item.coverageState}${extra}`,
        );
      }
      lines.push("");
    }
    const fix = r.notIndexed.filter((i) => i.needsSiteFix);
    if (fix.length > 0) {
      lines.push(`**Needs a site fix — requesting won't help (${fix.length}):**`, "");
      for (const item of fix) lines.push(`- ${item.url} — ${item.coverageState} — ${item.note}`);
      lines.push("");
    }
    const other = r.notIndexed.filter((i) => !i.requestable && !i.needsSiteFix);
    if (other.length > 0) {
      lines.push(`**Not indexed, excluded on purpose (${other.length}):**`, "");
      for (const item of other) lines.push(`- ${item.url} — ${item.coverageState}`);
      lines.push("");
    }
    if (r.errored.length > 0) {
      lines.push(`**Inspection errors (${r.errored.length}):**`, "");
      for (const item of r.errored) lines.push(`- ${item.url} — ${item.error}`);
      lines.push("");
    }
    if (r.notIndexed.length === 0 && r.errored.length === 0) {
      lines.push("All sitemap URLs are indexed.", "");
    }
  }

  // Machine-readable copy for the daily request task (hidden when rendered).
  lines.push("<!-- request-queue-json", JSON.stringify(queue), "-->");
  return lines.join("\n");
}

async function main() {
  const keyJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!keyJson) {
    console.error("GSC_SERVICE_ACCOUNT_JSON is not set — skipping index check.");
    process.exit(0);
  }
  const serviceAccount = JSON.parse(keyJson);
  const accessToken = await getAccessToken(serviceAccount);

  // Sites run in parallel: the URL Inspection quota is per property, so this
  // is safe, and it cuts the run from ~20 min to roughly the slowest site.
  const results = await Promise.all(
    SITES.map((site) =>
      checkSite(accessToken, site).catch((err) => ({ site, skipped: `Error: ${err.message}` })),
    ),
  );

  const report = renderReport(results);
  console.log(report);

  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (summaryPath) {
    await appendFile(summaryPath, report + "\n");
  }

  const hasIssues = results.some(
    (r) => r.skipped || (r.notIndexed?.length ?? 0) > 0 || (r.errored?.length ?? 0) > 0,
  );
  await writeFile("gsc-report.md", report);
  await writeFile("gsc-has-issues.txt", hasIssues ? "true" : "false");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

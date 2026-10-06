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

async function fetchSitemapUrls(sitemapUrl, depth = 0) {
  const res = await fetch(sitemapUrl);
  if (!res.ok) {
    throw new Error(`Could not fetch ${sitemapUrl}: ${res.status}`);
  }
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)].map((m) => m[1].trim());
  // A sitemap index lists child sitemaps, not pages — follow them (1 level).
  if (/<sitemapindex/i.test(xml) && depth === 0) {
    const nested = [];
    for (const child of locs) nested.push(...(await fetchSitemapUrls(child, 1)));
    return [...new Set(nested)];
  }
  return [...new Set(locs)];
}

async function inspectUrl(accessToken, property, inspectionUrl) {
  const res = await fetch(INSPECT_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inspectionUrl, siteUrl: property }),
  });
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

function inspectDeepLink(property, pageUrl) {
  const resourceId = encodeURIComponent(property);
  const id = encodeURIComponent(pageUrl);
  return `https://search.google.com/search-console/inspect?resource_id=${resourceId}&id=${id}`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkSite(accessToken, site) {
  const urls = await fetchSitemapUrls(site.sitemap);
  const indexed = [];
  const notIndexed = [];
  const errored = [];

  for (const url of urls) {
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
      notIndexed.push({ url, ...result });
    }
    await sleep(INSPECT_DELAY_MS);
  }

  return { site, total: urls.length, indexed, notIndexed, errored };
}

function renderReport(results) {
  const lines = [`# Search Console Index Check — ${new Date().toISOString().slice(0, 10)}`, ""];

  for (const r of results) {
    if (r.skipped) {
      lines.push(`## ${r.site.name} — skipped`, "", r.skipped, "");
      continue;
    }
    lines.push(
      `## ${r.site.name} — ${r.indexed.length}/${r.total} indexed`,
      "",
    );
    if (r.notIndexed.length > 0) {
      lines.push(`**Not indexed (${r.notIndexed.length}):**`, "");
      for (const item of r.notIndexed) {
        lines.push(
          `- [${item.url}](${inspectDeepLink(r.site.property, item.url)}) — ${item.verdict} / ${item.coverageState}`,
        );
      }
      lines.push("");
    }
    if (r.errored.length > 0) {
      lines.push(`**Inspection errors (${r.errored.length}):**`, "");
      for (const item of r.errored) {
        lines.push(`- ${item.url} — ${item.error}`);
      }
      lines.push("");
    }
    if (r.notIndexed.length === 0 && r.errored.length === 0) {
      lines.push("All sitemap URLs are indexed.", "");
    }
  }

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

  const results = [];
  for (const site of SITES) {
    try {
      results.push(await checkSite(accessToken, site));
    } catch (err) {
      results.push({ site, skipped: `Error: ${err.message}` });
    }
  }

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

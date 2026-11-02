// Pre-launch QA for the I Love Dogs site. Run against a production build:
//
//   npm run build && npx next start -p 3100 &
//   QA_BASE=http://localhost:3100 npm run qa
//
// Checks accuracy (banned claims), prices, SEO, links, conversion/mobile and
// performance, and saves 390x844 full-page screenshots to qa/. The
// adversarial read is done by a person. Exits non-zero on any failure.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = (process.env.QA_BASE ?? "http://localhost:3100").replace(/\/$/, "");
const SITE = "https://www.ilovedogsgrooming.com";
const TEL = "tel:+16105257387";
const MAPS = "https://www.google.com/maps/search/?api=1&query=723%20County%20Line%20Rd%2C%20Bryn%20Mawr%2C%20PA%2019010";
const TOWNS = ["/dog-grooming-gladwyne-pa/", "/dog-grooming-haverford-pa/", "/dog-grooming-ardmore-pa/", "/dog-grooming-havertown-pa/"];
const PAGES = ["/", "/dog-grooming/", "/pickup-and-delivery/", "/service-area/", "/about/", "/faq/", "/contact/", "/gallery/", ...TOWNS];
const ALL = [...PAGES, "/404.html"];
// Vercel Analytics serves its script at /_vercel/insights/* on Vercel only;
// under `next start` that request 404s, so it is ignored here.
const VERCEL_ONLY = /\/_vercel\//;

const failures = [];
const passes = {};
function check(pass, ok, msg) {
  passes[pass] ??= { ok: 0, fail: 0 };
  passes[pass][ok ? "ok" : "fail"]++;
  if (!ok) failures.push(`[${pass}] ${msg}`);
}

const FORBIDDEN = [
  /all-inclusive/i,
  /anal gland/i,
  /flea/i,
  /40 years/i,
  /since 19/i,
  /award/i,
  /best of/i,
  /\bcats?\b/i,
  /mobile groom/i,
  /boarding/i,
  /daycare/i,
  /\brating/i,
  /★/,
  /review/i,
  /testimonial/i,
  /@gmail|mailto:/i,
  /(?<!facebook\.com\/)ilovedogspetgrooming\.com/i,
  /look no further|pride ourselves|fur-ever|pawsome|groomer comes to|come to your (home|door)/i,
];

// Hours-like strings. Checked against visible text only: SVG path data in the
// HTML ("M1 1l5 5 5-5") would otherwise match.
const HOURS = [/\b\d{1,2}:\d\d\s*(am|pm)?\b/i, /\b\d{1,2}\s*[–-]\s*\d{1,2}\s*(am|pm)?\b(?![\d-])/i, /\b\d{1,2}\s*(am|pm)\b/i];

// Scroll through the page so lazy images load, wait until every image has
// decoded, then return to the top.
async function loadAllImages(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForLoadState("networkidle");
  await page.waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 15000 });
}

// Uses a pre-installed Chromium when CHROMIUM_PATH is set (e.g. /opt/pw-browsers/chromium).
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
await mkdir("qa", { recursive: true });

// ---- Fetch-level checks: status codes, redirects, robots, sitemap ----
const html = {};
for (const p of ALL) {
  const res = await fetch(BASE + p, { redirect: "manual" });
  html[p] = await res.text();
  check("4-links", res.status === (p === "/404.html" ? 404 : 200), `${p} returned ${res.status}`);
}

for (const src of ["/home", "/home/"]) {
  // `next start` adds the trailing slash first (308) for /home. On Vercel the
  // trailing-slash route has `continue: true`, so the next.config 301 wins and
  // /home -> / is one hop (checked in .vercel/output/config.json from
  // `vercel build`). Either way it must end at "/".
  const res = await fetch(BASE + src, { redirect: "manual" });
  const final = await fetch(BASE + src);
  check("4-links", [301, 308].includes(res.status) && new URL(final.url).pathname === "/", `${src} -> ${res.status}`);
}
{
  const res = await fetch(BASE + "/home/", { redirect: "manual" });
  check("4-links", res.status === 301, `/home/ must be a 301, got ${res.status}`);
}

const robots = await (await fetch(BASE + "/robots.txt")).text();
check(
  "3-seo",
  /User-Agent: \*/i.test(robots) && /Allow: \/\n/.test(robots) && /Disallow: \/analytics-report/.test(robots) && robots.includes(`Sitemap: ${SITE}/sitemap.xml`),
  "robots.txt",
);
const sitemap = await (await fetch(BASE + "/sitemap.xml")).text();
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
check("3-seo", locs.length === PAGES.length && PAGES.every((p) => locs.includes(SITE + p)), `sitemap locs: ${locs.join(", ")}`);
check("3-seo", (sitemap.match(/<lastmod>/g) ?? []).length === PAGES.length, "sitemap lastmod on every URL");

// ---- Page-level checks in a real browser ----
const titles = new Set();
const descs = new Set();
const internal = new Map(); // href -> first page seen on
const visibleText = {};
let homeJs = 0;

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const desktop = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const narrow = await browser.newContext({ viewport: { width: 320, height: 640 }, isMobile: true, hasTouch: true });

for (const p of ALL) {
  const page = await mobile.newPage();
  const hosts = new Set();
  const errors = [];
  let jsBytes = 0;
  page.on("request", (r) => hosts.add(new URL(r.url()).host));
  page.on("response", async (r) => {
    if (r.request().resourceType() === "script") jsBytes += (await r.body().catch(() => Buffer.alloc(0))).length;
    if (r.status() >= 400 && !VERCEL_ONLY.test(r.url()) && r.request().resourceType() !== "document") errors.push(`${r.status()} ${r.url()}`);
  });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(BASE + p, { waitUntil: "networkidle" });
  await loadAllImages(page);
  if (p === "/") homeJs = jsBytes;
  const name = p === "/" ? "home" : p.replace(/\//g, "").replace(".html", "");
  await page.screenshot({ path: `qa/mobile-${name}.png`, fullPage: true });

  const info = await page.evaluate(() => {
    const vis = (el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && s.display !== "none" && s.visibility !== "hidden";
    };
    const tels = [...document.querySelectorAll('a[href^="tel:"]')];
    const sticky = document.getElementById("sticky-cta");
    return {
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.content ?? "",
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? "",
      robots: document.querySelector('meta[name="robots"]')?.content ?? "",
      ogUrl: document.querySelector('meta[property="og:url"]')?.content ?? "",
      ogSite: document.querySelector('meta[property="og:site_name"]')?.content ?? "",
      ogType: document.querySelector('meta[property="og:type"]')?.content ?? "",
      theme: document.querySelector('meta[name="theme-color"]')?.content ?? "",
      lang: document.documentElement.lang,
      h1: document.querySelectorAll("h1").length,
      headings: [...document.querySelectorAll("main h1, main h2, main h3")].map((h) => Number(h.tagName[1])),
      skip: !!document.querySelector('a[href="#main-content"]') && !!document.getElementById("main-content"),
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent),
      text: document.body.innerText,
      tels: tels.map((a) => a.getAttribute("href")),
      maps: [...document.querySelectorAll('a[href*="google.com/maps"]')].map((a) => a.getAttribute("href")),
      telInFirstViewport: tels.some((a) => {
        if (!vis(a)) return false;
        const r = a.getBoundingClientRect();
        return r.top >= 0 && r.left >= 0 && r.bottom <= innerHeight && r.right <= innerWidth;
      }),
      stickyVisible: sticky ? vis(sticky) : false,
      overflow: document.documentElement.scrollWidth - innerWidth,
      // Pill CTA buttons must be >= 44px; every other visible link >= 24px (WCAG 2.5.8).
      smallButtons: [...document.querySelectorAll("a.rounded-full, button")]
        .filter(vis)
        .filter((b) => b.getBoundingClientRect().height < 44)
        .map((b) => b.textContent.trim()),
      smallLinks: [...document.querySelectorAll("a, summary")]
        .filter(vis)
        .filter((a) => !a.classList.contains("sr-only"))
        .filter((a) => !a.closest("p, dd, address") || a.closest("footer"))
        .filter((a) => a.getBoundingClientRect().height < 24)
        .map((a) => a.textContent.trim()),
      ogImage: document.querySelector('meta[property="og:image"]')?.content ?? "",
      hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
    };
  });
  visibleText[p] = info.text;

  // 1. Accuracy (visible text + raw HTML including the RSC payload)
  for (const re of FORBIDDEN) {
    check("1-accuracy", !re.test(info.text), `${p} visible text matches ${re}`);
    check("1-accuracy", !re.test(html[p]), `${p} HTML matches ${re}`);
  }
  for (const re of HOURS) check("1-accuracy", !re.test(info.text), `${p} visible text has an hours-like string ${re}`);

  // 3. SEO
  const indexable = p !== "/404.html";
  check("3-seo", info.h1 === 1, `${p} has ${info.h1} h1`);
  check("3-seo", info.lang === "en", `${p} lang`);
  check("3-seo", info.theme === "#1f4d3a", `${p} theme-color`);
  check("3-seo", info.skip, `${p} skip link`);
  for (let i = 1; i < info.headings.length; i++) {
    check("3-seo", info.headings[i] - info.headings[i - 1] <= 1, `${p} heading level skips h${info.headings[i - 1]} -> h${info.headings[i]}`);
  }
  const ld = [];
  for (const block of info.jsonld) {
    let ok = true;
    try {
      const d = JSON.parse(block);
      ld.push(d);
      if (/openingHours|aggregateRating|"review"|priceRange|"email"/i.test(JSON.stringify(d))) ok = false;
    } catch {
      ok = false;
    }
    check("3-seo", ok, `${p} JSON-LD invalid or contains forbidden keys`);
  }
  if (indexable) {
    check("3-seo", info.title.length <= 60 && !titles.has(info.title), `${p} title "${info.title}" (${info.title.length})`);
    check("3-seo", info.desc.length > 0 && info.desc.length <= 160 && !descs.has(info.desc), `${p} description (${info.desc.length})`);
    titles.add(info.title);
    descs.add(info.desc);
    check("3-seo", info.canonical === SITE + p, `${p} canonical ${info.canonical}`);
    check("3-seo", info.ogUrl === SITE + p && info.ogSite === "I Love Dogs Pet Grooming" && info.ogType === "website", `${p} og tags`);
    check("3-seo", !/noindex/.test(info.robots), `${p} unexpected noindex`);
    const types = ld.map((d) => d["@type"]);
    check("3-seo", types.includes("LocalBusiness") && types.includes("WebSite"), `${p} missing LocalBusiness/WebSite`);
    check("3-seo", types.includes("BreadcrumbList"), `${p} missing BreadcrumbList`);
    check("3-seo", (p === "/faq/") === types.includes("FAQPage"), `${p} FAQPage placement`);
    const wantsService = ["/dog-grooming/", "/pickup-and-delivery/", ...TOWNS].includes(p);
    check("3-seo", wantsService === types.includes("Service"), `${p} Service schema placement`);
    const biz = ld.find((d) => d["@type"] === "LocalBusiness");
    check(
      "3-seo",
      biz && biz.telephone === "+16105257387" && biz.address.streetAddress === "723 County Line Rd" && biz.address.postalCode === "19010",
      `${p} LocalBusiness NAP`,
    );
  } else {
    check("3-seo", /noindex/.test(info.robots), "404 must be noindex");
    check("3-seo", info.title === "Page not found | I Love Dogs Pet Grooming", "404 title");
  }

  // 4. Links
  for (const t of info.tels) check("4-links", t === TEL, `${p} tel href ${t}`);
  for (const m of info.maps) check("4-links", m === MAPS, `${p} maps href ${m}`);
  for (const h of info.hrefs) {
    if (h.startsWith("#")) check("4-links", html[p].includes(`id="${h.slice(1)}"`), `${p} same-page anchor ${h} has no target`);
    else if (h.startsWith("/")) internal.set(h, p);
  }

  // 5. Conversion / mobile
  check("5-mobile", info.telInFirstViewport, `${p} no tel link fully visible in first 390x844 viewport`);
  check("5-mobile", info.stickyVisible, `${p} sticky call bar hidden on mobile`);
  check("5-mobile", info.overflow === 0, `${p} horizontal overflow ${info.overflow}px at 390`);
  check("5-mobile", info.smallButtons.length === 0, `${p} CTA buttons under 44px: ${info.smallButtons}`);
  check("5-mobile", info.smallLinks.length === 0, `${p} links under 24px: ${info.smallLinks}`);

  // Footer's last line must not sit under the sticky bar at the bottom of the page.
  await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
  await page.waitForTimeout(100);
  const covered = await page.evaluate(() => {
    const last = document.querySelector("footer").lastElementChild.getBoundingClientRect();
    const bar = document.getElementById("sticky-cta").getBoundingClientRect();
    return last.bottom > bar.top;
  });
  check("5-mobile", !covered, `${p} sticky bar covers the footer's last line`);

  // 6. Performance / privacy
  const foreign = [...hosts].filter((h) => h !== new URL(BASE).host);
  check("6-perf", foreign.length === 0, `${p} requests to other hosts: ${foreign}`);
  const imgs = await page.$$eval("img", (els) =>
    els.map((i) => ({ src: i.currentSrc || i.src, alt: i.getAttribute("alt"), ok: i.complete && i.naturalWidth > 0 })),
  );
  for (const im of imgs) {
    check("7-images", im.alt !== null && im.alt.trim().length > 0, `${p} image without alt text: ${im.src}`);
    check("7-images", im.ok, `${p} image failed to load: ${im.src}`);
    check("7-images", new URL(im.src).host === new URL(BASE).host && im.src.includes("/_next/image"), `${p} image not served by next/image: ${im.src}`);
  }
  if (indexable) {
    check("7-images", info.ogImage === `${SITE}/images/og-image.jpg`, `${p} og:image ${info.ogImage}`);
    const biz = ld.find((d) => d["@type"] === "LocalBusiness");
    for (const u of biz?.image ?? []) {
      check("7-images", u.startsWith(`${SITE}/images/`) && (await fetch(BASE + new URL(u).pathname)).status === 200, `${p} schema image ${u}`);
    }
  }
  check("6-perf", errors.length === 0, `${p} errors: ${errors.join("; ")}`);
  await page.close();

  // Desktop + 320px
  for (const [ctx, label] of [[desktop, "1280"], [narrow, "320"]]) {
    const pg = await ctx.newPage();
    await pg.goto(BASE + p, { waitUntil: "networkidle" });
    const d = await pg.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - innerWidth,
      sticky: getComputedStyle(document.getElementById("sticky-cta")).display,
      headerCall: [...document.querySelectorAll('header a[href^="tel:"]')].some((a) => a.getBoundingClientRect().height > 0),
    }));
    check("5-mobile", d.overflow === 0, `${p} horizontal overflow ${d.overflow}px at ${label}`);
    if (label === "1280") {
      check("5-mobile", d.sticky === "none", `${p} sticky bar visible on desktop`);
      check("5-mobile", d.headerCall, `${p} header call button missing on desktop`);
      if (p === "/") {
        await loadAllImages(pg);
        await pg.screenshot({ path: "qa/desktop-home.png", fullPage: true });
      }
    }
    await pg.close();
  }
}

// 2. Prices
for (const p of ["/dog-grooming/", "/"]) {
  for (const s of ["From $75", "From $115", "From $150"]) check("2-prices", visibleText[p].includes(s), `${p} missing "${s}"`);
}
check("2-prices", visibleText["/dog-grooming/"].includes("Prices are quoted when we meet your dog. They depend on size, coat length, coat type and condition."), "price note");
check("2-prices", visibleText["/faq/"].includes("Packages start at $75 for Bath & Pamper, $115 for The Works and $150 for Full Spa Day"), "faq prices");
const allPrices = Object.values(visibleText).join(" ").match(/\$\d+/g) ?? [];
check("2-prices", allPrices.every((x) => ["$75", "$115", "$150"].includes(x)), `unexpected price strings: ${[...new Set(allPrices)]}`);

// 4b. Every internal link and #anchor resolves, with no redirect hop.
for (const [href, from] of internal) {
  const [path, hash] = href.split("#");
  const res = await fetch(BASE + path, { redirect: "manual" });
  check("4-links", res.status === 200, `${href} (on ${from}) -> ${res.status}`);
  check("4-links", path.endsWith("/"), `${href} (on ${from}) lacks trailing slash`);
  if (hash) check("4-links", (await res.text()).includes(`id="${hash}"`), `${href} anchor missing`);
}
// No orphans: every indexable page is linked from somewhere else.
for (const p of PAGES) check("4-links", internal.has(p), `${p} is not linked from any page`);

// FAQPage schema text must equal the visible answer text.
{
  const faqLd = [...html["/faq/"].matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .find((d) => d["@type"] === "FAQPage");
  const pg = await mobile.newPage();
  await pg.goto(BASE + "/faq/");
  const visible = await pg.$$eval("main dl > div", (ds) => ds.map((d) => ({ q: d.querySelector("dt").textContent, a: d.querySelector("dd").textContent })));
  check(
    "3-seo",
    faqLd.mainEntity.length === 8 && faqLd.mainEntity.every((m, i) => m.name === visible[i].q && m.acceptedAnswer.text === visible[i].a),
    "FAQPage schema differs from visible FAQ",
  );
  await pg.close();
}

// 6. Own CSS weight (inlined Tailwind output).
const css = (html["/"].match(/<style[^>]*>([\s\S]*?)<\/style>/g) ?? []).join("").length;
check("6-perf", css < 40000, `own CSS ${css} B >= 40KB`);

await browser.close();

console.log("\nQA summary");
for (const [k, v] of Object.entries(passes).sort()) console.log(`  ${k.padEnd(12)} ${v.fail ? "FAIL" : "PASS"}  (${v.ok} checks ok, ${v.fail} failed)`);
console.log(`  inlined CSS ${css} B; JS loaded on home ${homeJs} B (uncompressed, framework + client components)`);
if (failures.length) {
  console.log("\nFailures:\n" + failures.map((f) => "  - " + f).join("\n"));
  process.exit(1);
}
console.log("\nAll checks passed.");

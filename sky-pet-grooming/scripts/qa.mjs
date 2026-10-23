// Pre-launch QA for the Sky Pet Grooming site. Run against a production
// build, with the local Upstash mock standing in for Redis:
//
//   npm run build
//   node scripts/mock-upstash.mjs &
//   KV_REST_API_URL=http://localhost:8079 KV_REST_API_TOKEN=qa REQUESTS_SECRET=qa-secret npx next start -p 3100 &
//   QA_BASE=http://localhost:3100 npm run qa
//
// Checks accuracy (banned claims), SEO, links, conversion/mobile, the booking
// form end to end, and performance, and saves 390x844 full-page screenshots
// to qa/. The adversarial read is done by a person. Exits non-zero on any
// failure.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = (process.env.QA_BASE ?? "http://localhost:3100").replace(/\/$/, "");
const SECRET = process.env.REQUESTS_SECRET ?? "qa-secret";
const SITE = "https://www.skypetgrooming.com";
const BOOK = "/book/";
const PAGES = ["/", "/mobile-pet-grooming/", "/about/", "/faq/", BOOK];
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

// Only four facts are verified (see lib/site-data.ts). Anything that would
// claim more is banned from visible text and HTML.
const FORBIDDEN = [
  /(?<!["\\])\$\s?\d/, // prices (the RSC payload's "$1" references are not)
  /tel:|mailto:|@gmail/i, // no verified phone or email
  /\breview/i,
  /\brating/i,
  /★/,
  /award|best of|#1\b|top-rated/i, // "#1" but not hex colors like #12406b
  /\d+\+?\s*years|since (19|20)\d\d/i,
  /family-owned|certified/i,
  /\bvan\b|\btrailer\b|\bsalon on wheels/i,
  /\bcats?\b|\bdogs?\b|\bpupp(y|ies)\b|\bkittens?\b/i, // species not verified: say "pet"
  /\b(bath|haircut|nail|teeth|de-?shed|blow[- ]?dry|ear clean)/i, // service menu not verified
  /natural products|organic|hypoallergenic|non-toxic/i,
  /Hesperia|Victorville|Los Angeles|San Diego|San Francisco|Orange County/i, // no verified cities
  /look no further|pride ourselves|fur-ever|pawsome|furbab/i,
];

// Hours-like strings. Checked against visible text only: SVG path data in the
// HTML would otherwise match.
const HOURS = [/\b\d{1,2}:\d\d\s*(am|pm)?\b/i, /\b\d{1,2}\s*(am|pm)\b/i, /\b(mon|tue|wed|thu|fri|sat|sun)[a-z]*\s*[–-]/i];

// Uses a pre-installed Chromium when CHROMIUM_PATH is set (e.g. /opt/pw-browsers/chromium).
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
await mkdir("qa", { recursive: true });

// ---- Fetch-level checks: status codes, robots, sitemap ----
const html = {};
for (const p of ALL) {
  const res = await fetch(BASE + p, { redirect: "manual" });
  html[p] = await res.text();
  check("4-links", res.status === (p === "/404.html" ? 404 : 200), `${p} returned ${res.status}`);
}

const robots = await (await fetch(BASE + "/robots.txt")).text();
check(
  "3-seo",
  /User-Agent: \*/i.test(robots) && /Allow: \/\n/.test(robots) && /Disallow: \/requests/.test(robots) && robots.includes(`Sitemap: ${SITE}/sitemap.xml`),
  "robots.txt",
);
const sitemap = await (await fetch(BASE + "/sitemap.xml")).text();
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
check("3-seo", locs.length === PAGES.length && PAGES.every((p) => locs.includes(SITE + p)), `sitemap locs: ${locs.join(", ")}`);
check("3-seo", (sitemap.match(/<lastmod>/g) ?? []).length === PAGES.length, "sitemap lastmod on every URL");

// The private inbox: locked without the key, noindex either way.
{
  const locked = await (await fetch(BASE + "/requests/")).text();
  check("7-form", locked.includes("Not authorized") && /noindex/.test(locked), "/requests/ without key must be locked and noindex");
  const wrong = await (await fetch(BASE + "/requests/?key=wrong")).text();
  check("7-form", wrong.includes("Not authorized"), "/requests/ with a wrong key must be locked");
}

// ---- Page-level checks in a real browser ----
const titles = new Set();
const descs = new Set();
const internal = new Map(); // href -> first page seen on
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
  if (p === "/") homeJs = jsBytes;
  const name = p === "/" ? "home" : p.replace(/\//g, "").replace(".html", "");
  await page.screenshot({ path: `qa/mobile-${name}.png`, fullPage: true });

  const info = await page.evaluate((BOOK) => {
    const vis = (el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && s.display !== "none" && s.visibility !== "hidden";
    };
    const inFirstViewport = (el) => {
      if (!vis(el)) return false;
      const r = el.getBoundingClientRect();
      return r.top >= 0 && r.left >= 0 && r.bottom <= innerHeight && r.right <= innerWidth;
    };
    const books = [...document.querySelectorAll(`a[href="${BOOK}"]`)];
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
      bookInFirstViewport: books.some(inFirstViewport),
      formInFirstViewport: !!document.getElementById("name") && inFirstViewport(document.querySelector("h1")),
      sticky: !!sticky,
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
      imgs: document.querySelectorAll("img, picture").length,
      hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
    };
  }, BOOK);

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
  check("3-seo", info.theme === "#12406b", `${p} theme-color`);
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
      if (/openingHours|aggregateRating|"review"|priceRange|"image"|"logo"|"email"|"telephone"|"address"|"offers"/i.test(JSON.stringify(d))) ok = false;
    } catch {
      ok = false;
    }
    check("3-seo", ok, `${p} JSON-LD invalid or contains unverified keys`);
  }
  if (indexable) {
    check("3-seo", info.title.length <= 60 && !titles.has(info.title), `${p} title "${info.title}" (${info.title.length})`);
    check("3-seo", info.desc.length > 0 && info.desc.length <= 160 && !descs.has(info.desc), `${p} description (${info.desc.length})`);
    titles.add(info.title);
    descs.add(info.desc);
    check("3-seo", info.canonical === SITE + p, `${p} canonical ${info.canonical}`);
    check("3-seo", info.ogUrl === SITE + p && info.ogSite === "Sky Pet Grooming" && info.ogType === "website", `${p} og tags`);
    check("3-seo", !/noindex/.test(info.robots), `${p} unexpected noindex`);
    const types = ld.map((d) => d["@type"]);
    check("3-seo", types.includes("LocalBusiness") && types.includes("WebSite"), `${p} missing LocalBusiness/WebSite`);
    check("3-seo", types.includes("BreadcrumbList"), `${p} missing BreadcrumbList`);
    check("3-seo", (p === "/faq/") === types.includes("FAQPage"), `${p} FAQPage placement`);
    check("3-seo", (p === "/mobile-pet-grooming/") === types.includes("Service"), `${p} Service schema placement`);
    const biz = ld.find((d) => d["@type"] === "LocalBusiness");
    check("3-seo", biz && biz.name === "Sky Pet Grooming" && biz.areaServed?.name === "California", `${p} LocalBusiness name/areaServed`);
  } else {
    check("3-seo", /noindex/.test(info.robots), "404 must be noindex");
    check("3-seo", info.title === "Page not found | Sky Pet Grooming", "404 title");
  }

  // 4. Links
  for (const h of info.hrefs) {
    if (h.startsWith("#")) check("4-links", html[p].includes(`id="${h.slice(1)}"`), `${p} same-page anchor ${h} has no target`);
    else if (h.startsWith("/")) internal.set(h, p);
  }

  // 5. Conversion / mobile. The booking page has the form instead of a Book
  // button and no sticky bar.
  if (p === BOOK) {
    check("5-mobile", info.formInFirstViewport, `${p} heading of the form page not in first viewport`);
    check("5-mobile", !info.sticky, `${p} should not show the sticky bar`);
  } else {
    check("5-mobile", info.bookInFirstViewport, `${p} no Book link fully visible in first 390x844 viewport`);
    check("5-mobile", info.stickyVisible, `${p} sticky Book bar hidden on mobile`);
  }
  check("5-mobile", info.overflow === 0, `${p} horizontal overflow ${info.overflow}px at 390`);
  check("5-mobile", info.smallButtons.length === 0, `${p} CTA buttons under 44px: ${info.smallButtons}`);
  check("5-mobile", info.smallLinks.length === 0, `${p} links under 24px: ${info.smallLinks}`);

  // Footer's last line must not sit under the sticky bar at the bottom of the page.
  if (info.sticky) {
    await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
    await page.waitForTimeout(100);
    const covered = await page.evaluate(() => {
      const last = document.querySelector("footer").lastElementChild.getBoundingClientRect();
      const bar = document.getElementById("sticky-cta").getBoundingClientRect();
      return last.bottom > bar.top;
    });
    check("5-mobile", !covered, `${p} sticky bar covers the footer's last line`);
  }

  // 6. Performance / privacy
  const foreign = [...hosts].filter((h) => h !== new URL(BASE).host);
  check("6-perf", foreign.length === 0, `${p} requests to other hosts: ${foreign}`);
  check("6-perf", info.imgs === 0, `${p} has images`);
  check("6-perf", errors.length === 0, `${p} errors: ${errors.join("; ")}`);
  await page.close();

  // Desktop + 320px
  for (const [ctx, label] of [[desktop, "1280"], [narrow, "320"]]) {
    const pg = await ctx.newPage();
    await pg.goto(BASE + p, { waitUntil: "networkidle" });
    const d = await pg.evaluate((BOOK) => {
      const sticky = document.getElementById("sticky-cta");
      return {
        overflow: document.documentElement.scrollWidth - innerWidth,
        sticky: sticky ? getComputedStyle(sticky).display : "none",
        headerBook: [...document.querySelectorAll(`header a[href="${BOOK}"]`)].some((a) => a.getBoundingClientRect().height > 0),
      };
    }, BOOK);
    check("5-mobile", d.overflow === 0, `${p} horizontal overflow ${d.overflow}px at ${label}`);
    if (label === "1280") {
      check("5-mobile", d.sticky === "none", `${p} sticky bar visible on desktop`);
      check("5-mobile", d.headerBook, `${p} header Book button missing on desktop`);
      if (p === "/") await pg.screenshot({ path: "qa/desktop-home.png", fullPage: true });
    }
    await pg.close();
  }
}

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
    faqLd.mainEntity.length === visible.length && faqLd.mainEntity.every((m, i) => m.name === visible[i].q && m.acceptedAnswer.text === visible[i].a),
    "FAQPage schema differs from visible FAQ",
  );
  await pg.close();
}

// 7. Booking form, end to end against the Redis mock.
{
  const stamp = `QA ${Date.now()}`;
  const pg = await mobile.newPage();
  await pg.goto(BASE + BOOK, { waitUntil: "networkidle" });

  // Empty submit: server-side field errors, nothing stored.
  await pg.click('button[type="submit"]');
  await pg.waitForSelector('[role="alert"]');
  const errs = await pg.$$eval('[id$="-error"]', (els) => els.map((e) => e.id));
  check("7-form", ["name-error", "phone-error", "location-error", "pets-error"].every((e) => errs.includes(e)), `empty submit errors: ${errs}`);
  check("7-form", !errs.includes("email-error"), "email is optional");
  await pg.screenshot({ path: "qa/mobile-book-errors.png", fullPage: true });

  // Typed values survive an error round trip.
  await pg.fill("#name", stamp);
  await pg.fill("#phone", "123");
  await pg.click('button[type="submit"]');
  await pg.waitForSelector("#phone-error");
  check("7-form", (await pg.inputValue("#name")) === stamp, "name kept after a failed submit");

  // Valid submit.
  await pg.fill("#phone", "(555) 010-0199");
  await pg.fill("#email", "qa@example.com");
  await pg.fill("#location", "90210");
  await pg.fill("#pets", "Medium, 4 years, curly coat");
  await pg.fill("#timing", "Weekday mornings");
  await pg.click('button[type="submit"]');
  await pg.waitForSelector('[role="status"]');
  check("7-form", (await pg.textContent('[role="status"]')).includes("Request sent"), "success message after a valid submit");
  await pg.screenshot({ path: "qa/mobile-book-sent.png", fullPage: true });
  await pg.close();

  // It shows up in the inbox.
  const inbox = await (await fetch(`${BASE}/requests/?key=${SECRET}`)).text();
  check("7-form", inbox.includes(stamp) && inbox.includes("90210") && inbox.includes("Medium, 4 years, curly coat"), "request listed at /requests");

  // Honeypot: looks sent, is not stored.
  const bot = await mobile.newPage();
  await bot.goto(BASE + BOOK, { waitUntil: "networkidle" });
  const botName = `BOT ${Date.now()}`;
  await bot.fill("#name", botName);
  await bot.fill("#phone", "5550100199");
  await bot.fill("#location", "90210");
  await bot.fill("#pets", "x");
  await bot.$eval("#website", (el) => (el.value = "http://spam.example"));
  await bot.click('button[type="submit"]');
  await bot.waitForSelector('[role="status"]');
  await bot.close();
  const inbox2 = await (await fetch(`${BASE}/requests/?key=${SECRET}`)).text();
  check("7-form", !inbox2.includes(botName), "honeypot submission must not be stored");
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

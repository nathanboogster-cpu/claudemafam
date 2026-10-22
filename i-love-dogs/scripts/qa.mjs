// Pre-launch QA for the I Love Dogs site. Run against a production build:
//
//   npm run build && npx next start -p 3100 &
//   QA_BASE=http://localhost:3100 npm run qa
//
// Checks the brief's seven passes (accuracy, prices, SEO, links,
// conversion/mobile, performance; the adversarial read is done by a person)
// and saves 390x844 full-page screenshots to qa/. Exits non-zero on any
// failure.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = (process.env.QA_BASE ?? "http://localhost:3100").replace(/\/$/, "");
const SITE = "https://www.ilovedogsgrooming.com";
const TEL = "tel:+16105257387";
const PAGES = ["/", "/dog-grooming/", "/pickup-and-delivery/", "/service-area/", "/about/", "/faq/", "/contact/"];
const ALL = [...PAGES, "/404.html"];

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
  /rating/i,
  /★/,
  /review/i,
  /testimonial/i,
  /(?<!facebook\.com\/)ilovedogspetgrooming\.com/i,
  /\b\d{1,2}:\d\d\b/,
  /\b\d{1,2}\s*[–-]\s*\d{1,2}\b/,
  /\b\d{1,2}\s*(am|pm)\b/i,
  /look no further|pride ourselves|fur-ever|pawsome|groomer comes to/i,
];

// Uses a pre-installed Chromium when CHROMIUM_PATH is set (e.g. /opt/pw-browsers/chromium).
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
await mkdir("qa", { recursive: true });

// ---- Fetch-level checks: raw HTML, status codes, robots, sitemap ----
const html = {};
for (const p of ALL) {
  const res = await fetch(BASE + p, { redirect: "manual" });
  html[p] = await res.text();
  check("4-links", res.status === (p === "/404.html" ? 404 : 200), `${p} returned ${res.status}`);
}

for (const [src, dest] of [["/home", "/"], ["/home/", "/"]]) {
  const res = await fetch(BASE + src, { redirect: "manual" });
  const loc = res.headers.get("location") ?? "";
  // `next start` adds the trailing slash first (308) for /home. On Vercel the
  // trailing-slash route has `continue: true`, so the next.config 301 wins and
  // /home -> / is one hop (checked in .vercel/output/config.json from
  // `vercel build`). Either way it must end at "/".
  const final = await fetch(BASE + src);
  check("4-links", [301, 308].includes(res.status) && new URL(final.url).pathname === dest, `${src} -> ${res.status} ${loc}`);
}
{
  const res = await fetch(BASE + "/home/", { redirect: "manual" });
  check("4-links", res.status === 301, `/home/ must be a 301, got ${res.status}`);
}

const robots = await (await fetch(BASE + "/robots.txt")).text();
check("3-seo", /User-Agent: \*/i.test(robots) && /Allow: \/\n/.test(robots) && robots.includes(`Sitemap: ${SITE}/sitemap.xml`) && !/Disallow/i.test(robots), "robots.txt");
const sitemap = await (await fetch(BASE + "/sitemap.xml")).text();
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
check("3-seo", locs.length === 7 && PAGES.every((p) => locs.includes(SITE + p)), `sitemap locs: ${locs.join(", ")}`);
check("3-seo", (sitemap.match(/<lastmod>/g) ?? []).length === 7, "sitemap lastmod on every URL");

// ---- Page-level checks in a real browser ----
const titles = new Set();
const descs = new Set();
const internal = new Map(); // href -> first page seen on

async function pageChecks(p, ctx) {
  const page = await ctx.newPage();
  const hosts = new Set();
  let bytes = { css: 0, js: 0, img: 0 };
  page.on("request", (r) => hosts.add(new URL(r.url()).host));
  page.on("response", async (r) => {
    const t = r.request().resourceType();
    const len = Number(r.headers()["content-length"] ?? 0) || (await r.body().catch(() => Buffer.alloc(0))).length;
    if (t === "stylesheet") bytes.css += len;
    if (t === "script") bytes.js += len;
    if (t === "image") bytes.img += len;
  });
  await page.goto(BASE + p, { waitUntil: "networkidle" });
  return { page, hosts, bytes };
}

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const desktop = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const narrow = await browser.newContext({ viewport: { width: 320, height: 640 }, isMobile: true, hasTouch: true });

const ownBytes = {};
const visibleText = {};
for (const p of ALL) {
  const { page, hosts, bytes } = await pageChecks(p, mobile);
  ownBytes[p] = bytes;
  const name = p === "/" ? "home" : p.replace(/\//g, "").replace(".html", "") || "home";
  await page.screenshot({ path: `qa/mobile-${name}.png`, fullPage: true });

  const info = await page.evaluate(() => {
    const vis = (el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && s.display !== "none" && s.visibility !== "hidden";
    };
    const tels = [...document.querySelectorAll('a[href^="tel:"]')];
    const sticky = document.querySelector(".sticky-call");
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
      headings: [...document.querySelectorAll("h1,h2,h3")].map((h) => Number(h.tagName[1])),
      skip: !!document.querySelector('a.skip[href="#main"]') && !!document.getElementById("main"),
      current: [...document.querySelectorAll('[aria-current="page"]')].map((a) => a.getAttribute("href")),
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent),
      text: document.body.innerText,
      tels: tels.map((a) => ({ href: a.getAttribute("href"), track: a.dataset.track, where: a.dataset.where })),
      maps: [...document.querySelectorAll('a[href*="google.com/maps"]')].map((a) => ({ track: a.dataset.track, where: a.dataset.where })),
      telInFirstViewport: tels.some((a) => {
        if (!vis(a)) return false;
        const r = a.getBoundingClientRect();
        return r.top >= 0 && r.left >= 0 && r.bottom <= innerHeight && r.right <= innerWidth;
      }),
      stickyVisible: sticky ? vis(sticky) : false,
      overflow: document.documentElement.scrollWidth - innerWidth,
      smallBtns: [...document.querySelectorAll(".btn")].filter(vis).filter((b) => b.getBoundingClientRect().height < 44).map((b) => b.textContent),
      smallTargets: [...document.querySelectorAll("a, summary, button")]
        .filter(vis)
        .filter((a) => !a.closest("p, li.steps, address, .steps"))
        .filter((a) => a.getBoundingClientRect().height < 44)
        .map((a) => a.textContent.trim()),
      imgs: document.querySelectorAll("img, picture, svg image").length,
      hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
      track: !!document.querySelector('script[src="/track.js"][defer]'),
    };
  });

  visibleText[p] = info.text;

  // 1. Accuracy (visible text + raw HTML including the RSC payload)
  for (const re of FORBIDDEN) {
    check("1-accuracy", !re.test(info.text), `${p} visible text matches ${re}`);
    check("1-accuracy", !re.test(html[p]), `${p} HTML matches ${re}`);
  }

  // 3. SEO
  const indexable = p !== "/404.html";
  check("3-seo", info.h1 === 1, `${p} has ${info.h1} h1`);
  check("3-seo", info.lang === "en", `${p} lang`);
  check("3-seo", info.theme === "#1f4d3a", `${p} theme-color`);
  check("3-seo", info.skip, `${p} skip link`);
  for (let i = 1; i < info.headings.length; i++) {
    check("3-seo", info.headings[i] - info.headings[i - 1] <= 1, `${p} heading level skips h${info.headings[i - 1]} -> h${info.headings[i]}`);
  }
  for (const block of info.jsonld) {
    let ok = true;
    try {
      const d = JSON.parse(block);
      const s = JSON.stringify(d);
      if (/openingHours|aggregateRating|"review"|priceRange|"image"/i.test(s)) ok = false;
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
    const types = info.jsonld.map((b) => JSON.parse(b)["@type"]);
    check("3-seo", types.includes("LocalBusiness"), `${p} missing LocalBusiness`);
    check("3-seo", p === "/" || types.includes("BreadcrumbList"), `${p} missing BreadcrumbList`);
    check("3-seo", (p === "/faq/") === types.includes("FAQPage"), `${p} FAQPage placement`);
    check("3-seo", info.current.includes(p), `${p} aria-current missing`);
  } else {
    check("3-seo", /noindex/.test(info.robots), "404 must be noindex");
    check("3-seo", info.title === "Page not found | I Love Dogs Pet Grooming", "404 title");
  }

  // 4. Links
  for (const t of info.tels) {
    check("4-links", t.href === TEL, `${p} tel href ${t.href}`);
    check("4-links", t.track === "call" && /^(header|hero|body|bottom-cta|footer|sticky-bar)$/.test(t.where ?? ""), `${p} tel tracking attrs`);
  }
  for (const m of info.maps) check("4-links", m.track === "directions" && !!m.where, `${p} directions tracking attrs`);
  for (const h of info.hrefs) {
    if (h.startsWith("#")) check("4-links", html[p].includes(`id="${h.slice(1)}"`), `${p} same-page anchor ${h} has no target`);
    else if (h.startsWith("/")) internal.set(h, p);
  }
  check("4-links", info.track, `${p} track.js not loaded with defer`);

  // 5. Conversion / mobile
  check("5-mobile", info.telInFirstViewport, `${p} no tel link fully visible in first 390x844 viewport`);
  check("5-mobile", info.stickyVisible, `${p} sticky call bar hidden on mobile`);
  check("5-mobile", info.overflow === 0, `${p} horizontal overflow ${info.overflow}px at 390`);
  check("5-mobile", info.smallBtns.length === 0, `${p} buttons under 44px: ${info.smallBtns}`);
  check("5-mobile", info.smallTargets.length === 0, `${p} standalone tap targets under 44px: ${info.smallTargets}`);

  // Footer's last line must not sit under the sticky bar at the bottom of the page.
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(100);
  const covered = await page.evaluate(() => {
    const last = document.querySelector(".footer-bottom").getBoundingClientRect();
    const bar = document.querySelector(".sticky-call").getBoundingClientRect();
    return last.bottom > bar.top;
  });
  check("5-mobile", !covered, `${p} sticky bar covers the footer's last line`);

  // 6. Performance / privacy
  const foreign = [...hosts].filter((h) => h !== new URL(BASE).host);
  check("6-perf", foreign.length === 0, `${p} requests to other hosts: ${foreign}`);
  check("6-perf", info.imgs === 0 && bytes.img === 0, `${p} has images`);
  await page.close();

  // Desktop + 320px
  for (const [ctx, label] of [[desktop, "1280"], [narrow, "320"]]) {
    const pg = await ctx.newPage();
    await pg.goto(BASE + p, { waitUntil: "networkidle" });
    const d = await pg.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - innerWidth,
      sticky: getComputedStyle(document.querySelector(".sticky-call")).display,
      headerCall: getComputedStyle(document.querySelector(".header-call")).display,
    }));
    check("5-mobile", d.overflow === 0, `${p} horizontal overflow ${d.overflow}px at ${label}`);
    if (label === "1280") {
      check("5-mobile", d.sticky === "none", `${p} sticky bar visible on desktop`);
      check("5-mobile", d.headerCall !== "none", `${p} header call hidden on desktop`);
      if (p === "/") await pg.screenshot({ path: "qa/desktop-home.png", fullPage: true });
    }
    await pg.close();
  }
}

// 2. Prices
const dg = html["/dog-grooming/"];
for (const s of ["From $75", "From $115", "From $150", "Prices are quoted when we meet your dog. They depend on size, coat length, coat type and condition."]) {
  check("2-prices", dg.includes(s.replace("&", "&amp;")), `/dog-grooming/ missing "${s}"`);
}
check("2-prices", html["/"].includes("Bath &amp; Pamper from $75, The Works from $115, Full Spa Day from $150"), "home price card");
check("2-prices", html["/faq/"].includes("Packages start at $75 for Bath &amp; Pamper, $115 for The Works and $150 for Full Spa Day"), "faq prices");
const allPrices = Object.values(visibleText).join(" ").match(/\$\d+/g) ?? [];
check("2-prices", allPrices.every((x) => ["$75", "$115", "$150"].includes(x)), `unexpected price strings: ${[...new Set(allPrices)]}`);

// 4b. Every internal link and #anchor resolves
for (const [href, from] of internal) {
  const [path, hash] = href.split("#");
  const res = await fetch(BASE + path, { redirect: "manual" });
  check("4-links", res.status === 200, `${href} (on ${from}) -> ${res.status}`);
  check("4-links", path.endsWith("/"), `${href} (on ${from}) lacks trailing slash`);
  if (hash) check("4-links", (await res.text()).includes(`id="${hash}"`), `${href} anchor missing`);
}

// FAQ schema text must equal the visible answer text.
{
  const faqLd = [...html["/faq/"].matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .find((d) => d["@type"] === "FAQPage");
  const pg = await mobile.newPage();
  await pg.goto(BASE + "/faq/");
  const visible = await pg.$$eval(".faq details", (ds) => ds.map((d) => ({ q: d.querySelector("summary").textContent, a: d.querySelector("p").textContent })));
  check("3-seo", faqLd.mainEntity.length === 8 && faqLd.mainEntity.every((m, i) => m.name === visible[i].q && m.acceptedAnswer.text === visible[i].a), "FAQPage schema differs from visible FAQ");
  await pg.close();
}

// 6. Own CSS + JS weight (inlined CSS + track.js). Framework chunks are reported separately.
const css = (html["/"].match(/<style[^>]*>([\s\S]*?)<\/style>/g) ?? []).join("").length;
const trackJs = (await (await fetch(BASE + "/track.js")).text()).length;
check("6-perf", css + trackJs < 15000, `own CSS ${css} + track.js ${trackJs} >= 15KB`);

await browser.close();

console.log("\nQA summary");
for (const [k, v] of Object.entries(passes).sort()) console.log(`  ${k.padEnd(12)} ${v.fail ? "FAIL" : "PASS"}  (${v.ok} checks ok, ${v.fail} failed)`);
console.log(`  own CSS ${css} B, track.js ${trackJs} B; framework JS on home ${ownBytes["/"].js} B (uncompressed)`);
if (failures.length) {
  console.log("\nFailures:\n" + failures.map((f) => "  - " + f).join("\n"));
  process.exit(1);
}
console.log("\nAll checks passed.");

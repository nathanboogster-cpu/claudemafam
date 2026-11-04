// Pre-launch QA for the Sky Pet Grooming site. Run against a production
// build:
//
//   npm run build && npx next start -p 3100 &
//   QA_BASE=http://localhost:3100 npm run qa
//
// Checks accuracy (banned claims), SEO, links, conversion/mobile and
// performance, and saves 390x844 full-page screenshots to qa/. The
// adversarial read is done by a person. Exits non-zero on any failure.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = (process.env.QA_BASE ?? "http://localhost:3100").replace(/\/$/, "");
const SITE = "https://www.skypetgrooming.com";
// The owner's MoeGo booking page. Every booking link must be exactly this.
const BOOK = "https://booking.moego.pet/ol/landing?name=SkyPetGrooming";
// Service-area pages (lib/site-data.ts serviceAreas), city -> slug.
const AREAS = {
  "San Bruno": "san-bruno",
  "South San Francisco": "south-san-francisco",
  Millbrae: "millbrae",
  Brisbane: "brisbane",
  Burlingame: "burlingame",
  Colma: "colma",
  Hillsborough: "hillsborough",
  Pacifica: "pacifica",
  "Daly City": "daly-city",
  "San Mateo": "san-mateo",
  "Foster City": "foster-city",
  "San Francisco": "san-francisco",
};
const AREA_PAGES = Object.values(AREAS).map((k) => `/mobile-dog-grooming-${k}-ca/`);
// Blog posts (lib/blog-data.ts): six service guides and one post per area.
const SERVICE_POSTS = [
  "what-happens-during-a-mobile-dog-groom",
  "mobile-cat-grooming-what-it-involves",
  "what-is-a-de-shedding-treatment",
  "detangling-vs-shave-down-matted-dog",
  "why-regular-nail-trims-matter",
  "dog-anal-glands-when-they-need-help",
];
const AREA_POSTS = [
  "how-often-to-groom-your-dog-san-bruno",
  "foxtail-season-dog-safety-south-san-francisco",
  "helping-a-nervous-dog-enjoy-grooming-millbrae",
  "ticks-burrs-and-muddy-paws-brisbane",
  "doodle-coat-care-burlingame",
  "grooming-senior-dogs-at-home-colma",
  "grooming-large-double-coated-dogs-hillsborough",
  "beach-dog-grooming-salt-sand-pacifica",
  "fog-damp-coats-matting-daly-city",
  "should-you-shave-your-dog-for-summer-san-mateo",
  "paw-and-nail-care-foster-city",
  "cat-grooming-at-home-san-francisco",
];
const POST_PAGES = [...SERVICE_POSTS, ...AREA_POSTS].map((s) => `/blog/${s}/`);
// Service pages (lib/site-data.ts services), one per bookable service.
const SERVICE_KEYS = [
  "full-dog-grooming",
  "dog-bath",
  "cat-grooming",
  "skunk-off",
  "nail-trimming",
  "de-shedding",
  "detangling",
  "teeth-brushing",
  "face-trim",
  "anal-gland-expression",
];
const SERVICE_PAGES = SERVICE_KEYS.map((k) => `/mobile-pet-grooming/${k}/`);
const PAGES = [
  "/",
  "/mobile-pet-grooming/",
  "/service-area/",
  "/gallery/",
  "/reviews/",
  "/blog/",
  "/about/",
  "/faq/",
  ...SERVICE_PAGES,
  ...AREA_PAGES,
  ...POST_PAGES,
];
// The two numbers on the owner's van; the first is also on the logo.
const TELS = ["tel:+14157540813", "tel:+16504383498"];
// Every photo the owner supplied (lib/photos.ts) must be on /gallery/.
const PHOTO_COUNT = 39;
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

// Only the facts in lib/site-data.ts are verified. Anything that would claim
// more is banned from visible text and HTML.
const FORBIDDEN = [
  /mailto:|@gmail/i, // no verified email
  /\brating/i,
  /★/,
  /award|best of|#1\b|top-rated|\d(\.\d)? stars? (rating|average)/i, // rating claims; "#1" but not hex colors like #12406b (quoted reviews are fine)
  /\d+\+?\s*years|since (19|20)\d\d/i,
  /family-owned|certified|\bAKC\b/i,
  /natural products|organic|hypoallergenic|non-toxic/i,
  /Hesperia|Victorville|Los Angeles|San Diego|Orange County|Piccadilly|Belmont|San Carlos|Redwood City|Half Moon Bay|Montara/i, // no street address; nothing outside the 20-minute area
  /median|household income|affluent|wealthy|upscale|high-income/i, // income picks the areas but is never published
  /look no further|pride ourselves|fur-ever|pawsome|furbab/i,
];

// Every 5-star Google review in lib/reviews.ts must be on /reviews/.
const REVIEW_COUNT = 29;

// The only confirmed prices (lib/site-data.ts confirmedPrices and fees). Any
// other dollar amount in visible text fails.
const PRICES = ["$50", "$25", "$30", "$20", "$10"];
const PRICED_SERVICES = { "nail-trimming": ["50.00", "25.00"], detangling: ["30.00"], "face-trim": ["20.00"], "teeth-brushing": ["10.00"] };

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
  /User-Agent: \*/i.test(robots) && /Allow: \/\n/.test(robots) && !/Disallow/.test(robots) && robots.includes(`Sitemap: ${SITE}/sitemap.xml`),
  "robots.txt",
);
const sitemap = await (await fetch(BASE + "/sitemap.xml")).text();
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
check("3-seo", locs.length === PAGES.length && PAGES.every((p) => locs.includes(SITE + p)), `sitemap locs: ${locs.join(", ")}`);
check("3-seo", (sitemap.match(/<lastmod>/g) ?? []).length === PAGES.length, "sitemap lastmod on every URL");

// Only the listed areas get pages; any other area slug is a 404.
{
  const res = await fetch(BASE + "/mobile-dog-grooming-belmont-ca/", { redirect: "manual" });
  check("4-links", res.status === 404, `unlisted area slug returned ${res.status}`);
}

// The old on-site form URL forwards to the booking page.
for (const src of ["/book", "/book/"]) {
  const res = await fetch(BASE + src, { redirect: "manual" });
  const hop = res.headers.get("location") ?? "";
  // `next start` may add the trailing-slash hop first; follow internal hops only.
  const final = hop.startsWith("/") ? (await fetch(BASE + hop, { redirect: "manual" })).headers.get("location") : hop;
  check("4-links", final === BOOK, `${src} should redirect to the booking page, got ${final}`);
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
      h1Text: document.querySelector("h1")?.textContent ?? "",
      headings: [...document.querySelectorAll("main h1, main h2, main h3")].map((h) => Number(h.tagName[1])),
      skip: !!document.querySelector('a[href="#main-content"]') && !!document.getElementById("main-content"),
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent),
      text: document.body.innerText,
      bookInFirstViewport: books.some(inFirstViewport),
      telInFirstViewport: tels.some(inFirstViewport),
      tels: tels.map((a) => a.getAttribute("href")),
      sticky: !!sticky,
      // External booking links open in a new tab, without opener access.
      badBookLinks: books
        .filter((a) => a.target !== "_blank" || !/noopener/.test(a.rel) || !/noreferrer/.test(a.rel))
        .map((a) => a.textContent.trim()),
      // Any link to MoeGo that is not exactly the booking URL.
      wrongBookUrls: [...document.querySelectorAll('a[href*="moego"]')].map((a) => a.getAttribute("href")).filter((h) => h !== BOOK),
      stickyVisible: sticky ? vis(sticky) : false,
      // Book Online links on screen at load other than the sticky bar's own.
      pageBookInFirstViewport: books.filter((a) => !a.closest("#sticky-cta")).some(inFirstViewport),
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
      hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
    };
  }, BOOK);

  // 1. Accuracy (visible text + raw HTML including the RSC payload)
  for (const re of FORBIDDEN) {
    check("1-accuracy", !re.test(info.text), `${p} visible text matches ${re}`);
    check("1-accuracy", !re.test(html[p]), `${p} HTML matches ${re}`);
  }
  for (const re of HOURS) check("1-accuracy", !re.test(info.text), `${p} visible text has an hours-like string ${re}`);
  for (const amount of info.text.match(/\$\s?\d+(?:\.\d\d)?/g) ?? []) {
    check("1-accuracy", PRICES.includes(amount), `${p} unconfirmed price ${amount}`);
  }

  // 3. SEO
  const indexable = p !== "/404.html";
  check("3-seo", info.h1 === 1, `${p} has ${info.h1} h1`);
  check("3-seo", info.lang === "en", `${p} lang`);
  check("3-seo", info.theme === "#12307a", `${p} theme-color`);
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
      if (/openingHours|aggregateRating|"review"|priceRange|"email"|"address"/i.test(JSON.stringify(d))) ok = false;
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
    const wantsService = p === "/mobile-pet-grooming/" || AREA_PAGES.includes(p) || SERVICE_PAGES.includes(p);
    check("3-seo", wantsService === types.includes("Service"), `${p} Service schema placement`);
    if (AREA_PAGES.includes(p)) {
      const city = Object.keys(AREAS).find((c) => p === `/mobile-dog-grooming-${AREAS[c]}-ca/`);
      const svc = ld.find((d) => d["@type"] === "Service");
      check("3-seo", svc?.areaServed?.name === `${city}, CA`, `${p} Service areaServed should be ${city}, CA`);
      check("3-seo", info.title.includes(city) && info.desc.includes(city), `${p} title/description must name ${city}`);
      check("3-seo", ld.some((d) => d["@type"] === "BreadcrumbList" && d.itemListElement.length === 3), `${p} breadcrumb Home > Service Areas > ${city}`);
    }
    check("3-seo", (p === "/gallery/") === types.includes("ImageGallery"), `${p} ImageGallery schema placement`);
    check("3-seo", POST_PAGES.includes(p) === types.includes("BlogPosting"), `${p} BlogPosting schema placement`);
    if (POST_PAGES.includes(p)) {
      const bp = ld.find((d) => d["@type"] === "BlogPosting");
      check("3-seo", bp?.headline === info.h1Text && bp?.url === SITE + p && bp?.datePublished, `${p} BlogPosting headline/url/date`);
      const areaIdx = AREA_POSTS.indexOf(p.split("/")[2]);
      if (areaIdx >= 0) {
        // Area posts link to their own town page.
        const town = AREA_PAGES[areaIdx];
        check("4-links", info.hrefs.includes(town), `${p} does not link to ${town}`);
      }
    }
    if (SERVICE_PAGES.includes(p)) {
      const svc = ld.find((d) => d["@type"] === "Service");
      check("3-seo", svc && !svc.hasOfferCatalog && svc.areaServed?.length === Object.keys(AREAS).length, `${p} Service schema should be single-service across all areas`);
      check("3-seo", ld.some((d) => d["@type"] === "BreadcrumbList" && d.itemListElement.length === 3), `${p} breadcrumb Home > Services > service`);
      // Every service page lists the fees and points to the booking page.
      check("1-accuracy", /booking page/i.test(info.text) && info.text.includes("Travel fee") && info.text.includes("$20"), `${p} should list fees and point to the booking page`);
      const key = p.split("/")[2];
      const want = PRICED_SERVICES[key] ?? [];
      const got = (svc?.offers ?? []).map((o) => o.price);
      check("3-seo", JSON.stringify(got) === JSON.stringify(want), `${p} Service offers ${got} should be ${want}`);
    }
    if (AREA_PAGES.includes(p)) {
      const post = POST_PAGES.find((x) => x.includes(AREA_POSTS[AREA_PAGES.indexOf(p)]));
      check("4-links", info.hrefs.includes(post), `${p} does not link to its blog post ${post}`);
    }
    const biz = ld.find((d) => d["@type"] === "LocalBusiness");
    check(
      "3-seo",
      biz &&
        biz.name === "Sky Pet Grooming" &&
        biz.telephone === "+14157540813" &&
        Object.keys(AREAS).every((c) => biz.areaServed?.some((a) => a.name === `${c}, CA`)),
      `${p} LocalBusiness name/telephone/areaServed`,
    );
  } else {
    check("3-seo", /noindex/.test(info.robots), "404 must be noindex");
    check("3-seo", info.title === "Page not found | Sky Pet Grooming", "404 title");
  }

  // 4. Links
  for (const t of info.tels) check("4-links", TELS.includes(t), `${p} unexpected tel href ${t}`);
  check("4-links", info.badBookLinks.length === 0, `${p} booking links missing target/rel: ${info.badBookLinks}`);
  check("4-links", info.wrongBookUrls.length === 0, `${p} wrong booking URLs: ${info.wrongBookUrls}`);
  for (const h of info.hrefs) {
    if (h.startsWith("#")) check("4-links", html[p].includes(`id="${h.slice(1)}"`), `${p} same-page anchor ${h} has no target`);
    else if (h.startsWith("/")) internal.set(h, p);
  }

  // 5. Conversion / mobile
  check("5-mobile", info.bookInFirstViewport, `${p} no Book Online link fully visible in first 390x844 viewport`);
  check("5-mobile", info.telInFirstViewport, `${p} no Call link fully visible in first 390x844 viewport`);
  // The sticky bar stays hidden at the top while the page's own Book Online
  // button is on screen, and slides in once the visitor scrolls.
  check("5-mobile", !(info.stickyVisible && info.pageBookInFirstViewport), `${p} sticky Book bar doubles a Book button at the top`);
  check("5-mobile", info.stickyVisible || info.pageBookInFirstViewport, `${p} no Book button at the top and sticky bar hidden`);
  {
    await page.evaluate(() => window.scrollTo({ top: 300, behavior: "instant" }));
    await page.waitForTimeout(400);
    const shown = await page.evaluate(() => {
      const s = document.getElementById("sticky-cta");
      const r = s.getBoundingClientRect();
      return getComputedStyle(s).visibility !== "hidden" && r.bottom <= innerHeight + 1;
    });
    check("5-mobile", shown, `${p} sticky Book bar not shown after scrolling`);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  }
  check("5-mobile", info.overflow === 0, `${p} horizontal overflow ${info.overflow}px at 390`);
  check("5-mobile", info.smallButtons.length === 0, `${p} CTA buttons under 44px: ${info.smallButtons}`);
  check("5-mobile", info.smallLinks.length === 0, `${p} links under 24px: ${info.smallLinks}`);

  // Scroll down a screen at a time so every lazy image loads, then check
  // them all: loaded, real alt text, served by next/image from our photos.
  {
    for (let y = 0; y < (await page.evaluate(() => document.documentElement.scrollHeight)); y += 700) {
      await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
      await page.waitForTimeout(60);
    }
    await page.waitForLoadState("networkidle");
    // Lazy images can still be decoding after the network goes quiet.
    await page
      .waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 20000 })
      .catch(() => {});
    await page.screenshot({ path: `qa/mobile-${name}.png`, fullPage: true });
    const imgs = await page.$$eval("main img, header img, footer img", (els) =>
      els.map((i) => ({ src: i.currentSrc || i.src, alt: i.getAttribute("alt"), ok: i.complete && i.naturalWidth > 0 })),
    );
    for (const i of imgs) {
      check("6-perf", i.ok, `${p} image failed to load: ${i.src}`);
      check("1-accuracy", !!i.alt && i.alt.trim().length > 3, `${p} image without alt text: ${i.src}`);
      check("6-perf", /\/_next\/image\/?\?url=%2F(photos%2F|logo)/.test(i.src), `${p} image not served by next/image: ${i.src}`);
    }
    if (p === "/reviews/") {
      const cards = await page.$$eval("main figure", (els) => els.length);
      check("7-photos", cards === REVIEW_COUNT, `/reviews/ shows ${cards} of ${REVIEW_COUNT} reviews`);
      check("1-accuracy", info.text.includes("Buttercupe loves him") && info.text.includes("The best"), "/reviews/ must quote reviews verbatim");
    }
    if (p === "/gallery/") {
      const unique = new Set(imgs.map((i) => decodeURIComponent(i.src).match(/photos\/([^.]+)\.webp/)?.[1]).filter(Boolean));
      check("7-photos", unique.size === PHOTO_COUNT, `/gallery/ shows ${unique.size} of ${PHOTO_COUNT} photos`);
    }
  }

  // Footer's last line must not sit under the sticky bar at the bottom of the page.
  {
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
      for (const shot of ["/", "/gallery/", "/mobile-pet-grooming/"]) {
        if (p !== shot) continue;
        for (let y = 0; y < (await pg.evaluate(() => document.documentElement.scrollHeight)); y += 800) {
          await pg.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
          await pg.waitForTimeout(60);
        }
        await pg.waitForLoadState("networkidle");
        const file = shot === "/" ? "home" : shot.replace(/\//g, "");
        await pg.screenshot({ path: `qa/desktop-${file}.png`, fullPage: true });
      }
    }
    await pg.close();
  }
}

// 4b. Every internal link and #anchor resolves, with no redirect hop.
for (const [href, from] of internal) {
  const [path, hash] = href.split("#");
  const res = await fetch(BASE + path, { redirect: "manual" });
  check("4-links", res.status === 200, `${href} (on ${from}) -> ${res.status}`);
  // Pages end in a slash; files (full-size photos) do not.
  if (!/\.\w+$/.test(path)) check("4-links", path.endsWith("/"), `${href} (on ${from}) lacks trailing slash`);
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

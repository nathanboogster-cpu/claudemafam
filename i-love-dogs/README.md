# I Love Dogs Pet Grooming — Website

Site for I Love Dogs Pet Grooming, a family-owned dog grooming salon at
723 County Line Rd, Bryn Mawr, PA 19010. Built with Next.js (App Router),
TypeScript and Tailwind CSS on the same skeleton as the Pampered Puppies app
(the repo root): same component set, page anatomy, schema builders and click
tracking, filled with I Love Dogs' verified facts only. It is a **separate,
standalone app** with its own Vercel project and domain.

## Deploying as its own Vercel project (owner approval required)

1. In Vercel (Tongfluence team), create a **new project** from this repository.
2. Set **Root Directory** to `i-love-dogs`. Framework preset: Next.js.
3. Attach `www.ilovedogsgrooming.com`, with the bare domain redirecting to www.
4. `NEXT_PUBLIC_SITE_URL` is optional: canonicals, schema, the sitemap and
   robots.txt already default to `https://www.ilovedogsgrooming.com`.
5. Optional, for the click report: add the Upstash for Redis integration
   (Storage tab) and set `ANALYTICS_REPORT_SECRET`, then open
   `/analytics-report?key=<secret>`. Without them, tracking is a no-op.

Never deploy this app into another client's Vercel project.

## Local development and QA

```bash
cd i-love-dogs
npm install
npm run dev          # http://localhost:3000
npm run build && npx next start -p 3100
QA_BASE=http://localhost:3100 CHROMIUM_PATH=/path/to/chromium npm run qa
```

`npm run qa` (`scripts/qa.mjs`) runs the pre-launch checks with Playwright:
banned-claim grep, prices, titles/descriptions/H1/canonicals, JSON-LD
placement and NAP, sitemap and robots, every internal link and anchor, orphan
pages, call link in the first 390×844 viewport, sticky bar, overflow at
320/390/1280, tap targets and third-party requests. It writes mobile
screenshots to `qa/`. Leave `CHROMIUM_PATH` unset to use Playwright's own
browser.

## Structure

- `lib/site-data.ts`: every business fact (name, address, phone, email,
  owners, experience, towns, packages, prices, FAQ, trust points, process
  steps, town pages). Change facts here only. The email address and the
  mother-daughter relationship come from the client's current site, read
  through search-engine results because this environment blocks the site.
- `lib/schema.tsx`: JSON-LD builders. LocalBusiness and WebSite on every page
  (from `app/(site)/layout.tsx`), BreadcrumbList on every page, Service on
  `/dog-grooming/`, `/pickup-and-delivery/` and each town page, FAQPage on
  `/faq/` only.
- `lib/track.ts`, `app/api/track`, `lib/analytics-store.ts`,
  `app/analytics-report`: `call_click` and `directions_click` events to Vercel
  Analytics, `window.dataLayer`, and a self-hosted Redis counter.
- `components/`: header with Services and Service Areas dropdowns, mobile
  menu, sticky Call + Directions bar, footer, and the content blocks.
- `public/images/`: the client's own photos (Google Drive folder "I Love Dogs
  Grooming"), EXIF/GPS stripped and capped at 1600px. Registered with alt
  text in `lib/site-data.ts` (`teamPhotos`, `beforeAfterPhotos`,
  `groomedPhotos`) and served through `next/image` as AVIF/WebP. People were
  identified by the agency: Theresa Pelletier (three photos) and groomer
  Jolie with Theresa (one). `og-image.jpg` is the 1200×630 share image.
- Branding: `public/images/logo.png` is the client's logo. The palette in
  `app/globals.css` is sampled from it (teal, paw yellow, lettering gray), and
  headings use Montserrat (OFL, self-hosted in `app/fonts`) to echo its
  lettering. Body text uses Inter, the same font as the Pampered Puppies
  site, loaded the same way (`next/font/google`, self-hosted at build). `logo-mark.png`, `app/icon.png`, `app/apple-icon.png` and
  `app/favicon.ico` are the dog-and-cat line art from the logo on its teal
  tile, with lines thickened slightly so they stay visible at small sizes.
- `components/TownPageContent.tsx`: the template behind the eight town pages
  (`/dog-grooming-<town>-pa/`): Rosemont, Haverford, Ardmore, Villanova,
  Wynnewood, Havertown, Gladwyne and Radnor. Bryn Mawr has no town page; the
  home page targets it. Gladwyne, Haverford, Ardmore and Havertown come from
  the client's older site. The agency added Rosemont, Villanova, Wynnewood and
  Radnor: Main Line towns within about a 10-minute drive of the salon (an
  estimate from straight-line distance, not measured routes) with median
  household incomes at or above the Pennsylvania median. Income is a targeting
  criterion only and is never shown on the site.
- `app/(site)/dog-grooming/[service]/`: six service pages (bath and blow dry,
  haircuts and tidy-up trims, nail trims, ear cleaning, de-shedding and deep
  conditioning, teeth brushing), from `servicePages` in `lib/site-data.ts`.
  Each service is part of one or more packages and is never described as
  sold on its own, because no source says so; the page's starting price is
  the cheapest package that includes it. The current site, old site, Yelp,
  Google listing and directories list no other services.
- `lib/blog-data.ts`, `app/(site)/blog/`: 13 posts. One per service area
  (Bryn Mawr and the eight towns), each on a different grooming topic, and
  one per service (Bath & Pamper, The Works, Full Spa Day, Pickup &
  Delivery), which link to the deeper town posts. Posts use only verified
  business facts plus general grooming advice, and send health questions to
  a vet. Town pages and the Dog Grooming and Pickup pages link to their posts.
- `next.config.ts`: `trailingSlash: true`, and the 301s from the old
  Squarespace `/home` URL to `/`.

## Deliberately not on the site

Left out until the owner confirms them: hours (Google and Yelp disagree),
ratings, review counts, testimonials, business age and online booking. That
is why this app has no Reviews, Membership or Employment pages, which the
Pampered Puppies skeleton has. The one award shown, "Voted Best of Philly",
was added at the agency's request, worded as on the client's current site;
it has no year or publication, so the site names neither.

## Needs owner input before launch

1. Confirmed opening hours.
2. Confirm pickup and delivery, chemical-free products and the tankless warm
   bath are still current, and the pickup radius.
3. Year and publication for "Best of Philly / Best of the Main Line", if it
   should be shown.
4. Reviews the owner is happy to quote, for a Reviews page.
5. The old domain `ilovedogspetgrooming.com`: recommended 301 of the whole
   domain to the new site at launch.
6. DNS access to attach `ilovedogsgrooming.com` to the `i-love-dogs` Vercel
   project (live at https://i-love-dogs.vercel.app).

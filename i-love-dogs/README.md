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

- `lib/site-data.ts`: every business fact (NAP, owners, experience, towns,
  packages, prices, FAQ, trust points, process steps, town pages). Change
  facts here only.
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
- `components/TownPageContent.tsx`: the template behind the four town pages
  (`/dog-grooming-<town>-pa/`). Bryn Mawr has no town page; the home page
  targets it.
- `next.config.ts`: `trailingSlash: true`, and the 301s from the old
  Squarespace `/home` URL to `/`.

## Deliberately not on the site

Left out until the owner confirms them: hours (Google and Yelp disagree),
ratings, review counts, testimonials, awards, business age, email, online
booking and logo. That is why this app has no Reviews, Blog, Membership or
Employment pages, which the Pampered Puppies skeleton has.

## Needs owner input before launch

1. Confirmed opening hours.
2. Confirm pickup and delivery, chemical-free products and the tankless warm
   bath are still current, and the pickup radius.
3. Year and publication for "Best of Philly / Best of the Main Line", if it
   should be shown.
4. Logo. `components/BrandMark.tsx` and `app/icon.svg` are a plain heart
   placeholder, not the client's logo. (Photos are in.)
5. Reviews the owner is happy to quote, for a Reviews page.
6. The old domain `ilovedogspetgrooming.com`: recommended 301 of the whole
   domain to the new site at launch.
7. Approval to deploy, plus Vercel project and DNS access for
   `ilovedogsgrooming.com`.

# I Love Dogs Pet Grooming — Website

Site for I Love Dogs Pet Grooming, a family-owned dog grooming salon at
723 County Line Rd, Bryn Mawr, PA 19010. Built with Next.js (App Router) and
TypeScript as a **separate, standalone app**, a sibling of the other client
apps in this monorepo with its own Vercel project and domain.

Every page is a server component, prerendered as static HTML. There are no
images, web fonts, analytics tags or third-party requests; the stylesheet
(about 5 KB) is inlined.

## Deploying as its own Vercel project (owner approval required)

Do not deploy until Nathaniel approves the first launch.

1. In Vercel (Tongfluence team), create a **new project** from this repository.
2. Set **Root Directory** to `i-love-dogs`. Framework preset: Next.js.
3. Attach `www.ilovedogsgrooming.com`, with the bare domain redirecting to www.
4. `NEXT_PUBLIC_SITE_URL` is optional: canonicals, schema, the sitemap and
   robots.txt already default to `https://www.ilovedogsgrooming.com`.

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
banned-claim grep, prices, titles/descriptions/H1/canonicals/JSON-LD,
sitemap and robots, every internal link and anchor, tel/directions tracking
attributes, call button in the first 390×844 viewport, sticky bar, horizontal
overflow at 320/390/1280, tap targets, and no third-party requests. It writes
mobile screenshots to `qa/`. Leave `CHROMIUM_PATH` unset to use Playwright's
own browser.

## Structure

- `lib/site-data.ts`: every business fact (NAP, towns, packages, prices,
  FAQ). Change facts here only.
- `lib/schema.tsx`: JSON-LD (LocalBusiness, WebSite, Service, BreadcrumbList,
  FAQPage).
- `lib/metadata.ts`: per-page title, description, canonical and OpenGraph.
- `components/SiteShell.tsx`: header, footer, sticky mobile call bar and hero.
- `public/track.js`: pushes `cta_click` events for `a[data-track]` clicks to
  `window.dataLayer` (and `gtag` if present). No tag is installed yet.
- `next.config.ts`: `trailingSlash: true`, and the 301s from the old
  Squarespace `/home` URL to `/`.

## Deliberately not on the site

The following are left out on purpose until the owner confirms them: hours
(Google and Yelp disagree), ratings, review counts, testimonials, awards,
business age, email or contact form, online booking, photos and logo, and
per-town landing pages.

## Needs owner input before launch

1. Confirmed opening hours.
2. Confirm pickup and delivery, chemical-free products and the tankless warm
   bath are still current (they come only from the older site).
3. Year and publication for "Best of Philly / Best of the Main Line", if it
   should be shown.
4. Logo and original grooming photos. `app/icon.svg` is a plain heart
   placeholder favicon, not the client's logo.
5. The old domain `ilovedogspetgrooming.com`: recommended 301 of the whole
   domain to the new site at launch.
6. Approval to deploy, plus Vercel project and DNS access for
   `ilovedogsgrooming.com`.

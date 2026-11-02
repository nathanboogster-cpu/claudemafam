# Sky Pet Grooming — Website

Site for Sky Pet Grooming, a luxury mobile pet grooming service that comes to
customers' doorsteps across California (skypetgrooming.com). Built with
Next.js (App Router), TypeScript and Tailwind CSS on the same skeleton as the
I Love Dogs app: same page anatomy, schema builders, metadata helper and QA
script, filled with Sky Pet Grooming's verified facts only. It is a
**separate, standalone app** with its own Vercel project and domain.

## What is verified, and what is not

Web research turned up only these facts, from the client's current site and
Google listing:

- Name: Sky Pet Grooming. Domain: skypetgrooming.com.
- Luxury mobile pet grooming, delivered to your doorstep.
- Serves customers across California.
- Licensed, insured and eco-friendly.

The owner also supplied their MoeGo online booking page,
`https://booking.moego.pet/ol/landing?name=SkyPetGrooming` (`BOOKING_URL` in
`lib/site-data.ts`).

No phone number, email, address, city list, hours, prices, service menu,
species (dogs, cats), staff, years of experience, ratings, reviews, logo or
photos could be verified, so **none of them are on the site**. That is why:

- The only call to action is **Book Online**, which opens the MoeGo page in a
  new tab. There is no Call button, no map and no Contact page.
- Copy says "pet", never "dog" or "cat", and lists no services or prices.
- `scripts/qa.mjs` fails the build's QA if any of those creep in.

Note: a different business, *Sky's Pet Grooming HD* in Hesperia, CA
((760) 261-1634), shows up in the same searches. It is not this client.
Nothing from it is used here.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: hero, the three verified pillars, why mobile, how booking works, FAQ excerpt |
| `/mobile-pet-grooming/` | Service page (Service schema), service area, what to have ready before booking |
| `/about/` | About |
| `/faq/` | FAQ (FAQPage schema, identical to visible text) |

`/book/` was an on-site request form for a short time and is now a temporary
redirect to the MoeGo page, so any old links still reach booking.

## Booking

Every Book Online button (header, hero, sticky mobile bar, page CTAs,
footer) links to the MoeGo page in a new tab and sends a `book_click` event
to Vercel Analytics. Bookings, customer details and confirmations all live
in MoeGo, so the site stores nothing and needs no database or secrets.

## Vercel project

The `sky-pet-grooming` project (Tongfluence team) deploys this folder from
`main`. To recreate it:

1. In Vercel (Tongfluence team), create a **new project** from this repository.
2. Set **Root Directory** to `sky-pet-grooming`. Framework preset: Next.js.
3. Attach `www.skypetgrooming.com`, with the bare domain redirecting to www.
   The client's current site lives on that domain today, so plan the DNS
   switch with the owner, and map any of its indexed URLs to the new pages
   with 301s in `next.config.ts` before launch.
4. `NEXT_PUBLIC_SITE_URL` is optional: canonicals, schema, the sitemap and
   robots.txt already default to `https://www.skypetgrooming.com`.
5. No environment variables or storage are needed.

Never deploy this app into another client's Vercel project.

## Local development and QA

```bash
cd sky-pet-grooming
npm install
npm run dev          # http://localhost:3000

# QA against a production build
npm run build && npx next start -p 3100 &
QA_BASE=http://localhost:3100 CHROMIUM_PATH=/path/to/chromium npm run qa
```

`npm run qa` (`scripts/qa.mjs`) runs the pre-launch checks with Playwright:
banned-claim grep, titles/descriptions/H1/canonicals, JSON-LD placement and
contents, sitemap and robots, every internal link and anchor, orphan pages,
every booking link being exactly the MoeGo URL and opening in a new tab,
the `/book/` redirect, Book Online in the first 390×844 viewport, sticky bar,
overflow at 320/390/1280, tap targets and third-party requests. It writes
mobile screenshots to `qa/`.

## Structure

- `lib/site-data.ts`: every business fact, plus nav, FAQ, process steps.
  Change facts here only.
- `lib/schema.tsx`: JSON-LD. LocalBusiness (service-area: no address or
  phone, `areaServed` California) and WebSite on every page, BreadcrumbList
  on every page, Service on `/mobile-pet-grooming/`, FAQPage on `/faq/`.
- `components/CTAButton.tsx`: `BookButton`, the MoeGo link used everywhere.
- `lib/track.ts`: `book_click` events to Vercel Analytics and
  `window.dataLayer`.
- `components/SkyScene.tsx`: inline SVG hero art, standing in for photos.
- `components/BrandMark.tsx` and `app/icon.svg`: a placeholder sun-and-cloud
  mark, not the client's logo.

## Needs owner input before launch

1. A phone number and email to publish. With a phone number, add Call
   buttons (header, sticky bar, hero) and `telephone` in the schema.
2. Where in California they actually go: cities or counties served, and any
   travel limits. That unlocks town pages and a precise `areaServed`.
3. Services and prices, and which pets they groom.
4. Hours or booking days.
5. Logo and original grooming photos.
6. Reviews they are happy to quote, for a Reviews section.
7. The URLs of their current site, for 301 redirects.
8. DNS access for `skypetgrooming.com`, to point the domain at the new
   Vercel project.

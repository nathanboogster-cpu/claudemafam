# Bow Wags — Website

Production site for Bow Wags, a dog daycare, boarding, and full-service
grooming facility in Marietta, GA (West Cobb / Cobb County). Built with
Next.js (App Router), TypeScript, and Tailwind CSS. This is a **separate,
standalone Next.js app** — a sibling to the other unrelated client apps in
this monorepo, its own deployment, its own Vercel project.

## Deploying as its own Vercel project

This app lives in a subdirectory of a monorepo that also contains several
other unrelated client sites. To deploy it as its own Vercel project,
separate from every other client's project:

1. In Vercel, create a **new project** from this same GitHub repository.
2. Under **Root Directory**, set it to `bow-wags`.
3. Framework preset should auto-detect as Next.js.
4. Once you attach a custom domain (e.g. `bowwags.com`), set the
   `NEXT_PUBLIC_SITE_URL` environment variable to that domain — see
   `lib/site-data.ts`. Until then it falls back to the default
   Vercel-assigned project URL.

Never deploy this app into an existing client's Vercel project, and never
merge another client's branch into this one — one client, one repository
(shared for convenience), one Vercel project, one production domain.

## Getting started locally

```bash
cd bow-wags
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `lib/site-data.ts` — single source of truth for every verified business
  fact (phone, address, hours, pricing, requirements, groomer bio, nav).
  Update facts here, not in individual pages.
- `lib/schema.tsx` — JSON-LD builders (LocalBusiness, Service,
  BreadcrumbList, FAQPage).
- `lib/metadata.ts` — shared per-page `<title>`/description/canonical helper.
- `components/` — shared layout (header, footer, sticky mobile CTA) and
  content components, including `DaycarePricingTable` / `BoardingPricingTable`.
- `app/(site)/` — one folder per route: home, about, dog-daycare,
  dog-boarding, dog-grooming, rates, reservations, requirements, gallery,
  reviews, faq, contact.
- `next.config.ts` — permanent redirects from the legacy bowwags.com paths
  (`/daycare`, `/boarding`, `/grooming`) to their new, more specific URLs,
  to preserve existing SEO equity.

## Known open items before launch

- **Real logo and OG share image are in place** (`public/images/logo.jpg`
  full lockup, `public/images/logo-mark.jpg` cropped bone+paw mark for the
  header/footer badges, `app/icon.png` favicon, and a 1200×630
  `public/images/og-image.jpg` combining the logo with a real facility
  photo), all referenced by `lib/metadata.ts` and `app/layout.tsx` so
  Facebook/Yelp/text-message shares render a real, branded preview instead
  of falling back to Next.js defaults.
- **Real photography is partially in place.** Five client-provided photos
  (`public/images/dog-lobby-husky.jpg`, `groomed-dog-bandana.jpg`,
  `boarding-dogs-resting.jpg`, `happy-dog-lobby-aussie.jpg`,
  `outdoor-play-springer.jpg`) are wired into the homepage hero/why-choose
  sections, the dog-daycare/dog-boarding/dog-grooming/about page heroes, and
  five of the twelve gallery slots via `PhotoPlaceholder`'s `src` prop.
  Remaining slots (daycare playroom close-ups, boarding suite fencing detail,
  bath-in-progress, facility exterior, and both Cynthia portraits) are still
  honest, labeled `PhotoPlaceholder`s — swap in real photos as they're
  provided by adding a `src` prop (see `components/PhotoPlaceholder.tsx`).
- **Online reservation system not carried over.** The verified business
  record states Bow Wags has an existing online reservation system, but its
  actual URL/destination could not be confirmed (same network restriction
  above). Rather than fabricate a booking widget, `/reservations` explains
  the phone-based process and leads with the phone number. If a specific
  booking-system URL is provided, wire the `ReserveButton` component
  (`components/CTAButton.tsx`) to link there directly.
- **Review count/star rating is intentionally not hardcoded.** Public
  sources (Yelp, Birdeye/Google, Facebook) show different totals on
  different days; `/reviews` uses a small set of real, individually
  verified review quotes plus a link to the live Yelp listing rather than
  asserting one fixed aggregate number.
- **Founding year is not stated.** BBB registration (2013) is not the same
  as the business's founding date, and directory estimates of "~15 years"
  are unconfirmed — verify with the owner before adding a specific year to
  the About page.
- **All pricing is marked "current published rates, subject to change"** per
  the verified business record — reconfirm with the owner before launch
  and whenever rates are updated.
- **Custom domain** — set `NEXT_PUBLIC_SITE_URL` once a domain is attached
  (see above); canonical URLs and JSON-LD currently fall back to the
  Vercel-assigned `bow-wags.vercel.app` URL.
- **Analytics** — `@vercel/analytics` is wired up; no additional GA/GTM
  container ID was provided, so `window.dataLayer` pushes are a stub for a
  future tag.

# Sittin' Pretty Pet Grooming — Website

Production site for Sittin' Pretty Pet Grooming, an established dog & cat
grooming salon in Funkstown, MD, serving pet owners throughout Hagerstown,
Halfway, and the surrounding Washington County community. Built with
Next.js (App Router), TypeScript, and Tailwind CSS. This is a **separate,
standalone Next.js app** — a sibling to the other unrelated apps in this
monorepo, its own deployment.

## Deploying as its own Vercel project

1. In Vercel, create a **new project** from this same GitHub repository.
2. Under **Root Directory**, set it to `sittin-pretty-pet-grooming`.
3. Framework preset should auto-detect as Next.js.
4. Once you attach a custom domain, set the `NEXT_PUBLIC_SITE_URL`
   environment variable to that domain — see `lib/site-data.ts`. Until
   then it falls back to the default Vercel-assigned project URL.

## Getting started locally

```bash
cd sittin-pretty-pet-grooming
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
  fact (phone, address, hours, services, service areas, nav). Update
  facts here, not in individual pages.
- `lib/schema.tsx` — JSON-LD builders (PetGroomer/LocalBusiness, Service,
  BreadcrumbList, FAQPage).
- `components/` — shared layout (header, footer, sticky mobile CTA bar,
  nav) and content components.
- `app/` — one folder per route, inside the `(site)` route group.

## Known open items before launch

- **Real logo and 9 real client photos are wired in** (see `public/images/`
  and the `photos` object in `lib/site-data.ts`) — the header/footer logo,
  favicon (`app/icon.png`), and Open Graph image (`app/opengraph-image.jpg`)
  are all cropped from the real logo photo. A few slots (cat grooming,
  salon interior, storefront) still render `components/PhotoPlaceholder.tsx`
  — an honest, aspect-locked placeholder, not stock imagery — since no real
  photo of those exists yet. Add more real photos to `lib/site-data.ts`'s
  `photos` object as they're supplied; nothing else needs to change.
- **No confirmed exact Google rating or review count.** Public estimates
  conflict and go stale, so no star rating or review count is hardcoded
  anywhere. The Reviews and Contact pages link to a live Google Maps
  search for the business instead — confirm and hardcode a rating only
  once verified from current GBP data.
- **No confirmed exact founding year.** Public directory data points to
  ~1996, but this isn't confirmed by the owner, so the site uses safe
  "decades" language rather than a specific year. Update to "Serving
  local pets since 1996" only once verified.
- **No online booking system.** All CTAs route to the phone number
  (`tel:+13017900466`) rather than a fabricated booking widget.
- **No confirmed owner/team names, payment methods, or itemized service
  add-ons** (ear cleaning, deshedding, teeth cleaning, etc.) beyond dog
  grooming, dog bathing, and cat grooming. Nothing beyond what's verified
  is claimed on the site — add these only once confirmed.
- **Conversion tracking is a stub.** Call button clicks push to
  `window.dataLayer` and a Vercel Analytics custom event (see
  `lib/track.ts`) — ready to feed a real analytics tool once one is
  chosen.

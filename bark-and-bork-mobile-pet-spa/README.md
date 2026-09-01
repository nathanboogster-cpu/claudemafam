# Bark and Bork Mobile Pet Spa — Website

Production site for Bark and Bork Mobile Pet Spa, a **mobile dog grooming**
business based in Compton, CA, serving pet owners throughout the greater Los
Angeles area. Bark and Bork has no walk-in storefront — every grooming
appointment happens at the customer's own location. Built with Next.js (App
Router), TypeScript, and Tailwind CSS.

This is a **separate, standalone Next.js app** — a sibling to the other
unrelated client apps in this monorepo, with its own `package.json`, own
components, own content, and zero shared code or business data. It is meant
to be deployed as its **own dedicated Vercel project**, giving Bark and Bork
its own deployment history and production domain even though the source
lives in a shared GitHub repository alongside other clients' apps.

## Deploying as its own Vercel project

1. In Vercel, create a **new project** dedicated to Bark and Bork (e.g.
   `bark-and-bork-mobile-pet-spa`) from this same GitHub repository.
2. Under **Root Directory**, set it to `bark-and-bork-mobile-pet-spa`.
3. Framework preset should auto-detect as Next.js.
4. Once a custom domain is attached, set the `NEXT_PUBLIC_SITE_URL`
   environment variable to that domain — see `lib/site-data.ts`. Until then
   it falls back to the default Vercel-assigned project URL.
5. Never connect this folder to another client's existing Vercel project,
   and never deploy it from another client's project settings.

## Getting started locally

```bash
cd bark-and-bork-mobile-pet-spa
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
  fact (phone, booking URL, hours, cancellation policy, services, pricing,
  service areas, team, nav). Update facts here, not in individual pages.
- `lib/schema.tsx` — JSON-LD builders (PetGroomer service-area business,
  Service, BreadcrumbList, FAQPage). No fabricated street address — Bark and
  Bork is a mobile/service-area business.
- `components/` — shared layout (header, footer, sticky mobile CTA bar, nav)
  and content components.
- `app/` — one folder per route, inside the `(site)` route group.

## Business facts baked into this build

- **Booking**: every primary CTA routes to the existing GlossGenius booking
  platform (`https://barkandbork.glossgenius.com/services`) — no fabricated
  internal booking form.
- **Hours**: 9:00 AM – 7:00 PM, 7 days a week (sourced from the current
  GlossGenius booking platform, the authoritative source per the Verified
  Business Record — a separate public listing shows different hours and is
  intentionally not used).
- **Cancellation policy**: a 50% fee applies to no-shows and cancellations
  made within 24 hours of the scheduled appointment.
- **Team**: Jennifer Cruz, Nathaniel Tong, Sergio Polanco — listed by name
  only, no invented titles or bios.
- **No physical storefront**: Compton is the home base for a mobile route,
  never presented as a walk-in location. No street address is used anywhere,
  including in structured data.
- **No fabricated reviews**: no star rating, review count, or testimonial
  text is used anywhere on the site since none was supplied as verified.
- **No real photos supplied**: every gallery/hero image slot renders an
  honest, aspect-locked placeholder (`components/PhotoPlaceholder.tsx`)
  rather than stock photography presented as real Bark and Bork work. Swap
  in real photos via the `photos` pattern once supplied — nothing else needs
  to change.

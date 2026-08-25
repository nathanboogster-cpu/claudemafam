# Pet Spa Luxe — Website

Production site for Pet Spa Luxe, a mobile dog grooming business based in
El Sobrante, CA. Built with Next.js (App Router), TypeScript, and Tailwind
CSS. This is a **separate, standalone Next.js app** — a sibling to the
Pampered Puppies app at the repo root, unrelated business, own deployment.

## Deploying as its own Vercel project

This app lives in a subdirectory of a monorepo that also contains the
(unrelated) Pampered Puppies site at the repo root. To deploy it as its own
Vercel project, separate from the Pampered Puppies project:

1. In Vercel, create a **new project** from this same GitHub repository.
2. Under **Root Directory**, set it to `pet-spa-luxe`.
3. Framework preset should auto-detect as Next.js.
4. Once you attach a custom domain, set the `NEXT_PUBLIC_SITE_URL`
   environment variable to that domain (e.g. `https://petspaluxe.com`) —
   see `lib/site-data.ts`. Until then it falls back to the default
   Vercel-assigned project URL.

## Getting started locally

```bash
cd pet-spa-luxe
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
  fact (phone, address, services, hours, service areas, nav). Update facts
  here, not in individual pages.
- `lib/schema.tsx` — JSON-LD builders (LocalBusiness, Service,
  BreadcrumbList, FAQPage).
- `components/` — shared layout (header, footer, sticky mobile CTA) and
  content components.
- `app/` — one folder per route, Pet Spa Luxe at the root (`/`).

## Known open items before launch

- **Service areas beyond El Sobrante are unconfirmed.** Only El Sobrante
  has a dedicated service-area page — add more only once verified from an
  authoritative current source (official site, Google Business Profile, or
  the owner directly).
- **Email address is not verified** — no email is shown anywhere on the
  site. Add one once confirmed.
- **Owner/groomer name is not verified** — the About page doesn't name a
  specific person. Add one once confirmed.
- **Custom domain** — set `NEXT_PUBLIC_SITE_URL` once a domain is attached
  (see above); canonical URLs and JSON-LD currently fall back to the
  Vercel-assigned `pet-spa-luxe.vercel.app` URL.

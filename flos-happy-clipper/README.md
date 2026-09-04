# Flo's Happy Clipper — Website

Production site for Flo's Happy Clipper, a long-established, independently
owned dog grooming salon on Main St in Eatontown, NJ, serving pet owners
throughout Monmouth County. Built with Next.js (App Router), TypeScript, and
Tailwind CSS. This is a **separate, standalone Next.js app** — a sibling to
the other unrelated client apps in this monorepo, with its own deployment.

## Deploying as its own Vercel project

1. In Vercel, create a **new project** from this same GitHub repository.
2. Under **Root Directory**, set it to `flos-happy-clipper`.
3. Framework preset should auto-detect as Next.js.
4. Once you attach a custom domain, set the `NEXT_PUBLIC_SITE_URL`
   environment variable to that domain — see `lib/site-data.ts`. Until
   then it falls back to the default Vercel-assigned project URL.

This must be its own dedicated Vercel project — never added as a route or
domain inside another Tongfluence client's project.

## Getting started locally

```bash
cd flos-happy-clipper
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
  fact (phone, address, hours, services, nav). Update facts here, not in
  individual pages.
- `lib/schema.tsx` — JSON-LD builders (PetGroomer, Service, BreadcrumbList,
  FAQPage).
- `components/` — shared layout (header, footer, sticky mobile CTA bar,
  nav) and content components.
- `app/` — one folder per route, inside the `(site)` route group.

## Known open items before launch

- **No real photos or logo supplied.** Facebook and the business's own
  website could not be reached during this build (network egress was
  blocked), so every photo slot renders `components/PhotoPlaceholder.tsx`
  — an honest, aspect-locked placeholder — and the header/footer render a
  text wordmark instead of a logo image. Swap in real photos via the
  `photos` object in `lib/site-data.ts`, and add a real logo image once
  supplied.
- **No confirmed exact Google rating, review count, or verbatim review
  quotes.** Public estimates conflict across platforms (Yelp, Scrubby,
  etc.) and go stale, so no star rating, review count, or quoted review
  text is hardcoded anywhere. The Reviews and Contact pages link to a live
  Google Maps search instead. Add verbatim, attributed quotes only once
  sourced directly from the business/owner.
- **No confirmed founding year or family-ownership claim.** Public
  directories disagree (one dates the business to 1979 / ~47 years,
  others describe "20+" or "25+ years"), and ownership details are
  unconfirmed, so the site uses safe language ("long-established,"
  "independently owned") rather than a specific date or an unverified
  family-ownership claim. Update once confirmed by the owner.
- **No confirmed current staff names.** Public reviews repeatedly mention
  a groomer named Lauren (and occasionally a "Tom"/"Bob"), but current
  team membership wasn't verifiable for this build, so no staff bios are
  published. Add only once confirmed as current employees.
- **Dog grooming only — confirmed.** The owner confirmed Flo's Happy
  Clipper is purely a dog grooming business, despite some older
  third-party directories referencing cats/kittens as a specialty. No cat
  grooming content or `/services/cat-grooming` page should be added.
- **No parking guidance.** Public sources mention a lot but this wasn't
  verified, so the Contact page doesn't make a specific parking claim.
- **Service area radius is owner-confirmed, but individual towns are our
  own selection.** The owner confirmed Flo's Happy Clipper serves any town
  within about a 20-minute drive of the Eatontown salon. The 8 towns in
  `serviceAreas`/`areaContent` in `lib/site-data.ts` (Tinton Falls,
  Oceanport, West Long Branch, Long Branch, Shrewsbury, Red Bank, Little
  Silver, Monmouth Beach) are real, nearby Monmouth County towns chosen to
  match that radius, not an owner-provided list — add, remove, or reorder
  towns there if the actual customer base differs.
- **No online booking system.** All CTAs route to the phone number
  (`tel:+17325448186`) rather than a fabricated booking widget.
- **Conversion tracking is a stub.** Call button clicks push to
  `window.dataLayer` and a Vercel Analytics custom event (see
  `lib/track.ts`) — ready to feed a real analytics tool once one is
  chosen.

# Pampered Puppies — Website

Production site for Pampered Puppies (Donna Nichols), a dog & cat grooming
business in Victorville, CA. Built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## Getting started

```bash
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

- `lib/site-data.ts` — single source of truth for every business fact (phone,
  address, hours, pricing, services, testimonials, nav). Update facts here,
  not in individual pages.
- `lib/schema.tsx` — JSON-LD builders (LocalBusiness, Service, BreadcrumbList,
  FAQPage).
- `components/` — shared layout (header, footer, sticky mobile CTA bar, nav)
  and content components.
- `app/` — one folder per route. Existing URLs from the previous Thryv site
  were preserved exactly to protect indexed SEO equity; do not rename them
  without a redirect plan.

## Known open items before launch

- **Hours are unconfirmed.** Three source systems (the old website, Google
  Business Profile, and Yelp) disagree. The site currently shows the
  GBP-sourced hours as a placeholder, flagged in the UI and in
  `lib/site-data.ts`. Get final hours from Donna/Ellen before launch.
- **No real photography yet.** Every photo slot (hero images, Gallery page,
  About page) is a styled placeholder sized for real photos. Swap in actual
  photos from the client and add honest alt text when available.
- **Contact form has no backend.** It composes a pre-filled email via
  `mailto:` rather than posting to a server, since no booking backend was
  supplied for this build. Wire it to a real form handler if one becomes
  available.
- **Conversion tracking is a stub.** Call/Book button clicks push to
  `window.dataLayer` and log to the console (see `lib/track.ts`) — ready to
  feed a real analytics tool once one is chosen.

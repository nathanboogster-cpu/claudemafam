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
4. `SITE_URL` in `lib/site-data.ts` defaults to the real production domain
   (`https://petspaluxe.com`) — no env var required for that anymore.
   `NEXT_PUBLIC_SITE_URL` can still override it (e.g. for a preview
   deploy), but don't rely on it being set: the domain drifting back to a
   `*.vercel.app` fallback silently broke every canonical/OG/sitemap URL
   on the site for weeks before it was caught (see git history,
   "Fix SITE_URL fallback pointing at the old Vercel preview domain").

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

## New-page checklist — run this before calling any page "done"

Every page on this site needs to be indexable by Google with nothing
self-inflicted blocking it. Whenever you add, restructure, or move a page,
go through all of these before merging — not just the ones that feel
relevant:

1. **Metadata** — unique `title` and `description` via `pageMetadata()`
   from `lib/metadata.ts` (never hand-roll a `<title>`), with the correct
   `path`. Grep existing titles first (`grep -rn "title:" app/`) to make
   sure the new one isn't a near-duplicate of an existing page's.
2. **Canonical/OG URLs** — these come free from `pageMetadata()` as long as
   `SITE_URL` (`lib/site-data.ts`) is correct. Don't hardcode a URL
   anywhere; always build off `SITE_URL` + a `PATHS`/`*Path()` helper.
3. **Structured data** — add `breadcrumbSchema` at minimum (see any
   existing page for the pattern); add `serviceSchema`, `faqSchema`, or
   `blogPostingSchema` where it actually applies. Don't invent a schema
   type that isn't in `lib/schema.tsx`.
4. **Sitemap** — confirm the new path is actually emitted by
   `app/sitemap.ts`. Static top-level pages come free via `PATHS`; a new
   *dynamic* route (another service, area, or blog-post-style collection)
   needs its own explicit `.map()` added there, the same way services,
   areas, and blog posts already are. A page that's reachable but missing
   from the sitemap is a real, easy-to-miss gap.
5. **robots.txt** — check `app/robots.ts`'s `disallow` list; a new page
   should never land there by accident. Only genuinely internal tooling
   (like `/analytics-report`) belongs there.
6. **No stray `noindex`** — don't set `robots: { index: false }` on a
   public page. Grep for it (`grep -rn "noindex\|index: false" app/`)
   before shipping if you're unsure.
7. **Internal linking** — the page needs at least one real link pointing
   to it from somewhere crawlable (header, footer, a hub page, or a
   listing page) — being in the sitemap alone is a weaker signal than
   also being linked from the site itself. If you add a new hub/category,
   make sure Header.tsx, Footer.tsx, and MobileNav.tsx all get it too
   (see how `Book Appointment` and `Blog` were added to all three).
8. **Content must be genuinely unique** — this matters most for any
   templated/programmatic page (another service area, another package
   tier, etc.). Swapping a city or product name into an identical
   paragraph risks Google treating it as duplicate/thin content and
   simply not indexing it. Every service-area page's `intro`/`whyChoose`/
   `faqs` in `lib/site-data.ts` should read like it was actually written
   about that place, not templated.
9. **Verify it actually resolves** — after `npm run build`, start the
   prod server locally and curl the new path directly; confirm a real 200,
   not a redirect or 404. For a batch of pages (e.g. after touching
   `sitemap.ts`), diff the full sitemap against a curl of every URL in it:
   ```bash
   curl -s http://localhost:PORT/sitemap.xml | grep -o '<loc>[^<]*</loc>' \
     | sed 's/<loc>//;s#</loc>##;s#https://petspaluxe.com##' \
     | while read -r path; do
         code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:PORT${path}")
         [ "$code" != "200" ] && echo "BAD: $code $path"
       done
   ```
   No output = every sitemap URL is healthy.
10. **This is necessary, not sufficient.** Passing all of the above just
    rules out self-inflicted problems — it does not make Google index the
    page faster. A brand-new domain still has to earn crawl priority and
    authority over time (see git history / conversation log around
    "SEO audit" for the full picture: indexing lag on a new domain is
    normal and expected, not a bug to chase).

## Known open items

- **Email address is not verified** — no email is shown anywhere on the
  site. Add one once confirmed.
- **Owner/groomer name is not verified** — the About page doesn't name a
  specific person. Add one once confirmed.
- **Backlinks/citations are the current bottleneck for ranking**, not
  on-page content — the domain has near-zero external authority signals.
  Confirm the Yelp listing and Google Business Profile both link to
  `petspaluxe.com` (not any stale `*.vercel.app` URL), and consider
  additional local directory listings.

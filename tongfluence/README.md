# Tongfluence — Website

The marketing site for Tongfluence, a marketing and SEO service for dog
grooming businesses. Built with Next.js (App Router), TypeScript and
Tailwind CSS.

This is a **standalone Next.js app** — a sibling to the grooming client
apps in this monorepo (`pet-spa-luxe/`, `bark-and-bork-mobile-pet-spa/`,
`sittin-pretty-pet-grooming/`, `flos-happy-clipper/`, `bow-wags/`,
`groomer-on-call/`, and the Pampered Puppies app at the repo root). It has
its own `package.json`, its own components and its own content, and shares
no code or data with any of them.

## Deploying as its own Vercel project

1. In Vercel, create a **new project** from this same GitHub repository.
2. Under **Root Directory**, set it to `tongfluence`.
3. Framework preset should auto-detect as Next.js.
4. Attach the custom domain. Nothing else is needed: canonicals, OG URLs,
   the sitemap and every schema `@id` follow the Vercel project's
   production domain automatically via `VERCEL_PROJECT_PRODUCTION_URL` —
   see `SITE_URL` in `lib/site-data.ts`. `NEXT_PUBLIC_SITE_URL` can
   override it if you ever need to.

No `*.vercel.app` host is hardcoded anywhere. Guessing one is how a site
ends up with every canonical, OG URL and sitemap entry pointing at a 404.

## Getting started locally

```bash
cd tongfluence
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Environment variables

| Variable | Required | What it does |
| --- | --- | --- |
| `RESEND_API_KEY` | For the form | Sends lead notifications (`app/api/lead/route.ts`). Without it the form returns an honest error instead of a fake success. |
| `LEAD_NOTIFICATION_EMAIL` | For the form | Inbox that receives enquiries. |
| `LEAD_FROM_EMAIL` | Optional | From address for the notification. Defaults to Resend's onboarding sender. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | A public address shown on `/book` and offered in the form's error message if sending fails. Left unset, neither mentions an email. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Overrides the site origin. Not needed on Vercel once a domain is attached. |

## Structure

- `app/globals.css` — the design system, derived from the brand logo: a
  warm near-black and a chocolate brown on warm off-white, with the
  contrast ratio of every text-bearing pair recorded in the comments.
- `lib/site-data.ts` — single source of truth for every fact published on
  this site: the offer, the inclusions, the FAQ, the objections, the nav,
  and the brand tagline and logo path. Change facts here, never in a page.
- `lib/client-builds.ts` — the first-party dataset behind every proof
  claim: page composition of the seven real grooming builds, with a note
  on how each number was derived so any reader can re-verify it.
- `lib/case-studies-data.ts` — the three full case studies.
- `lib/resources-data.ts` — the resource library, including a record of
  which pages were considered and deliberately not published.
- `lib/schema.tsx` — JSON-LD builders (Organization, WebSite, Service,
  Article, BreadcrumbList, FAQPage) plus `canonicalUrl()`, which every
  canonical, sitemap entry and schema URL goes through so they are
  byte-identical.
- `lib/metadata.ts` — `pageMetadata()`, which produces a page's title,
  description, canonical, OG and Twitter tags together.
- `lib/track.ts` — conversion events plus first-touch UTM/referrer
  attribution.
- `app/(site)/` — every public page. One folder per route.
- `SEO-PLAN.md` — the search-intent and cannibalization analysis behind
  the current 18 URLs, plus the post-launch operating loop. Read this
  before adding a page.

## Rules this site is built to

These are constraints, not positioning, and they are enforced in the code
and documented where they bite:

- **No unmeasured performance claims.** There is no ranking, traffic,
  impression, click, call-volume, lead-count or review-growth figure
  anywhere on this site, because none has been exported and verified. The
  case studies say so explicitly rather than quietly omitting the section.
  `lib/case-studies-data.ts` has a `results.measured` table ready for
  metric / period / source / value / change when there is real data.
- **No AggregateRating or Review schema**, on this site or on any client
  build. Google restricts self-serving review markup.
- **No invented facts.** Where something is unverified — the founder's
  name, a public contact address — the code renders nothing rather than a
  placeholder identity. See `founder` and `publicContactEmail` in
  `lib/site-data.ts`.
- **No Google Business Profile category list** is reproduced, because it
  cannot be verified outside the profile's own picker. The GBP page
  teaches the category model and cites Google's documentation.

## Known open items before launch

1. **Client permission for the case studies.** Seven grooming businesses
   are named, with markets and business types, and the work described is
   verifiable from their own public sites. Confirm each client is happy to
   be named before this goes live — that is a courtesy question, not a
   legal one, but it should be asked. `lib/client-builds.ts` and
   `lib/case-studies-data.ts` are the only two files to change.
2. **Founder identity.** `founder` in `lib/site-data.ts` is
   deliberately empty, so the About page omits its founder section rather
   than publishing a made-up person. Fill in `name`, `role`, `bio` and any
   verified `sameAs` profiles and the section appears with no other
   change. Personal-brand trust is a stated goal of this site and this is
   the single biggest gap in delivering it.
3. **Verified social profiles.** `socialProfiles` in `lib/site-data.ts` is
   empty. Add only confirmed profiles — they feed the footer and
   schema.org `sameAs`, and an unverified `sameAs` is worse than none.
4. **A public contact address.** Set `NEXT_PUBLIC_CONTACT_EMAIL` so the
   booking page offers an email fallback and the form's error message has
   somewhere to point.
5. **Form backend.** Set `RESEND_API_KEY` and `LEAD_NOTIFICATION_EMAIL`
   before launch. Until then the form reports a clear error; it never
   pretends to have sent.
6. **A vector logo, when there is one.** The site uses the real logo
   artwork, cut out of the supplied raster file and cropped into the
   variants the web needs — see `public/images/`:

   | File | Used for |
   | --- | --- |
   | `logo-horizontal.png` | Header. Mark and wordmark side by side. |
   | `logo-lockup.png` | Footer. The stacked lockup as supplied. |
   | `logo-mark.png` | The emblem alone, for square contexts. |
   | `logo-favicon.png` | Tab icon. A tighter crop onto the TF. |

   The horizontal variant exists because the supplied lockup is stacked, and
   scaled to fit a 64px header bar its wordmark lands about five pixels
   tall. The favicon is a tighter crop for the same reason: the arc, swoosh
   and bars are the first things to disappear at 16px.

   If a vector export (`.svg`) ever exists it is worth dropping in —
   `lib/brand-logo.ts` prefers `logo-*.svg` over the PNG automatically and
   reads dimensions from the file, so replacing artwork needs no code
   change. The current PNGs were cut from a JPEG, so their edges carry
   whatever the JPEG had.

7. **Real screenshots.** Every proof asset here is currently text: page
   counts, structure, decisions. Real Search Console and Google Business
   Profile screenshots, and before/after website captures, would make the
   case studies substantially stronger. Add them alongside the numbers,
   not instead of them.
8. **Connect Google Search Console** on launch, submit `/sitemap.xml`, and
   verify indexing. Then leave it roughly 28 days before reading anything
   into the data. `SEO-PLAN.md` documents the loop after that.
9. **Legal review.** `/privacy` and `/terms` describe what the site and
   the service actually do, and they match the FAQ. They have not been
   reviewed by a lawyer.

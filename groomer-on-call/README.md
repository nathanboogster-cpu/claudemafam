# Groomer On Call — Website

Production site for **Groomer On Call**, a 100% mobile pet grooming service in
the North Port, FL area. Next.js (App Router) + TypeScript + Tailwind CSS v4.

> **Client isolation.** This app is a standalone sibling to the other, unrelated
> client apps in this monorepo. It has its own `package.json`, its own lockfile,
> its own Vercel project (`groomer-on-call`) and its own domain. It must never
> import from, share components with, or be merged with any of them. Every
> business fact on this site is Groomer On Call's own — the build was scanned
> for cross-client names, phone numbers, addresses, domains and analytics IDs,
> with zero hits.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

---

## The one rule for this site: don't publish what isn't verified

Groomer On Call is a **service-area business with no customer-facing location**.
The single largest way to damage it — in local search and with customers — would
be to invent a storefront, a service-area list, hours, prices or reviews that
turn out to be wrong. So this build publishes only what is verified, and says so
plainly where something is unknown.

What that means concretely, and why each decision was made:

| Decision | Reason |
|---|---|
| **No street address anywhere** — not in copy, not in schema | No customer-facing location exists. The only address in public record against this phone number is historical and unconfirmed. |
| **No city landing pages** under `/service-areas` | The exact list of cities served is not verified. Generating them from a guessed radius would produce doorway pages. |
| **No hours published**, no `openingHoursSpecification` | Hours are unverified. Wrong hours cost bookings. Copy says "call to check availability" instead. |
| **No pricing** | Unverified, and genuinely depends on the pet. |
| **No testimonials, no `aggregateRating`, no `review` schema** | No review data has been verified. Fabricated ratings are both a lie and a Google structured-data violation. Social proof links to the business's real Facebook page instead. |
| **No stock photography** | No client photos were supplied. Rather than pass off stock dogs as this groomer's work, the site uses original brand illustrations (`components/BrandArt.tsx`) that never claim to show a real groom. |
| **No owner biography** | Unverified. `/about` is built on the verified business model instead. |
| **No online booking** | No booking system is verified. Calling is the primary CTA site-wide. |
| **Cat page titled "Cat Bathing & Ear Cleaning", not "Cat Grooming"** | Only cat bathing and cat ear cleaning are verified. A "cat grooming" title would imply haircuts and nail trims that aren't offered. |

Every one of these is a single-file change in `lib/site-data.ts` once the fact is
confirmed — see **Open items** below.

---

## Business record used

Sourced from the client's Verified Business Record and the Google Business
Profile, corroborated where possible against public directory data.

- **Name:** Groomer On Call
- **Phone:** (941) 336-2838 — `tel:+19413362838`
- **Category:** Pet groomer
- **Model:** 100% mobile / service-area business. No salon, no public address.
- **Market:** North Port, FL area, including nearby Port Charlotte *(see below)*
- **Facebook:** `https://www.facebook.com/profile.php?id=61577229631078`
- **Verified services (GBP):** dog bathing and blow dry · dog ear cleaning ·
  dog full service grooming · dog grooming and styling · dog nail trimming ·
  cat bathing · cat ear cleaning

### On the market

Three independent signals converge on the same small Southwest Florida area:
the client's own record associates the business with North Port, FL; public
directory data independently lists (941) 336-2838 against North Port, FL 34291;
and a "Groomer on Call" community page is geo-anchored to Port Charlotte, the
adjacent city. Area code 941 covers Sarasota / Charlotte / Manatee counties.

So the site is anchored to that area — but **no specific service-area city list
is published**, because that list is not verified. `market` in
`lib/site-data.ts` is the single switch for this; changing `city`/`cityState`
there updates every title, H1, meta description and schema block on the site.

---

## Architecture — 17 indexable URLs

```
/                                       Homepage
/about
/services                               Hub
/services/mobile-dog-grooming           PRIMARY commercial page
/services/dog-bath-and-blow-dry
/services/dog-nail-trimming
/services/mobile-cat-bathing
/service-areas
/faq
/contact
/blog                                   Hub
/blog/<6 guides>
```

Every route is statically prerendered. There is no `/gallery` (no real photos
yet — it would be an empty page) and no `/reviews` (no verified reviews — it
would be a fabricated one). Both are listed under **Open items**.

### Why there are four service pages and not seven

The GBP lists seven services, but seven URLs would mean three thin pages and two
pairs of pages competing for the same query. Instead:

- **`/services/mobile-dog-grooming`** owns the head term (*mobile dog grooming
  [city]*, *mobile dog groomer near me*, *dog groomer that comes to your home*)
  **and** *full service dog grooming* and *dog grooming and styling* — these are
  the same buying intent expressed three ways. Separate pages would cannibalise
  each other and could not be written without repeating one another.
- **`/services/dog-bath-and-blow-dry`** owns the explicitly *no-haircut* intent,
  and says so in its first paragraph so it can't drift into the page above.
- **`/services/dog-nail-trimming`** owns a standalone, urgent, low-consideration
  job — those searchers aren't looking for a groom.
- **`/services/mobile-cat-bathing`** owns the cat intent, scoped accurately.
- **Dog ear cleaning** and **cat ear cleaning** are real services with negligible
  standalone search demand; they're covered as sections on the pages above and
  listed on the services hub, rather than given thin pages of their own.

---

## Keyword → page map

| Page | Primary query | Secondary | Intent | CTA | Key internal links |
|---|---|---|---|---|---|
| `/` | mobile pet grooming north port fl | mobile pet groomer near me; pet groomer that comes to you | commercial | Call | all 4 services, service-areas, about, faq |
| `/services` | mobile grooming services north port | dog and cat grooming services | commercial | Call | all 4 services |
| `/services/mobile-dog-grooming` | mobile dog grooming north port fl | full service dog grooming; dog grooming and styling; mobile dog groomer near me | commercial | Call | bath page, service-areas, 3 guides |
| `/services/dog-bath-and-blow-dry` | mobile dog bath north port | dog bath and brush; deshedding bath | commercial | Call | dog grooming page, guide |
| `/services/dog-nail-trimming` | mobile dog nail trimming north port | dog nail clipping near me | commercial | Call | bath + grooming pages, guide |
| `/services/mobile-cat-bathing` | mobile cat bathing north port | cat ear cleaning; mobile cat grooming *(answered honestly on-page)* | commercial | Call | dog grooming page, guide |
| `/service-areas` | mobile pet groomer service area north port | do you come to my area | commercial-investigation | Call | all 4 services, contact |
| `/about` | groomer on call north port | about mobile pet groomer | brand | Call | services, service-areas, faq |
| `/faq` | mobile pet grooming faq | how does mobile dog grooming work | informational | Call | services, contact |
| `/contact` | groomer on call phone number | book mobile pet grooming north port | transactional | Call | all 4 services, service-areas |
| `/blog` | dog grooming guides | — | informational | Call | all 4 services |
| `/blog/what-is-mobile-dog-grooming` | what is mobile dog grooming | — | informational | Call | dog grooming, bath |
| `/blog/how-often-should-a-dog-be-groomed` | how often should a dog be groomed | — | informational | Call | dog grooming, bath |
| `/blog/mobile-grooming-vs-salon-grooming` | mobile grooming vs salon grooming | — | commercial-investigation | Call | dog grooming |
| `/blog/how-to-prepare-for-a-mobile-grooming-appointment` | how to prepare for mobile dog grooming | — | informational | Call | dog grooming, bath |
| `/blog/how-often-should-you-trim-a-dogs-nails` | how often should you trim a dog's nails | — | informational | Call | nail trimming, dog grooming |
| `/blog/bathing-a-cat-what-to-expect` | do cats need baths | — | informational | Call | cat bathing |

`primaryQuery`, `searchIntent` and `targetReader` are stored on each post in
`lib/blog-data.ts`, so this table can't drift away from what was published.

---

## Structured data

Emitted from `lib/schema.tsx`. One `PetGroomer` entity with a stable
`@id` (`<site>/#business`) is rendered on every page from the site layout;
`Service` nodes on service pages reference that same `@id` as their `provider`,
so Google resolves one business rather than a new one per page.

| Type | Where |
|---|---|
| `PetGroomer` (LocalBusiness) | every page, via `app/(site)/layout.tsx` |
| `WebSite` | homepage |
| `BreadcrumbList` | every page below the homepage, built from the same array as the visible trail |
| `Service` | each of the 4 service pages |
| `FAQPage` | `/faq` only — every Q&A in the schema is also visible text on that page (verified by test) |
| `BlogPosting` | each guide |

Deliberately absent: `address`, `openingHoursSpecification`, `aggregateRating`,
`review`. See the table at the top of this file.

---

## Conversion tracking

No third-party tracker is installed — none was authorised, and no analytics
account was supplied. What exists:

- Every conversion element renders `data-goc-event` and `data-goc-location`
  attributes. A tag manager can bind to those declaratively with **no code
  change**.
- One delegated click listener (`components/ConversionTracking.tsx`) picks those
  up and pushes to `window.dataLayer` via `lib/track.ts`.
- Vercel Analytics (first-party to this project's own deployment) is loaded in
  the root layout.

This is also a performance decision: because tracking is delegated, `CallButton`
and the sticky mobile bar are **server** components, and CTA-heavy pages ship
almost no component JavaScript.

---

## Quality gates (all verified against the built, served site)

- **Crawl audit:** 17/17 URLs return 200. Zero orphans, zero broken links, zero
  redirect chains, zero trailing-slash variants, zero duplicate titles or meta
  descriptions, exactly one `<h1>` per page, no skipped heading levels, no
  `<img>` without `alt`, every canonical self-referencing, no accidental
  `noindex`. Sitemap ↔ crawl parity is exact in both directions.
- **Lighthouse (mobile):** Performance 98 · Accessibility 100 · Best Practices
  96 · SEO 100. LCP 2.4s, CLS 0, TBT 80ms.
  The single Best Practices deduction is a 404 on `/_vercel/insights/script.js`,
  which only occurs when serving outside Vercel — it resolves on the real
  deployment.
- **Layout:** no horizontal overflow at 390px on any page; no JS console errors.
- **Content scan:** zero instances of "visit our salon", "stop by", "come see
  us", "get directions", a street-address pattern, "stress-free", "anxiety-free",
  "guarantee", a price, a star rating or a review count anywhere in the rendered
  HTML of all 17 pages.

---

## Open items before launch

Each of these is a one-place change, listed with where it goes.

1. **Confirm the primary market.** `market` in `lib/site-data.ts`. Currently
   `North Port, FL` on three corroborating signals but not client-confirmed —
   `market.confirmed` is `false`. This drives every title, H1 and schema block.
2. **Get the real service-area city list.** Then, and only then, build city
   pages — the procedure is documented in a comment at the top of
   `app/(site)/service-areas/page.tsx`. Create a page per city only where there
   is real coverage *and* enough genuinely distinct local content to justify the
   URL. Never template one page across many city names.
3. **Get current hours.** `hoursConfirmed` / `hoursNote` in `lib/site-data.ts`,
   plus re-add `openingHoursSpecification` in `lib/schema.tsx`.
4. **Get real photography.** Grooming transformations, finished dogs and cats,
   the groomer working, the mobile setup. Swap each `<BrandArt />` for a
   `next/image` at the same aspect ratio with literal alt text — every usage is
   a single self-contained element to make that a one-line change. Then add
   `/gallery`.
5. **Get the real logo file.** Drop at `public/images/logo.png` and replace the
   badge in `components/Logo.tsx`. The current mark is original type-led
   artwork in the brand colours, not a guessed reproduction of the client's.
6. **Get review permission / data.** Then add `/reviews` with real quotes. Add
   `aggregateRating` **only** if the rating and count are current and accurate.
7. **Owner / groomer story** for `/about` — experience, training, why they went
   mobile. Nothing is invented there today.
8. **Confirm whether a booking URL exists.** If it does, decide whether "Book
   now" should displace "Call to book" as the primary CTA.
9. **Attach the custom domain.** Nothing else is needed: canonicals, OG URLs,
   the sitemap and every schema `@id` follow the Vercel project's production
   domain automatically, via `VERCEL_PROJECT_PRODUCTION_URL` — see `SITE_URL`
   in `lib/site-data.ts`. Once the domain is the project's production domain,
   the whole site points at it on the next deploy.
   `NEXT_PUBLIC_SITE_URL` exists only as an override for the unusual case of
   wanting an origin *other* than the production domain. If you ever set it,
   use the full origin with **no trailing slash** (URLs are built as
   `${SITE_URL}${path}`, so a trailing slash yields `//about`), and redeploy —
   `NEXT_PUBLIC_*` is inlined at build time, so setting it alone changes
   nothing until the project rebuilds.
10. **Verify Google Business Profile alignment** once 1–3 are settled: category,
    service list, service areas and the "mobile" positioning should match this
    site exactly.

## Post-launch

Submit `sitemap.xml` in Search Console, then optimise against real query data
(impressions, CTR, average position per page) rather than assumptions — in
particular, whether *North Port* is the right primary market or whether a
neighbouring city is pulling more qualified impressions.

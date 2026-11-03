# Sky Pet Grooming — Website

Site for Sky Pet Grooming, a mobile dog and cat grooming service whose van
comes to customers' doors in San Francisco and on the Peninsula
(skypetgrooming.com). Built with Next.js (App Router), TypeScript and
Tailwind CSS on the same skeleton as the I Love Dogs app: same page anatomy,
schema builders, metadata helper and QA script. It is a **separate,
standalone app** with its own Vercel project (`sky-pet-grooming`, Root
Directory `sky-pet-grooming`).

## Where the facts come from

Every fact is in `lib/site-data.ts`, and each one comes from the owner:

- **Current site (skypetgrooming.com):** luxury mobile grooming at your
  doorstep; licensed, insured and eco-friendly.
- **Logo and van wrap** (photos in the Drive folder): phone numbers
  (415) 754-0813 and (650) 438-3498, the slogans "Paws Down, The Best
  Around!" and "We make it easy, your pet grooming comes to you", and the van
  itself.
- **MoeGo booking page** (`BOOKING_URL`): the service list and how each can
  be booked: dog grooming packages Small to XXLarge (with ear cleaning and a
  nail trim), dog baths by size, cat grooming and cat baths, Skunk-Off for
  dogs and cats, nail trims on their own; add-ons only with a bath or groom
  (de-shedding, detangling, teeth brushing, anal glands) or a bath (face
  trim); a matted-coat surcharge and a travel fee. The page also has prices,
  but they change and only came through partly, so the site never prints
  them: each service page sends people to the booking page for current
  prices. No Yelp or Google Business Profile listing under this name was
  found.
- **Photos:** cats as well as dogs; the van has a bathtub, a grooming table
  and dryers.

The 415/650 numbers, the "peninsula" web address on the van and the San Bruno
address on the MoeGo page put the base in San Bruno.

## Service areas

Twelve town pages at `/mobile-dog-grooming-<city>-ca/`, built from
`serviceAreas` in `lib/site-data.ts` by one template (`app/(site)/[area]/`,
prebuilt with `generateStaticParams`; any other slug is a 404), plus a hub at
`/service-area/`. The list was chosen by Tongfluence with this rule: every city
within about a **20-minute off-peak drive** of San Bruno whose **median
household income is middle class or higher** (Pew: at least two-thirds of the
US median, about $52,400; all twelve also clear two-thirds of the Bay Area
median, about $93,000).

| Area | Median household income (ACS 2019-23) | Est. drive |
| --- | --- | --- |
| San Bruno | $135,976 | base |
| South San Francisco | $135,909 | ~5 min |
| Millbrae | $157,567 | ~6 min |
| Brisbane | $151,593 | ~10 min |
| Burlingame | $168,832 | ~10 min |
| Colma | $121,488 | ~10 min |
| Hillsborough | $250,001+ | ~12 min |
| Pacifica | $156,819 | ~12 min |
| Daly City | $119,570 | ~12 min |
| San Mateo | $152,669 | ~15 min |
| Foster City | $193,633 | ~18 min |
| San Francisco (south and west) | $141,446 | ~10-20 min |

Left out as over 20 minutes: Belmont, San Carlos, Redwood City, Half Moon Bay,
Montara. Drive times are estimates from distance (no maps service was
reachable from the build environment); confirm them with the owner. Income is
only a selection rule and never appears on the site; QA fails if it does.
San Francisco's page names only its southern and western neighborhoods, since
the north-east of the city is beyond 20 minutes.

To add or drop an area, edit `serviceAreas` (and `AREAS` in `scripts/qa.mjs`).

Not on the site because none is verified: prices, hours, street address,
staff names, years in business, ratings, reviews, awards. `scripts/qa.mjs`
fails if any creep in.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: hero with Book + Call, photo strip, services, the van, how it works, trust points, FAQ excerpt |
| `/mobile-pet-grooming/` | Services hub (Service schema with the service catalog), the van, service areas, cat grooming |
| `/mobile-pet-grooming/<service>/` | 10 service pages (single-service Service schema): full dog grooming, dog bath, cat grooming, Skunk-Off, nail trimming, and the add-ons de-shedding, detangling, teeth brushing, face trim, anal gland expression |
| `/service-area/` | Hub linking every service-area page |
| `/mobile-dog-grooming-<city>-ca/` | 12 town pages (Service schema scoped to the city, breadcrumb Home > Service Areas > city) |
| `/gallery/` | All 39 owner photos: dogs, cats, the van and team (ImageGallery schema) |
| `/blog/` | Blog index: service guides, then area posts |
| `/blog/<slug>/` | 18 posts (BlogPosting schema): one guide per service, one post per service area |
| `/about/` | About |
| `/faq/` | FAQ (FAQPage schema, identical to visible text) |

`/book/` was an on-site request form for a short time and is now a temporary
redirect to the MoeGo page, so any old links still reach booking.

## Blog

`lib/blog-data.ts` holds 18 posts as content blocks, rendered by
`app/(site)/blog/[slug]/` (prebuilt; unknown slugs 404), the same pattern as
the Bow Wags blog:

- **Six service guides,** one per service on the MoeGo page: what a mobile
  groom involves, cat grooming, de-shedding, detangling vs shave-down, nail
  trims, anal glands. Each service card on the site links to its guide.
- **Twelve area posts,** one per service area, pairing a real local detail
  (Sign Hill foxtails, Pacifica beaches, Daly City fog, Burlingame doodles...)
  with general pet-care advice. Each links to its town page, and each town
  page shows its post.

Posts only state verified facts about the business (the van, the services,
booking, the phone number). Health advice is general and points to the vet
for anything medical. All posts are dated 2026-11-02. When adding a post,
also add its slug to `SERVICE_POSTS` or `AREA_POSTS` in `scripts/qa.mjs`.

## Prices

Only prices confirmed from the owner's MoeGo page are published, in
`confirmedPrices` and `fees` (`lib/site-data.ts`): nail trim $50 first pet /
$25 second, detangling $30, face trim $20, teeth brushing $10, matted coat
$30, travel fee $20. They were read from search results on 2026-11-02 (the
page itself was not reachable from the build environment), so re-check them
against the live MoeGo page. Grooming packages, baths, cat grooming,
Skunk-Off, de-shedding and anal glands are not priced yet; their pages send
people to the booking page. QA fails on any other dollar amount, so add new
prices to `confirmedPrices` and to `PRICES` in `scripts/qa.mjs` together.

## Type

Same pairing as the Pampered Puppies site, loaded in `app/layout.tsx` with
`next/font` (self-hosted at build, no requests to Google): Playfair Display
for headings, Inter for body text, IBM Plex Mono for eyebrow labels.

## Conversion

- **Book Online** (pink, the van's colour) opens the MoeGo page in a new tab;
  **Call (415) 754-0813** sits beside it. Both are in the hero, the header,
  every page's CTAs, the closing band, and a sticky bar on mobile.
- Clicks send `book_click` and `call_click` events to Vercel Analytics and
  `window.dataLayer` (`lib/track.ts`). Bookings themselves live in MoeGo.

## Photos and logo

- Source: the owner's Google Drive folder "Sky Pet Grooming" (42 files, 2
  exact duplicates skipped).
- `public/photos/<slug>.webp`: each photo at 1280px wide, rotated upright,
  with EXIF (including GPS) stripped. `lib/photos.ts` lists them with alt
  text and tags. Pages render them through `components/Pic.tsx`
  (`next/image`), which serves right-sized AVIF/WebP; `next.config.ts` only
  allows `/photos/**` and the logo files to be optimized.
- `public/logo.png`: the logo without its phone line, transparent background
  (header and footer). `public/logo-full.png`: the full logo (schema).
- `app/icon.png` / `app/apple-icon.png`: the navy paw from the logo.
- `app/opengraph-image.jpg`: the van, for link previews.

## Local development and QA

```bash
cd sky-pet-grooming
npm install
npm run dev          # http://localhost:3000

npm run build && npx next start -p 3100 &
QA_BASE=http://localhost:3100 CHROMIUM_PATH=/path/to/chromium npm run qa
```

`npm run qa` (`scripts/qa.mjs`) checks: banned claims, titles, descriptions,
H1s, canonicals, JSON-LD placement and contents, sitemap and robots, every
internal link and anchor, orphan pages, every booking link being the MoeGo
URL in a new tab, every tel link being one of the two numbers, the `/book/`
redirect, Book Online and Call both in the first 390×844 viewport, the sticky
bar, overflow at 320/390/1280, tap targets, third-party requests, and every
image loading with alt text through `next/image`, with all 39 photos on
`/gallery/`. Screenshots go to `qa/`.

## Needs owner input

1. **Service areas:** confirm the twelve towns and the drive-time cut-off.
2. **Prices and hours,** if they want them on the site.
3. **Website on the van:** the van says skypetgroomingspapeninsula.com, not
   skypetgrooming.com. Confirm which domain this site goes on, and redirect
   the other to it.
4. **Instagram:** the van has an Instagram badge; the handle would go in the
   footer and the schema's `sameAs`.
5. **Reviews** they are happy to quote, for a Reviews section.
6. DNS access for the domain, to point it at the Vercel project.

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
- **MoeGo booking page** (`BOOKING_URL`): the service list (dog grooming,
  de-shedding, detangling, nail trimming, anal gland expression).
- **Photos:** cats as well as dogs; the van has a bathtub, a grooming table
  and dryers.

The 415/650 numbers, the "peninsula" web address on the van and the San Bruno
address on the MoeGo page put the service area in San Francisco and on the
Peninsula. Individual cities are not confirmed, so there are no town pages.

Not on the site because none is verified: prices, hours, street address,
staff names, years in business, ratings, reviews, awards. `scripts/qa.mjs`
fails if any creep in.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: hero with Book + Call, photo strip, services, the van, how it works, trust points, FAQ excerpt |
| `/mobile-pet-grooming/` | Services (Service schema with the service catalog), the van, service area, cat grooming |
| `/gallery/` | All 39 owner photos: dogs, cats, the van and team (ImageGallery schema) |
| `/about/` | About |
| `/faq/` | FAQ (FAQPage schema, identical to visible text) |

`/book/` was an on-site request form for a short time and is now a temporary
redirect to the MoeGo page, so any old links still reach booking.

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

1. **Service area:** which cities or neighbourhoods they cover, to add town
   pages (the biggest local-SEO gain left).
2. **Prices and hours,** if they want them on the site.
3. **Website on the van:** the van says skypetgroomingspapeninsula.com, not
   skypetgrooming.com. Confirm which domain this site goes on, and redirect
   the other to it.
4. **Instagram:** the van has an Instagram badge; the handle would go in the
   footer and the schema's `sameAs`.
5. **Reviews** they are happy to quote, for a Reviews section.
6. DNS access for the domain, to point it at the Vercel project.

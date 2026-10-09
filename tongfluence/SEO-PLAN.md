# Tongfluence — search-intent plan

The analysis behind the current URL set. **Read this before adding a
page.** Every page on this site has to answer six questions; if it can't,
it doesn't get built.

## The rule

> One primary search intent → one best page.

Two pages chasing one intent compete with each other and neither wins.
That is the single most common self-inflicted SEO problem, and it is
cheaper to avoid now than to fix with redirects later.

## Page-by-page

| URL | Primary query | Intent | Business purpose | Links out to |
| --- | --- | --- | --- | --- |
| `/` | dog groomer marketing (brand + offer) | Commercial | Establish the entity, show proof, state the offer, convert | All six commercial pages, case studies, book |
| `/dog-groomer-marketing` | dog groomer marketing | Informational → commercial | Topical hub for the whole subject | SEO, GBP, websites, reviews, leads, case studies |
| `/dog-groomer-seo` | dog groomer SEO | Commercial investigation | Prove we understand grooming search specifically | GBP, websites, how-to-rank guide, case studies |
| `/dog-groomer-website-design` | dog groomer website design | Commercial | Sell the website as an SEO/conversion asset | Website examples, case studies, SEO, leads |
| `/google-business-profile-for-dog-groomers` | google business profile for dog groomers | Informational-commercial | Sell the fastest-moving component | Reviews, SEO, how-to-rank guide |
| `/dog-grooming-lead-generation` | dog grooming lead generation | Commercial | Own the "more customers" intent, framed as appointments not traffic | SEO, websites, reviews, marketing |
| `/dog-groomer-review-management` | dog groomer review management | Commercial-informational | Sell the review system and establish it is policy-safe | GBP, leads, marketing |
| `/case-studies` | dog grooming marketing case studies | Evaluation | Proof hub | Every case study, every commercial page |
| `/case-studies/[slug]` | brand + "case study" | Evaluation | First-party experience, per business type | Websites, GBP, SEO, hub |
| `/resources` | — (hub, not built to rank) | Navigational | Route readers up to commercial pages | Both resources, GBP, leads |
| `/resources/how-to-rank-dog-grooming-business-on-google` | how to rank dog grooming business on google | Informational, DIY | Capture the DIY searcher and be genuinely useful | GBP, websites, reviews, SEO |
| `/resources/dog-grooming-website-examples` | dog grooming website examples | Informational | The original-data asset; a competitor can't reproduce it | Website design, case studies, SEO |
| `/blog` | — (hub) | Navigational | Hold the short question-shaped articles; route each reader to the commercial page that owns their intent | Every post, both guides, marketing, case studies |
| `/blog/how-to-get-more-dog-grooming-appointments` | how to get more dog grooming appointments | Informational, list | The "more appointments" cluster: nine actions in order | Leads, GBP, reviews, how-to-rank guide |
| `/blog/best-dog-groomer-marketing-service` | best dog groomer marketing service | Commercial investigation | Buyer's guide: checklist, red flags, questions, how to compare quotes; Tongfluence as one option | Marketing, case studies, testimonials, about |
| `/blog/dog-grooming-marketing-ideas` | dog grooming marketing ideas | Informational, list | Seventeen ideas in four tiers, ranked by booked appointments | Marketing, leads, GBP, how-to-rank guide |
| `/blog/dog-groomer-marketing-cost` | dog groomer marketing cost | Commercial investigation | The five pricing models and cost per booked appointment; our price stated plainly | Marketing, best-service post, FAQ, book |
| `/blog/google-ads-for-dog-groomers` | google ads for dog groomers | Informational-commercial | Local Services Ads vs search ads; what to have in place first; we run both | Leads, GBP, Facebook-ads post, marketing |
| `/blog/facebook-ads-for-dog-groomers` | facebook ads for dog groomers | Informational-commercial | When social ads work and when they waste money; search first | Marketing, Google-ads post, website design, book |
| `/blog/mobile-dog-grooming-marketing` | mobile dog grooming marketing | Informational | The mobile-specific problem: service-area profile, a page per town, the van | Pet Spa Luxe case study, website design, GBP, SEO |
| `/blog/how-to-get-dog-grooming-clients-starting-out` | how to get dog grooming clients | Informational, new business | First clients in order, without buying leads | GBP, reviews, website design, how-to-rank guide |
| `/blog/fill-last-minute-grooming-openings` | how to fill last minute grooming openings | Informational, operational | Cancellation list, the text, reminders, deposits | More-appointments post, GBP, leads, website design |
| `/blog/dog-grooming-referral-program` | dog grooming referral program | Informational, ideas | Referral rewards done simply; the referral/review line | Reviews, more-appointments post, GBP, leads |
| `/about` | — (trust) | Navigational | Why the specialisation exists; the constraints we work under | Case studies, marketing, book |
| `/testimonials` | — (trust) | Evaluation | Client messages quoted word for word with the original screenshots, and the one measured result | Case studies, book |
| `/faq` | — (objections) | Pre-decision | Seven video answers to what groomers say before a call, then every written answer, grouped | Book |
| `/video/[slug]` | — (video indexing) | Navigational | One watch page per Wistia video (the explainer and the seven FAQ answers): player first, H1 = video title, transcript from Wistia captions, VideoObject pointing at itself. Google indexes a video only where it is the main content; the embeds on `/`, `/book` and `/faq` point `mainEntityOfPage` here | Home, FAQ, book |
| `/book` | — (conversion) | Transactional | The one dominant conversion action for the whole site | — |
| `/privacy`, `/terms` | — | Utility | Required trust pages, written from what the code and offer actually do | — |

## Cannibalization analysis

Checked pairwise before publishing. Three overlaps were real at launch and
were resolved by **not building the second page**; the blog later took one
of them on with a distinct intent, noted below:

| Considered | Conflicts with | Resolution |
| --- | --- | --- |
| `/resources/how-to-get-more-dog-grooming-clients` | `/dog-grooming-lead-generation` | Originally not published. Now covered by `/blog/how-to-get-more-dog-grooming-appointments`, which is an informational action list (what a groomer does) rather than the commercial page's service framing (the six-step path and what we do about it). Each links to the other. |
| `/blog/best-dog-groomer-marketing-service` | `/dog-groomer-marketing` | Kept distinct: the hub explains the subject; the post is a buyer's guide for comparing providers, with Tongfluence as one option run through the same checklist. |
| `/blog/google-ads-for-dog-groomers`, `/blog/facebook-ads-for-dog-groomers` | `/dog-groomer-marketing` (channels table) | Kept distinct: the hub compares channels in one table; each post covers one ad platform in depth. Neither commercial page targets an ads query. |
| `/blog/mobile-dog-grooming-marketing` | `/dog-groomer-website-design` (salon vs mobile) | Kept distinct: the website page covers site structure; the post covers the whole mobile marketing problem, profile and route included, and links to the Pet Spa Luxe case study. |
| `/resources/dog-grooming-seo-keywords` | `/dog-groomer-seo` (partly) | Deferred. A keyword page is only worth publishing with real volume and query data behind it, and there is no exported Search Console dataset yet. |
| `/resources/google-business-profile-categories-dog-groomers` | `/google-business-profile-for-dog-groomers` | Not published. Google's category list changes and is only authoritative inside the profile's own picker; the GBP page covers the category model and cites Google's docs. |

Overlaps that were kept, and how they are kept distinct:

- **`/` vs `/dog-groomer-marketing`** — the homepage sells the offer and
  leads with proof; the pillar explains the subject and routes outward. The
  homepage does not attempt to cover the channel comparison; the pillar
  does not repeat the pricing breakdown beyond one block.
- **`/dog-groomer-seo` vs `/resources/how-to-rank...`** — the commercial
  page is the mechanics and the service (two ranking systems, technical
  requirements, the monthly method). The resource is an ordered
  do-it-yourself checklist. Different intent, different format, mutually
  linked.
- **`/dog-groomer-website-design` vs `/resources/dog-grooming-website-examples`**
  — the commercial page is the service; the resource is the evidence and
  holds the dataset. Each links to the other rather than restating it.
- **`/dog-groomer-seo` vs `/dog-grooming-lead-generation`** — ranking
  versus what happens after the ranking. The lead page deliberately does
  not explain how to rank; it explains the six-step path and where it
  leaks.

## Deliberately not built

**No location pages.** No `/dog-groomer-marketing-miami`,
`/dog-groomer-seo-chicago` or similar. Tongfluence serves grooming
businesses remotely and nationally; a page per city would have nothing
unique to say and would be doorway SEO. If future Search Console data ever
shows real demand for a specific market *and* there is something genuinely
distinct to say about it, revisit — but "it might help SEO" is not a
reason to create a page.

## Internal linking

```
                          HOMEPAGE
                              |
                    DOG GROOMER MARKETING  (hub)
          ________________|________________________
         |         |          |          |         |
        SEO       GBP     WEBSITES    REVIEWS    LEADS
         |_________|__________|__________|_________|
                              |
                        CASE STUDIES  <-->  RESOURCES
                              |
                            BOOK
```

Every commercial page links to at least three siblings and to the case
studies. Every case study links back to the commercial pages covering the
work it describes. Every resource links up to the commercial page that
owns its intent. **There are no orphan pages** — verified by crawling the
production build; every URL in the sitemap has inbound internal links.

Anchor text is descriptive and varied ("optimizing your Google Business
Profile", "dog grooming website design", "getting more grooming clients"),
never "click here", and never the same exact-match phrase on every link to
a given page.

## Technical baseline (verified on the production build)

- 31 indexable URLs; sitemap and crawl agree exactly, in both directions.
- Every page: 200, unique title (≤61 chars), unique meta description
  (≤161 chars), exactly one `<h1>`, self-referencing canonical, no
  accidental `noindex`, valid JSON-LD.
- Canonicals, sitemap `<loc>` entries and schema URLs all pass through
  `canonicalUrl()` in `lib/schema.tsx`, so they are byte-identical.
- No heading-level jumps on any page.
- `/api/` disallowed in robots.txt; nothing else is blocked.
- 404s return a real 404 status with useful links out — no soft 404s.
- All pages are statically prerendered except the lead POST handler.
- ~7.6 KB gzipped CSS, self-hosted preloaded fonts, logo artwork served
  through next/image at 56 KB for the whole set.
- Third-party scripts: Vercel Analytics, plus Wistia on the homepage only.
  The Wistia player loads with next/script `lazyOnload`, so it is fetched
  after the page is interactive rather than competing with it, and its
  container reserves a locked 16:9 box showing the video's own poster —
  measured CLS from the embed is 0 at both 390px and 1280px.

## The post-launch loop

Do **not** add a page a week. Do one evidence-based improvement at a time.

1. Connect Search Console, submit the sitemap, verify indexing.
2. Wait ~28 days before reading anything into the data. Longer if
   impression volume is low.
3. Then, monthly, read the performance report and act on whichever of
   these applies:

| Signal | Action |
| --- | --- |
| High impressions, low CTR | Rewrite the title and meta description to match the query. |
| Position ~4–20 | Strengthen the existing page: intent match, depth, proof, more internal links pointing at it. |
| A real query with no good matching page | Consider a new page — and run it through the cannibalization check above first. |
| Two pages competing for one query | Merge or differentiate. Update this document. |
| Barely any data | Do nothing dramatic. Over-reacting to noise makes sites worse. |

4. When a page has no visibility, no unique intent, no links and no
   conversion value, improve it, merge it, redirect it or remove it. Do
   not keep weak pages forever.

Whenever a page is added, removed or re-pointed, **update the tables in
this file in the same commit.** A stale intent map is how cannibalization
gets back in.

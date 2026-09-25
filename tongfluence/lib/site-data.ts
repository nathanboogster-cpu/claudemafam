// ---------------------------------------------------------------------------
// TONGFLUENCE — single source of truth for every fact published on this site.
// Nothing factual should be hardcoded in a page; add it here first.
//
// PROVENANCE RULES
//   Every claim below is either (a) a statement of Tongfluence's own offer and
//   process, or (b) a fact verifiable from the client builds that live in this
//   monorepo as sibling directories (pet-spa-luxe/, bark-and-bork-mobile-pet-
//   spa/, sittin-pretty-pet-grooming/, flos-happy-clipper/, bow-wags/,
//   groomer-on-call/, and the Pampered Puppies app at the repo root).
//
//   Client-side facts (page counts, service pages, service-area pages,
//   article counts, schema types) were counted directly from those builds —
//   see lib/client-builds.ts for the per-build numbers and how each was
//   derived, so any future reader can re-verify them.
//
//   NOT PUBLISHED ANYWHERE ON THIS SITE: search rankings, traffic, call
//   volume, lead counts, revenue, review-count growth, or any other
//   performance metric. None of that has been measured and exported yet, so
//   none of it is asserted. See README "Open items before launch".
// ---------------------------------------------------------------------------

// The site's own origin, used for canonicals, OG URLs, the sitemap and every
// schema @id. Resolved in this order:
//
//   1. NEXT_PUBLIC_SITE_URL — an explicit override once a real domain exists.
//   2. The Vercel project's production domain. Vercel sets
//      VERCEL_PROJECT_PRODUCTION_URL on every deployment, and it becomes the
//      custom domain automatically once one is attached — so canonicals follow
//      the real domain with no config change.
//   3. localhost, for a local `next build` outside Vercel.
//
// This deliberately does NOT hardcode a guessed *.vercel.app host: a guessed
// hostname makes every canonical, OG URL and sitemap entry point at a 404.
function vercelProductionOrigin(): string | undefined {
  const host =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return host ? `https://${host}` : undefined;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? vercelProductionOrigin() ?? "http://localhost:3000";

export const business = {
  name: "Tongfluence",
  // One sentence, used verbatim in Organization schema, the footer, and the
  // meta description fallback. Keeping a single canonical description keeps
  // the entity consistent across the site (and legible to AI search systems).
  entityDescription:
    "Tongfluence is a marketing and SEO service for dog grooming businesses. It builds SEO-optimized grooming websites, optimizes Google Business Profiles, runs a review-request system, and keeps improving all three based on real search performance — for $297 per month, cancel anytime.",
  shortDescription: "Marketing and SEO built only for dog grooming businesses.",
  category: "Marketing and SEO service for dog grooming businesses",
  // Tongfluence works with grooming businesses remotely across the US. There
  // is no walk-in office, so no street address is published here or in schema.
  servesRemotely: true,
  areaServed: "United States",
  // Where lead-form submissions are emailed (app/api/lead/route.ts). Set via
  // env so a real inbox never has to be committed to the repo.
  leadNotificationEmail: process.env.LEAD_NOTIFICATION_EMAIL ?? "",
  // Brand tagline, exactly as it appears on the logo lockup. Used as brand
  // furniture in the footer and the share image — deliberately not as page
  // copy, since the site's body writing is specific to grooming rather than
  // general growth language.
  tagline: "Grow your business. Dominate your market.",
  // NOTE: the logo is not configured here. lib/brand-logo.ts detects the real
  // artwork at public/images/logo.(png|jpg|svg) at build time and reads its
  // dimensions from the file, so adding the logo needs no code change at all.
  // A public address visitors can write to if the form fails. Empty until a
  // real inbox is confirmed — the booking page and the form's error message
  // both check for it rather than telling people to "email us directly" with
  // no address to email. See README "Open items before launch".
  publicContactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
} as const;

// ---------------------------------------------------------------------------
// OFFER — the actual, current offer. Do not add an inclusion that is not
// really delivered every month, and do not add a guarantee.
// ---------------------------------------------------------------------------
export const offer = {
  priceDisplay: "$297",
  priceNumeric: "297",
  priceCurrency: "USD",
  billingPeriod: "month",
  priceLine: "$297/month",
  commitment: "Cancel anytime. No contract, no setup fee.",
  // Four components, delivered as one system. Each maps to a commercial page.
  inclusions: [
    {
      number: "01",
      title: "An SEO-built grooming website",
      summary:
        "A fast, mobile-first website structured for how people actually search for grooming — a page per service, a page per area you serve, and a clear path to the phone.",
      href: "/dog-groomer-website-design",
      linkLabel: "How we build grooming websites",
    },
    {
      number: "02",
      title: "Google Business Profile optimization",
      summary:
        "Categories, services, service areas, description, photos and NAP set up properly, then kept current — because for most groomers the map pack is the first thing a customer sees.",
      href: "/google-business-profile-for-dog-groomers",
      linkLabel: "What we do to your Google profile",
    },
    {
      number: "03",
      title: "A review request system",
      summary:
        "A repeatable way to ask every happy client for a Google review after their appointment, so your profile keeps earning fresh reviews instead of going quiet.",
      href: "/dog-groomer-review-management",
      linkLabel: "How the review system works",
    },
    {
      number: "04",
      title: "Ongoing SEO, based on your real search data",
      summary:
        "Search Console is connected on day one. Every month we read the queries you actually appeared for and change the site to match them — not a content calendar written in advance.",
      href: "/dog-groomer-seo",
      linkLabel: "How the ongoing SEO works",
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// THE EXPLAINER VIDEO
//
// Hosted on Wistia. Only the media ID lives here — every URL is derived from
// it, so swapping the video is a one-line change.
//
// NOTE: no VideoObject structured data is emitted for this. Google's
// VideoObject requires a name, description, thumbnail and upload date, and
// inventing an upload date to satisfy it would break the same rule the rest of
// this site is built on. Supply the video's real title, description, upload
// date and duration and it becomes worth adding — see README.
// ---------------------------------------------------------------------------
export const explainerVideo = {
  wistiaMediaId: "9stn7byinq",
  // The video's real title, as it is named in Wistia.
  //
  // NOTE — this title makes a performance claim ("2-3X"), and no other claim
  // like it appears anywhere on this site. /about states plainly that nothing
  // unmeasured is published. Publishing this title puts the two in conflict,
  // visibly, on the same domain. It is used here because it is the asset's
  // real name; see README "Open items" for the choice that needs making.
  title: "How We Get 2-3X More Dog Grooming Appointments",
  // What the video is, in our own words, for the VideoObject description.
  description:
    "A walkthrough of how Tongfluence works with a dog grooming business: the Google Business Profile setup, the website build, the review system, and the ongoing optimization after launch.",
  // Verified from the Wistia library listing.
  uploadDate: "2026-07-20",
  durationSeconds: 422,
  durationLabel: "7 min",
  // ISO 8601 duration for schema.org.
  get durationIso() {
    const m = Math.floor(this.durationSeconds / 60);
    const sec = this.durationSeconds % 60;
    return `PT${m}M${sec}S`;
  },
  // 16:9. Used to reserve the space before the player defines, so the embed
  // cannot shift the page.
  aspectRatio: 16 / 9,
  get swatchUrl() {
    return `https://fast.wistia.com/embed/medias/${this.wistiaMediaId}/swatch`;
  },
  get embedUrl() {
    return `https://fast.wistia.net/embed/iframe/${this.wistiaMediaId}`;
  },
  // Plain link for the no-JavaScript case, where the web component never
  // upgrades and the visitor would otherwise be left staring at a blur.
  get fallbackUrl() {
    return `https://fast.wistia.net/embed/iframe/${this.wistiaMediaId}`;
  },
} as const;

// ---------------------------------------------------------------------------
// HEADLINE RESULT
//
// The explainer video is titled "How We Get 2-3X More Dog Grooming
// Appointments". That is a performance claim, and this site's whole argument
// is that it does not make performance claims it cannot show. So the claim
// gets published the way every other number here is: with the metric, the
// sample, the period, the source and the method beside it.
//
// This is null until that evidence exists. While it is null:
//   * the claim appears only as the video's own title, nowhere in page copy;
//   * /about and /case-studies keep their "we publish nothing unmeasured"
//     wording, which is true.
// The moment it is filled in, the claim renders beneath the video with its
// evidence, and both of those pages soften their wording automatically — so
// the site can never end up asserting one thing and doing another.
//
// TO FILL IN, every field is required. If one of them cannot be answered
// honestly, the claim is not ready to publish.
// ---------------------------------------------------------------------------
export type HeadlineResult = {
  /** The claim in plain words, e.g. "2-3x more booked appointments". */
  claim: string;
  /** Exactly what was counted, e.g. "booked appointments per month". */
  metric: string;
  /** Which businesses, and how many, e.g. "4 of 7 clients". */
  sample: string;
  /** Over what window, e.g. "the 90 days before vs. the 90 days after launch". */
  period: string;
  /** Where the number came from, e.g. "the client's booking system". */
  source: string;
  /** How it was calculated, and what it excludes. */
  method: string;
};

// ---------------------------------------------------------------------------
// GOOGLE BUSINESS PROFILE CALLS — FEBRUARY vs MARCH 2026
//
// The first measured result on this site. Two screenshots of Google Business
// Profile's own "Calls made from your Business Profile" report for one client:
// the month before the profile work and the month after. Numbers are read
// straight off the screenshots, which are published beside them
// (public/images/proof/), so a reader can check the reading.
//
// Sample size is one business. The site says so wherever the figure appears —
// a real number from one client, shown with its evidence, is worth more than a
// rounded claim from none, and it is honest only if the "one" is visible.
//
// `clientName` is empty until the client has agreed to be named; the figure is
// published as "one client" until then.
// ---------------------------------------------------------------------------
export const gbpCallsProof = {
  metric: "Calls made from your Business Profile",
  source: "Google Business Profile → Performance → Calls",
  // Carlos has agreed to be named. He is a Tongfluence client from before the
  // builds catalogued in lib/client-builds.ts, which is why he is not in that
  // table — the table counts websites built in this repo, and his was not.
  clientName: "Carlos",
  // Appointments actually booked, as reported from his booking software. This
  // is the number the video title is about, so it matters more than calls —
  // and it is held to the same standard. `period` is required before it
  // renders: "around 23" over an unstated window is not a publishable figure,
  // it is a recollection. Fill in the window it covers and it appears.
  appointments: {
    count: 23,
    approximate: true,
    source: "MoeGo (the client's booking and scheduling software)",
    // The same window as the calls figure.
    period: "in March 2026",
  },
  before: { label: "February 2026", calls: 24, days: 28, image: "/images/proof/gbp-calls-february-2026.jpg" },
  after: { label: "March 2026", calls: 77, days: 31, image: "/images/proof/gbp-calls-march-2026.jpg" },
  get multiple() {
    return this.after.calls / this.before.calls;
  },
  // February is three days shorter than March, so the per-day rate is the
  // fairer comparison and is shown alongside the raw totals.
  get perDayBefore() {
    return this.before.calls / this.before.days;
  },
  get perDayAfter() {
    return this.after.calls / this.after.days;
  },
  get perDayMultiple() {
    return this.perDayAfter / this.perDayBefore;
  },
} as const;

export const headlineResult: HeadlineResult | null = {
  claim: "3× more calls from Google, in one month",
  metric: "Calls placed from the Google Business Profile — the tap-to-call button on the listing itself.",
  sample: "Carlos, one Tongfluence client. This is a single business, not an average across clients.",
  period: "February 2026 (24 calls, 28 days) against March 2026 (77 calls, 31 days).",
  source: "Google Business Profile's own Performance report. The two screenshots are published beside the figure.",
  method:
    "Raw monthly totals as Google reports them: 77 ÷ 24 = 3.2×. Because February is three days shorter, the per-day rate is also shown: 0.86 → 2.48 calls a day, 2.9×. Calls are counted by Google, not by us, and nothing is excluded. In the same month, around 23 appointments were added to his calendar in MoeGo — an approximate count from the booking software, shown separately and labelled as such.",
};

// ---------------------------------------------------------------------------
// ROUTES — every indexable URL on this site. Object.values() feeds the
// sitemap, so anything added here must be a real, canonical, 200 page.
// ---------------------------------------------------------------------------
export const PATHS = {
  home: "/",
  marketing: "/dog-groomer-marketing",
  seo: "/dog-groomer-seo",
  websiteDesign: "/dog-groomer-website-design",
  gbp: "/google-business-profile-for-dog-groomers",
  leadGeneration: "/dog-grooming-lead-generation",
  reviews: "/dog-groomer-review-management",
  caseStudies: "/case-studies",
  resources: "/resources",
  about: "/about",
  book: "/book",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const caseStudyPath = (slug: string) => `/case-studies/${slug}`;
export const resourcePath = (slug: string) => `/resources/${slug}`;

export type NavItem = { label: string; href: string; description?: string };

// The six commercial pages, in the order they appear in the funnel. Used by
// the header dropdown, the footer, and the "what we do" grid on the homepage.
export const serviceNav: NavItem[] = [
  {
    label: "Dog Groomer Marketing",
    href: PATHS.marketing,
    description: "The whole picture: how grooming businesses get found and booked.",
  },
  {
    label: "Dog Groomer SEO",
    href: PATHS.seo,
    description: "Ranking a grooming business in local and organic search.",
  },
  {
    label: "Grooming Website Design",
    href: PATHS.websiteDesign,
    description: "What a grooming website needs to rank and convert.",
  },
  {
    label: "Google Business Profile",
    href: PATHS.gbp,
    description: "Categories, services, photos and reviews for the map pack.",
  },
  {
    label: "Review Management",
    href: PATHS.reviews,
    description: "Earning a steady flow of real Google reviews.",
  },
  {
    label: "Lead Generation",
    href: PATHS.leadGeneration,
    description: "Turning searches into booked appointments.",
  },
];

export const proofNav: NavItem[] = [
  { label: "Case Studies", href: PATHS.caseStudies, description: "Real grooming builds, broken down." },
  { label: "Resources", href: PATHS.resources, description: "Guides written from real grooming builds." },
  { label: "About", href: PATHS.about, description: "Why Tongfluence only works with groomers." },
];

// ---------------------------------------------------------------------------
// WHO THIS IS FOR — used on the homepage and the marketing pillar. These are
// the grooming business types represented in the real client builds below.
// ---------------------------------------------------------------------------
export const audienceTypes = [
  {
    title: "Grooming salons",
    body: "A shop customers drive to. Your Google Business Profile and your service pages have to agree on what you do and where you are.",
  },
  {
    title: "Mobile groomers",
    body: "You groom at the customer's door. No storefront means the map pack behaves differently, and your site has to carry the service-area work.",
  },
  {
    title: "Solo groomers and small teams",
    body: "One or two chairs, a full book some weeks and gaps in others. The goal is a steadier flow of the right enquiries, not more of everything.",
  },
  {
    title: "Grooming plus daycare or boarding",
    body: "More than one service means more than one search intent. Each one needs its own page rather than a single blended 'Services' list.",
  },
];

// ---------------------------------------------------------------------------
// FAQ — answered strictly from the real offer. Do not add a question whose
// honest answer is not yet known.
// ---------------------------------------------------------------------------
export const faqs = [
  {
    question: "What does Tongfluence actually do?",
    answer:
      "Tongfluence builds and runs the Google side of a dog grooming business: an SEO-built website, an optimized Google Business Profile, a system for requesting reviews after appointments, and ongoing optimization driven by your Search Console data. It is one monthly service, not four separate projects.",
  },
  {
    question: "Is Tongfluence only for dog groomers?",
    answer:
      "Yes. Every build, every page template and every piece of research is for grooming businesses — salons, mobile groomers, and groomers who also offer daycare or boarding. That is the whole point: the work is already shaped like your business before we start.",
  },
  {
    question: "How much does it cost?",
    answer:
      "$297 per month. That covers the website, the Google Business Profile work, the review system and the ongoing optimization. There is no setup fee and no separate build fee.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. It is month to month and you can cancel anytime. Nothing is locked in for six or twelve months.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "Billing stops and the ongoing work stops. Your Google Business Profile is yours and stays yours — it is your profile, we only work inside it. Your domain is yours. Tell us where you want the website content and we will hand over what we have so you can take it elsewhere.",
  },
  {
    question: "Do I own my website?",
    answer:
      "The domain is registered to you and the content is yours. While you are a client the site is hosted and maintained as part of the monthly service, which is what keeps it fast and lets us keep changing it.",
  },
  {
    question: "I already have a website. Do I need a new one?",
    answer:
      "Not always. If your current site is fast, has a real page for each service and each area you serve, and clearly gets people to the phone, the better move is usually to keep it and fix what is missing. If it is a one-page template, a builder site that loads slowly on a phone, or a site with no service pages at all, rebuilding is usually faster than patching. We will tell you which one you are.",
  },
  {
    question: "I already have a Google Business Profile. Is that enough?",
    answer:
      "Having one is not the same as it being set up well. The common gaps are the wrong primary category, an empty services list, no service areas on a mobile business, a handful of photos from three years ago, and no recent reviews. Those are fixable, and fixing them is usually the fastest-moving part of the first month.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "Google Business Profile changes can move within weeks. Website and organic search changes take longer — a first useful read on Search Console data is usually around 28 days after launch, and a fair judgement of direction takes a few months. Anyone promising page one in 30 days is guessing.",
  },
  {
    question: "What exactly do you do every month?",
    answer:
      "Read your Search Console and Google Business Profile data, pick the change most likely to win you appointments, make it, and measure it. In practice that is things like rewriting a page that is getting impressions but no clicks, adding a service page for a query you are already appearing for, adding a service area, refreshing profile photos, or chasing reviews. One evidence-based improvement at a time, not a blog post because it is Tuesday.",
  },
  {
    question: "Does this work for mobile grooming?",
    answer:
      "Yes, and several of the builds in our case studies are mobile-only. Mobile grooming needs a different structure: no published street address, service areas rather than one location, and area pages that explain where the van actually goes.",
  },
  {
    question: "Do you run ads too?",
    answer:
      "No. Tongfluence is the organic side only — website, Google Business Profile, reviews and search. Plenty of groomers run ads as well; they answer a different question, and we do not charge you for something we are not doing.",
  },
  {
    question: "How does the review system work?",
    answer:
      "You get a simple, repeatable way to ask every client for a Google review after their appointment, using your profile's own review link. We never filter customers by how happy they seem, never offer anything in exchange for a review, and never write reviews. All three break Google's policies and put the profile at risk.",
  },
];

// ---------------------------------------------------------------------------
// OBJECTIONS — the honest answers to the things groomers actually push back
// on. Used on the offer/booking pages rather than the general FAQ.
// ---------------------------------------------------------------------------
export const objections = [
  {
    question: "Why is it only $297? What is the catch?",
    answer:
      "There isn't one, but there is a reason. Tongfluence does one thing for one industry. There is no new discovery process for each client, no bespoke design phase, no account manager layer — the grooming website structure, the profile checklist and the review flow are already built. A general agency charges more because it starts from scratch every time. We don't.",
  },
  {
    question: "I've tried marketing before and it didn't work.",
    answer:
      "Usually one of three things happened: it was social media posting with no search component, it was a website with no service or area pages, or it was an agency that had never worked with a grooming business and treated you like a restaurant. Ask us what we would change about your setup before you pay anything — the answer will tell you whether this is different.",
  },
  {
    question: "Do I need to run ads as well?",
    answer:
      "Ads and organic answer different questions. Ads buy you traffic today and stop the day you stop paying. Google Business Profile and search build an asset that keeps working. If you need appointments this week, ads are faster. If you want a channel that compounds, this is the one. Many groomers end up doing both.",
  },
  {
    question: "I'm already busy. Why would I bother?",
    answer:
      "Being busy and being booked with the right work are different. Most groomers have weeks with gaps and a waiting list for the wrong services. Being easy to find raises the floor, and it means you are not dependent on one referral source.",
  },
  {
    question: "How much of my time does this take?",
    answer:
      "Roughly an onboarding call, a list of your services and prices, access to your Google Business Profile, and photos when you have them. After that the monthly work does not need you unless something about the business changes.",
  },
];

// ---------------------------------------------------------------------------
// FOUNDER — Tongfluence is run by one person who does the work. The specific
// personal details (name, photo, bio) are deliberately NOT invented here.
// Fill this in before launch and the About page's founder section renders
// itself; until then the page simply omits it rather than publishing a
// placeholder identity. See README "Open items before launch".
// ---------------------------------------------------------------------------
export const founder: {
  name: string | null;
  role: string;
  photo: string | null;
  bio: string[];
  sameAs: string[];
} = {
  name: null,
  role: "Founder",
  photo: null,
  bio: [],
  sameAs: [],
};

// Verified social/profile URLs for schema.org sameAs. Empty until real,
// confirmed profiles exist — an unverified sameAs is worse than none.
export const socialProfiles: { label: string; url: string }[] = [];

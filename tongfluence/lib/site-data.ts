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
//   PERFORMANCE FIGURES: exactly one is published — one client's calls from
//   Google, February vs March 2026 (gbpCallsProof below), shown with the two
//   Google reports it was read from. Nothing else about rankings, traffic,
//   leads or revenue is asserted anywhere. See README "Open items".
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
    "Tongfluence helps dog grooming businesses get found on Google. It builds the website, sets up the Google Business Profile, runs a system for asking for reviews, and keeps improving all three from real search data. It costs $297 a month, and you can cancel any time.",
  shortDescription: "Marketing and SEO, only for dog grooming businesses.",
  category: "Marketing and SEO service for dog grooming businesses",
  // Tongfluence works with grooming businesses remotely across the US. There
  // is no walk-in office, so no street address is published here or in schema.
  servesRemotely: true,
  areaServed: "United States",
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
        "A fast website built the way people search. One page for each service. One page for each town you serve. And a phone number that is easy to tap.",
      href: "/dog-groomer-website-design",
      linkLabel: "How we build grooming websites",
    },
    {
      number: "02",
      title: "Google Business Profile optimization",
      summary:
        "We set up your categories, services, service areas, photos and hours the right way. Then we keep them current. For most groomers, the map is the first place a customer sees you.",
      href: "/google-business-profile-for-dog-groomers",
      linkLabel: "What we do to your Google profile",
    },
    {
      number: "03",
      title: "A review request system",
      summary:
        "A simple way to ask every happy client for a Google review after their visit. Your profile keeps getting new reviews instead of going quiet.",
      href: "/dog-groomer-review-management",
      linkLabel: "How the review system works",
    },
    {
      number: "04",
      title: "Ongoing SEO, based on your real search data",
      summary:
        "We connect Google Search Console on day one. Each month we look at what people searched to find you. Then we change the site to match. No content calendar written in advance.",
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
    "A walk through how Tongfluence works with a dog grooming business. The Google profile setup, the website build, the review system, and the monthly work after launch.",
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
// PRE-CALL FAQ VIDEOS
//
// Short videos that answer the questions people have before their call. Each
// video's title in Wistia IS the question, word for word, and the video is
// the answer. Listed in the order they were supplied.
//
// `question` stays null until the real Wistia title is filled in. An item with
// no question does not render: a guessed question over someone else's answer
// would be worse than no item. `uploadDate` and `durationSeconds` are optional
// and only used for VideoObject structured data, which is emitted per video
// once both are known.
// ---------------------------------------------------------------------------
export type PreCallVideo = {
  wistiaMediaId: string;
  question: string | null;
  uploadDate?: string;
  durationSeconds?: number;
};

export const preCallVideos: PreCallVideo[] = [
  // Titles, lengths and dates from the Wistia folder listing (7 media, all
  // created Jul 20, 2026), matched to the embeds in the order supplied.
  { wistiaMediaId: "6ic5brm3xd", question: "Not sure if I need this, I’ll think about it later.", uploadDate: "2026-07-20", durationSeconds: 51 },
  { wistiaMediaId: "r9yvjigysf", question: "I’m mobile with no storefront, does this even apply to me?", uploadDate: "2026-07-20", durationSeconds: 27 },
  { wistiaMediaId: "amtcdc194e", question: "I already show up when people search for me on Google.", uploadDate: "2026-07-20", durationSeconds: 27 },
  { wistiaMediaId: "hmj7r3bvbd", question: "What if I get too busy and my quality slips?", uploadDate: "2026-07-20", durationSeconds: 25 },
  { wistiaMediaId: "gm32vc9733", question: "My calendar’s already full, why do I need more leads?", uploadDate: "2026-07-20", durationSeconds: 31 },
  { wistiaMediaId: "lwdv0uut95", question: "I already get all my clients from referrals, the vet down the street sends me people.", uploadDate: "2026-07-20", durationSeconds: 34 },
  { wistiaMediaId: "gx15ov061y", question: "I’ve paid for marketing before and got nothing out of it.", uploadDate: "2026-07-20", durationSeconds: 49 },
];

// Every pre-call video shares Wistia's aspect ratio from the supplied embeds.
export const preCallVideoAspect = 1.8604651162790697;

export const wistiaSwatchUrl = (id: string) => `https://fast.wistia.com/embed/medias/${id}/swatch`;
export const wistiaEmbedUrl = (id: string) => `https://fast.wistia.net/embed/iframe/${id}`;

// ---------------------------------------------------------------------------
// CLIENT TESTIMONIALS
//
// Quoted word for word from real client messages, from the "Testimonials
// Tongfluence" Drive folder. Each one carries the message it came from as a
// cropped screenshot in public/images/testimonials/, so a reader can see the
// original. Dates come from the messages themselves.
//
// Dave's email also discussed staff and another vendor; those lines are
// covered in the screenshot and cut from the quote (marked with an ellipsis).
// No Review or AggregateRating markup is emitted for these: Google restricts
// self-published review markup, and these are messages, not reviews.
// ---------------------------------------------------------------------------
export type Testimonial = {
  quote: string;
  /** First name of the owner who sent the message. */
  name: string;
  /** The client build this owner's business is (lib/client-builds.ts), which
   *  supplies the business name, market and case-study link. */
  buildSlug: string;
  channel: "Email" | "Text message";
  /** ISO date of the client's message. */
  date: string;
  dateLabel: string;
  image: { src: string; width: number; height: number; alt: string };
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nothing but good vibes on the new website. \u2026 I wanted to thank you for how painless you have made this process!",
    name: "Dave",
    buildSlug: "bow-wags",
    channel: "Email",
    date: "2026-09-13",
    dateLabel: "September 2026",
    image: {
      src: "/images/testimonials/bow-wags-dave-email.jpg",
      width: 900,
      height: 657,
      alt: "Dave's email: \u201cHey Nathaniel, nothing but good vibes on the new website. I wanted to thank you for how painless you have made this process! Dave.\u201d The middle of the email was about other things, so it is covered.",
    },
  },
  {
    quote: "Yes, thank God! We\u2019re getting some leads.",
    name: "Jakeline",
    buildSlug: "pet-spa-luxe",
    channel: "Text message",
    date: "2026-09-21",
    dateLabel: "September 2026",
    image: {
      src: "/images/testimonials/pet-spa-luxe-jakeline-text.jpg",
      width: 900,
      height: 761,
      alt: "Text thread with Jakeline of Pet Spa Luxe. Tongfluence: \u201cJust checking in and seeing if you wanted anything added, we\u2019ve been at work and are seeing people coming to the site and booking!\u201d Jakeline: \u201cHi, how are you? Yes, thank God! We\u2019re getting some leads. I wanted to ask you to remove Sunday from the business hours on the website because we are closed on Sundays. Thank you!\u201d",
    },
  },
  {
    quote: "Definitely we are getting calls from the website",
    name: "Ellen",
    buildSlug: "pampered-puppies",
    channel: "Text message",
    date: "2026-08-29",
    dateLabel: "August 2026",
    image: {
      src: "/images/testimonials/pampered-puppies-ellen-text.jpg",
      width: 900,
      height: 450,
      alt: "Text thread with Ellen of Pampered Puppies, Saturday August 29. Tongfluence: \u201cMy tracker is showing that we\u2019re starting to get a few more calls from the website, just want to confirm that\u2019s true?\u201d Ellen: \u201cDefinitely we are getting calls from the website.\u201d",
    },
  },
];

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
// The moment it is filled in, the claim becomes the heading of the homepage's
// "Measured" section, and both of those pages soften their wording — so
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
  metric: "Calls made from the Google Business Profile. That is the tap-to-call button on the listing.",
  sample: "Carlos, one Tongfluence client. This is one business, not an average.",
  period: "February 2026 (24 calls, 28 days) against March 2026 (77 calls, 31 days).",
  source: "Google's own report for the profile. The two screenshots are shown next to the numbers.",
  method:
    "Monthly totals as Google reports them: 77 ÷ 24 = 3.2×. February is three days shorter, so we also show calls per day: 0.86 to 2.48 a day, or 2.9×. Google counts the calls, not us. Nothing is left out. In the same month, about 23 appointments were added to his calendar in MoeGo. That is a rough count from his booking software, shown on its own and marked as such.",
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
  testimonials: "/testimonials",
  resources: "/resources",
  blog: "/blog",
  about: "/about",
  faq: "/faq",
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
    label: "Marketing overview",
    href: PATHS.marketing,
    description: "The big picture: how groomers get found and booked.",
  },
  {
    label: "SEO",
    href: PATHS.seo,
    description: "How a grooming business ranks on Google.",
  },
  {
    label: "Website design",
    href: PATHS.websiteDesign,
    description: "What a grooming website needs to get found and get calls.",
  },
  {
    label: "Google Business Profile",
    href: PATHS.gbp,
    description: "Categories, services, photos and reviews for the map.",
  },
  {
    label: "Reviews",
    href: PATHS.reviews,
    description: "Getting a steady flow of real Google reviews.",
  },
  {
    label: "Lead generation",
    href: PATHS.leadGeneration,
    description: "Turning searches into booked appointments.",
  },
];

export const proofNav: NavItem[] = [
  { label: "Case Studies", href: PATHS.caseStudies, description: "Real grooming websites we built, explained." },
  { label: "Testimonials", href: PATHS.testimonials, description: "What clients said, with their real messages." },
  { label: "Resources", href: PATHS.resources, description: "Guides based on the sites we have built." },
  { label: "About", href: PATHS.about, description: "Why we only work with groomers." },
];

// ---------------------------------------------------------------------------
// WHO THIS IS FOR — used on the homepage and the marketing pillar. These are
// the grooming business types represented in the real client builds below.
// ---------------------------------------------------------------------------
export const audienceTypes = [
  {
    title: "Grooming salons",
    body: "A shop that customers drive to. Your Google profile and your website need to say the same things about what you do and where you are.",
  },
  {
    title: "Mobile groomers",
    body: "You groom at the customer's home. With no shop, the map works differently. Your website has to do the work of telling Google where you go.",
  },
  {
    title: "Solo groomers and small teams",
    body: "One or two chairs. Some weeks are full and some have gaps. The goal is a steady flow of the right calls, not more of everything.",
  },
  {
    title: "Grooming plus daycare or boarding",
    body: "More than one service means people search for more than one thing. Each one needs its own page, not one mixed 'Services' list.",
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
      "We run the Google side of your grooming business. We build a website that can be found. We set up your Google Business Profile the right way. We give you a system for asking for reviews. And we do monthly work based on your real search data. It is one monthly service, not four separate jobs.",
  },
  {
    question: "Is Tongfluence only for dog groomers?",
    answer:
      "Yes. Everything we build is for grooming businesses. That means salons, mobile groomers, and groomers who also offer daycare or boarding. That is the whole point. The work already fits your business before we start.",
  },
  {
    question: "How much does it cost?",
    answer:
      "$297 a month. That covers the website, the Google profile work, the review system, and the monthly search work. There is no setup fee and no build fee.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. It is month to month. You can cancel any time. Nothing locks you in for six or twelve months.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "Billing stops and the work stops. Your Google profile is yours and stays yours. Your domain is yours. Tell us where you want the website content and we will hand it over.",
  },
  {
    question: "Do I own my website?",
    answer:
      "The domain is in your name and the content is yours. While you are a client, we host and maintain the site as part of the monthly service. That keeps it fast and lets us keep improving it.",
  },
  {
    question: "I already have a website. Do I need a new one?",
    answer:
      "Not always. Your site may be fast, with a real page for each service and each town. If it gets people to the phone, the better move is to keep it and fix what is missing. If it is a one-page site, or loads slowly on a phone, or has no service pages, a rebuild is usually faster. We will tell you which one you have.",
  },
  {
    question: "I already have a Google Business Profile. Is that enough?",
    answer:
      "Having one is not the same as having it set up well. The common gaps are simple. The wrong main category. An empty services list. No service areas for a mobile business. Old photos. No recent reviews. All of that can be fixed. It is usually the fastest part of the first month.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "Profile changes can show results within weeks. Website changes take longer. The first useful search data comes about 28 days after launch. A fair read on progress takes a few months. Anyone promising page one in 30 days is guessing.",
  },
  {
    question: "What exactly do you do every month?",
    answer:
      "We read your search data and your profile data. We pick the one change most likely to bring you appointments. We make it and we measure it. That might mean rewriting a page that gets seen but not clicked. Or adding a page for a service people already search for. Or adding a town, updating photos, or chasing reviews. One change at a time, based on real data.",
  },
  {
    question: "Does this work for mobile grooming?",
    answer:
      "Yes. Several of the sites we built are for mobile groomers. Mobile grooming needs a different setup. No street address on the site. Service areas instead of one location. And a page for each town the van goes to.",
  },
  {
    question: "Do you run ads too?",
    answer:
      "Yes. We run Google Local Services Ads and Facebook and Instagram ads for groomers who want them. The $297 a month covers the four parts described on this site. If you want ads too, book a call. We will talk through whether they make sense for you and how we would set them up.",
  },
  {
    question: "How does the review system work?",
    answer:
      "You get a simple way to ask every client for a Google review after their visit, using your own review link. We never pick and choose who gets asked. We never offer anything for a review. We never write reviews. All three break Google's rules and put your profile at risk.",
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
      "There is no catch, but there is a reason. We do one thing for one industry. There is no long research phase for each client. No custom design phase. No account manager in the middle. The website structure, the profile checklist and the review system are already built. A general agency charges more because it starts from zero every time. We don't.",
  },
  {
    question: "I've tried marketing before and it didn't work.",
    answer:
      "Usually one of three things happened. It was social media posts with no search work. Or it was a website with no service or town pages. Or it was an agency that had never worked with a groomer and treated you like a restaurant. Ask us what we would change about your setup before you pay anything. The answer will show you whether this is different.",
  },
  {
    question: "Do I need to run ads as well?",
    answer:
      "Ads and search do different jobs. Ads bring you traffic today and stop the day you stop paying. Your profile and your website keep working after the work is done. If you need appointments this week, ads are faster. If you want something that grows over time, this is it. Many groomers do both. We run both. We offer Google Local Services Ads and Facebook and Instagram ads if you want them. Ask about them when you book a call.",
  },
  {
    question: "I'm already busy. Why would I bother?",
    answer:
      "Being busy and being booked with the right work are not the same. Most groomers have weeks with gaps, and a waiting list for the wrong services. Being easy to find raises your floor. It also means you do not depend on one source of referrals.",
  },
  {
    question: "How much of my time does this take?",
    answer:
      "About one call to start, a list of your services and prices, access to your Google profile, and photos when you have them. After that, the monthly work does not need you unless something about your business changes.",
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

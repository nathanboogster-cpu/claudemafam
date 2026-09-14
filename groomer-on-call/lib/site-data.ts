// ---------------------------------------------------------------------------
// GROOMER ON CALL — single source of truth for every business fact on this
// site. Nothing factual should be hardcoded in a page; add it here first.
//
// PROVENANCE OF EVERY FACT BELOW
//   [BRIEF]      Client-supplied Verified Business Record for this build.
//   [GBP]        Google Business Profile (category + service list), supplied
//                in the Verified Business Record.
//   [PUBLIC]     Independently corroborated in public directory data.
//   [UNVERIFIED] NOT published anywhere on this site. Listed here only so the
//                gap is visible. See README "Open items before launch".
//
// This app is a standalone sibling to the other, unrelated client apps in
// this monorepo. It has its own package.json, its own Vercel project, and
// its own domain. It must never import from, or be merged with, any of them.
// ---------------------------------------------------------------------------

// The site's own origin, used for canonicals, OG URLs, the sitemap and every
// schema @id. Resolved in this order:
//
//   1. NEXT_PUBLIC_SITE_URL — an explicit override, if one is ever set.
//   2. The Vercel project's production domain. Vercel sets
//      VERCEL_PROJECT_PRODUCTION_URL on every deployment (previews included),
//      and it becomes the custom domain automatically once one is attached —
//      so canonicals follow the real domain with no config change. The
//      NEXT_PUBLIC_ copy is preferred so this stays correct even if SITE_URL
//      is ever read from a client component; the bare name is the fallback.
//   3. localhost, for a local `next build` outside Vercel.
//
// This deliberately does NOT hardcode a *.vercel.app host. An earlier version
// did, guessing "groomer-on-call.vercel.app" — which is not the hostname
// Vercel actually assigned, so every canonical, OG URL and sitemap entry on
// the deployed site pointed at a URL that 404s.
function vercelProductionOrigin() {
  const host =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return host ? `https://${host}` : undefined;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? vercelProductionOrigin() ?? "http://localhost:3000";

export const business = {
  // [BRIEF]
  name: "Groomer On Call",
  shortName: "Groomer On Call",
  // [BRIEF] 100% mobile. There is no customer-facing salon, and no street
  // address is published anywhere on this site or in its structured data.
  isMobileOnly: true,
  tagline: "Mobile Pet Grooming — We Come To You",
  // [BRIEF] Canonical phone.
  phoneDisplay: "(941) 336-2838",
  phoneHref: "tel:+19413362838",
  // [BRIEF] Verified current Facebook profile.
  facebookUrl: "https://www.facebook.com/profile.php?id=61577229631078",
} as const;

// Schema.org / Google structured-data guidelines want E.164 for `telephone`,
// not the display-formatted "(941) 336-2838" used in visible copy.
export const telephoneE164 = business.phoneHref.replace("tel:", "");

// ---------------------------------------------------------------------------
// MARKET
//
// What is actually established:
//   - [BRIEF]  The business and this phone number are associated with North
//              Port, Florida. The brief flags this as historical and asks
//              that it be treated as requiring confirmation.
//   - [PUBLIC] The number (941) 336-2838 is independently listed against
//              North Port, FL 34291 in public business-directory data.
//   - [PUBLIC] A "Groomer on Call" community page is geo-anchored to Port
//              Charlotte, FL — the adjacent city, ~10 minutes away.
//   - Area code 941 covers Sarasota / Charlotte / Manatee counties, FL.
//
// Three independent signals converge on the same small Southwest Florida
// area, so the site is anchored there. What is NOT established is a list of
// specific service-area cities, so NO city landing pages exist and no city
// list is published. `/service-areas` says plainly that coverage depends on
// where you are and to call and ask — see app/(site)/service-areas/page.tsx.
//
// If the client confirms a different primary market, change it here and it
// updates every title, H1, meta description and schema block on the site.
// ---------------------------------------------------------------------------
export const market = {
  city: "North Port",
  state: "FL",
  /** "North Port, FL" — used in titles, H1s and meta descriptions. */
  cityState: "North Port, FL",
  /** Wider, deliberately non-committal region label for body copy. */
  region: "Southwest Florida",
  /** The one nearby city with independent corroboration. */
  nearbyCity: "Port Charlotte",
  /** Flip to true once the client or GBP confirms the current market. */
  confirmed: false,
} as const;

// ---------------------------------------------------------------------------
// HOURS — [UNVERIFIED]. No hours are published on this site and no
// openingHoursSpecification is emitted in schema, because publishing wrong
// hours for a mobile business costs real bookings. Copy says "call to check
// availability" instead. Fill in and set hoursConfirmed = true once known.
// ---------------------------------------------------------------------------
export const hoursConfirmed = false;
export const hoursNote = "Call to check current availability.";

// ---------------------------------------------------------------------------
// SERVICES — exactly the seven services verified on the Google Business
// Profile, and nothing beyond them. [GBP]
//
//   Dog bathing and blow dry        -> /services/dog-bath-and-blow-dry
//   Dog full service grooming       -> /services/mobile-dog-grooming
//   Dog grooming and styling        -> /services/mobile-dog-grooming (same
//                                      search intent as full-service; one
//                                      page owns it, see README)
//   Dog nail trimming               -> /services/dog-nail-trimming
//   Dog ear cleaning                -> supporting service, no standalone page
//   Cat bathing                     -> /services/mobile-cat-bathing
//   Cat ear cleaning                -> /services/mobile-cat-bathing
//
// No pricing appears anywhere on this site — none is verified. [UNVERIFIED]
// ---------------------------------------------------------------------------
export const services = [
  {
    slug: "mobile-dog-grooming",
    name: "Mobile Dog Grooming",
    shortName: "Dog Grooming",
    navLabel: "Mobile Dog Grooming",
    summary:
      "A full-service groom at your home — bath, blow dry, brush-out, haircut and styling, nail trim and ear cleaning.",
    isPrimary: true,
  },
  {
    slug: "dog-bath-and-blow-dry",
    name: "Dog Bath & Blow Dry",
    shortName: "Bath & Blow Dry",
    navLabel: "Dog Bath & Blow Dry",
    summary:
      "A thorough bath and full blow dry for dogs who don't need a haircut — the in-between service that keeps a coat manageable.",
    isPrimary: false,
  },
  {
    slug: "dog-nail-trimming",
    name: "Dog Nail Trimming",
    shortName: "Nail Trimming",
    navLabel: "Dog Nail Trimming",
    summary:
      "A careful nail trim, on its own or as part of a bath or full groom — without a car ride or a waiting room.",
    isPrimary: false,
  },
  {
    slug: "mobile-cat-bathing",
    name: "Mobile Cat Bathing & Ear Cleaning",
    shortName: "Cat Bathing",
    navLabel: "Cat Bathing & Ear Cleaning",
    summary:
      "Bathing and ear cleaning for cats, at home — no carrier, no car ride, no waiting room full of dogs.",
    isPrimary: false,
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

/** GBP service names that are real and offered, but have no standalone page. */
export const supportingServices = [
  {
    name: "Dog Ear Cleaning",
    summary: "Gentle ear cleaning, included in a full groom or added to a bath.",
    onPage: "mobile-dog-grooming" as ServiceSlug,
  },
  {
    name: "Dog Grooming & Styling",
    summary: "Haircut and finish work, part of the full-service groom.",
    onPage: "mobile-dog-grooming" as ServiceSlug,
  },
  {
    name: "Cat Ear Cleaning",
    summary: "Ear cleaning for cats, alongside a bath.",
    onPage: "mobile-cat-bathing" as ServiceSlug,
  },
] as const;

// ---------------------------------------------------------------------------
// ROUTES — every indexable path on the site, in one place, so the sitemap,
// nav, breadcrumbs and internal links can never drift apart.
// ---------------------------------------------------------------------------
export const PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  serviceAreas: "/service-areas",
  faq: "/faq",
  contact: "/contact",
  blog: "/blog",
} as const;

export const servicePath = (slug: ServiceSlug) => `/services/${slug}` as const;
export const blogPostPath = (slug: string) => `/blog/${slug}` as const;

export const getService = (slug: ServiceSlug) => services.find((s) => s.slug === slug)!;

// ---------------------------------------------------------------------------
// POSITIONING — only claims supported by the brief's verified record. The
// brief explicitly rules out "stress-free guaranteed", "anxiety-free",
// "safer than a salon" and "one-on-one" as unverified, so none appear here
// or anywhere in page copy.
// ---------------------------------------------------------------------------
export const mobileBenefits = [
  {
    title: "No Car Ride, No Drop-Off",
    body: "Your pet is groomed where they already live. No crating in the car, no drop-off in the morning, no second trip to pick them up.",
  },
  {
    title: "Grooming Fits Around Your Day",
    body: "You don't have to build a morning around a salon's schedule. Book a time, be home, and the grooming happens while you get on with things.",
  },
  {
    title: "A Familiar Place",
    body: "Grooming happens at your home instead of an unfamiliar building full of other animals — for a lot of pets, that's a meaningfully easier experience.",
  },
  {
    title: "One Groomer, Start To Finish",
    body: "The same person who greets your pet does the bath, the dry and the finish. Nothing gets handed off mid-groom.",
  },
] as const;

// How the service works. Deliberately generic: the brief says not to invent
// an exact booking procedure, so this describes only what is certain.
export const howItWorks = [
  {
    step: 1,
    title: "Call Groomer On Call",
    body: `Call ${business.phoneDisplay} and say what kind of pet you have and what they need — a full groom, a bath, or just a nail trim. We'll confirm whether we reach your address.`,
  },
  {
    step: 2,
    title: "Pick Your Service & Time",
    body: "We'll go over what your pet's coat actually needs and agree on a service and an appointment time that works for you.",
  },
  {
    step: 3,
    title: "We Come To You",
    body: "Your groomer arrives at your home at the agreed time and grooms your pet there. No drop-off, no pick-up, no waiting room.",
  },
] as const;

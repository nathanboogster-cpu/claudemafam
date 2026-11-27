// ---------------------------------------------------------------------------
// CLIENT BUILDS — the real dog grooming websites Tongfluence has built.
//
// HOW THESE NUMBERS WERE DERIVED
//   Each build lives as its own standalone Next.js app. "Indexable pages" is
//   the number of URLs that build's own app/sitemap.ts emits: its core pages,
//   plus one page per service, plus one page per service area, plus one page
//   per article. Counted directly from each build's lib/site-data.ts and
//   lib/blog-data.ts, not estimated.
//
//   The page counts are not a performance claim. What is published there is
//   what was built, which is verifiable by opening the sites.
//
//   `results` is the one place a build carries measured figures. Each line is
//   read from Google Business Profile → Performance or from the build's own
//   click tracking, worded exactly as read, with the period stated. Figures
//   marked ~ are read off Google's monthly chart. Clicks are taps on Call and
//   Book buttons, not confirmed bookings. `screenshots` holds the report
//   images once exported; empty until then, and nothing renders for it.
// ---------------------------------------------------------------------------
import type { ProofScreenshot } from "./proof";

export type BusinessType = "Mobile grooming" | "Grooming salon" | "Salon + mobile" | "Grooming, daycare & boarding";

export type ClientBuild = {
  slug: string;
  name: string;
  market: string;
  region: string;
  /** Two-letter state, kept explicit so counts never depend on parsing `region`. */
  state: string;
  businessType: BusinessType;
  // Only set when the build is confirmed live on the client's own domain.
  // Builds awaiting a domain deliberately have no URL published here rather
  // than a guessed one.
  liveUrl?: string;
  pages: { core: number; services: number; areas: number; articles: number; total: number };
  // The single structural problem this build was shaped around.
  problem: string;
  // Does this build have its own full case study page?
  hasCaseStudy: boolean;
  // Measured results, shown on the case-study card under the page counts.
  // Absent until there is a figure read from a real report.
  results?: { lines: string[]; screenshots: ProofScreenshot[] };
};

export const clientBuilds: ClientBuild[] = [
  {
    slug: "pet-spa-luxe",
    name: "Pet Spa Luxe",
    market: "El Sobrante, CA",
    region: "East Bay / North Bay, California",
    state: "CA",
    businessType: "Mobile grooming",
    liveUrl: "https://petspaluxe.com",
    pages: { core: 10, services: 4, areas: 15, articles: 6, total: 35 },
    problem:
      "A mobile groomer whose van covers six counties, with one page trying to speak to all of them.",
    hasCaseStudy: true,
    results: {
      lines: [
        "~2 → ~17 Google profile actions / month, Jun → Oct 2026",
        "90 call & booking clicks from the website in the last 30 days (16 call · 74 book)",
        "391 call & booking clicks since click tracking began",
      ],
      screenshots: [],
    },
  },
  {
    slug: "sittin-pretty-pet-grooming",
    name: "Sittin' Pretty Pet Grooming",
    market: "Funkstown, MD",
    region: "Washington County / Hagerstown, Maryland",
    state: "MD",
    businessType: "Grooming salon",
    pages: { core: 10, services: 6, areas: 11, articles: 6, total: 33 },
    problem:
      "A salon in a small town whose customers all search for the bigger city next door.",
    hasCaseStudy: true,
  },
  {
    slug: "bark-and-bork-mobile-pet-spa",
    name: "Bark and Bork Mobile Pet Spa",
    market: "Compton, CA",
    region: "Greater Los Angeles, California",
    state: "CA",
    businessType: "Mobile grooming",
    pages: { core: 8, services: 8, areas: 13, articles: 5, total: 34 },
    problem:
      "A mobile spa in the biggest grooming market in the country, with a booking system that had to stay.",
    hasCaseStudy: true,
    results: {
      lines: [
        "0 → ~11 calls / month from Google, Jun → Oct 2026",
        "30 calls and 113 profile actions from Google, Jun–Nov 2026",
      ],
      screenshots: [],
    },
  },
  {
    slug: "flos-happy-clipper",
    name: "Flo's Happy Clipper",
    market: "Eatontown, NJ",
    region: "Monmouth County, New Jersey",
    state: "NJ",
    businessType: "Grooming salon",
    pages: { core: 9, services: 6, areas: 9, articles: 6, total: 30 },
    problem:
      "A long-running salon with real skill in small dogs and breed cuts that the old site never mentioned.",
    hasCaseStudy: false,
  },
  {
    slug: "pampered-puppies",
    name: "Pampered Puppies",
    market: "Victorville, CA",
    region: "Victor Valley, California",
    state: "CA",
    businessType: "Salon + mobile",
    pages: { core: 14, services: 0, areas: 6, articles: 3, total: 23 },
    problem:
      "A grooming business moving off a locked-down website builder without losing the web addresses Google already knew.",
    hasCaseStudy: false,
  },
  {
    slug: "bow-wags",
    name: "Bow Wags",
    market: "Marietta, GA",
    region: "West Cobb County, Georgia",
    state: "GA",
    businessType: "Grooming, daycare & boarding",
    pages: { core: 15, services: 3, areas: 5, articles: 3, total: 26 },
    problem:
      "Three different services, daycare, boarding and grooming, sharing one page and fighting each other.",
    hasCaseStudy: false,
  },
  {
    slug: "groomer-on-call",
    name: "Groomer On Call",
    market: "Mobile service area",
    region: "Southwest Florida",
    state: "FL",
    businessType: "Mobile grooming",
    pages: { core: 7, services: 4, areas: 0, articles: 6, total: 17 },
    problem:
      "A fully mobile groomer with no salon, no street address, and nothing on the web to tie the business to.",
    hasCaseStudy: false,
  },
];

export const getBuild = (slug: string) => clientBuilds.find((b) => b.slug === slug);

export const caseStudyBuilds = clientBuilds.filter((b) => b.hasCaseStudy);

// ---------------------------------------------------------------------------
// AGGREGATE — the first-party dataset behind /resources/dog-grooming-website-
// anatomy. Every figure is the sum of the per-build numbers above; the derived
// getters mean they can never drift out of sync with the table.
// ---------------------------------------------------------------------------
export const buildStats = {
  get siteCount() {
    return clientBuilds.length;
  },
  get totalPages() {
    return clientBuilds.reduce((n, b) => n + b.pages.total, 0);
  },
  get totalServicePages() {
    return clientBuilds.reduce((n, b) => n + b.pages.services, 0);
  },
  get totalAreaPages() {
    return clientBuilds.reduce((n, b) => n + b.pages.areas, 0);
  },
  get totalArticlePages() {
    return clientBuilds.reduce((n, b) => n + b.pages.articles, 0);
  },
  get totalArticles() {
    return clientBuilds.reduce((n, b) => n + b.pages.articles, 0);
  },
  get medianPages() {
    const sorted = clientBuilds.map((b) => b.pages.total).sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
  },
  get mobileCount() {
    return clientBuilds.filter((b) => b.businessType === "Mobile grooming").length;
  },
  // Builds that publish a dedicated page per service under /services/[slug].
  get withServicePages() {
    return clientBuilds.filter((b) => b.pages.services > 0).length;
  },
  // Builds that publish a page per city/area served.
  get withAreaPages() {
    return clientBuilds.filter((b) => b.pages.areas > 0).length;
  },
  get stateCount() {
    return new Set(clientBuilds.map((b) => b.state)).size;
  },
} as const;

// Structured data shipped on every build. Stated as a fact about our own
// work, not as a claim about what Google does with it.
export const schemaTypesShipped = [
  "LocalBusiness",
  "Service",
  "BreadcrumbList",
  "FAQPage",
  "BlogPosting",
] as const;

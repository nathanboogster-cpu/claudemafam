// Central, single source of truth for every verified Bow Wags business fact
// used across this site. Sourced from the client-provided Verified Business
// Record for Bow Wags (Marietta, GA — dog daycare, boarding & grooming),
// cross-checked against public listings (BBB, Yelp, Birdeye) where noted.
// Do not add facts beyond what's listed there — see "Not yet verified" notes
// inline for everything still outstanding.

// This is its own standalone Vercel project/domain (separate from every
// other Tongfluence client app in this monorepo). Set NEXT_PUBLIC_SITE_URL
// once a custom domain (e.g. bowwags.com) is attached; until then this
// falls back to the default Vercel-assigned project URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bow-wags.vercel.app";

export const business = {
  name: "Bow Wags",
  legalName: "Bow Wags, LLC",
  tagline: "Dog Daycare, Boarding & Grooming in Marietta, GA",
  phoneDisplay: "(678) 744-9247",
  // The business also brands its number as (678) 744-WAGS — same digits.
  phoneDisplayWags: "(678) 744-WAGS",
  phoneHref: "tel:+16787449247",
  email: "dave@bowwags.com",
  addressLine1: "1691 Powder Springs Rd SW",
  addressCity: "Marietta",
  addressState: "GA",
  addressZip: "30064",
  get addressFull() {
    return `${this.addressLine1}, ${this.addressCity}, ${this.addressState} ${this.addressZip}`;
  },
  // No-API-key Google Maps embed/link for the homepage map and Contact page.
  get mapsEmbedUrl() {
    return `https://www.google.com/maps?q=${encodeURIComponent(this.addressFull)}&output=embed`;
  },
  get mapsUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.addressFull)}`;
  },
  primaryLocation: "Marietta, GA",
  regionLabel: "West Cobb / West Marietta",
  county: "Cobb County, Georgia",
  yelpUrl: "https://www.yelp.com/biz/bow-wags-marietta-2",
  // Legacy site being replaced by this build.
  legacySiteUrl: "https://www.bowwags.com/",
  // Public review presence is real and strong, but the exact aggregate count
  // varies by platform and by day (Yelp, Google, Birdeye, Facebook each show
  // a different number). Per the verified business record, no single
  // universal count is hardcoded anywhere on this site — see /reviews and
  // the individual platform links for current counts.
  reviewsSummary: "Rated by hundreds of local dog owners across Google, Yelp, and Facebook.",
} as const;

// Real, individually-sourced customer feedback themes found via public
// review platforms (Yelp, Birdeye-aggregated Google reviews) for Bow Wags in
// Marietta, GA. Quotes are used verbatim/near-verbatim where the reviewer's
// own wording was visible; unattributed praise is summarized as a theme
// rather than presented as a fabricated quote. No review count or star
// average is asserted as a fixed, permanent number — see business.reviewsSummary.
export const reviews = [
  {
    text: "By far the friendliest — both for us and our fur babies — cleanest, and offered the most playtime in the area. The staff are all so wonderful and our dogs were thrilled to return after their first visit.",
    source: "Public review",
  },
  {
    text: "In my humble opinion, Bow Wags offers the best dog grooming and boarding in Marietta.",
    source: "Public review",
  },
  {
    text: "I use Bow Wags for drop-in doggie daycare. They're great! I would recommend them.",
    source: "Public review",
  },
  {
    text: "They post pictures very frequently on Facebook, so we knew our dogs were having a great time.",
    source: "Public review",
  },
] as const;

export const hoursConfirmed = true;
export const hours = [
  { day: "Monday", time: "6:30 AM – 6:30 PM" },
  { day: "Tuesday", time: "6:30 AM – 6:30 PM" },
  { day: "Wednesday", time: "6:30 AM – 6:30 PM" },
  { day: "Thursday", time: "6:30 AM – 6:30 PM" },
  { day: "Friday", time: "6:30 AM – 6:30 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
] as const;
export const hoursNote = "Monday–Friday 6:30 AM–6:30 PM, Saturday 8 AM–5 PM, closed Sunday.";

// Schema.org openingHoursSpecification.
export const hoursSchema = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "06:30",
    closes: "18:30",
  },
  {
    dayOfWeek: ["Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
] as const;

// Real facility/dog photos would go here once received from the client —
// see PhotoPlaceholder for how a missing `src` renders an honest, labeled
// placeholder instead of stock photography. None are available yet.
export const photos = {} as Record<string, { src: string; alt: string }>;

export type ServiceSlug = "dog-daycare" | "dog-boarding" | "dog-grooming";

export const services = [
  {
    slug: "dog-daycare" as ServiceSlug,
    name: "Dog Daycare",
    shortName: "Daycare",
    summary:
      "Size-appropriate indoor playrooms plus a secure outdoor playground — fully supervised play for working and busy dog owners.",
    icon: "daycare",
  },
  {
    slug: "dog-boarding" as ServiceSlug,
    name: "Dog Boarding",
    shortName: "Boarding",
    summary:
      "Private indoor wooden suites — no cages — with daycare included in every night's stay.",
    icon: "boarding",
  },
  {
    slug: "dog-grooming" as ServiceSlug,
    name: "Dog Grooming",
    shortName: "Grooming",
    summary: "Full-service grooming for all breeds, call for rates and appointments.",
    icon: "grooming",
  },
] as const;

export const servicePath = (slug: ServiceSlug) => `/${slug}`;

// DAYCARE — current published rates, per the verified business record.
// Marked "current" throughout the UI since these are subject to change.
export const temperamentTest = {
  price: "$30",
  name: "Temperament Test",
  durationNote: "4-hour assessment",
  description:
    "A 4-hour temperament test is required before a dog's first daycare or boarding stay. Call (678) 744-9247 to schedule your dog's assessment.",
} as const;

export const daycarePricing = {
  halfDay: { label: "Half Day", note: "Up to 6 hours", price: "$26" },
  fullDay: { label: "Full Day", note: "Over 6 hours", price: "$39" },
  packages: [
    { label: "5 Half Days", price: "$115" },
    { label: "10 Half Days", price: "$210" },
    { label: "5 Full Days", price: "$180" },
    { label: "10 Full Days", price: "$330" },
    { label: "20 Full Days", price: "$580" },
  ],
  siblingDiscount: "20% off a second package for siblings.",
} as const;

// BOARDING — current published nightly rates, per the verified business record.
export const boardingPricing = {
  tiers: [
    { range: "Nights 1–5", price: "$50", unit: "/night" },
    { range: "Nights 6–10", price: "$45", unit: "/night" },
    { range: "Nights 11+", price: "$39", unit: "/night" },
  ],
  multiDogNote: "Ask about multi-dog discounts.",
  daycareIncludedNote:
    "Boarding includes approximately 12 hours of supervised daycare each day — a dog isn't just kept overnight, they're cared for and played with all day.",
  houseFoodFee: "$2/day if you'd like your dog fed the house food instead of bringing your own.",
  latePickupFee: "$26 daycare charge if picked up after 2 PM on the checkout day.",
} as const;

export const vaccinationRequirements = ["Rabies", "Distemper", "Bordetella"] as const;

export const groomer = {
  name: "Cynthia",
  since: "early 2021",
  background: [
    "Began as a bather in 2010",
    "Started a grooming apprenticeship in 2014",
    "Became a full groomer",
    "Enjoys Malti-Poos, mixed breeds, and deshedding",
    "Enjoys silhouette cuts and works with sporting breeds",
    "Comfortable working with puppies and difficult dogs",
  ],
  philosophy: "Humanity before vanity",
  philosophyExplained:
    "Cynthia prioritizes a dog's safety and well-being before pure aesthetics — a comfortable, low-stress groom matters more than a picture-perfect cut.",
  certifications: ["Pet CPR and First Aid Certified", "Completed Skin and Coat 101 and advanced skin/coat coursework"],
} as const;

export const groomingServices = [
  "Bathing",
  "Full grooming",
  "Haircuts",
  "Nail grinding",
  "Ear cleaning",
  "Teeth cleaning",
  "Deshedding",
  "Coat maintenance",
] as const;

export const groomingEquipment = [
  "Cool-air and force-air drying technology to limit hot-air exposure",
  "Handheld drying for the face and head",
  "Hydraulic grooming tables",
  "Professional-grade grooming products selected for coat and skin needs",
] as const;

export const daycarePlayrooms = [
  {
    title: "Small / Toy Dog Playrooms",
    body: "Indoor play space sized and grouped for small and toy breeds.",
  },
  {
    title: "Medium Dog Playrooms",
    body: "A separate indoor group for medium-size dogs, matched by size and temperament.",
  },
  {
    title: "Large Dog Playrooms",
    body: "Indoor space for large dogs, grouped separately from smaller playmates.",
  },
] as const;

export const daycareOutdoor = [
  "Secure outdoor playground",
  "Separate small-dog and large-dog outdoor play areas",
  "Fully supervised play, indoors and out",
] as const;

export const boardingFeatures = [
  {
    title: "Private Indoor Wooden Suites",
    body: "Custom wooden cabins divided by picket-style fencing — a private sleeping space with an open, community feel, not a traditional cage.",
  },
  {
    title: "No Cages",
    body: "Dogs can see and smell their boarding playmates through the picket-style dividers between suites, while still resting in their own private space overnight.",
  },
  {
    title: "Bring the Comforts of Home",
    body: "Owners are welcome to bring their dog's favorite bed, blanket, toy, and their own food to help keep mealtime consistent.",
  },
] as const;

// Trust pillars used in the homepage trust bar / stat band. Every claim here
// is drawn directly from the verified business record — no fabricated
// staffing ratios, no invented awards.
export const trustPillars = [
  { value: "Fully", label: "Supervised Play" },
  { value: "Indoor +", label: "Outdoor Play" },
  { value: "Private", label: "Boarding Suites" },
  { value: "Full-Service", label: "Grooming" },
] as const;

export const differentiators = [
  {
    title: "Clean, Safe, Fully Supervised",
    body: "Dogs are grouped into size-appropriate playrooms and supervised at every stage of indoor and outdoor play.",
  },
  {
    title: "No Cages at Boarding",
    body: "Boarding dogs sleep in private wooden suites divided by picket-style fencing, not traditional cages.",
  },
  {
    title: "Daycare Included in Boarding",
    body: "Every overnight stay includes approximately 12 hours of supervised daycare, not just a place to sleep.",
  },
  {
    title: "Real, Experienced Groomer",
    body: "Cynthia has groomed at Bow Wags since early 2021, with a grooming background dating back to 2010 and a safety-first philosophy.",
  },
] as const;

export const requirementsSummary = [
  {
    title: "Temperament Test",
    body: "A 4-hour temperament test ($30) is required before a dog's first daycare or boarding stay. Call (678) 744-9247 to schedule.",
  },
  {
    title: "Vaccinations",
    body: `Current Rabies, Distemper, and Bordetella vaccinations are required for daycare and boarding.`,
  },
] as const;

export type NavItem = { label: string; href: string };

export const PATHS = {
  home: "/",
  about: "/about",
  dogDaycare: "/dog-daycare",
  dogBoarding: "/dog-boarding",
  dogGrooming: "/dog-grooming",
  rates: "/rates",
  reservations: "/reservations",
  requirements: "/requirements",
  gallery: "/gallery",
  reviews: "/reviews",
  faq: "/faq",
  contact: "/contact",
} as const;

export const mainNav: NavItem[] = [
  { label: "Daycare", href: PATHS.dogDaycare },
  { label: "Boarding", href: PATHS.dogBoarding },
  { label: "Grooming", href: PATHS.dogGrooming },
  { label: "Rates", href: PATHS.rates },
  { label: "Gallery", href: PATHS.gallery },
  { label: "About", href: PATHS.about },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: PATHS.home },
  ...mainNav,
  { label: "Reviews", href: PATHS.reviews },
  { label: "Reservations", href: PATHS.reservations },
  { label: "Requirements", href: PATHS.requirements },
];

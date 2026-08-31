// Central, single source of truth for every verified Sittin' Pretty Pet
// Grooming business fact used across this site. Sourced from the client's
// Verified Business Record (Funkstown, MD) plus confirmed public directory
// data. Do not add facts beyond what's listed there — see the "Not yet
// verified" notes throughout for everything still outstanding before launch.

// Own standalone Vercel project/domain (a sibling to the other unrelated
// apps in this monorepo). Set NEXT_PUBLIC_SITE_URL once a custom domain is
// attached; until then this falls back to the default Vercel-assigned
// project URL.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sittin-pretty-pet-grooming.vercel.app";

export const business = {
  name: "Sittin' Pretty Pet Grooming",
  // Public directories/signage also refer to the business as just "Sittin'
  // Pretty" — used in shorter contexts (nav logo, footer) where the full
  // name would be cramped.
  shortName: "Sittin' Pretty",
  tagline: "Pet Grooming in Funkstown & the Hagerstown Area",
  phoneDisplay: "(301) 790-0466",
  phoneHref: "tel:+13017900466",
  addressLine1: "6 N Westside Ave",
  addressCity: "Funkstown",
  addressState: "MD",
  addressZip: "21734",
  county: "Washington County",
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
  // Same live Google Maps search, keyed to the business name — used for the
  // "find/read reviews on Google" links. No exact star rating or review
  // count is hardcoded anywhere on this site (see reviews page note below);
  // this links out to the real, current listing instead.
  get googleSearchUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${this.name} ${this.addressFull}`,
    )}`;
  },
  primaryLocation: "Funkstown, MD",
  secondaryMarket: "Hagerstown, MD",
  // Real logo, supplied by the client.
  logo: "/images/logo.jpg",
} as const;

// HOURS — verified business hours. Monday and Sunday closed.
export const hoursConfirmed = true;
export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "8:00 AM – 4:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 4:00 PM" },
  { day: "Thursday", time: "8:00 AM – 4:00 PM" },
  { day: "Friday", time: "8:00 AM – 4:00 PM" },
  { day: "Saturday", time: "8:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
] as const;
export const hoursNote = "Tuesday–Friday 8 AM–4 PM, Saturday 8 AM–2 PM. Closed Sunday & Monday.";

// Schema.org openingHoursSpecification.
export const hoursSchema = [
  { dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "16:00" },
  { dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" },
] as const;

// Real client/salon photos, supplied directly by the client. A couple of
// photo slots (salon interior, storefront) still render an honest,
// aspect-locked placeholder (see components/PhotoPlaceholder.tsx) since no
// real photo of those exists yet — add one here when it's supplied.
export const photos = {
  blackLabSmiling: {
    src: "/images/gallery-black-lab-smiling.jpg",
    alt: "Happy black Labrador retriever wearing a bandana after grooming at Sittin' Pretty Pet Grooming",
  },
  tricolorDogBandana: {
    src: "/images/gallery-tricolor-dog-bandana.jpg",
    alt: "Tri-color dog wearing a paw-print bandana after grooming at Sittin' Pretty Pet Grooming",
  },
  tanChihuahua: {
    src: "/images/gallery-tan-chihuahua.jpg",
    alt: "Freshly groomed tan Chihuahua mix at Sittin' Pretty Pet Grooming",
  },
  sheepdogBandana: {
    src: "/images/gallery-sheepdog-bandana.jpg",
    alt: "Groomed sheepdog-mix wearing a bandana at Sittin' Pretty Pet Grooming",
  },
  tanTerrierMix: {
    src: "/images/gallery-tan-terrier-mix.jpg",
    alt: "Freshly groomed tan terrier mix at Sittin' Pretty Pet Grooming",
  },
  grayWhiteShihTzu: {
    src: "/images/gallery-gray-white-shihtzu.jpg",
    alt: "Groomed gray and white Shih Tzu at Sittin' Pretty Pet Grooming",
  },
  seniorBlackDog: {
    src: "/images/gallery-senior-black-dog.jpg",
    alt: "Senior dog with a graying muzzle wearing a bow after grooming at Sittin' Pretty Pet Grooming",
  },
  creamFluffyDog: {
    src: "/images/gallery-cream-fluffy-dog.jpg",
    alt: "Groomed cream-colored fluffy dog wearing a bandana at Sittin' Pretty Pet Grooming",
  },
  whiteFluffyPuppy: {
    src: "/images/gallery-white-fluffy-puppy.jpg",
    alt: "Small white fluffy dog freshly groomed at Sittin' Pretty Pet Grooming",
  },
} as const;

export const services = [
  {
    slug: "dog-grooming",
    name: "Dog Grooming",
    shortName: "Dog Grooming",
    summary:
      "Full-service dog grooming — bathing, brushing, and a breed-appropriate haircut or trim.",
    isFlagship: true,
  },
  {
    slug: "dog-bath-and-brush",
    name: "Dog Bath & Brush",
    shortName: "Dog Bath & Brush",
    summary:
      "A thorough bath and brush-out for dogs who need a refresh between full grooms, or owners who just want the bath.",
    isFlagship: false,
  },
  {
    slug: "cat-grooming",
    name: "Cat Grooming",
    shortName: "Cat Grooming",
    summary: "Professional cat grooming for owners who'd rather leave it to an experienced groomer.",
    isFlagship: false,
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

// Verified, safe-to-state differentiators — sourced from the business's
// long operating history and the recurring themes in its public customer
// feedback (friendly staff, personalized service, comfort with nervous/
// senior/large dogs, repeat customers). Nothing here is a specific
// itemized service claim beyond what's confirmed.
export const differentiators = [
  {
    title: "An Established Local Grooming Salon",
    body: "Sittin' Pretty has been grooming pets in the Funkstown area for decades — not a national chain, not a new startup.",
  },
  {
    title: "Personal, One-on-One Attention",
    body: "Local pet owners keep coming back year after year for the same personalized, friendly service.",
  },
  {
    title: "Comfortable With Nervous, Senior & Large Dogs",
    body: "Pet owners regularly mention how comfortable their nervous, senior, or large-breed dogs are during and after their groom.",
  },
  {
    title: "Dog & Cat Grooming, All in One Place",
    body: "Full-service dog grooming plus professional cat grooming — no need to look for a separate groomer.",
  },
] as const;

// Punchy, verified trust stats for the homepage/stat band — every value is
// a confirmed fact already used elsewhere on the site, not a new claim.
export const trustStats = [
  { value: "Decades", label: "Serving Local Pets" },
  { value: "Dog & Cat", label: "Grooming" },
  { value: "Funkstown", label: "Local Salon" },
  { value: "5 Days", label: "Open Tue–Sat" },
] as const;

export type AreaSlug = "funkstown-md" | "hagerstown-md" | "halfway-md";

// Only legitimate, hand-written service-area pages — one per confirmed
// area, each with a genuinely different angle (physical home base,
// nearby larger search market, verified surrounding service area). No
// city-name-swap template, and no pages beyond what's actually verified.
export const serviceAreas: { city: string; state: string; slug: AreaSlug; description: string }[] = [
  {
    city: "Funkstown",
    state: "MD",
    slug: "funkstown-md",
    description: "Sittin' Pretty's home — our physical grooming salon.",
  },
  {
    city: "Hagerstown",
    state: "MD",
    slug: "hagerstown-md",
    description: "Just outside the Hagerstown city line, a few minutes from downtown.",
  },
  {
    city: "Halfway",
    state: "MD",
    slug: "halfway-md",
    description: "A short drive from our Funkstown salon, on the west side of Hagerstown.",
  },
];

export type NavItem = { label: string; href: string };

export const PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  serviceAreas: "/service-areas",
  gallery: "/gallery",
  reviews: "/reviews",
  faq: "/faq",
  contact: "/contact",
} as const;

export const servicePath = (slug: ServiceSlug) => `${PATHS.services}/${slug}`;
export const areaPath = (slug: AreaSlug) => `${PATHS.serviceAreas}/${slug}`;

export const serviceNav: NavItem[] = services.map((s) => ({
  label: s.shortName,
  href: servicePath(s.slug),
}));

export const areaNav: NavItem[] = serviceAreas.map((a) => ({
  label: `${a.city}, ${a.state}`,
  href: areaPath(a.slug),
}));

export const mainNav: NavItem[] = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Services", href: PATHS.services },
  { label: "Service Areas", href: PATHS.serviceAreas },
  { label: "Gallery", href: PATHS.gallery },
  { label: "Reviews", href: PATHS.reviews },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

export const footerNav: NavItem[] = [...mainNav, ...serviceNav, ...areaNav];

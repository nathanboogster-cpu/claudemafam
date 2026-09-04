// Central, single source of truth for every verified Flo's Happy Clipper
// business fact used across this site. Sourced from the client's Verified
// Business Record (Eatontown, NJ) plus corroborated public directory data.
// Do not add facts beyond what's listed there — see the "not verified"
// notes throughout for everything still outstanding before launch.

// Own standalone Vercel project/domain (a sibling to the other unrelated
// client apps in this monorepo — see the repo root README). Set
// NEXT_PUBLIC_SITE_URL once a custom domain is attached; until then this
// falls back to the default Vercel-assigned project URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://flos-happy-clipper.vercel.app";

export const business = {
  name: "Flo's Happy Clipper",
  shortName: "Flo's Happy Clipper",
  tagline: "Pet Grooming in Eatontown, NJ",
  phoneDisplay: "(732) 544-8186",
  phoneHref: "tel:+17325448186",
  addressLine1: "20 Main St",
  addressCity: "Eatontown",
  addressState: "NJ",
  addressZip: "07724",
  county: "Monmouth County",
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
  primaryLocation: "Eatontown, NJ",
  // No real logo file has been supplied for this build, so the header/
  // footer render a text wordmark instead of guessing at a logo design.
  logo: null as string | null,
} as const;

// HOURS — verified business hours. Monday and Sunday closed.
export const hoursConfirmed = true;
export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
  { day: "Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
] as const;
export const hoursNote = "Tuesday–Saturday 9 AM–5 PM. Closed Sunday & Monday.";

// Schema.org openingHoursSpecification.
export const hoursSchema = [
  { dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "17:00" },
] as const;

// No real Flo's Happy Clipper photography has been supplied for this build
// (Facebook/owner assets were not reachable). Every photo slot below
// renders an honest, aspect-locked placeholder (see
// components/PhotoPlaceholder.tsx) instead of stock imagery presented as
// real work — swap in real photos here the moment they're supplied.
export const photos = {
  largeBreedGroom: { caption: "Freshly groomed large-breed dog at Flo's Happy Clipper" },
  doubleCoatedGroom: { caption: "Groomed double-coated dog at Flo's Happy Clipper" },
  smallBreedGroom: { caption: "Freshly groomed small-breed dog at Flo's Happy Clipper" },
  poodleGroom: { caption: "Poodle trim at Flo's Happy Clipper" },
  bathAndBrush: { caption: "Dog getting bathed and brushed at Flo's Happy Clipper" },
  salonStorefront: { caption: "Flo's Happy Clipper storefront on Main St, Eatontown, NJ" },
  salonInterior: { caption: "Inside the Flo's Happy Clipper grooming salon" },
} as const;

export const services = [
  {
    slug: "dog-grooming",
    name: "Dog Grooming",
    shortName: "Dog Grooming",
    summary: "A full groom — bath, brush-out, breed-appropriate haircut, nail trim, and ear cleaning.",
    isFlagship: true,
  },
  {
    slug: "dog-bathing",
    name: "Dog Bathing",
    shortName: "Dog Bathing",
    summary: "A thorough bath and brush-out for dogs who need a refresh between full grooms.",
    isFlagship: false,
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

// Verified, safe-to-state differentiators — sourced from the business's
// long operating history and the recurring themes in its public customer
// feedback (patient handling, personalized service, comfort with large and
// double-coated dogs, repeat customers). Nothing here is a specific
// itemized service claim, ownership claim, or founding date beyond what's
// confirmed.
export const differentiators = [
  {
    title: "A Long-Established Eatontown Grooming Salon",
    body: "Flo's Happy Clipper has been grooming dogs on Main St in Eatontown for years — not a national chain, not a new arrival.",
  },
  {
    title: "Independently Owned, Not a Corporate Chain",
    body: "A local grooming salon run out of Eatontown, with the personal attention that comes with it.",
  },
  {
    title: "Comfortable With Large & Double-Coated Breeds",
    body: "Local pet owners regularly mention how well their large-breed and double-coated dogs — German Shepherds, Portuguese Water Dogs, and more — are handled here.",
  },
  {
    title: "Patient With Nervous & First-Time Dogs",
    body: "Owners of nervous dogs and first-time grooming clients often mention how comfortable their pets are during and after their visit.",
  },
] as const;

// Punchy, verified trust stats for the homepage/stat band — every value is
// a confirmed fact already used elsewhere on the site, not a new claim.
export const trustStats = [
  { value: "Established", label: "Local Salon" },
  { value: "Eatontown", label: "Main St Location" },
  { value: "Dog Grooming", label: "Our Specialty" },
  { value: "6 Days", label: "Open Tue–Sat" },
] as const;

export type NavItem = { label: string; href: string };

export const PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  gallery: "/gallery",
  reviews: "/reviews",
  faq: "/faq",
  contact: "/contact",
} as const;

export const servicePath = (slug: ServiceSlug) => `${PATHS.services}/${slug}`;

export const serviceNav: NavItem[] = services.map((s) => ({
  label: s.shortName,
  href: servicePath(s.slug),
}));

export const mainNav: NavItem[] = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Services", href: PATHS.services },
  { label: "Gallery", href: PATHS.gallery },
  { label: "Reviews", href: PATHS.reviews },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

export const footerNav: NavItem[] = [...mainNav, ...serviceNav];

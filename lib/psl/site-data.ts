// Central, single source of truth for every verified Pet Spa Luxe business fact
// used across the /pet-spa-luxe routes. Sourced from the client-provided Verified
// Business Record (El Sobrante, CA). Do not add facts beyond what's listed there —
// see the "Not yet verified" section below for everything still outstanding.

export const SITE_URL = "https://www.pamperedpuppies.net";
export const PSL_BASE = "/pet-spa-luxe";

export const business = {
  name: "Pet Spa Luxe",
  tagline: "Luxury Mobile Dog Grooming",
  phoneDisplay: "(650) 576-1194",
  phoneHref: "tel:+16505761194",
  // Base address for the mobile business. Pet Spa Luxe grooms at the customer's
  // location — this is not a walk-in storefront, so it's used for NAP/schema
  // consistency but never presented as a place to visit.
  addressLine1: "3535 El Portal Dr",
  addressCity: "El Sobrante",
  addressState: "CA",
  addressZip: "94803",
  get addressFull() {
    return `${this.addressLine1}, ${this.addressCity}, ${this.addressState} ${this.addressZip}`;
  },
  primaryLocation: "El Sobrante, CA",
  yelpUrl: "https://www.yelp.com/biz/pet-spa-luxe-el-sobrante-2",
  // Verified: 5.0-star public rating. Review count conflicts across sources
  // (4–8), so no exact count is shown anywhere on the site — see Yelp for
  // current reviews.
  yelpRating: "5.0",
  // Square crest crop of the full logo (crown + shield + poodle), used for
  // the header/footer badge and favicon.
  logoMark: "/images/pet-spa-luxe/logo-mark.png",
  // Full horizontal logo lockup (crest + "PET SPA LUXE" wordmark).
  logoFull: "/images/pet-spa-luxe/logo.webp",
} as const;

// HOURS — confirmed by the client: open 7:00 AM – 9:00 PM, every day.
export const hoursConfirmed = true;
export const hours = [
  { day: "Monday", time: "7:00 AM – 9:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 9:00 PM" },
  { day: "Thursday", time: "7:00 AM – 9:00 PM" },
  { day: "Friday", time: "7:00 AM – 9:00 PM" },
  { day: "Saturday", time: "7:00 AM – 9:00 PM" },
  { day: "Sunday", time: "7:00 AM – 9:00 PM" },
] as const;
export const hoursNote = "Open every day, 7:00 AM – 9:00 PM.";

// Schema.org openingHoursSpecification — all seven days share identical hours.
export const hoursSchema = [
  {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "21:00",
  },
] as const;

// Real client/business photos, provided directly by the client.
export const photos = {
  poodleDoorway: {
    src: "/images/pet-spa-luxe/poodle-doorway.jpg",
    alt: "Freshly groomed poodle waiting at a client's front door after a Pet Spa Luxe mobile grooming visit",
  },
  bulldogBandana: {
    src: "/images/pet-spa-luxe/bulldog-bandana.jpg",
    alt: "Bulldog wearing a bandana after being groomed by Pet Spa Luxe",
  },
  vanInterior: {
    src: "/images/pet-spa-luxe/mobile-van-interior.jpg",
    alt: "Inside the Pet Spa Luxe mobile grooming van, with grooming table and cabinetry",
  },
  huskyGroomed: {
    src: "/images/pet-spa-luxe/husky-groomed-van.jpg",
    alt: "Husky standing on the grooming table inside the Pet Spa Luxe mobile van after a full groom",
  },
} as const;

export const services = [
  {
    slug: "mobile-dog-grooming",
    name: "Mobile Dog Grooming",
    shortName: "Mobile Dog Grooming",
    summary:
      "Full-service dog grooming brought directly to your home in a fully equipped mobile grooming setup.",
    isFlagship: true,
  },
  {
    slug: "dog-haircuts-full-grooming",
    name: "Dog Haircuts & Full Grooming",
    shortName: "Haircuts & Full Grooming",
    summary:
      "Complete grooming with professional, breed-specific haircuts finished at your curb.",
    isFlagship: false,
  },
  {
    slug: "bath-deshedding",
    name: "Warm Water Bath & Deshedding",
    shortName: "Bath & Deshedding",
    summary:
      "Warm-water bathing with premium shampoos and conditioners, plus deshedding to clear loose coat.",
    isFlagship: false,
  },
  {
    slug: "nail-ear-care",
    name: "Nail Care & Ear Cleaning",
    shortName: "Nail & Ear Care",
    summary: "Nail trimming, nail grinding, and ear cleaning as a full groom or a standalone visit.",
    isFlagship: false,
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

// Every discrete verified service feature/offering, used on the Services hub
// and About page. Nothing here beyond the client-provided record.
export const serviceFeatures = [
  "Fully equipped mobile grooming setup",
  "Grooming brought directly to your doorstep",
  "Warm-water bathing",
  "Premium shampoos & conditioners",
  "Breed-specific haircuts",
  "Deshedding treatments",
  "Nail trimming",
  "Nail grinding",
  "Ear cleaning",
  "Hand blow drying",
  "One-on-one grooming",
  "Cage-free grooming environment",
] as const;

export const differentiators = [
  {
    title: "Grooming Comes to You",
    body: "No car rides, no waiting room — Pet Spa Luxe's mobile setup grooms your dog right at your home.",
  },
  {
    title: "One-on-One Attention",
    body: "Every appointment is individual, focused attention for your dog from start to finish — never rushed alongside a room full of other pets.",
  },
  {
    title: "Cage-Free Environment",
    body: "Your dog is groomed without the traditional salon cage/kennel setup that many dogs find stressful.",
  },
  {
    title: "Premium Products",
    body: "Warm-water baths use premium shampoos and conditioners as part of every groom.",
  },
] as const;

// Only El Sobrante is a confirmed, verified location. Pet Spa Luxe markets
// itself as a Bay Area mobile grooming business, but no additional specific
// cities have been verified from a current, authoritative source — so no
// other city pages are built. Update this list only from verified current
// business information (official site, GBP, or the owner directly).
export const serviceAreas = [
  {
    city: "El Sobrante",
    slug: "el-sobrante",
    verified: true,
  },
] as const;

export type NavItem = { label: string; href: string };

export const PATHS = {
  home: PSL_BASE,
  about: `${PSL_BASE}/about`,
  services: `${PSL_BASE}/services`,
  serviceAreas: `${PSL_BASE}/service-areas`,
  gallery: `${PSL_BASE}/gallery`,
  reviews: `${PSL_BASE}/reviews`,
  faq: `${PSL_BASE}/faq`,
  contact: `${PSL_BASE}/contact`,
} as const;

export const servicePath = (slug: ServiceSlug) => `${PATHS.services}/${slug}`;
export const areaPath = (slug: string) => `${PATHS.serviceAreas}/${slug}`;

export const serviceNav: NavItem[] = services.map((s) => ({
  label: s.shortName,
  href: servicePath(s.slug),
}));

export const areaNav: NavItem[] = serviceAreas.map((a) => ({
  label: a.city,
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

export const footerNav: NavItem[] = [
  ...mainNav,
  ...serviceNav,
  ...areaNav,
];

// FAQs answered only from verified business information — see faq/page.tsx.

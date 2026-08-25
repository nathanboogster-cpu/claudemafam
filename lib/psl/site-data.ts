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
} as const;

// HOURS — NOT VERIFIED. No reliable public source confirms hours at build time.
// Do not publish specific hours until confirmed directly from the client/GBP.
export const hoursConfirmed = false;
export const hoursNote = "Call for current availability — hours are confirmed by phone.";

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

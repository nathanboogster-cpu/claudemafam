// Central, single source of truth for every verified Pet Spa Luxe business fact
// used across this site. Sourced from the client-provided Verified Business
// Record (El Sobrante, CA). Do not add facts beyond what's listed there — see
// the "Not yet verified" section below for everything still outstanding.

// This is its own standalone Vercel project/domain (separate from Pampered
// Puppies). Set NEXT_PUBLIC_SITE_URL once a custom domain is attached; until
// then this falls back to the default Vercel-assigned project URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pet-spa-luxe.vercel.app";

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
  logoMark: "/images/logo-mark.png",
  // Full horizontal logo lockup (crest + "PET SPA LUXE" wordmark).
  logoFull: "/images/logo.webp",
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
    src: "/images/poodle-doorway.jpg",
    alt: "Freshly groomed poodle waiting at a client's front door after a Pet Spa Luxe mobile grooming visit",
  },
  bulldogBandana: {
    src: "/images/bulldog-bandana.jpg",
    alt: "Bulldog wearing a bandana after being groomed by Pet Spa Luxe",
  },
  vanInterior: {
    src: "/images/mobile-van-interior.jpg",
    alt: "Inside the Pet Spa Luxe mobile grooming van, with grooming table and cabinetry",
  },
  huskyGroomed: {
    src: "/images/husky-groomed-van.jpg",
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
    price: null as string | null,
  },
  {
    slug: "dog-haircuts-full-grooming",
    name: "Full Dog Grooming",
    shortName: "Full Dog Grooming",
    summary: "All-inclusive full grooming package — bath, breed-specific haircut, and more.",
    isFlagship: false,
    price: "$110" as string | null,
  },
  {
    slug: "bath-deshedding",
    name: "Warm Water Bath & Deshedding",
    shortName: "Bath & Deshedding",
    summary:
      "Warm-water bathing with premium shampoos and conditioners, plus deshedding to clear loose coat.",
    isFlagship: false,
    price: null as string | null,
  },
  {
    slug: "nail-ear-care",
    name: "Nail Care & Ear Cleaning",
    shortName: "Nail & Ear Care",
    summary: "Nail trimming, nail grinding, and ear cleaning as a full groom or a standalone visit.",
    isFlagship: false,
    price: null as string | null,
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

// Full Dog Grooming — $110 all-inclusive package, provided directly by the
// owner. This is the complete, verified list of what's included; nothing
// added beyond what she specified.
export const fullGroomingPackage = {
  name: "Full Dog Grooming",
  price: "$110",
  priceNote: "All-Inclusive",
  includes: [
    "Warm Bath",
    "Full Haircut (style or breed-specific)",
    "Nail Trim",
    "Hair Brushing",
    "Deshedding Treatment",
    "Sanitary Trim",
    "Professional Grade Shampoo",
    "Hand Blow Dry",
    "Eye Wash",
    "Ear Cleaning",
    "Paw Trimming",
    "Teeth Brushing",
    "Hug & Brush Magic Hydrobath",
    "Paw & Nose Conditioning",
    "Fancy Bow Ties or Cool Bandanas",
  ],
  // Included, but only performed when the client asks for them.
  uponRequest: [
    "Anal Gland Expression",
    "Ear Hair Removal",
    "Custom Perfume",
  ],
} as const;

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

// Punchy trust stats for the homepage/stat band — every number here is a
// verified fact (Yelp rating, mobile service model, hours) already used
// elsewhere on the site, not a new claim.
export const trustStats = [
  { value: "5.0★", label: "Yelp Rating" },
  { value: "100%", label: "Mobile — We Come to You" },
  { value: "1-on-1", label: "Cage-Free Grooming" },
  { value: "7 Days", label: "7 AM – 9 PM" },
] as const;

// The verified mobile-grooming process, in the order a client experiences
// it. Nothing here beyond what's already stated in the business record.
export const processSteps = [
  {
    title: "Call or Request an Appointment",
    body: "Reach us by phone and tell us about your dog — breed, size, and coat — so we know what to bring.",
  },
  {
    title: "We Come to Your Door",
    body: "Our fully equipped mobile grooming van arrives at your home — no drop-off, no car ride, no waiting room.",
  },
  {
    title: "One-on-One, Cage-Free Groom",
    body: "Your dog gets individual attention the whole appointment, never rushed and never caged.",
  },
  {
    title: "Pick Up a Happy, Fresh Dog",
    body: "Your dog is groomed, dried, and ready — right in your driveway.",
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

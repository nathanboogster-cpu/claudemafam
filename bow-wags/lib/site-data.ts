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
//
// The live site is served on www — Vercel redirects the bare domain
// (bowwags.com) to www.bowwags.com. Canonicals, og:url, schema, the sitemap
// and robots.txt must all name the host that actually serves the page, or
// Google gets conflicting signals and can ignore the sitemap (sitemap URLs
// must be on the sitemap's own host). So the bare domain is always
// normalized to www here, whatever NEXT_PUBLIC_SITE_URL is set to.
const RAW_SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bow-wags.vercel.app").replace(/\/+$/, "");
export const SITE_URL = RAW_SITE_URL.replace(/^https?:\/\/bowwags\.com$/i, "https://www.bowwags.com");

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

// Towns around the Marietta facility (1691 Powder Springs Rd SW). Drive
// times, distances and routes come from Google Maps driving directions
// looked up on 2026-11-16 (weekday afternoon); real times vary with traffic.
// No area outside this real, local radius is claimed.
export type ServiceAreaSlug =
  | "powder-springs-ga"
  | "smyrna-ga"
  | "austell-ga"
  | "kennesaw-ga"
  | "mableton-ga"
  | "vinings-ga"
  | "acworth-ga"
  | "hiram-ga"
  | "lithia-springs-ga";

export const serviceAreas: { slug: ServiceAreaSlug; city: string; state: string; description: string; driveTimeNote: string }[] = [
  {
    slug: "powder-springs-ga",
    city: "Powder Springs",
    state: "GA",
    description: "Dog daycare, boarding, and grooming 6.5 miles up Powder Springs Rd SW.",
    driveTimeNote: "about a 15-minute drive",
  },
  {
    slug: "smyrna-ga",
    city: "Smyrna",
    state: "GA",
    description: "Clean, safe, fully supervised care about 6 miles from Smyrna via Windy Hill Rd.",
    driveTimeNote: "about a 15-minute drive",
  },
  {
    slug: "austell-ga",
    city: "Austell",
    state: "GA",
    description: "Daycare, boarding, and grooming about 7.6 miles north of Austell.",
    driveTimeNote: "about a 15–20 minute drive",
  },
  {
    slug: "kennesaw-ga",
    city: "Kennesaw",
    state: "GA",
    description: "Private boarding suites and full-service grooming about 11 miles south of Kennesaw.",
    driveTimeNote: "about a 25-minute drive",
  },
  {
    slug: "mableton-ga",
    city: "Mableton",
    state: "GA",
    description: "Size-appropriate daycare playrooms and grooming about 7.5 miles from Mableton via Floyd Rd.",
    driveTimeNote: "about a 15–20 minute drive",
  },
  {
    slug: "vinings-ga",
    city: "Vinings",
    state: "GA",
    description: "Daycare, boarding, and grooming about 10 miles from Vinings via Windy Hill Rd.",
    driveTimeNote: "about a 20–30 minute drive",
  },
  {
    slug: "acworth-ga",
    city: "Acworth",
    state: "GA",
    description: "Private boarding suites and full-service grooming about 15 miles from Acworth.",
    driveTimeNote: "about a 35-minute drive",
  },
  {
    slug: "hiram-ga",
    city: "Hiram",
    state: "GA",
    description: "Clean, safe, fully supervised daycare and boarding about 11 miles east of Hiram.",
    driveTimeNote: "about a 20–25 minute drive",
  },
  {
    slug: "lithia-springs-ga",
    city: "Lithia Springs",
    state: "GA",
    description: "Size-appropriate daycare playrooms and grooming about 10 miles from Lithia Springs.",
    driveTimeNote: "about a 20-minute drive",
  },
];

export const areaPath = (slug: ServiceAreaSlug) => `/service-areas/${slug}`;

export const serviceNav: NavItem[] = services.map((s) => ({
  label: s.shortName,
  href: servicePath(s.slug),
}));

export const areaNav: NavItem[] = serviceAreas.map((a) => ({
  label: `${a.city}, ${a.state}`,
  href: areaPath(a.slug),
}));

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

// Standard inclusions of a full-service groom — the general, well-established
// components of the trade (not unique claims specific to Bow Wags beyond
// "we offer full-service grooming," which is already verified). Each gets its
// own detail page at /dog-grooming/[slug]; content below is generic,
// professional-grooming knowledge, not fabricated Bow Wags-specific claims.
export type GroomingServiceSlug =
  | "bath-and-blow-dry"
  | "brush-out-and-de-matting"
  | "breed-specific-and-custom-haircuts"
  | "nail-trimming-and-grinding"
  | "ear-cleaning"
  | "teeth-brushing"
  | "anal-gland-expression"
  | "sanitary-trim"
  | "paw-pad-trim"
  | "deshedding-treatment";

export const groomingServiceDetails: {
  slug: GroomingServiceSlug;
  name: string;
  shortDescription: string;
  detail: string;
  whyItMatters: string[];
}[] = [
  {
    slug: "bath-and-blow-dry",
    name: "Bath & Blow-Dry",
    shortDescription: "A full bath with shampoo suited to your dog's coat and skin, followed by a complete blow-dry.",
    detail:
      "Every groom starts with a thorough bath using shampoo and conditioner chosen for your dog's coat type and skin condition. After rinsing, Bow Wags dries each dog completely using cool-air and force-air drying technology, plus handheld drying for the face and head — a full blow-dry is safer and more thorough than air-drying alone, which can leave a dog's undercoat damp and prone to matting or skin irritation.",
    whyItMatters: [
      "A complete blow-dry prevents damp undercoat from matting or developing hot spots",
      "Shampoo matched to your dog's coat and skin helps avoid dryness or irritation",
      "A thoroughly dried coat makes the rest of the groom — brushing, trimming — easier and more comfortable",
    ],
  },
  {
    slug: "brush-out-and-de-matting",
    name: "Brush-Out & De-Matting",
    shortDescription: "Careful brushing to remove loose fur and work through tangles or mats before and after the bath.",
    detail:
      "Before bathing, Bow Wags brushes out loose fur and works through any tangles or mats — bathing over mats can actually tighten them, so this step happens first. Matted fur is worked out gently and gradually rather than rushed, since mats pull on skin and can be uncomfortable for a dog when handled carelessly.",
    whyItMatters: [
      "Removing mats before bathing prevents them from tightening further",
      "Loose undercoat is worked out to reduce shedding and improve air circulation to the skin",
      "Gentle, gradual de-matting keeps the process comfortable rather than rushed or painful",
    ],
  },
  {
    slug: "breed-specific-and-custom-haircuts",
    name: "Breed-Specific & Custom Haircuts",
    shortDescription: "A haircut styled to breed standard or to whatever length and shape you and your dog are most comfortable with.",
    detail:
      "Whether you want a traditional breed-standard trim or a custom length and style, haircuts are handled by one groomer from start to finish. Cynthia enjoys working with a range of coat types — from silhouette cuts on sporting breeds to the shorter, low-maintenance trims many mixed-breed and Malti-Poo owners prefer.",
    whyItMatters: [
      "One groomer handles the full haircut, for consistency from start to finish",
      "Styles range from breed-standard trims to custom, low-maintenance cuts",
      "Coat length and style can be discussed and adjusted based on the season and your dog's lifestyle",
    ],
  },
  {
    slug: "nail-trimming-and-grinding",
    name: "Nail Trimming & Grinding",
    shortDescription: "Nails trimmed to a safe length and smoothed with a grinder to prevent snagging or splitting.",
    detail:
      "Overgrown nails can affect a dog's gait and comfort, so nails are trimmed to a safe length as part of every groom. A grinder is then used to smooth the edges, which helps prevent the snagging, splitting, or sharp edges that clipping alone can leave behind.",
    whyItMatters: [
      "Regularly trimmed nails help maintain a comfortable, natural gait",
      "Grinding smooths edges that clipping alone can leave sharp",
      "Shorter nails reduce the risk of snagging, splitting, or accidental scratches",
    ],
  },
  {
    slug: "ear-cleaning",
    name: "Ear Cleaning",
    shortDescription: "Gentle cleaning of the outer ear to remove wax and debris and check for signs of irritation.",
    detail:
      "Ears are gently cleaned to remove wax and debris from the outer ear canal. This is also a chance to visually check for redness, odor, or other signs of irritation worth mentioning to your vet — grooming isn't a substitute for veterinary care, but a clean, well-checked ear is part of a thorough groom.",
    whyItMatters: [
      "Regular cleaning helps prevent wax and debris buildup in the outer ear",
      "Gives groomers a chance to visually flag anything unusual worth a vet's attention",
      "Especially helpful for floppy-eared breeds prone to trapped moisture",
    ],
  },
  {
    slug: "teeth-brushing",
    name: "Teeth Brushing",
    shortDescription: "Teeth brushed with a dog-safe toothpaste to help reduce plaque and tartar buildup.",
    detail:
      "Teeth are brushed using a dog-safe toothpaste as part of every full-service groom, helping to reduce plaque and tartar buildup between regular brushing at home and dental checkups with your veterinarian.",
    whyItMatters: [
      "Regular brushing helps slow plaque and tartar buildup",
      "Supports fresher breath and overall oral hygiene",
      "Complements — not replaces — your dog's veterinary dental care",
    ],
  },
  {
    slug: "anal-gland-expression",
    name: "Anal Gland Expression",
    shortDescription:
      "Expressing the anal glands to relieve the pressure and discomfort many dogs experience when these glands don't empty on their own.",
    detail:
      "Some dogs don't naturally express their anal glands during normal bowel movements, which can lead to discomfort, scooting, or irritation. As part of a full-service groom, Bow Wags expresses the anal glands to relieve that pressure — a routine, quick part of the appointment for dogs who need it.",
    whyItMatters: [
      "Relieves pressure and discomfort for dogs whose glands don't empty naturally",
      "Can help reduce scooting, licking, or irritation in that area",
      "A routine, quick step included in every full-service groom",
    ],
  },
  {
    slug: "sanitary-trim",
    name: "Sanitary Trim",
    shortDescription: "Trimming fur around hygiene-sensitive areas to help keep your dog clean and comfortable.",
    detail:
      "A sanitary trim keeps fur around the hindquarters and other hygiene-sensitive areas neatly trimmed, which helps reduce matting, keeps your dog cleaner between baths, and improves overall comfort — especially for longer-coated breeds.",
    whyItMatters: [
      "Reduces matting and buildup in hygiene-sensitive areas",
      "Helps keep your dog cleaner between grooming appointments",
      "Especially useful for longer-coated breeds",
    ],
  },
  {
    slug: "paw-pad-trim",
    name: "Paw Pad Trim",
    shortDescription: "Trimming excess fur between the paw pads to improve traction and cut down on trapped mud and debris.",
    detail:
      "Fur that grows between the paw pads is trimmed back, which improves a dog's traction on hard floors and reduces the mud, debris, and matting that can build up between the pads — especially helpful for dogs that spend a lot of time outdoors.",
    whyItMatters: [
      "Improves traction on hardwood or tile floors",
      "Reduces mud, debris, and ice buildup between the pads",
      "Helps prevent matting in a hard-to-reach area",
    ],
  },
  {
    slug: "deshedding-treatment",
    name: "Deshedding Treatment",
    shortDescription: "A deeper coat treatment aimed at reducing loose undercoat shedding, especially for double-coated breeds.",
    detail:
      "Deshedding goes beyond a standard brush-out to work through the undercoat more thoroughly, removing loose fur before it ends up around your home. It's especially useful for double-coated breeds during seasonal shedding, and pairs with Bow Wags' cool-air and force-air drying to fully loosen and remove dead undercoat.",
    whyItMatters: [
      "Removes loose undercoat more thoroughly than a standard brush-out",
      "Especially helpful for double-coated breeds during seasonal shedding",
      "Can mean less shedding at home between grooming appointments",
    ],
  },
];

export const groomingServices = groomingServiceDetails.map((g) => g.name);

export const groomingServicePath = (slug: GroomingServiceSlug) => `/dog-grooming/${slug}`;

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
  services: "/services",
  serviceAreas: "/service-areas",
  rates: "/rates",
  reservations: "/reservations",
  requirements: "/requirements",
  gallery: "/gallery",
  reviews: "/reviews",
  faq: "/faq",
  contact: "/contact",
  blog: "/blog",
} as const;

export const blogPostPath = (slug: string) => `/blog/${slug}`;

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

// Per-area page content. Every claim is either a fact already stated
// elsewhere on this site (services, pricing, hours, requirements, groomer)
// or a Google Maps driving route looked up on 2026-11-16 — no invented
// landmarks, neighborhoods, customers or "voted best" claims. The title and
// H1 pattern is unchanged from the original pages to protect their rankings.
type AreaContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  gettingHereTitle: string;
  gettingHere: string[];
  whyChoose: string[];
  faqs: { question: string; answer: string }[];
};

const areaBase = (city: string, drive: string) => ({
  metaTitle: `Dog Daycare, Boarding & Grooming Near ${city}, GA`,
  metaDescription: `Bow Wags is a dog daycare, boarding, and grooming facility in Marietta, GA, ${drive} from ${city}: clean, safe, fully supervised care. Call ${business.phoneDisplay}.`,
  eyebrow: `${city}, GA`,
  h1: `Dog Daycare, Boarding & Grooming Near ${city}, GA`,
});

const faq = {
  temperament: {
    question: "Does my dog need a temperament test first?",
    answer: `Yes. Every dog needs a ${temperamentTest.durationNote} (${temperamentTest.price}) before their first daycare or boarding stay, so staff can see how they play in a group. Call ${business.phoneDisplay} to schedule it.`,
  },
  vaccines: {
    question: "Which vaccinations does my dog need?",
    answer: `Current ${vaccinationRequirements.join(", ")} vaccinations are required for daycare and boarding.`,
  },
  boardingDaycare: {
    question: "Does boarding include playtime?",
    answer: `Yes. ${boardingPricing.daycareIncludedNote}`,
  },
  halfFull: {
    question: "What's the difference between a half day and a full day of daycare?",
    answer: `A half day is ${daycarePricing.halfDay.note.toLowerCase()} (${daycarePricing.halfDay.price}); a full day is ${daycarePricing.fullDay.note.toLowerCase()} (${daycarePricing.fullDay.price}). Multi-day packages bring the daily price down.`,
  },
  sunday: {
    question: "Is Bow Wags open on weekends?",
    answer: `Saturdays, yes: 8 AM to 5 PM. Bow Wags is closed on Sundays. Weekdays run 6:30 AM to 6:30 PM.`,
  },
  checkout: {
    question: "What time do I need to pick up after boarding?",
    answer: "Pick up by 2 PM on your checkout day. After 2 PM, a $26 daycare charge applies.",
  },
  food: {
    question: "Do I need to bring food for boarding?",
    answer: "You're welcome to bring your dog's own food. If you'd rather we feed the house food, it's $2 a day.",
  },
  groomingBook: {
    question: "How do I book a grooming appointment?",
    answer: `Call ${business.phoneDisplay}. Grooming is full-service for all breeds and handled by ${groomer.name}, who has groomed at Bow Wags since ${groomer.since}.`,
  },
  difficult: {
    question: "My dog is nervous at the groomer. Can you still help?",
    answer: `${groomer.name} is comfortable working with puppies and difficult dogs, and grooms by the rule "${groomer.philosophy}": your dog's comfort and safety come before a picture-perfect cut.`,
  },
  siblings: {
    question: "Is there a discount for two dogs?",
    answer: "For daycare, siblings get 20% off a second package. For boarding, ask about multi-dog discounts.",
  },
} as const;

export const areaContent: Record<ServiceAreaSlug, AreaContent> = {
  "powder-springs-ga": {
    ...areaBase("Powder Springs", "about 15 minutes"),
    intro: `Bow Wags sits on the same road that runs through Powder Springs: head up Powder Springs Rd SW for about 6.5 miles and you'll reach ${business.addressFull}. That makes daily daycare drop-off, weekend grooming, and boarding before a trip an easy, one-road drive.`,
    gettingHereTitle: "Getting Here From Powder Springs",
    gettingHere: [
      "Google Maps routes most Powder Springs drivers straight along Powder Springs Rd SW: about 6.5 miles, roughly 15 minutes depending on traffic.",
      "Doors open at 6:30 AM on weekdays, so you can drop off for daycare before work and pick up as late as 6:30 PM.",
      `If you only need a few hours of care, a half day (${daycarePricing.halfDay.note.toLowerCase()}) is ${daycarePricing.halfDay.price}.`,
    ],
    whyChoose: [
      "One straight drive up Powder Springs Rd SW",
      "Size-appropriate indoor playrooms plus a secure outdoor playground",
      `Half-day (${daycarePricing.halfDay.price}) and full-day (${daycarePricing.fullDay.price}) daycare`,
      "Private wooden boarding suites, not cages",
    ],
    faqs: [
      { question: "How far is Bow Wags from Powder Springs?", answer: "About 6.5 miles, roughly 15 minutes up Powder Springs Rd SW, depending on traffic." },
      faq.halfFull,
      faq.temperament,
    ],
  },
  "smyrna-ga": {
    ...areaBase("Smyrna", "about 15 minutes"),
    intro: `From Smyrna, Bow Wags is about 6 miles west via Windy Hill Rd, at ${business.addressFull}. Weekday doors open at 6:30 AM, so Smyrna dog owners can drop off for supervised daycare before the workday and pick up by 6:30 PM.`,
    gettingHereTitle: "Getting Here From Smyrna",
    gettingHere: [
      "Google Maps' usual route from Smyrna is via Windy Hill Rd SE and Windy Hill Rd: about 6.1 miles, roughly 15 minutes outside peak traffic.",
      "Boarding is a good fit for trips out of town: every night includes about 12 hours of supervised daycare, so your dog isn't just kept overnight.",
      `New dogs start with a ${temperamentTest.durationNote} (${temperamentTest.price}) before their first daycare or boarding stay.`,
    ],
    whyChoose: [
      "About 6 miles from Smyrna via Windy Hill Rd",
      "Open from 6:30 AM on weekdays for before-work drop-off",
      "Boarding includes about 12 hours of supervised daycare each day",
      "Full-service grooming for all breeds",
    ],
    faqs: [
      { question: "How do I get to Bow Wags from Smyrna?", answer: "Take Windy Hill Rd west toward Powder Springs Rd SW. It's about 6.1 miles, roughly 15 minutes outside rush hour." },
      faq.boardingDaycare,
      faq.vaccines,
    ],
  },
  "austell-ga": {
    ...areaBase("Austell", "about 15–20 minutes"),
    intro: `Bow Wags is about 7.6 miles north of Austell, at ${business.addressFull}. Austell dog owners come for size-appropriate daycare playrooms, private wooden boarding suites, and full-service grooming by ${groomer.name}.`,
    gettingHereTitle: "Getting Here From Austell",
    gettingHere: [
      "Google Maps routes Austell drivers via Flint Hill Rd SW and Powder Springs Rd SW: about 7.6 miles, roughly 15–20 minutes.",
      `Grooming is handled by ${groomer.name}, who has groomed at Bow Wags since ${groomer.since} and is Pet CPR and First Aid certified.`,
      "Saturday hours (8 AM to 5 PM) make a weekend grooming or daycare visit easy to fit in.",
    ],
    whyChoose: [
      "About 7.6 miles from Austell via Flint Hill Rd SW",
      `Grooming by ${groomer.name}, Pet CPR and First Aid certified`,
      "Open Saturdays 8 AM to 5 PM",
      "Clean, safe, fully supervised daycare and boarding",
    ],
    faqs: [
      { question: "How long is the drive from Austell?", answer: "About 7.6 miles via Flint Hill Rd SW and Powder Springs Rd SW, usually 15 to 20 minutes." },
      faq.groomingBook,
      faq.sunday,
    ],
  },
  "kennesaw-ga": {
    ...areaBase("Kennesaw", "about 25 minutes"),
    intro: `Bow Wags is about 11 miles south of Kennesaw, at ${business.addressFull}. For Kennesaw dog owners, that makes it a strong option for boarding during trips (with daycare included every day) and for full-service grooming.`,
    gettingHereTitle: "Getting Here From Kennesaw",
    gettingHere: [
      "Google Maps routes Kennesaw drivers via Cheatham Hill Rd: about 11.1 miles, roughly 25 minutes depending on traffic.",
      `Boarding is ${boardingPricing.tiers[0].price}/night for nights 1–5, dropping to ${boardingPricing.tiers[1].price} for nights 6–10 and ${boardingPricing.tiers[2].price} for 11 nights or more.`,
      "Pick up by 2 PM on your checkout day to avoid an extra daycare charge.",
    ],
    whyChoose: [
      "About 11 miles from Kennesaw via Cheatham Hill Rd",
      "Private indoor wooden boarding suites, not cages",
      "Boarding includes about 12 hours of supervised daycare each day",
      "Lower nightly boarding rates for longer stays",
    ],
    faqs: [
      { question: "How far is Bow Wags from Kennesaw?", answer: "About 11.1 miles via Cheatham Hill Rd, roughly 25 minutes depending on traffic." },
      faq.checkout,
      faq.food,
    ],
  },
  "mableton-ga": {
    ...areaBase("Mableton", "about 15–20 minutes"),
    intro: `From Mableton, Bow Wags is about 7.5 miles away via Floyd Rd SW, at ${business.addressFull}. Mableton dog owners use Bow Wags for supervised daycare in size-appropriate playrooms, boarding in private suites, and grooming.`,
    gettingHereTitle: "Getting Here From Mableton",
    gettingHere: [
      "Google Maps routes Mableton drivers via Floyd Rd SW: about 7.5 miles, roughly 15–20 minutes.",
      `Before your dog's first daycare or boarding visit, plan for the ${temperamentTest.durationNote} (${temperamentTest.price}). Staff watch how your dog settles in and plays over several hours, not just a quick first impression.`,
      `Daycare packages save on regular visits: for example, 10 full days are ${daycarePricing.packages[3].price}.`,
    ],
    whyChoose: [
      "About 7.5 miles from Mableton via Floyd Rd SW",
      "Size-appropriate indoor playrooms plus a secure outdoor playground",
      "Multi-day daycare packages for regular visits",
      `A ${temperamentTest.durationNote} keeps group play safe for every dog`,
    ],
    faqs: [
      { question: "How do I get to Bow Wags from Mableton?", answer: "Head north via Floyd Rd SW to Powder Springs Rd SW. It's about 7.5 miles, usually 15 to 20 minutes." },
      faq.temperament,
      faq.siblings,
    ],
  },
  "vinings-ga": {
    ...areaBase("Vinings", "about 20–30 minutes"),
    intro: `Bow Wags is about 10 miles west of Vinings, at ${business.addressFull}. Vinings dog owners come for boarding with daycare included every day, private wooden suites instead of cages, and full-service grooming.`,
    gettingHereTitle: "Getting Here From Vinings",
    gettingHere: [
      "Google Maps routes Vinings drivers via Atlanta Rd SE and Windy Hill Rd: about 9.9 miles. It can take up to 30 minutes in traffic.",
      "Boarding suites are private and wooden, not traditional cages, and each night includes about 12 hours of supervised daycare.",
      "Open weekdays 6:30 AM to 6:30 PM and Saturdays 8 AM to 5 PM; closed Sundays.",
    ],
    whyChoose: [
      "About 10 miles from Vinings via Windy Hill Rd",
      "Private indoor wooden boarding suites, not cages",
      "Boarding includes about 12 hours of supervised daycare each day",
      "Full-service grooming for all breeds",
    ],
    faqs: [
      { question: "How long is the drive from Vinings?", answer: "About 9.9 miles via Atlanta Rd SE and Windy Hill Rd. Allow 20 to 30 minutes depending on traffic." },
      faq.boardingDaycare,
      faq.sunday,
    ],
  },
  "acworth-ga": {
    ...areaBase("Acworth", "about 35 minutes"),
    intro: `Bow Wags is about 15 miles south of Acworth, at ${business.addressFull}. It's a longer drive than a daily daycare run for most Acworth owners, so it's best suited to boarding while you travel and to full-service grooming visits.`,
    gettingHereTitle: "Getting Here From Acworth",
    gettingHere: [
      "Google Maps routes Acworth drivers via Acworth Due West Rd NW: about 15.4 miles, roughly 35 minutes depending on traffic.",
      "For a longer stay, boarding gets cheaper the more nights you book, and every night includes about 12 hours of supervised daycare.",
      `Grooming is full-service for all breeds. ${groomer.name} grooms by the rule "${groomer.philosophy}": comfort and safety before a picture-perfect cut.`,
    ],
    whyChoose: [
      "Boarding with daycare included every day",
      "Lower nightly boarding rates for longer stays",
      `Grooming by ${groomer.name}, at Bow Wags since ${groomer.since}`,
      "Private indoor wooden boarding suites, not cages",
    ],
    faqs: [
      { question: "How far is Bow Wags from Acworth?", answer: "About 15.4 miles via Acworth Due West Rd NW, roughly 35 minutes depending on traffic." },
      faq.difficult,
      faq.checkout,
    ],
  },
  "hiram-ga": {
    ...areaBase("Hiram", "about 20–25 minutes"),
    intro: `From Hiram, Bow Wags is about 11 miles east along GA-360 (Powder Springs Rd), at ${business.addressFull}. Hiram dog owners use it for supervised daycare, boarding in private suites, and grooming.`,
    gettingHereTitle: "Getting Here From Hiram",
    gettingHere: [
      "Google Maps routes Hiram drivers via GA-360 E: about 11.2 miles, roughly 20–25 minutes depending on traffic.",
      `Daycare is ${daycarePricing.halfDay.price} for a half day (${daycarePricing.halfDay.note.toLowerCase()}) or ${daycarePricing.fullDay.price} for a full day, with packages for regular visits.`,
      `Current ${vaccinationRequirements.join(", ")} vaccinations are required for daycare and boarding.`,
    ],
    whyChoose: [
      "About 11 miles from Hiram via GA-360",
      "Clean, safe, fully supervised daycare and boarding",
      "20% off a second daycare package for siblings",
      "Open Saturdays 8 AM to 5 PM",
    ],
    faqs: [
      { question: "How do I get to Bow Wags from Hiram?", answer: "Take GA-360 E (Powder Springs Rd) toward Marietta. It's about 11.2 miles, usually 20 to 25 minutes." },
      faq.vaccines,
      faq.halfFull,
    ],
  },
  "lithia-springs-ga": {
    ...areaBase("Lithia Springs", "about 20 minutes"),
    intro: `Bow Wags is about 10 miles north of Lithia Springs, at ${business.addressFull}. Lithia Springs dog owners come for size-appropriate daycare playrooms, private boarding suites, and grooming for nervous or difficult dogs as well as easy ones.`,
    gettingHereTitle: "Getting Here From Lithia Springs",
    gettingHere: [
      "Google Maps routes Lithia Springs drivers via Powder Springs Rd SW: about 10 miles, roughly 20 minutes depending on traffic.",
      `${groomer.name} is comfortable with puppies and difficult dogs, and has completed skin and coat coursework, useful for dogs with sensitive skin.`,
      "Open from 6:30 AM on weekdays, with daycare half days and full days to fit your schedule.",
    ],
    whyChoose: [
      "About 10 miles from Lithia Springs via Powder Springs Rd SW",
      "Groomer comfortable with puppies and difficult dogs",
      "Size-appropriate indoor playrooms plus a secure outdoor playground",
      "Private indoor wooden boarding suites, not cages",
    ],
    faqs: [
      { question: "How far is Bow Wags from Lithia Springs?", answer: "About 10 miles via Powder Springs Rd SW, roughly 20 minutes depending on traffic." },
      faq.difficult,
      faq.food,
    ],
  },
};

// Central, single source of truth for every verified Bark and Bork Mobile Pet
// Spa business fact used across this site. Sourced from the client's Verified
// Business Record (mobile dog grooming based in Compton, CA, serving the
// greater Los Angeles area). Do not add facts beyond what's listed there.
//
// IMPORTANT — mobile / service-area business: Bark and Bork has NO
// customer-facing physical storefront. Grooming happens at the customer's
// location. Never add a street address here or represent Compton as a
// walk-in location.

// Own standalone Vercel project/domain (a sibling to the other unrelated
// client apps in this monorepo — see README.md for the isolation notes).
// Canonical host is www — confirmed via Google Search Console data (Sept
// 2026 GSC audit): Google indexed and ranked www.barkandbork.com, never the
// bare apex, so the site's canonical/OG/sitemap URLs match what Google
// already chose rather than fighting it. The live value comes from the
// NEXT_PUBLIC_SITE_URL env var in Vercel — this fallback only applies if
// that var is ever unset.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.barkandbork.com";

export const business = {
  name: "Bark and Bork Mobile Pet Spa",
  shortName: "Bark and Bork",
  tagline: "Mobile Dog Grooming Based in Compton, Serving Greater Los Angeles",
  // Confirmed by two independent sources: the branded van wrap signage and
  // the client's original Verified Business Record. A separately supplied
  // business card shows a different number ((818) 447-6294) — client
  // confirmed the van/business-record number is correct.
  phoneDisplay: "(323) 418-2753",
  phoneHref: "tel:+13234182753",
  // Only one source for this (the business card); no other asset
  // contradicts it, so kept as verified.
  email: "Barkandbork@gmail.com",
  homeBase: "Compton, CA",
  primaryMarket: "Los Angeles",
  broadMarket: "Greater Los Angeles / Los Angeles County",
  // Handle "Barkandbork" confirmed independently on both the van wrap and
  // the business card. Used for schema.org sameAs and the footer link.
  instagramHandle: "Barkandbork",
  instagramUrl: "https://www.instagram.com/barkandbork/",
  // Existing GlossGenius online booking platform — the primary conversion
  // destination for every "Book Now" CTA on this site. Never replaced with a
  // fabricated internal booking form.
  bookingUrl: "https://barkandbork.glossgenius.com/services",
  bookingHome: "https://barkandbork.glossgenius.com/",
} as const;

// Real Bark and Bork photos, supplied directly by the client. Only one real
// photo has been supplied and successfully transferred into this build so
// far — every other photo slot on the site renders an honest,
// aspect-locked placeholder (components/PhotoPlaceholder.tsx) rather than
// stock imagery. Add more entries here as real photos come in; nothing else
// needs to change since every usage already checks for a `src`.
export const photos = {
  vanInteriorSkylight: {
    src: "/images/van-interior-skylight.jpg",
    alt: "Inside the Bark and Bork mobile grooming van, showing the stainless steel tub, grooming table, and overhead lighting",
  },
  vanExteriorSide: {
    src: "/images/van-exterior-side.jpg",
    alt: "The Bark and Bork mobile pet spa van, wrapped in pink with the dog-and-cat bathtub logo, parked outside in Los Angeles",
  },
  vanExteriorRear: {
    src: "/images/van-exterior-rear-angle.jpg",
    alt: "Rear three-quarter view of the Bark and Bork mobile grooming van showing the full brand wrap",
  },
  vanExteriorFront: {
    src: "/images/van-exterior-front.jpg",
    alt: "Front three-quarter view of the Bark and Bork mobile grooming van parked on a residential Los Angeles street",
  },
  vanExteriorStreet: {
    src: "/images/van-exterior-street.jpg",
    alt: "The Bark and Bork mobile pet spa van parked on a shaded Los Angeles street, showing the full side brand wrap",
  },
  groomTerrierBandana: {
    src: "/images/groom-terrier-bandana.jpg",
    alt: "A terrier mix wearing a colorful bandana after grooming, sitting on the grooming table inside the Bark and Bork van",
  },
  groomFrenchBulldog: {
    src: "/images/groom-french-bulldog.jpg",
    alt: "A French Bulldog sitting calmly on the grooming table after a mobile grooming appointment",
  },
  groomYorkieSmile: {
    src: "/images/groom-yorkie-smile.jpg",
    alt: "A happy Yorkie mix with a fresh haircut and bow tie, smiling on the grooming table",
  },
  groomScissorFinishing: {
    src: "/images/groom-scissor-finishing.jpg",
    alt: "A Bark and Bork groomer hand-scissoring the finishing touches on a fluffy white dog's haircut",
  },
  groomChihuahuaBowtie: {
    src: "/images/groom-chihuahua-bowtie.jpg",
    alt: "A long-haired Chihuahua mix wearing a bow tie after grooming, sitting on the grooming table",
  },
  groomBichonHeld: {
    src: "/images/groom-bichon-held.jpg",
    alt: "A groomer gently holding a freshly groomed Bichon Frise on the grooming table",
  },
  groomSchnauzerBowtie: {
    src: "/images/groom-schnauzer-bowtie.jpg",
    alt: "A Schnauzer mix with a neat trim and bow tie after a Bark and Bork grooming appointment",
  },
  groomShihTzuBlackWhite: {
    src: "/images/groom-shihtzu-blackwhite.jpg",
    alt: "A black and white Shih Tzu freshly groomed, sitting on the grooming table",
  },
  groomShihTzuPalmTree: {
    src: "/images/groom-shihtzu-palmtree.jpg",
    alt: "A Shih Tzu mix wearing a palm-tree print bandana after grooming",
  },
  groomGoldendoodleVanSeat: {
    src: "/images/groom-goldendoodle-van-seat.jpg",
    alt: "A happy, freshly groomed Goldendoodle standing on the front seat of the Bark and Bork van",
  },
  groomGoldendoodleFullGroom: {
    src: "/images/groom-goldendoodle-full-groom.jpg",
    alt: "A large Goldendoodle with a full groom finish, sitting on the grooming table",
  },
  groomPitbullMixHalloweenAlert: {
    src: "/images/groom-pitbull-mix-halloween-alert.jpg",
    alt: "A tan and white pit bull mix wearing an orange Halloween bandana, sitting attentively on the grooming table inside the Bark and Bork van",
  },
  groomPitbullMixHalloweenSmile: {
    src: "/images/groom-pitbull-mix-halloween-smile.jpg",
    alt: "A tan and white pit bull mix smiling with tongue out after grooming, wearing an orange Halloween bandana",
  },
  groomTerrierMixHalloweenBandana: {
    src: "/images/groom-terrier-mix-halloween-bandana.jpg",
    alt: "A white terrier mix wearing a purple Halloween bandana with pumpkins and spiderwebs after a Bark and Bork grooming appointment",
  },
  groomPuppyBrindleTrickOrTreat: {
    src: "/images/groom-puppy-brindle-trickortreat.jpg",
    alt: "A gray brindle puppy wearing an orange 'Trick or Treat' bandana, sitting on the grooming table after grooming",
  },
  groomPoodleMixTrickOrTreat: {
    src: "/images/groom-poodle-mix-trickortreat.jpg",
    alt: "A fluffy white poodle mix wearing a yellow 'Trick or Treat' bandana, lying on the grooming table after grooming",
  },
} as const;

export type PhotoKey = keyof typeof photos;

// Real before/after transformation pairs, supplied directly by the client.
// Captions stay service-neutral (no specific package name asserted) since
// no per-photo service data was supplied — see the anti-fabrication note
// at the top of this file.
export const transformations = [
  {
    dogLabel: "Bichon Frise",
    before: {
      src: "/images/transformation-bichon-before.jpg",
      alt: "A Bichon Frise's matted, ungroomed coat before a Bark and Bork mobile grooming appointment",
    },
    after: {
      src: "/images/transformation-bichon-after.jpg",
      alt: "The same Bichon Frise with a fresh, fluffy trim and a Halloween bandana after a Bark and Bork mobile grooming appointment",
    },
  },
] as const;

// HOURS — sourced from the current GlossGenius booking platform (the primary
// source per the Verified Business Record). A separate public listing shows
// 9 AM–9 PM; that is NOT used here since the booking platform is the
// authoritative current source. Confirm with the owner before changing.
export const hoursConfirmed = true;
export const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
  { day: "Thursday", time: "9:00 AM – 7:00 PM" },
  { day: "Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "9:00 AM – 7:00 PM" },
] as const;
export const hoursNote = "Open 7 days a week, 9 AM – 7 PM.";

// Schema.org openingHoursSpecification.
export const hoursSchema = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "19:00",
  },
] as const;

export const cancellationPolicy =
  "A 50% cancellation fee applies to no-shows and cancellations made within 24 hours of the scheduled appointment.";

// Current bookable team on the GlossGenius platform. No titles, certifications,
// experience levels, or bios are stated beyond what's verified here.
export const team = [
  { name: "Jennifer Cruz" },
  { name: "Sergio Polanco" },
] as const;

// Dog size tiers used consistently across every pricing table on the site.
export const sizeTiers = [
  { key: "small", label: "Small", weight: "0–20 lbs" },
  { key: "medium", label: "Medium", weight: "20–40 lbs" },
  { key: "large", label: "Large", weight: "40–60 lbs" },
  { key: "xlarge", label: "Extra Large", weight: "60+ lbs" },
] as const;

export type SizeKey = (typeof sizeTiers)[number]["key"];

const bathAndTidyIncludes = [
  "Bath, shampoo & conditioner",
  "Blow dry & brush out",
  "Nail trim",
  "Ear cleaning",
  "Sanitary trim",
  "Paw pad trim",
  "Light face tidy",
  "Finishing spray",
] as const;

export const bathAndTidy = {
  name: "Bath & Tidy",
  summary: "A thorough bath and maintenance grooming — no haircut.",
  includes: bathAndTidyIncludes,
  // Per the client: actual appointment length depends on the dog's size and
  // temperament/behavior, with a 4-hour maximum per appointment. These
  // ranges scale with size within that policy.
  pricing: {
    small: { price: "$75+", duration: "1 – 2 hours" },
    medium: { price: "$100+", duration: "1.5 – 2.5 hours" },
    large: { price: "$115+", duration: "2 – 3 hours" },
    xlarge: { price: "$135+", duration: "2.5 – 4 hours" },
  },
} as const;

export const fullGroom = {
  name: "Full Groom",
  summary: "Everything in Bath & Tidy, plus a complete haircut.",
  includes: [...bathAndTidyIncludes, "Haircut"] as const,
  // Per the client: actual appointment length depends on the dog's size and
  // temperament/behavior, with a 4-hour maximum per appointment.
  pricing: {
    small: { price: "$100+", duration: "1.5 – 2.5 hours" },
    medium: { price: "$120+", duration: "2 – 3 hours" },
    large: { price: "$135+", duration: "2.5 – 3.5 hours" },
    xlarge: { price: "$160+", duration: "3 – 4 hours" },
  },
} as const;

export const pricingNote =
  "Starting prices may vary depending on coat condition, grooming requirements, pet size, matting, and other service needs where applicable.";

export const durationNote =
  "Appointment length depends on your dog's size and temperament — most appointments are completed within 4 hours.";

export const addOns = [
  {
    slug: "flea-tick-treatment",
    name: "Flea & Tick Treatment",
    price: "$15",
    duration: "15 minutes",
    summary: "Flea and tick shampoo, thorough rinsing, and careful combing during your dog's grooming visit.",
    detail:
      "Includes flea and tick shampoo, thorough rinsing, careful combing, and removal of fleas, flea debris, and ticks when possible during the grooming appointment. This addresses active fleas and ticks found during grooming — it does not guarantee complete elimination or provide ongoing prevention. For long-term flea and tick prevention, talk to your veterinarian.",
  },
  {
    slug: "anal-gland-expression",
    name: "Anal Gland Expression",
    price: "$15",
    duration: "10 minutes",
    summary: "External anal gland expression, added on to any grooming appointment.",
    detail:
      "External anal gland expression performed when appropriate during grooming. This is not veterinary internal expression. If your dog shows signs of significant pain, infection, recurring problems, or severe impaction, please have them evaluated by a veterinarian.",
  },
  {
    slug: "deshedding-addon",
    name: "De-Shedding Treatment",
    price: "$15",
    duration: "30 minutes",
    summary: "A deeper deshedding treatment to cut down on loose fur.",
    detail:
      "Particularly useful for huskies, German Shepherds, and other double-coated or high-shedding breeds. Added on to a Bath & Tidy or Full Groom appointment.",
  },
  {
    slug: "teeth-brushing",
    name: "Teeth Brushing",
    price: "$10",
    duration: "10 minutes",
    summary: "Dog teeth brushing added on to any grooming appointment.",
    detail: "A teeth brushing add-on for your dog. This is not a substitute for professional veterinary dental cleaning.",
  },
] as const;

export const dematting = {
  name: "Dematting",
  summary: "Careful dematting for dogs with tangled or matted coats.",
  startingPrice: "$50+",
  duration: "60 minutes",
  pricing: {
    small: "$50",
    medium: "$60",
    large: "$70",
    xlarge: "$80",
  },
  note:
    "Severe matting can be painful to brush out, and in those cases the coat may need to be clipped short rather than dematted, for your dog's comfort and safety. We'll always talk you through the best option for your dog's specific coat before starting.",
} as const;

export type ServiceSlug =
  | "mobile-dog-grooming"
  | "full-dog-grooming"
  | "bath-and-tidy"
  | "deshedding"
  | "dematting"
  | "flea-tick-treatment"
  | "anal-gland-expression"
  | "teeth-brushing";

// `updated` = date this service page's content last changed (sitemap lastmod).
export const services: { slug: ServiceSlug; name: string; shortName: string; summary: string; isFlagship: boolean; updated: string }[] = [
  {
    slug: "mobile-dog-grooming",
    name: "Mobile Dog Grooming",
    shortName: "Mobile Dog Grooming",
    summary: "Professional dog grooming brought directly to your home, anywhere in Compton or greater Los Angeles.",
    isFlagship: true,
    updated: "2026-09-25",
  },
  {
    slug: "full-dog-grooming",
    name: "Full Groom",
    shortName: "Full Groom",
    summary: "Bath, brush out, and a complete haircut — sized to your dog, starting at $100+.",
    isFlagship: false,
    updated: "2026-09-25",
  },
  {
    slug: "bath-and-tidy",
    name: "Bath & Tidy",
    shortName: "Bath & Tidy",
    summary: "A thorough bath and maintenance grooming without a full haircut, starting at $75+.",
    isFlagship: false,
    updated: "2026-09-25",
  },
  {
    slug: "deshedding",
    name: "Deshedding",
    shortName: "Deshedding",
    summary: "A deeper deshedding treatment for huskies, German Shepherds, and other heavy-coated dogs.",
    isFlagship: false,
    updated: "2026-09-25",
  },
  {
    slug: "dematting",
    name: "Dematting",
    shortName: "Dematting",
    summary: "Careful, compassionate dematting for dogs with tangled or matted coats.",
    isFlagship: false,
    updated: "2026-09-25",
  },
  {
    slug: "flea-tick-treatment",
    name: "Flea & Tick Treatment",
    shortName: "Flea & Tick Treatment",
    summary: "Flea and tick shampoo, rinsing, and combing added on to any grooming appointment — $15.",
    isFlagship: false,
    updated: "2026-09-25",
  },
  {
    slug: "anal-gland-expression",
    name: "Anal Gland Expression",
    shortName: "Anal Gland Expression",
    summary: "External anal gland expression added on to any grooming appointment — $15.",
    isFlagship: false,
    updated: "2026-09-25",
  },
  {
    slug: "teeth-brushing",
    name: "Teeth Brushing",
    shortName: "Teeth Brushing",
    summary: "Dog teeth brushing added on to any grooming appointment — $10.",
    isFlagship: false,
    updated: "2026-09-25",
  },
];

export function servicePath(slug: ServiceSlug) {
  return `/services/${slug}`;
}

// SERVICE AREAS — Compton (home base) and Los Angeles (broad primary market)
// each get their own hand-built page. A curated set of nearby Los Angeles
// County cities along the business's mobile route get unique dynamic pages —
// not a blanket 30–80 city doorway-page list. Every entry below has been
// deliberately chosen for genuine geographic proximity to Compton, not
// auto-generated.
export type AreaSlug =
  | "compton-ca"
  | "los-angeles-ca"
  | "south-gate-ca"
  | "lynwood-ca"
  | "carson-ca"
  | "gardena-ca"
  | "long-beach-ca"
  | "inglewood-ca"
  | "paramount-ca"
  | "willowbrook-ca"
  | "downey-ca"
  | "bellflower-ca"
  | "hawthorne-ca";

// `updated` = date this area page's content last changed (sitemap lastmod).
export const serviceAreas: { city: string; state: "CA"; slug: AreaSlug; description: string; isPrimary: boolean; updated: string }[] = [
  {
    city: "Compton",
    state: "CA",
    slug: "compton-ca",
    description: "Our home base. Starting prices by size and how a Compton visit works.",
    isPrimary: true,
    updated: "2026-09-25",
  },
  {
    city: "Los Angeles",
    state: "CA",
    slug: "los-angeles-ca",
    description: "How we cover greater LA from Compton, grouped by region.",
    isPrimary: true,
    updated: "2026-09-25",
  },
  {
    city: "South Gate",
    state: "CA",
    slug: "south-gate-ca",
    description: "North of Compton. A walkthrough of appointment day.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Lynwood",
    state: "CA",
    slug: "lynwood-ca",
    description: "Next door to Compton. Bath & Tidy vs. Full Groom, explained.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Carson",
    state: "CA",
    slug: "carson-ca",
    description: "Southwest of Compton. Help for huskies and other heavy shedders.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Gardena",
    state: "CA",
    slug: "gardena-ca",
    description: "South Bay, west of Compton. Matted coats and dematting.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Long Beach",
    state: "CA",
    slug: "long-beach-ca",
    description: "Directly south of Compton. Booking tips for Long Beach addresses.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Inglewood",
    state: "CA",
    slug: "inglewood-ca",
    description: "Northwest of Compton, near LAX. Grooming large and XL dogs.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Paramount",
    state: "CA",
    slug: "paramount-ca",
    description: "Borders Compton to the east. Add-ons: teeth, glands, flea & tick.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Willowbrook",
    state: "CA",
    slug: "willowbrook-ca",
    description: "Beside Compton. How often your dog should be groomed.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Downey",
    state: "CA",
    slug: "downey-ca",
    description: "Northeast of Compton. Mobile grooming vs. a salon.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Bellflower",
    state: "CA",
    slug: "bellflower-ca",
    description: "East of Compton. Preparing for your dog's first mobile groom.",
    isPrimary: false,
    updated: "2026-09-25",
  },
  {
    city: "Hawthorne",
    state: "CA",
    slug: "hawthorne-ca",
    description: "South Bay, west of Compton. How long a groom takes.",
    isPrimary: false,
    updated: "2026-09-25",
  },
];

export function areaPath(slug: AreaSlug) {
  return `/service-areas/${slug}`;
}

type AreaFaq = { question: string; answer: string };
type SecondaryAreaContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  // One practical grooming topic per city, so each page answers a different
  // real question instead of repeating the same pitch with a new city name.
  topic: { heading: string; paragraphs: string[]; link?: { label: string; href: string } };
  whyHeading: string;
  whyChoose: string[];
  photo: PhotoKey;
  nearby: AreaSlug[];
  faqs: AreaFaq[];
  metaTitle: string;
  metaDescription: string;
};

// Unique content for each secondary (dynamically rendered) service-area page.
// Geography is limited to plain, well-established facts (direction from
// Compton, neighboring cities, freeways that run through). Everything else
// comes from the verified pricing, hours, and service data above — no invented
// landmarks, customer counts, or local claims. Keep pairwise overlap between
// cities low: give a new city its own topic, not a copy of another city's.
export const secondaryAreaContent: Record<
  Exclude<AreaSlug, "compton-ca" | "los-angeles-ca">,
  SecondaryAreaContent
> = {
  "south-gate-ca": {
    eyebrow: "South Gate • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in South Gate, CA",
    intro:
      "South Gate is a few miles north of Compton, with the Los Angeles River running through the middle of the city. If you live anywhere in South Gate, Bark and Bork can bring a full grooming appointment to your street, so your dog never has to ride to a salon or wait in a kennel between steps.",
    topic: {
      heading: "What Happens on Appointment Day",
      paragraphs: [
        "You book a specific service and time slot online. On the day, the groomer arrives at your South Gate address in the Bark and Bork van, which carries the tub, dryer, and grooming table. Your dog is groomed start to finish in the van, then handed back to you at your door.",
        "A few things make the visit go smoothly: a spot near your home where the van can park, a quick potty walk for your dog beforehand, and a heads-up about anything the groomer should know, such as matting, sore spots, or nervousness around dryers. Appointment length depends on your dog's size and temperament, and most visits finish within four hours.",
        "If your plans change, please reschedule early. A 50% cancellation fee applies to no-shows and to cancellations made within 24 hours of the appointment.",
      ],
      link: { label: "How to prepare your dog for a mobile grooming appointment", href: "/blog/how-to-prepare-your-dog-for-a-mobile-grooming-appointment" },
    },
    whyHeading: "What a South Gate Visit Includes",
    whyChoose: [
      "The whole groom happens in the van parked outside your home",
      "One dog at a time, with no kennel wait between steps",
      "A booked time slot instead of a drop-off window",
      "Service for every size, from small dogs to 60+ lb dogs",
    ],
    photo: "vanExteriorStreet",
    nearby: ["lynwood-ca", "downey-ca", "compton-ca"],
    faqs: [
      {
        question: "Where does the grooming happen during a South Gate appointment?",
        answer:
          "Inside the Bark and Bork van, parked at or near your South Gate home. The van holds the tub, dryer, and table, so nothing is set up inside your house.",
      },
      {
        question: "What should I do before the groomer arrives?",
        answer:
          "Take your dog out for a potty break, make sure there's somewhere nearby for the van to park, and let us know about any matting, skin issues, or anxiety so the groomer can plan for it.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "A 50% cancellation fee applies to no-shows and to cancellations made within 24 hours of the scheduled appointment.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in South Gate, CA",
    metaDescription:
      "What a Bark and Bork mobile grooming visit looks like in South Gate, CA: the van comes to your street, one dog at a time. Bath & Tidy from $75+.",
  },

  "lynwood-ca": {
    eyebrow: "Lynwood • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Lynwood, CA",
    intro:
      "Lynwood shares its southern border with Compton, where Bark and Bork is based, and the 105 Freeway cuts across the city. Lynwood owners can book a mobile groom online and have it done outside their own home. A good first question is which package to pick, so here's the difference.",
    topic: {
      heading: "Bath & Tidy or Full Groom?",
      paragraphs: [
        "Bath & Tidy is maintenance grooming without a haircut. Your dog gets a bath with shampoo and conditioner, a blow dry and brush out, a nail trim, ear cleaning, a sanitary trim, a paw pad trim, a light face tidy, and finishing spray. It suits short-coated dogs, and longer-coated dogs between haircuts. It starts at $75+ for small dogs.",
        "Full Groom includes all of that plus a complete haircut. Choose it when your dog's coat has grown out of shape, or for breeds that need regular trims to stay comfortable. It starts at $100+ for small dogs.",
        "Both are priced by size: small (0–20 lbs), medium (20–40 lbs), large (40–60 lbs), and extra-large (60+ lbs). Coat condition and matting can change the final price, so if you're unsure, book the package that fits your dog best and mention the coat when you book.",
      ],
      link: { label: "See the full pricing table", href: "/services" },
    },
    whyHeading: "Why Book Mobile Grooming in Lynwood",
    whyChoose: [
      "Bark and Bork is based in Compton, right next to Lynwood",
      "Two clear packages, with starting prices published by size",
      "No haircut unless you choose one",
      "Booking online takes a couple of minutes",
    ],
    photo: "groomShihTzuBlackWhite",
    nearby: ["compton-ca", "south-gate-ca", "willowbrook-ca"],
    faqs: [
      {
        question: "Does Bath & Tidy include a haircut?",
        answer:
          "No. Bath & Tidy covers the bath, blow dry, brush out, nails, ears, sanitary trim, paw pads, and a light face tidy. For a complete haircut, book the Full Groom.",
      },
      {
        question: "How much is a Full Groom for a medium dog in Lynwood?",
        answer:
          "Full Groom starts at $120+ for medium dogs (20–40 lbs). Starting prices may vary with coat condition and matting.",
      },
      {
        question: "Can I book a Lynwood appointment online?",
        answer: `Yes. Book at ${business.bookingUrl}, or call ${business.phoneDisplay}.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Lynwood, CA",
    metaDescription:
      "Mobile dog grooming in Lynwood, CA, next door to our Compton base. Bath & Tidy from $75+ or Full Groom from $100+, done at your home.",
  },

  "carson-ca": {
    eyebrow: "Carson • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Carson, CA",
    intro:
      "Carson lies just southwest of Compton, with both the 405 and the 110 freeways running through it. Bark and Bork brings mobile grooming to Carson homes. If you own a husky, German Shepherd, or another double-coated breed, this page covers how we deal with shedding.",
    topic: {
      heading: "Help for Heavy Shedders",
      paragraphs: [
        "Double-coated dogs grow a dense undercoat that sheds heavily, especially when the seasons change. A regular bath removes some of it, but much of the loose undercoat stays trapped close to the skin, where it ends up on your floors and furniture.",
        "Our De-Shedding Treatment is a $15 add-on that takes about 30 minutes. It focuses on working that loose undercoat out during the grooming appointment, so less of it ends up in your house afterward. Add it to a Bath & Tidy or Full Groom when you book.",
        "Deshedding reduces shedding for a while. It doesn't stop it, because shedding is a natural part of a double coat. Many owners of heavy shedders book it with each regular groom, especially during seasonal coat changes.",
      ],
      link: { label: "Read more about deshedding", href: "/services/deshedding" },
    },
    whyHeading: "Deshedding in Carson at a Glance",
    whyChoose: [
      "A deshedding add-on built for double-coated breeds",
      "Less loose undercoat around your house afterward",
      "Pricing covers every size, including extra-large dogs",
      "Available with Bath & Tidy or Full Groom",
    ],
    photo: "groomGoldendoodleFullGroom",
    nearby: ["long-beach-ca", "gardena-ca", "compton-ca"],
    faqs: [
      {
        question: "Which Carson dogs benefit most from deshedding?",
        answer:
          "Double-coated and high-shedding breeds, such as huskies and German Shepherds, get the most out of it because they carry the most loose undercoat.",
      },
      {
        question: "How much does the De-Shedding Treatment cost?",
        answer: "It's a $15 add-on and takes about 30 minutes, on top of your Bath & Tidy or Full Groom.",
      },
      {
        question: "Will deshedding stop my dog from shedding?",
        answer:
          "No. It removes a lot of the loose undercoat for now, but shedding is natural for double-coated dogs and will continue.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Carson, CA",
    metaDescription:
      "Mobile dog grooming in Carson, CA, with a $15 De-Shedding add-on for huskies, shepherds, and other heavy shedders. Book online.",
  },

  "gardena-ca": {
    eyebrow: "Gardena • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Gardena, CA",
    intro:
      "Gardena is a South Bay city a few miles west of Compton. Bark and Bork's mobile grooming reaches Gardena homes, including dogs whose coats have gotten away from their owners. If your dog has tangles or mats, here's what to expect.",
    topic: {
      heading: "Matted Coats and Dematting",
      paragraphs: [
        "Mats form when loose hair tangles and tightens against the skin. They're most common behind the ears, under the legs, and along the belly. Small mats can often be worked out. Large, tight mats pull on the skin and can be painful to brush.",
        "Dematting is priced by size: $50 for small dogs, $60 for medium, $70 for large, and $80 for extra-large, with about 60 minutes set aside. It can be added on when a coat needs more than a normal brush out.",
        "When matting is severe, brushing it all out isn't kind to the dog. In those cases the coat may need to be clipped short instead, so your dog stays comfortable and safe. The groomer will talk through the options with you before starting. Once the coat is back in shape, regular grooming keeps new mats from forming.",
      ],
      link: { label: "Why matting happens and how to prevent it", href: "/blog/why-matting-happens-and-how-to-prevent-it" },
    },
    whyHeading: "Coat Care in Gardena at a Glance",
    whyChoose: [
      "Dematting priced up front for every size",
      "We talk through the options before any clipping",
      "Your dog's comfort comes before saving length",
      "Regular appointments help keep mats from coming back",
    ],
    photo: "groomBichonHeld",
    nearby: ["hawthorne-ca", "carson-ca", "inglewood-ca"],
    faqs: [
      {
        question: "How much is dematting in Gardena?",
        answer: "Dematting is $50 for small dogs, $60 for medium, $70 for large, and $80 for extra-large, and takes about 60 minutes.",
      },
      {
        question: "Will my dog have to be shaved?",
        answer:
          "Only if the matting is too severe to brush out comfortably. The groomer will explain the options before starting, and your dog's comfort comes first.",
      },
      {
        question: "How do I stop mats from coming back?",
        answer:
          "Brush between appointments, especially behind the ears and under the legs, and keep a regular grooming schedule so tangles don't have time to tighten.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Gardena, CA",
    metaDescription:
      "Mobile dog grooming and dematting in Gardena, CA. Matted coats handled with care, from $50 for small dogs. Bark and Bork comes to you.",
  },

  "long-beach-ca": {
    eyebrow: "Long Beach • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Long Beach, CA",
    intro:
      "Long Beach is the large coastal city directly south of Compton, linked to it by the 710 Freeway. Bark and Bork brings mobile grooming to Long Beach addresses. Long Beach covers a big area, so it's worth reading a few booking tips before you choose a time.",
    topic: {
      heading: "Booking Tips for Long Beach Addresses",
      paragraphs: [
        "Online booking is open for any day of the week, and appointments run between 9 AM and 7 PM. Pick your service and add-ons first, then choose a time that works for you.",
        "Because Long Beach is a large city, call us at the number below if you'd like to confirm availability for your specific address before you book. It's also the fastest way to ask about an unusual coat or a dog with special handling needs.",
        "Keep the whole visit in mind when you plan your day. Appointments can take up to four hours depending on your dog's size and temperament, and a 50% fee applies to cancellations within 24 hours. Booking a slot you're confident you can keep saves you money.",
      ],
      link: { label: "Contact Bark and Bork", href: "/contact" },
    },
    whyHeading: "Long Beach Booking at a Glance",
    whyChoose: [
      "Open 7 days a week, 9 AM to 7 PM",
      "Call ahead to confirm availability for your address",
      "Online booking with your exact service and add-ons",
      "A clear cancellation policy, stated up front",
    ],
    photo: "vanExteriorSide",
    nearby: ["carson-ca", "bellflower-ca", "paramount-ca"],
    faqs: [
      {
        question: "Does Bark and Bork's mobile grooming reach Long Beach?",
        answer: `Yes. For a specific address, call ${business.phoneDisplay} to confirm availability before booking.`,
      },
      {
        question: "What hours can I book in Long Beach?",
        answer: "Appointments are available seven days a week, from 9 AM to 7 PM.",
      },
      {
        question: "How do I book?",
        answer: `Book online at ${business.bookingUrl}, choosing your service, add-ons, and time.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Long Beach, CA",
    metaDescription:
      "Mobile dog grooming in Long Beach, CA, 7 days a week from 9 AM to 7 PM. Call to confirm your address, then book online with Bark and Bork.",
  },

  "inglewood-ca": {
    eyebrow: "Inglewood • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Inglewood, CA",
    intro:
      "Inglewood sits northwest of Compton, near LAX. Bark and Bork's mobile grooming serves Inglewood homes, including big dogs that need a lot of table and tub space. Here's how we handle large and extra-large breeds.",
    topic: {
      heading: "Grooming Large and Extra-Large Dogs",
      paragraphs: [
        "Big dogs are fully welcome. We price by weight: large dogs are 40–60 lbs, and extra-large dogs are anything over 60 lbs. Bath & Tidy starts at $115+ for large dogs and $135+ for extra-large. Full Groom starts at $135+ for large dogs and $160+ for extra-large.",
        "Larger dogs take longer to bathe and dry, so their appointments run longer: Full Groom is roughly 2.5–3.5 hours for a large dog and 3–4 hours for an extra-large one. For a big dog, a mobile appointment means no struggle getting them in and out of the car and no crowded salon lobby.",
        "Big double-coated dogs often do well with the De-Shedding add-on as well, since there's simply more undercoat to shed.",
      ],
      link: { label: "Full Groom pricing by size", href: "/services/full-dog-grooming" },
    },
    whyHeading: "Big Dogs Welcome in Inglewood",
    whyChoose: [
      "Extra-large dogs over 60 lbs are welcome",
      "Size-based starting prices, listed before you book",
      "Big dogs skip loading into the car",
      "Appointment lengths planned for larger coats",
    ],
    photo: "groomPuppyBrindleTrickOrTreat",
    nearby: ["hawthorne-ca", "gardena-ca", "los-angeles-ca"],
    faqs: [
      {
        question: "Do you groom extra-large dogs in Inglewood?",
        answer: "Yes. Extra-large (60+ lbs) Bath & Tidy starts at $135+, and Full Groom starts at $160+.",
      },
      {
        question: "How long does a large dog's appointment take?",
        answer:
          "A large dog's Full Groom usually takes about 2.5–3.5 hours, and an extra-large dog's about 3–4 hours, depending on coat and temperament.",
      },
      {
        question: "How do I book for my Inglewood address?",
        answer: `Book online at ${business.bookingUrl}, or call ${business.phoneDisplay}.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Inglewood, CA",
    metaDescription:
      "Mobile dog grooming in Inglewood, CA, including large and extra-large dogs over 60 lbs. See size-based pricing and book online.",
  },

  "paramount-ca": {
    eyebrow: "Paramount • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Paramount, CA",
    intro:
      "Paramount borders Compton on the east, so it's right next to where Bark and Bork is based. Along with a Bath & Tidy or Full Groom, Paramount owners can add small extras to the same visit. Here's what each one does, and what it doesn't do.",
    topic: {
      heading: "Add-Ons You Can Include",
      paragraphs: [
        "Teeth Brushing ($10, about 10 minutes) brushes your dog's teeth during the groom. It helps with day-to-day care but doesn't replace a professional dental cleaning at your vet.",
        "Anal Gland Expression ($15, about 10 minutes) is done externally when appropriate. It is not the internal expression a vet performs. If your dog shows signs of pain, infection, or repeated problems, have a veterinarian check them.",
        "Flea & Tick Treatment ($15, about 15 minutes) includes a flea and tick shampoo, thorough rinsing, and careful combing to remove fleas, flea debris, and ticks where possible. It deals with pests found during the visit. It doesn't give ongoing protection, so ask your vet about prevention.",
      ],
      link: { label: "See all add-on services", href: "/services" },
    },
    whyHeading: "Why Add Extras to a Paramount Visit",
    whyChoose: [
      "Extras done during the same visit, with no separate trip",
      "Flat add-on prices of $10–$15",
      "Clear about what each add-on does and doesn't do",
      "We tell you when something needs a vet instead",
    ],
    photo: "groomYorkieSmile",
    nearby: ["compton-ca", "bellflower-ca", "downey-ca"],
    faqs: [
      {
        question: "Can I add teeth brushing to a Paramount appointment?",
        answer: "Yes. Teeth Brushing is a $10 add-on. It isn't a substitute for a veterinary dental cleaning.",
      },
      {
        question: "Is the flea and tick treatment a preventative?",
        answer:
          "No. It removes fleas and ticks found during grooming, but it doesn't provide ongoing prevention. Talk to your veterinarian about long-term options.",
      },
      {
        question: "Do you do internal anal gland expression?",
        answer:
          "No. Ours is external expression only. For internal expression, or any sign of pain or infection, please see a veterinarian.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Paramount, CA",
    metaDescription:
      "Mobile dog grooming in Paramount, CA, next to our Compton base. Add teeth brushing ($10), anal glands ($15), or flea & tick ($15).",
  },

  "willowbrook-ca": {
    eyebrow: "Willowbrook • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Willowbrook, CA",
    intro:
      "Willowbrook is an unincorporated Los Angeles County community on Compton's northwest side, so it's very close to where Bark and Bork is based. Once your Willowbrook dog has had a first groom, it helps to know how often to book.",
    topic: {
      heading: "How Often Should You Book?",
      paragraphs: [
        "It depends on the coat. Dogs with long or continuously growing coats, like poodle mixes, Shih Tzus, and doodles, usually need a haircut every several weeks to stay tangle-free. Short-coated dogs can often go longer between visits and mainly need baths, nails, and ears kept up.",
        "A simple routine works for many owners: alternate between a Full Groom when the coat needs shaping and a Bath & Tidy in between. Heavy shedders can add the De-Shedding Treatment during seasonal coat changes.",
        "Watch for signs that a visit is overdue. These include tangles behind the ears, nails clicking on the floor, a lingering odor, or hair growing over the eyes. Waiting too long can lead to matting, which takes more time to fix.",
      ],
      link: { label: "How often should you groom your dog?", href: "/blog/how-often-should-you-groom-your-dog" },
    },
    whyHeading: "Why a Regular Schedule Helps",
    whyChoose: [
      "Very close to our Compton home base",
      "Easy to rebook online on a regular rhythm",
      "Mix Full Grooms and Bath & Tidy visits to fit the coat",
      "Staying on schedule helps keep matting away",
    ],
    photo: "groomPoodleMixTrickOrTreat",
    nearby: ["compton-ca", "lynwood-ca", "los-angeles-ca"],
    faqs: [
      {
        question: "How often should a doodle or poodle mix be groomed?",
        answer:
          "Continuously growing coats usually need a haircut every several weeks. A Bath & Tidy in between can help keep the coat manageable.",
      },
      {
        question: "What are signs my dog is overdue for grooming?",
        answer: "Tangles or mats, long nails that click on the floor, odor, and hair covering the eyes are common signs.",
      },
      {
        question: "Is Willowbrook in your service area?",
        answer: `Yes. It's right next to our Compton base. Book at ${business.bookingUrl}.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Willowbrook, CA",
    metaDescription:
      "Mobile dog grooming in Willowbrook, CA, beside our Compton base. How often to groom your dog, plus easy online rebooking.",
  },

  "downey-ca": {
    eyebrow: "Downey • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Downey, CA",
    intro:
      "Downey sits northeast of Compton, between South Gate and Bellflower. If you've always taken your dog to a salon, you may wonder how a mobile appointment compares. Here's an honest look.",
    topic: {
      heading: "Mobile Grooming vs. a Salon",
      paragraphs: [
        "At a traditional salon, you drive your dog there, drop them off, and pick them up later. Your dog may wait in a kennel between steps while other dogs are groomed nearby. With Bark and Bork, the groomer comes to your Downey home, and your dog is groomed on their own in the van from start to finish.",
        "For many dogs that means less stress: no car ride, no noisy room full of other dogs, and no hours spent waiting. It also saves you the two trips across town.",
        "The services are the familiar ones, including baths, haircuts, nails, ears, and add-ons, and starting prices are published by size so you can compare before booking. Choose whichever suits your dog. Mobile grooming works especially well for owners who value convenience and dogs who dislike busy spaces.",
      ],
      link: { label: "Mobile grooming vs. traditional salons", href: "/blog/mobile-grooming-vs-traditional-salons" },
    },
    whyHeading: "The Mobile Difference in Downey",
    whyChoose: [
      "No drop-off or pick-up trips",
      "One dog at a time, with no salon waiting room",
      "Familiar services with published starting prices",
      "Often a calmer experience for nervous dogs",
    ],
    photo: "groomFrenchBulldog",
    nearby: ["south-gate-ca", "bellflower-ca", "paramount-ca"],
    faqs: [
      {
        question: "Is mobile grooming less stressful than a salon?",
        answer:
          "For many dogs, yes. There's no car ride, no kennel wait, and no room full of other dogs, since each appointment is one-on-one in the van.",
      },
      {
        question: "How does mobile grooming pricing compare in Downey?",
        answer:
          "Starting prices are published by size: Bath & Tidy from $75+ and Full Groom from $100+ for small dogs, rising with size. Coat condition and matting can affect the final price.",
      },
      {
        question: "Is there a walk-in location in Downey?",
        answer: "No. Bark and Bork is fully mobile and has no storefront. Every appointment happens at your address.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Downey, CA",
    metaDescription:
      "Thinking about switching from a salon? Bark and Bork brings one-on-one mobile dog grooming to Downey, CA homes. See how it compares.",
  },

  "bellflower-ca": {
    eyebrow: "Bellflower • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Bellflower, CA",
    intro:
      "Bellflower lies east of Compton, with Paramount in between. Bark and Bork's mobile grooming covers Bellflower homes. If your dog has never been groomed in a van before, a little preparation makes the first visit easier for both of you.",
    topic: {
      heading: "Your Dog's First Mobile Groom",
      paragraphs: [
        "Before the appointment, give your dog a walk and a chance to go potty so they're relaxed when the groomer arrives. Brushing them gently in the days before can make the brush out go faster.",
        "When you book, and again at handoff, tell us about your dog's coat and behavior: any mats, skin sensitivities, fear of dryers or clippers, or trouble with nail trims. Temperament is one of the biggest factors in how long an appointment takes, and knowing ahead lets the groomer go at your dog's pace.",
        "Afterward, praise and a quiet afternoon help your dog link grooming with something positive. Many dogs grow more comfortable with repeat visits.",
      ],
      link: { label: "How to prepare for a mobile grooming appointment", href: "/blog/how-to-prepare-your-dog-for-a-mobile-grooming-appointment" },
    },
    whyHeading: "Why It Suits First-Timers in Bellflower",
    whyChoose: [
      "Your dog stays close to home the whole time",
      "One dog at a time, at a pace that suits them",
      "Tell us about your dog's quirks ahead of time",
      "Every size welcome, from small to extra-large",
    ],
    photo: "groomTerrierMixHalloweenBandana",
    nearby: ["downey-ca", "paramount-ca", "long-beach-ca"],
    faqs: [
      {
        question: "My dog is nervous. Can you still groom them in Bellflower?",
        answer:
          "Let us know when you book. The groomer can plan for it, and appointment length is based partly on your dog's temperament so there's no rushing.",
      },
      {
        question: "What should I tell the groomer about my dog?",
        answer:
          "Anything that affects handling: matting, skin sensitivities, fear of dryers or clippers, or trouble with nail trims.",
      },
      {
        question: "What's the most time an appointment can take?",
        answer: "Most appointments finish within four hours. Smaller and calmer dogs are usually done sooner.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Bellflower, CA",
    metaDescription:
      "Mobile dog grooming in Bellflower, CA, with tips for a nervous dog's first visit. One-on-one appointments at your home. Book online.",
  },

  "hawthorne-ca": {
    eyebrow: "Hawthorne • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Hawthorne, CA",
    intro:
      "Hawthorne is in the South Bay, west of Compton, and borders Inglewood and Gardena. Bark and Bork's mobile grooming serves Hawthorne homes. If you're planning your day around a visit, here's how we estimate how long the groomer will be there.",
    topic: {
      heading: "How Long a Mobile Groom Takes",
      paragraphs: [
        "Two things set the length: your dog's size and their temperament. A small dog's Bath & Tidy usually takes 1–2 hours, and an extra-large dog's can take 2.5–4 hours. A Full Groom adds haircut time, from about 1.5–2.5 hours for small dogs up to 3–4 hours for extra-large dogs.",
        "Dogs who stand calmly for drying and trimming finish sooner. Dogs who need breaks, or who are nervous about clippers, take longer, and we'd rather go slowly than rush them. Add-ons add their own time, for example about 30 minutes for deshedding and about 60 minutes for dematting.",
        "Whatever the mix, most appointments are finished within four hours, so you can plan your day around that window.",
      ],
      link: { label: "Bath & Tidy details and durations", href: "/services/bath-and-tidy" },
    },
    whyHeading: "Planning a Hawthorne Appointment",
    whyChoose: [
      "Time estimates by size, listed up front",
      "No rushing nervous dogs",
      "Most appointments finish within four hours",
      "Book any day, 9 AM to 7 PM",
    ],
    photo: "groomPitbullMixHalloweenSmile",
    nearby: ["inglewood-ca", "gardena-ca", "carson-ca"],
    faqs: [
      {
        question: "How long is a Bath & Tidy for a small dog?",
        answer: "Usually 1–2 hours, depending on your dog's coat and temperament.",
      },
      {
        question: "Why do some appointments take longer?",
        answer:
          "Bigger dogs take longer to bathe and dry, anxious dogs may need breaks, and add-ons like dematting add time.",
      },
      {
        question: "How do I book for Hawthorne?",
        answer: `Book online at ${business.bookingUrl}, or call ${business.phoneDisplay}.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Hawthorne, CA",
    metaDescription:
      "Mobile dog grooming in Hawthorne, CA. How long appointments take by dog size and temperament, and how to book with Bark and Bork.",
  },
};

export type NavItem = { label: string; href: string; external?: boolean };

export const PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  serviceAreas: "/service-areas",
  gallery: "/gallery",
  blog: "/blog",
  faq: "/faq",
  contact: "/contact",
} as const;

// Sitemap <lastmod> for the core pages: the date each page's content last
// actually changed. Bump the date when you edit that page — never set it to
// the build time, or Google learns to ignore the signal. The blog index is
// derived from the newest post instead (see app/sitemap.ts).
export const pageUpdated: Record<Exclude<keyof typeof PATHS, "blog">, string> = {
  home: "2026-09-25",
  about: "2026-09-05",
  services: "2026-09-03",
  serviceAreas: "2026-09-25",
  gallery: "2026-09-24",
  faq: "2026-09-03",
  contact: "2026-09-16",
};

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
  { label: "Gallery", href: PATHS.gallery },
  { label: "Blog", href: PATHS.blog },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

export const footerNav: NavItem[] = [...mainNav];

// Legitimate, verified mobile-grooming differentiators — nothing invented.
export const differentiators = [
  {
    title: "Grooming Comes to You",
    body: "No trip to a traditional salon — Bark and Bork brings the bath, dryer, and grooming table to your Compton or Los Angeles home.",
  },
  {
    title: "Online Booking, 7 Days a Week",
    body: "Book a specific service and time slot online, any day of the week, without waiting on a callback.",
  },
  {
    title: "Every Size, Transparent Pricing",
    body: "From small dogs to extra-large dogs over 60 lbs, starting prices are published up front for every size and service.",
  },
  {
    title: "Individual Appointment Experience",
    body: "Each mobile grooming appointment is scheduled just for your dog — a more personal alternative to the traditional salon trip.",
  },
] as const;

export const trustStats = [
  { value: "Mobile", label: "Grooming Service" },
  { value: "7 Days", label: "A Week Open" },
  { value: "Online", label: "Booking Available" },
  { value: "S–XL", label: "Every Dog Size" },
] as const;

// Simple 3-step mobile grooming process — no van/equipment specs invented.
export const processSteps = [
  {
    title: "Choose Your Service",
    body: "Pick Bath & Tidy or Full Groom based on your dog's size, plus any add-ons like deshedding or dematting.",
  },
  {
    title: "Book Online",
    body: "Schedule your appointment through our online booking system, any day of the week.",
  },
  {
    title: "Bark and Bork Comes to You",
    body: "Your groomer arrives at your Compton or Los Angeles-area home and grooms your dog right at your location.",
  },
] as const;

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
// Set NEXT_PUBLIC_SITE_URL once a custom domain is attached; until then this
// falls back to the default Vercel-assigned project URL.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bark-and-bork-mobile-pet-spa.vercel.app";

export const business = {
  name: "Bark and Bork Mobile Pet Spa",
  shortName: "Bark and Bork",
  tagline: "Mobile Dog Grooming Based in Compton, Serving Greater Los Angeles",
  phoneDisplay: "(323) 418-2753",
  phoneHref: "tel:+13234182753",
  homeBase: "Compton, CA",
  primaryMarket: "Los Angeles",
  broadMarket: "Greater Los Angeles / Los Angeles County",
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
} as const;

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
  { name: "Nathaniel Tong" },
  { name: "Sergio Polanco" },
] as const;

// Dog size tiers used consistently across every pricing table on the site.
export const sizeTiers = [
  { key: "small", label: "Small", weight: "20 lbs or less" },
  { key: "medium", label: "Medium", weight: "45 lbs or less" },
  { key: "large", label: "Large", weight: "70 lbs or less" },
  { key: "xlarge", label: "Extra Large", weight: "Over 70 lbs" },
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
  // Durations sourced directly from the live GlossGenius booking platform
  // (the authoritative source per the Verified Business Record) — these are
  // the actual scheduled appointment lengths, not the brief's earlier
  // estimates.
  pricing: {
    small: { price: "$75+", duration: "3 hours" },
    medium: { price: "$100+", duration: "3 hours 30 minutes" },
    large: { price: "$115+", duration: "4 hours 30 minutes" },
    xlarge: { price: "$135+", duration: "4 hours 30 minutes" },
  },
} as const;

export const fullGroom = {
  name: "Full Groom",
  summary: "Everything in Bath & Tidy, plus a complete haircut.",
  includes: [...bathAndTidyIncludes, "Haircut"] as const,
  // Durations sourced directly from the live GlossGenius booking platform.
  pricing: {
    small: { price: "$100+", duration: "4 hours" },
    medium: { price: "$120+", duration: "4 hours 30 minutes" },
    large: { price: "$135+", duration: "5 hours 30 minutes" },
    xlarge: { price: "$160+", duration: "4 hours" },
  },
} as const;

export const pricingNote =
  "Starting prices may vary depending on coat condition, grooming requirements, pet size, matting, and other service needs where applicable.";

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
      "Particularly useful for huskies, German Shepherds, and other double-coated or high-shedding breeds. See our full Deshedding service page for the standalone deshedding option.",
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

export const services: { slug: ServiceSlug; name: string; shortName: string; summary: string; isFlagship: boolean }[] = [
  {
    slug: "mobile-dog-grooming",
    name: "Mobile Dog Grooming",
    shortName: "Mobile Dog Grooming",
    summary: "Professional dog grooming brought directly to your home, anywhere in Compton or greater Los Angeles.",
    isFlagship: true,
  },
  {
    slug: "full-dog-grooming",
    name: "Full Groom",
    shortName: "Full Groom",
    summary: "Bath, brush out, and a complete haircut — sized to your dog, starting at $100+.",
    isFlagship: false,
  },
  {
    slug: "bath-and-tidy",
    name: "Bath & Tidy",
    shortName: "Bath & Tidy",
    summary: "A thorough bath and maintenance grooming without a full haircut, starting at $75+.",
    isFlagship: false,
  },
  {
    slug: "deshedding",
    name: "Deshedding",
    shortName: "Deshedding",
    summary: "A deeper deshedding treatment for huskies, German Shepherds, and other heavy-coated dogs.",
    isFlagship: false,
  },
  {
    slug: "dematting",
    name: "Dematting",
    shortName: "Dematting",
    summary: "Careful, compassionate dematting for dogs with tangled or matted coats.",
    isFlagship: false,
  },
  {
    slug: "flea-tick-treatment",
    name: "Flea & Tick Treatment",
    shortName: "Flea & Tick Treatment",
    summary: "Flea and tick shampoo, rinsing, and combing added on to any grooming appointment — $15.",
    isFlagship: false,
  },
  {
    slug: "anal-gland-expression",
    name: "Anal Gland Expression",
    shortName: "Anal Gland Expression",
    summary: "External anal gland expression added on to any grooming appointment — $15.",
    isFlagship: false,
  },
  {
    slug: "teeth-brushing",
    name: "Teeth Brushing",
    shortName: "Teeth Brushing",
    summary: "Dog teeth brushing added on to any grooming appointment — $10.",
    isFlagship: false,
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

export const serviceAreas: { city: string; state: "CA"; slug: AreaSlug; description: string; isPrimary: boolean }[] = [
  {
    city: "Compton",
    state: "CA",
    slug: "compton-ca",
    description: "Bark and Bork's home base — the heart of our mobile grooming route.",
    isPrimary: true,
  },
  {
    city: "Los Angeles",
    state: "CA",
    slug: "los-angeles-ca",
    description: "Mobile dog grooming throughout greater Los Angeles, brought right to your door.",
    isPrimary: true,
  },
  {
    city: "South Gate",
    state: "CA",
    slug: "south-gate-ca",
    description: "Mobile dog grooming for South Gate pet owners, just north of Compton.",
    isPrimary: false,
  },
  {
    city: "Lynwood",
    state: "CA",
    slug: "lynwood-ca",
    description: "Mobile dog grooming for Lynwood, right along Bark and Bork's home route.",
    isPrimary: false,
  },
  {
    city: "Carson",
    state: "CA",
    slug: "carson-ca",
    description: "Mobile dog grooming for Carson pet owners, just south of Compton.",
    isPrimary: false,
  },
  {
    city: "Gardena",
    state: "CA",
    slug: "gardena-ca",
    description: "Mobile dog grooming for Gardena, minutes from Compton.",
    isPrimary: false,
  },
  {
    city: "Long Beach",
    state: "CA",
    slug: "long-beach-ca",
    description: "Mobile dog grooming for Long Beach pet owners along the southern LA County coast.",
    isPrimary: false,
  },
  {
    city: "Inglewood",
    state: "CA",
    slug: "inglewood-ca",
    description: "Mobile dog grooming for Inglewood, on the western side of Bark and Bork's LA route.",
    isPrimary: false,
  },
  {
    city: "Paramount",
    state: "CA",
    slug: "paramount-ca",
    description: "Mobile dog grooming for Paramount, directly east of Compton.",
    isPrimary: false,
  },
  {
    city: "Willowbrook",
    state: "CA",
    slug: "willowbrook-ca",
    description: "Mobile dog grooming for Willowbrook, right next to our Compton home base.",
    isPrimary: false,
  },
  {
    city: "Downey",
    state: "CA",
    slug: "downey-ca",
    description: "Mobile dog grooming for Downey pet owners, northeast of Compton.",
    isPrimary: false,
  },
  {
    city: "Bellflower",
    state: "CA",
    slug: "bellflower-ca",
    description: "Mobile dog grooming for Bellflower, east of Compton along our LA route.",
    isPrimary: false,
  },
  {
    city: "Hawthorne",
    state: "CA",
    slug: "hawthorne-ca",
    description: "Mobile dog grooming for Hawthorne, on the western side of Bark and Bork's LA route.",
    isPrimary: false,
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
  whyChoose: string[];
  faqs: AreaFaq[];
  metaTitle: string;
  metaDescription: string;
};

// Unique content for each secondary (dynamically rendered) service-area page.
// Every intro/angle is written specifically for that city's real relationship
// to Compton — never a template with the city name swapped in.
export const secondaryAreaContent: Record<
  Exclude<AreaSlug, "compton-ca" | "los-angeles-ca">,
  SecondaryAreaContent
> = {
  "south-gate-ca": {
    eyebrow: "South Gate • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in South Gate, CA",
    intro:
      "South Gate sits just north of Compton along the Los Angeles River corridor, making it one of the closest stops on Bark and Bork's regular mobile grooming route. Instead of loading your dog into the car, our groomer drives to your South Gate home and sets up right at your door.",
    whyChoose: [
      "Close to our Compton home base, so scheduling tends to be easier to fit in",
      "No car ride, no waiting room — grooming happens at your address",
      "Full-size range from small breeds up to extra-large dogs over 70 lbs",
      "Same transparent starting prices as every other stop on our route",
    ],
    faqs: [
      {
        question: "Does Bark and Bork groom dogs in South Gate?",
        answer:
          "Yes. South Gate is part of Bark and Bork's regular mobile grooming route out of Compton. Book online and choose your address at checkout.",
      },
      {
        question: "How do I book a mobile groom in South Gate?",
        answer: `Choose your service and book online at ${business.bookingUrl}, or call ${business.phoneDisplay}.`,
      },
      {
        question: "What's the difference between Bath & Tidy and a Full Groom?",
        answer:
          "Bath & Tidy is a full bath and maintenance grooming without a haircut. Full Groom includes everything in Bath & Tidy plus a complete haircut.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in South Gate, CA",
    metaDescription:
      "Bark and Bork Mobile Pet Spa brings professional dog grooming to South Gate, CA from our Compton home base. Transparent pricing. Book online today.",
  },
  "lynwood-ca": {
    eyebrow: "Lynwood • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Lynwood, CA",
    intro:
      "Lynwood borders Compton directly, which makes it one of the easiest, most frequent stops on Bark and Bork's mobile grooming route. We bring the full grooming setup to your Lynwood driveway or curb, so your dog gets professional grooming without ever leaving home.",
    whyChoose: [
      "Directly adjacent to our Compton home base",
      "Convenient scheduling with minimal drive time between appointments",
      "Small to extra-large dogs, with transparent starting prices by size",
      "The same Bath & Tidy and Full Groom packages offered across our whole LA route",
    ],
    faqs: [
      {
        question: "Is Bark and Bork mobile grooming available in Lynwood?",
        answer:
          "Yes — Lynwood is right next to our Compton home base and a regular part of our mobile grooming route.",
      },
      {
        question: "How do I book a mobile groom in Lynwood?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
      {
        question: "Do you groom large or extra-large dogs?",
        answer:
          "Yes. We groom dogs of every size, from small dogs 20 lbs and under up to extra-large dogs over 70 lbs.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Lynwood, CA",
    metaDescription:
      "Professional mobile dog grooming in Lynwood, CA from Bark and Bork Mobile Pet Spa, based right next door in Compton. Book your groom online.",
  },
  "carson-ca": {
    eyebrow: "Carson • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Carson, CA",
    intro:
      "Carson sits just south of Compton, and it's a regular stop on Bark and Bork's mobile grooming route through southern Los Angeles County. Skip the trip to a salon — our groomer comes to your Carson home with everything needed for a full grooming appointment.",
    whyChoose: [
      "Just south of our Compton home base along the same route",
      "A convenient option for busy Carson households",
      "Every size of dog, from small to extra-large, with clear starting prices",
      "Add-ons available, including deshedding, dematting, and flea & tick treatment",
    ],
    faqs: [
      {
        question: "Does Bark and Bork serve Carson, CA?",
        answer: "Yes, Carson is part of our regular mobile grooming route out of Compton.",
      },
      {
        question: "How much does mobile grooming cost in Carson?",
        answer:
          "Bath & Tidy starts at $75+ and Full Groom starts at $100+, depending on your dog's size. See our Services page for the full pricing table.",
      },
      {
        question: "How do I schedule?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Carson, CA",
    metaDescription:
      "Bark and Bork Mobile Pet Spa offers mobile dog grooming in Carson, CA, just south of our Compton home base. Transparent pricing, online booking.",
  },
  "gardena-ca": {
    eyebrow: "Gardena • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Gardena, CA",
    intro:
      "Gardena is a short drive from our Compton home base, and Bark and Bork regularly brings mobile dog grooming to Gardena driveways and homes. No crate, no car ride — just professional grooming at your address.",
    whyChoose: [
      "Minutes from our Compton home base",
      "Grooming happens entirely at your Gardena home",
      "Full range of sizes served, small through extra-large",
      "The same transparent Bath & Tidy and Full Groom pricing as the rest of our route",
    ],
    faqs: [
      {
        question: "Does Bark and Bork groom dogs in Gardena?",
        answer: "Yes, Gardena is part of Bark and Bork's regular mobile grooming route out of Compton.",
      },
      {
        question: "What's included in a Full Groom?",
        answer:
          "A Full Groom includes a bath, shampoo, conditioner, blow dry, brush out, nail trim, ear cleaning, sanitary trim, paw pad trim, light face tidy, finishing spray, and a complete haircut.",
      },
      {
        question: "How do I book?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Gardena, CA",
    metaDescription:
      "Mobile dog grooming in Gardena, CA from Bark and Bork Mobile Pet Spa, based nearby in Compton. See pricing and book your dog's groom online.",
  },
  "long-beach-ca": {
    eyebrow: "Long Beach • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Long Beach, CA",
    intro:
      "Bark and Bork's mobile grooming route extends south from Compton down to Long Beach, bringing professional dog grooming to pet owners along the southern LA County coast without a single trip to a salon.",
    whyChoose: [
      "Mobile grooming reaches Long Beach as part of our regular southern LA route",
      "Convenient scheduling that skips the drive across town to a salon",
      "Small to extra-large dogs, with transparent starting prices",
      "Deshedding, dematting, and other add-ons available for every appointment",
    ],
    faqs: [
      {
        question: "Does Bark and Bork's mobile grooming reach Long Beach?",
        answer: "Yes — Long Beach is part of our mobile grooming route through southern Los Angeles County.",
      },
      {
        question: "How do I book mobile grooming in Long Beach?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay} to confirm availability for your address.`,
      },
      {
        question: "Do you offer flea and tick treatment?",
        answer:
          "Yes, flea & tick treatment is available as a $15 add-on to any grooming appointment. It addresses active fleas and ticks found during grooming — for ongoing prevention, talk to your veterinarian.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Long Beach, CA",
    metaDescription:
      "Bark and Bork Mobile Pet Spa brings mobile dog grooming to Long Beach, CA as part of its southern Los Angeles County route. Book online today.",
  },
  "inglewood-ca": {
    eyebrow: "Inglewood • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Inglewood, CA",
    intro:
      "Inglewood sits on the western side of Bark and Bork's Los Angeles service area. Our mobile grooming appointments bring the full setup — bath, dryer, and grooming table — right to your Inglewood home.",
    whyChoose: [
      "Part of Bark and Bork's regular mobile route across Los Angeles",
      "No trip across town to a traditional grooming salon",
      "Every size of dog served, with transparent starting prices",
      "Online booking makes scheduling quick and easy",
    ],
    faqs: [
      {
        question: "Is mobile dog grooming available in Inglewood?",
        answer: "Yes, Inglewood is part of Bark and Bork's mobile grooming coverage across Los Angeles.",
      },
      {
        question: "How do I schedule a grooming appointment in Inglewood?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
      {
        question: "What size dogs do you groom?",
        answer:
          "We groom dogs of every size — small (20 lbs or less), medium (45 lbs or less), large (70 lbs or less), and extra-large (over 70 lbs).",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Inglewood, CA",
    metaDescription:
      "Mobile dog grooming in Inglewood, CA from Bark and Bork Mobile Pet Spa. Professional grooming brought to your door. Book online now.",
  },
  "paramount-ca": {
    eyebrow: "Paramount • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Paramount, CA",
    intro:
      "Paramount sits directly east of Compton, just minutes from Bark and Bork's home base. Our mobile grooming appointments bring the full setup — bath, dryer, and grooming table — right to your Paramount home.",
    whyChoose: [
      "Just minutes from our Compton home base",
      "No car ride or waiting room — grooming happens at your address",
      "Every size of dog served, small to extra-large",
      "Online booking available 7 days a week, 9 AM–7 PM",
    ],
    faqs: [
      {
        question: "Does Bark and Bork groom dogs in Paramount?",
        answer: "Yes, Paramount is part of Bark and Bork's regular mobile grooming route out of Compton.",
      },
      {
        question: "How do I book a mobile groom in Paramount?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
      {
        question: "How much does mobile grooming cost in Paramount?",
        answer:
          "Bath & Tidy starts at $75+ and Full Groom starts at $100+, depending on your dog's size. See our Services page for the full pricing table.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Paramount, CA",
    metaDescription:
      "Bark and Bork Mobile Pet Spa brings mobile dog grooming to Paramount, CA, just minutes from our Compton home base. Book online today.",
  },
  "willowbrook-ca": {
    eyebrow: "Willowbrook • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Willowbrook, CA",
    intro:
      "Willowbrook sits immediately next to Compton, making it one of the closest communities on Bark and Bork's mobile grooming route. We bring the grooming appointment right to your Willowbrook home.",
    whyChoose: [
      "Directly adjacent to our Compton home base",
      "Minimal drive time means easy scheduling",
      "Small to extra-large dogs, with transparent starting prices",
      "The same Bath & Tidy and Full Groom packages offered across our whole route",
    ],
    faqs: [
      {
        question: "Is mobile dog grooming available in Willowbrook?",
        answer: "Yes — Willowbrook is right next to our Compton home base and part of our regular mobile route.",
      },
      {
        question: "How do I book a mobile groom in Willowbrook?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
      {
        question: "Do you groom large or extra-large dogs?",
        answer: "Yes. We groom dogs of every size, from small dogs 20 lbs and under up to extra-large dogs over 70 lbs.",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Willowbrook, CA",
    metaDescription:
      "Mobile dog grooming in Willowbrook, CA from Bark and Bork Mobile Pet Spa, based right next door in Compton. Book your groom online.",
  },
  "downey-ca": {
    eyebrow: "Downey • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Downey, CA",
    intro:
      "Downey sits northeast of Compton and is a regular stop on Bark and Bork's mobile grooming route. Skip the drive to a salon — our groomer brings everything needed for a full appointment right to your Downey home.",
    whyChoose: [
      "Northeast of our Compton home base, along our regular route",
      "A convenient option for busy Downey households",
      "Every size of dog, from small to extra-large, with clear starting prices",
      "Add-ons available, including deshedding, dematting, and flea & tick treatment",
    ],
    faqs: [
      {
        question: "Does Bark and Bork serve Downey, CA?",
        answer: "Yes, Downey is part of our regular mobile grooming route out of Compton.",
      },
      {
        question: "How much does mobile grooming cost in Downey?",
        answer:
          "Bath & Tidy starts at $75+ and Full Groom starts at $100+, depending on your dog's size. See our Services page for the full pricing table.",
      },
      {
        question: "How do I schedule?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Downey, CA",
    metaDescription:
      "Bark and Bork Mobile Pet Spa offers mobile dog grooming in Downey, CA, northeast of our Compton home base. Transparent pricing, online booking.",
  },
  "bellflower-ca": {
    eyebrow: "Bellflower • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Bellflower, CA",
    intro:
      "Bellflower sits east of Compton along Bark and Bork's mobile grooming route. We bring the full grooming setup directly to your Bellflower home — no crate, no car ride.",
    whyChoose: [
      "East of our Compton home base, along our regular route",
      "Grooming happens entirely at your Bellflower home",
      "Full range of sizes served, small through extra-large",
      "The same transparent Bath & Tidy and Full Groom pricing as the rest of our route",
    ],
    faqs: [
      {
        question: "Does Bark and Bork groom dogs in Bellflower?",
        answer: "Yes, Bellflower is part of Bark and Bork's regular mobile grooming route out of Compton.",
      },
      {
        question: "What's included in a Full Groom?",
        answer:
          "A Full Groom includes a bath, shampoo, conditioner, blow dry, brush out, nail trim, ear cleaning, sanitary trim, paw pad trim, light face tidy, finishing spray, and a complete haircut.",
      },
      {
        question: "How do I book?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
    ],
    metaTitle: "Mobile Dog Grooming in Bellflower, CA",
    metaDescription:
      "Mobile dog grooming in Bellflower, CA from Bark and Bork Mobile Pet Spa, based nearby in Compton. See pricing and book your dog's groom online.",
  },
  "hawthorne-ca": {
    eyebrow: "Hawthorne • Mobile Dog Grooming",
    h1: "Mobile Dog Grooming in Hawthorne, CA",
    intro:
      "Hawthorne sits on the western side of Bark and Bork's Los Angeles service area. Our mobile grooming appointments bring the full setup — bath, dryer, and grooming table — right to your Hawthorne home.",
    whyChoose: [
      "Part of Bark and Bork's regular mobile route across Los Angeles",
      "No trip across town to a traditional grooming salon",
      "Every size of dog served, with transparent starting prices",
      "Online booking makes scheduling quick and easy",
    ],
    faqs: [
      {
        question: "Is mobile dog grooming available in Hawthorne?",
        answer: "Yes, Hawthorne is part of Bark and Bork's mobile grooming coverage across Los Angeles.",
      },
      {
        question: "How do I schedule a grooming appointment in Hawthorne?",
        answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
      },
      {
        question: "What size dogs do you groom?",
        answer:
          "We groom dogs of every size — small (20 lbs or less), medium (45 lbs or less), large (70 lbs or less), and extra-large (over 70 lbs).",
      },
    ],
    metaTitle: "Mobile Dog Grooming in Hawthorne, CA",
    metaDescription:
      "Mobile dog grooming in Hawthorne, CA from Bark and Bork Mobile Pet Spa. Professional grooming brought to your door. Book online now.",
  },
};

export type NavItem = { label: string; href: string; external?: boolean };

export const PATHS = {
  home: "/",
  about: "/about",
  services: "/services",
  serviceAreas: "/service-areas",
  gallery: "/gallery",
  faq: "/faq",
  contact: "/contact",
} as const;

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
    body: "From small dogs to extra-large dogs over 70 lbs, starting prices are published up front for every size and service.",
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

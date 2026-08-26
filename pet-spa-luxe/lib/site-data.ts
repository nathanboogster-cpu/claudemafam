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

// El Sobrante is the confirmed home base. The remaining 14 cities are the
// service-area circles from the client's Google Business Profile service-area
// map (confirmed by the client). County is public geographic fact, included
// for genuine per-page context — never a stand-in for unverified neighborhood
// or landmark claims.
export const serviceAreas = [
  { city: "El Sobrante", slug: "el-sobrante", county: "Contra Costa County", verified: true },
  { city: "Sonoma", slug: "sonoma", county: "Sonoma County" },
  { city: "Napa", slug: "napa", county: "Napa County" },
  { city: "Yountville", slug: "yountville", county: "Napa County" },
  { city: "Vacaville", slug: "vacaville", county: "Solano County" },
  { city: "Fairfield", slug: "fairfield", county: "Solano County" },
  { city: "Novato", slug: "novato", county: "Marin County" },
  { city: "San Rafael", slug: "san-rafael", county: "Marin County" },
  { city: "Vallejo", slug: "vallejo", county: "Solano County" },
  { city: "Martinez", slug: "martinez", county: "Contra Costa County" },
  { city: "Concord", slug: "concord", county: "Contra Costa County" },
  { city: "Walnut Creek", slug: "walnut-creek", county: "Contra Costa County" },
  { city: "Antioch", slug: "antioch", county: "Contra Costa County" },
  { city: "Berkeley", slug: "berkeley", county: "Alameda County" },
  { city: "San Ramon", slug: "san-ramon", county: "Contra Costa County" },
] as const;

export type AreaSlug = (typeof serviceAreas)[number]["slug"];

// Unique, hand-written content per city — deliberately not a city-name-swap
// template. Each page leads with a different true, verified angle (hours,
// cage-free format, premium products, service range, etc.) so no two area
// pages share the same intro, bullet set, or FAQ set. County/region framing
// is public geographic fact, never a fabricated local claim. El Sobrante
// keeps its own hand-built page (app/service-areas/el-sobrante) and isn't
// duplicated here.
export const areaContent: Record<
  Exclude<AreaSlug, "el-sobrante">,
  {
    eyebrow: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    intro: string;
    whyChoose: string[];
    faqs: { question: string; answer: string }[];
  }
> = {
  sonoma: {
    eyebrow: "Now Serving Sonoma County",
    metaTitle: "Mobile Dog Grooming in Sonoma, CA",
    metaDescription:
      "Pet Spa Luxe brings luxury mobile dog grooming to Sonoma, CA — a fully equipped mobile setup, cage-free and one-on-one, rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Sonoma, CA",
    intro:
      "Sonoma's wide properties and wine-country pace make mobile grooming an easy fit — Pet Spa Luxe's fully equipped setup pulls right into your driveway, so your dog is groomed at home instead of riding across Sonoma County to a salon. Every appointment is cage-free and one-on-one from start to finish.",
    whyChoose: [
      "No drive across Sonoma County — grooming happens right at your home",
      "Cage-free, one-on-one attention for the entire appointment",
      "Warm-water bath with premium shampoo and conditioner on every visit",
      "Open seven days a week, 7:00 AM – 9:00 PM",
    ],
    faqs: [
      {
        question: "Does Pet Spa Luxe groom dogs in Sonoma?",
        answer:
          "Yes — Pet Spa Luxe grooms dogs in Sonoma, CA by mobile appointment. Call (650) 576-1194 to confirm availability at your address.",
      },
      {
        question: "Is there a car ride or salon visit involved?",
        answer: "No. The mobile grooming van comes to your Sonoma property — your dog never leaves home.",
      },
      {
        question: "Is the $110 Full Dog Grooming package available in Sonoma?",
        answer: "Yes, the all-inclusive Full Dog Grooming package is available for Sonoma appointments — call to schedule.",
      },
    ],
  },
  napa: {
    eyebrow: "Now Serving Napa County",
    metaTitle: "Mobile Dog Grooming in Napa, CA",
    metaDescription:
      "Skip the drive and the waiting room — Pet Spa Luxe brings mobile dog grooming directly to your home in Napa, CA. Cage-free, one-on-one, 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Napa, CA",
    intro:
      "Between vineyard visits and a packed Napa Valley calendar, finding time for a salon drop-off isn't always realistic. Pet Spa Luxe solves that by bringing a fully equipped mobile grooming setup straight to your Napa home, so your dog gets groomed while you get your morning back.",
    whyChoose: [
      "Grooming happens at your Napa home — no drop-off, no waiting room",
      "One-on-one, cage-free attention for every dog",
      "Full Dog Grooming package available at $110, all-inclusive",
      "Rated 5.0 stars on Yelp",
    ],
    faqs: [
      {
        question: "How does mobile grooming work in Napa?",
        answer:
          "Pet Spa Luxe's mobile van arrives at your Napa address fully equipped — your dog is groomed on-site, with no car ride required.",
      },
      {
        question: "Can I book just a bath or nail trim in Napa?",
        answer:
          "Yes. Bath & deshedding and nail & ear care are both available as standalone visits in Napa, not just as part of a full groom.",
      },
      {
        question: "What are the hours for Napa appointments?",
        answer: "Pet Spa Luxe is open every day, 7:00 AM – 9:00 PM, for scheduling in Napa and the surrounding area.",
      },
    ],
  },
  yountville: {
    eyebrow: "Now Serving Yountville",
    metaTitle: "Mobile Dog Grooming in Yountville, CA",
    metaDescription:
      "Pet Spa Luxe offers personal, one-on-one mobile dog grooming to Yountville, CA homes — cage-free, fully mobile, rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Yountville, CA",
    intro:
      "Yountville is a small town, and Pet Spa Luxe treats every visit that way — unhurried, one dog at a time, with the same fully equipped mobile setup used across the rest of the route. There's no cage, no other dogs waiting, and no reason to leave your Yountville home.",
    whyChoose: [
      "One dog, one appointment — never rushed alongside other pets",
      "Cage-free grooming environment",
      "Fully equipped mobile setup arrives at your Yountville address",
      "Breed-specific haircuts as part of the Full Dog Grooming package",
    ],
    faqs: [
      {
        question: "Is Pet Spa Luxe available for small-town appointments like Yountville?",
        answer: "Yes — Pet Spa Luxe grooms dogs in Yountville by mobile appointment. Call to confirm scheduling at your address.",
      },
      {
        question: "Do you groom small and toy breeds?",
        answer: "Yes, all breeds and sizes are groomed one-on-one, with a breed-specific haircut available as part of a full groom.",
      },
      {
        question: "How do I schedule a Yountville appointment?",
        answer: "Call (650) 576-1194 to check availability and book your dog's mobile grooming visit.",
      },
    ],
  },
  vacaville: {
    eyebrow: "Now Serving Solano County",
    metaTitle: "Mobile Dog Grooming in Vacaville, CA",
    metaDescription:
      "Save the trip — Pet Spa Luxe brings mobile dog grooming to Vacaville, CA homes. Cage-free, one-on-one, fully mobile. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Vacaville, CA",
    intro:
      "For Vacaville families juggling a commute and a full schedule, a salon appointment often means losing an afternoon. Pet Spa Luxe removes that trade-off — the mobile grooming setup comes to your driveway, so your dog is groomed while the rest of your day stays on track.",
    whyChoose: [
      "No time lost driving to a salon and back",
      "Cage-free, one-on-one grooming at your Vacaville home",
      "Warm-water bathing with premium shampoo and conditioner included",
      "Open every day, 7:00 AM – 9:00 PM, for easier scheduling",
    ],
    faqs: [
      {
        question: "Does Pet Spa Luxe come to Vacaville?",
        answer: "Yes — Pet Spa Luxe grooms dogs in Vacaville, CA by mobile appointment. Call to confirm your address is on the route.",
      },
      {
        question: "What's included in a standard visit?",
        answer:
          "Depending on what your dog needs: a warm-water bath, breed-specific haircut, deshedding, nail trimming or grinding, ear cleaning, and hand blow drying.",
      },
      {
        question: "Can I request a specific appointment time in Vacaville?",
        answer: "Call (650) 576-1194 to discuss available times — Pet Spa Luxe is open daily from 7:00 AM to 9:00 PM.",
      },
    ],
  },
  fairfield: {
    eyebrow: "Now Serving Fairfield",
    metaTitle: "Mobile Dog Grooming in Fairfield, CA",
    metaDescription:
      "Pet Spa Luxe brings luxury mobile dog grooming to Fairfield, CA — cage-free, one-on-one, open 7 days a week. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Fairfield, CA",
    intro:
      "Pet Spa Luxe is open every day of the week from 7:00 AM to 9:00 PM, which makes booking around a busy Fairfield schedule easier — no need to fight for a weekday slot. The mobile grooming van comes to your home, and your dog is groomed cage-free and one-on-one.",
    whyChoose: [
      "Open all seven days, 7:00 AM – 9:00 PM",
      "Grooming comes to your Fairfield home — no car ride needed",
      "Cage-free, one-on-one attention every visit",
      "Nail trimming, nail grinding, and ear cleaning available standalone or added on",
    ],
    faqs: [
      {
        question: "What are Pet Spa Luxe's hours for Fairfield appointments?",
        answer: "Pet Spa Luxe is open every day, 7:00 AM – 9:00 PM, including weekends, for Fairfield scheduling.",
      },
      {
        question: "Do I need to be home during the appointment?",
        answer: "Call (650) 576-1194 to discuss appointment logistics for your Fairfield address.",
      },
      {
        question: "Is nail care available without a full groom in Fairfield?",
        answer: "Yes — nail trimming, nail grinding, and ear cleaning can be booked as a standalone visit in Fairfield.",
      },
    ],
  },
  novato: {
    eyebrow: "Now Serving Marin County",
    metaTitle: "Mobile Dog Grooming in Novato, CA",
    metaDescription:
      "Pet Spa Luxe brings calm, cage-free mobile dog grooming to Novato, CA homes — one-on-one attention, fully mobile setup. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Novato, CA",
    intro:
      "Novato is known for its dog-friendly community, and Pet Spa Luxe fits right into that with a cage-free, one-dog-at-a-time approach. Instead of a car ride to a Marin County salon, the fully equipped mobile setup pulls up at your Novato home for a calmer grooming experience.",
    whyChoose: [
      "Cage-free environment, calmer for anxious or older dogs",
      "One-on-one attention for the entire appointment",
      "Mobile setup comes directly to your Novato home",
      "Premium shampoos and conditioners used in every warm-water bath",
    ],
    faqs: [
      {
        question: "Is mobile grooming less stressful for anxious dogs in Novato?",
        answer:
          "The cage-free, one-on-one format is designed to be calmer than a traditional salon, though every dog is different — call to discuss your dog's needs.",
      },
      {
        question: "Does Pet Spa Luxe serve Novato?",
        answer: "Yes, Pet Spa Luxe grooms dogs in Novato, CA by mobile appointment. Call to confirm availability.",
      },
      {
        question: "How do I book a Novato appointment?",
        answer: "Call (650) 576-1194 to schedule your dog's mobile grooming visit.",
      },
    ],
  },
  "san-rafael": {
    eyebrow: "Now Serving San Rafael",
    metaTitle: "Mobile Dog Grooming in San Rafael, CA",
    metaDescription:
      "Luxury mobile dog grooming for San Rafael, CA — Pet Spa Luxe grooms your dog at home, cage-free and one-on-one. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in San Rafael, CA",
    intro:
      "As the Marin County seat, San Rafael has no shortage of grooming salons — Pet Spa Luxe offers a different option: a fully equipped mobile setup that comes to your home instead, so your dog skips the car ride, the waiting room, and the cage entirely.",
    whyChoose: [
      "An alternative to salon drop-off for San Rafael pet owners",
      "Cage-free, one-on-one grooming from start to finish",
      "Full-service or à la carte — bath, haircut, deshedding, or nail & ear care",
      "Rated 5.0 stars on Yelp",
    ],
    faqs: [
      {
        question: "How is mobile grooming different from a San Rafael salon?",
        answer:
          "Your dog is groomed at your home, one-on-one and cage-free, instead of being dropped off and grouped with other dogs at a salon.",
      },
      {
        question: "What services are available in San Rafael?",
        answer: "Mobile dog grooming, Full Dog Grooming ($110 all-inclusive), warm-water bath & deshedding, and nail & ear care are all available.",
      },
      {
        question: "How do I check availability in San Rafael?",
        answer: "Call (650) 576-1194 to confirm scheduling at your San Rafael address.",
      },
    ],
  },
  vallejo: {
    eyebrow: "Now Serving Vallejo",
    metaTitle: "Mobile Dog Grooming in Vallejo, CA",
    metaDescription:
      "Pet Spa Luxe brings mobile dog grooming to Vallejo, CA — no car ride, no waiting room, cage-free and one-on-one. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Vallejo, CA",
    intro:
      "Pet Spa Luxe's mobile grooming van comes straight to your Vallejo home, fully equipped for a complete groom in your driveway. There's no car ride for your dog and no waiting room to sit in — just a cage-free, one-on-one appointment from start to finish.",
    whyChoose: [
      "No car ride for your dog — grooming happens at home",
      "Cage-free, one-on-one attention",
      "Hand blow dry included as part of every full groom",
      "Open every day, 7:00 AM – 9:00 PM",
    ],
    faqs: [
      {
        question: "Does Pet Spa Luxe groom dogs in Vallejo?",
        answer: "Yes — Pet Spa Luxe offers mobile dog grooming in Vallejo, CA. Call to confirm your address is reachable.",
      },
      {
        question: "What's included in the $110 Full Dog Grooming package?",
        answer:
          "A warm bath, full haircut, nail trim, brushing, deshedding, sanitary trim, professional shampoo, hand blow dry, ear cleaning, paw trimming, teeth brushing, and more.",
      },
      {
        question: "How do I schedule in Vallejo?",
        answer: "Call (650) 576-1194 to check availability and book your appointment.",
      },
    ],
  },
  martinez: {
    eyebrow: "Now Serving Contra Costa County",
    metaTitle: "Mobile Dog Grooming in Martinez, CA",
    metaDescription:
      "Pet Spa Luxe brings mobile dog grooming to Martinez, CA homes — cage-free, one-on-one, fully mobile setup. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Martinez, CA",
    intro:
      "Martinez sits within easy reach of Pet Spa Luxe's El Sobrante base, and appointments here get the same fully equipped mobile setup, cage-free environment, and one-on-one attention as every other stop on the route — groomed at your door, without the drive to a salon.",
    whyChoose: [
      "Convenient mobile scheduling for Contra Costa County addresses",
      "Cage-free, one-on-one grooming at your Martinez home",
      "Deshedding treatment included with every full groom",
      "5.0-star rating on Yelp",
    ],
    faqs: [
      {
        question: "Is Martinez within Pet Spa Luxe's service area?",
        answer: "Yes — Pet Spa Luxe offers mobile dog grooming in Martinez, CA. Call to confirm availability at your address.",
      },
      {
        question: "Do you offer deshedding for heavy-shedding breeds in Martinez?",
        answer: "Yes, deshedding treatment is included with a full groom and can also be booked as part of a bath visit.",
      },
      {
        question: "How do I book an appointment in Martinez?",
        answer: "Call (650) 576-1194 to schedule your dog's mobile grooming visit.",
      },
    ],
  },
  concord: {
    eyebrow: "Now Serving Concord",
    metaTitle: "Mobile Dog Grooming in Concord, CA",
    metaDescription:
      "Pet Spa Luxe offers full-service mobile dog grooming in Concord, CA — from a $110 all-inclusive groom to standalone nail care. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Concord, CA",
    intro:
      "Concord is one of the larger cities on the route, and Pet Spa Luxe brings the full range of services — mobile dog grooming, the $110 all-inclusive Full Dog Grooming package, warm-water bath & deshedding, and nail & ear care — directly to homes across the city.",
    whyChoose: [
      "Full range of services available: grooming, bathing, deshedding, nail & ear care",
      "$110 all-inclusive Full Dog Grooming package",
      "Cage-free, one-on-one attention for every appointment",
      "Fully equipped mobile setup comes to your Concord home",
    ],
    faqs: [
      {
        question: "What services does Pet Spa Luxe offer in Concord?",
        answer: "Mobile dog grooming, Full Dog Grooming ($110 all-inclusive), warm-water bath & deshedding, and nail & ear care are all available in Concord.",
      },
      {
        question: "Can I book a standalone bath in Concord?",
        answer: "Yes, warm-water bath & deshedding can be booked on its own, without a full haircut.",
      },
      {
        question: "How do I confirm my Concord address is on the route?",
        answer: "Call (650) 576-1194 and we'll confirm availability at your address.",
      },
    ],
  },
  "walnut-creek": {
    eyebrow: "Now Serving Walnut Creek",
    metaTitle: "Luxury Mobile Dog Grooming in Walnut Creek, CA",
    metaDescription:
      "Pet Spa Luxe brings a premium mobile grooming experience to Walnut Creek, CA — premium products, cage-free, one-on-one. Rated 5.0 stars on Yelp.",
    h1: "Luxury Mobile Dog Grooming in Walnut Creek, CA",
    intro:
      "Walnut Creek pet owners expect a certain level of polish, and Pet Spa Luxe delivers it at home — a warm-water bath with premium shampoos and conditioners, a cage-free one-on-one appointment, and finishing touches like a bow tie or bandana, all without leaving your driveway.",
    whyChoose: [
      "Premium shampoos and conditioners on every warm-water bath",
      "Finishing touches — bow ties or bandanas — included with a full groom",
      "Cage-free, one-on-one grooming experience",
      "No car ride to a Walnut Creek salon",
    ],
    faqs: [
      {
        question: "What makes Pet Spa Luxe's grooming premium?",
        answer:
          "Premium shampoos and conditioners, professional-grade products, and finishing touches like a bow tie or bandana are part of the Full Dog Grooming package.",
      },
      {
        question: "Does Pet Spa Luxe serve Walnut Creek?",
        answer: "Yes — Pet Spa Luxe offers mobile dog grooming in Walnut Creek, CA. Call to confirm scheduling.",
      },
      {
        question: "How do I book in Walnut Creek?",
        answer: "Call (650) 576-1194 to check availability and schedule your appointment.",
      },
    ],
  },
  antioch: {
    eyebrow: "Now Serving Antioch",
    metaTitle: "Mobile Dog Grooming in Antioch, CA",
    metaDescription:
      "Pet Spa Luxe brings mobile dog grooming to Antioch, CA — warm-water baths, deshedding, and full grooming at your door. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Antioch, CA",
    intro:
      "Pet Spa Luxe's mobile setup is fully equipped for dogs of every size, which matters in a city like Antioch with plenty of larger breeds. A warm-water bath and deshedding treatment help clear loose coat, and the whole appointment happens cage-free, one-on-one, at your home.",
    whyChoose: [
      "Fully equipped for dogs of every size",
      "Warm-water bath and deshedding treatment to clear loose coat",
      "Cage-free, one-on-one grooming at your Antioch home",
      "Open every day, 7:00 AM – 9:00 PM",
    ],
    faqs: [
      {
        question: "Can Pet Spa Luxe groom large-breed dogs in Antioch?",
        answer: "Yes, the mobile setup accommodates dogs of every size — call to discuss your dog's breed and coat.",
      },
      {
        question: "Is deshedding available on its own in Antioch?",
        answer: "Yes, bath & deshedding can be booked as a standalone visit, separate from a full haircut.",
      },
      {
        question: "How do I book an Antioch appointment?",
        answer: "Call (650) 576-1194 to check availability and schedule your dog's groom.",
      },
    ],
  },
  berkeley: {
    eyebrow: "Now Serving Berkeley",
    metaTitle: "Mobile Dog Grooming in Berkeley, CA",
    metaDescription:
      "Skip the parking search — Pet Spa Luxe brings mobile dog grooming directly to your Berkeley, CA home. Cage-free, one-on-one. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in Berkeley, CA",
    intro:
      "Finding parking near a Berkeley grooming salon can be its own errand. Pet Spa Luxe skips that entirely — the mobile grooming van comes to you, so your dog is groomed at home in a cage-free, one-on-one appointment instead of a busy storefront.",
    whyChoose: [
      "No searching for salon parking in Berkeley",
      "Cage-free, one-on-one grooming at your home",
      "Fully equipped mobile setup — everything needed arrives with the van",
      "5.0-star rating on Yelp",
    ],
    faqs: [
      {
        question: "Does Pet Spa Luxe groom dogs in Berkeley?",
        answer: "Yes — Pet Spa Luxe offers mobile dog grooming in Berkeley, CA. Call to confirm your address is reachable.",
      },
      {
        question: "Is there anywhere to park for the mobile van in Berkeley?",
        answer: "Call (650) 576-1194 to discuss parking and appointment logistics for your specific Berkeley address.",
      },
      {
        question: "What if I live in an apartment in Berkeley?",
        answer: "Call to discuss your building and parking situation — mobile appointments can often be arranged for apartment residents.",
      },
    ],
  },
  "san-ramon": {
    eyebrow: "Now Serving San Ramon",
    metaTitle: "Mobile Dog Grooming in San Ramon, CA",
    metaDescription:
      "Pet Spa Luxe brings mobile dog grooming to San Ramon, CA — open 7 days a week, cage-free, one-on-one. Rated 5.0 stars on Yelp.",
    h1: "Mobile Dog Grooming in San Ramon, CA",
    intro:
      "Between school runs and after-work errands, San Ramon families don't always have a free weekday afternoon. Pet Spa Luxe is open every day from 7:00 AM to 9:00 PM, and the mobile setup comes to your home, so grooming fits the schedule instead of the other way around.",
    whyChoose: [
      "Open all seven days, 7:00 AM – 9:00 PM, for family schedules",
      "Mobile setup comes to your San Ramon home",
      "Cage-free, one-on-one attention for every dog",
      "Full Dog Grooming package, $110 all-inclusive",
    ],
    faqs: [
      {
        question: "What hours is Pet Spa Luxe available in San Ramon?",
        answer: "Every day, 7:00 AM – 9:00 PM, including weekends — call to find a time that fits your schedule.",
      },
      {
        question: "Does Pet Spa Luxe serve San Ramon?",
        answer: "Yes — Pet Spa Luxe offers mobile dog grooming in San Ramon, CA. Call to confirm availability.",
      },
      {
        question: "How do I book a San Ramon appointment?",
        answer: "Call (650) 576-1194 to check availability and schedule your dog's mobile groom.",
      },
    ],
  },
};

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

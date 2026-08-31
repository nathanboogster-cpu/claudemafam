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
  {
    slug: "nail-trim-ear-cleaning",
    name: "Nail Trim & Ear Cleaning",
    shortName: "Nail & Ear Care",
    summary: "Nail trimming and ear cleaning for dogs and cats — as part of a full groom or on its own.",
    isFlagship: false,
  },
  {
    slug: "deshedding-treatment",
    name: "Deshedding Treatment",
    shortName: "Deshedding",
    summary: "A deeper deshedding treatment for heavy-coated dogs and cats to cut down on loose fur.",
    isFlagship: false,
  },
  {
    slug: "puppy-first-groom",
    name: "Puppy's First Groom",
    shortName: "Puppy's First Groom",
    summary: "A gentle, low-stress introduction to the grooming table for puppies and kittens.",
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

export type AreaSlug =
  | "funkstown-md"
  | "hagerstown-md"
  | "halfway-md"
  | "williamsport-md"
  | "maugansville-md"
  | "long-meadow-md"
  | "robinwood-md"
  | "beaver-creek-md"
  | "downsville-md"
  | "cavetown-md"
  | "boonsboro-md";

// Funkstown, Hagerstown, and Halfway each keep their own hand-written page
// (physical home base, nearby larger search market, verified surrounding
// area). The rest are nearby Washington County communities within roughly
// a 10–15 minute drive of the Funkstown salon — real, mapped places, each
// rendered from lib/site-data.ts's `areaContent` below with its own angle,
// not a city-name-swap template. No fabricated drive times are stated on
// the pages themselves — only general, defensible geography (direction/
// route relative to Funkstown and Hagerstown).
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
  {
    city: "Williamsport",
    state: "MD",
    slug: "williamsport-md",
    description: "The historic C&O Canal town southwest of Funkstown, along the Potomac.",
  },
  {
    city: "Maugansville",
    state: "MD",
    slug: "maugansville-md",
    description: "Just north of Hagerstown, a short drive from our Funkstown salon.",
  },
  {
    city: "Long Meadow",
    state: "MD",
    slug: "long-meadow-md",
    description: "East of Hagerstown along Route 40, close to Funkstown.",
  },
  {
    city: "Robinwood",
    state: "MD",
    slug: "robinwood-md",
    description: "Near Meritus Medical Center, on the western edge of Hagerstown.",
  },
  {
    city: "Beaver Creek",
    state: "MD",
    slug: "beaver-creek-md",
    description: "East of Hagerstown along the historic National Pike.",
  },
  {
    city: "Downsville",
    state: "MD",
    slug: "downsville-md",
    description: "Southwest of Funkstown, near Williamsport and the Potomac.",
  },
  {
    city: "Cavetown",
    state: "MD",
    slug: "cavetown-md",
    description: "Northeast of Hagerstown, without the drive downtown.",
  },
  {
    city: "Boonsboro",
    state: "MD",
    slug: "boonsboro-md",
    description: "The historic South Mountain town southeast of Hagerstown.",
  },
];

// Primary areas keep their own hand-built static page (see
// app/(site)/service-areas/{funkstown-md,hagerstown-md,halfway-md}) and
// are never generated from this content — everything else renders through
// app/(site)/service-areas/[slug]/page.tsx.
export type PrimaryAreaSlug = "funkstown-md" | "hagerstown-md" | "halfway-md";
export type SecondaryAreaSlug = Exclude<AreaSlug, PrimaryAreaSlug>;

export const areaContent: Record<
  SecondaryAreaSlug,
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
  "williamsport-md": {
    eyebrow: "Serving Williamsport, MD",
    metaTitle: "Dog & Cat Grooming Near Williamsport, MD",
    metaDescription:
      "Sittin' Pretty Pet Grooming is a short drive from Williamsport, MD, offering full-service dog and cat grooming from an established Funkstown salon.",
    h1: "Dog & Cat Grooming Near Williamsport, MD",
    intro:
      "Williamsport pet owners don't have to drive all the way into Hagerstown for a personal, established groomer — Sittin' Pretty is just up the road in Funkstown, offering the same full-service dog and cat grooming we've provided the area for decades.",
    whyChoose: [
      "A short drive from Williamsport, without heading into downtown Hagerstown",
      "An established local salon, not a national chain",
      "Full-service dog grooming plus professional cat grooming",
      "Personal, one-on-one attention for every appointment",
    ],
    faqs: [
      {
        question: "Does Sittin' Pretty serve Williamsport?",
        answer:
          "Yes — Williamsport is a short drive from our Funkstown salon, and we welcome pet owners from the area.",
      },
      {
        question: "Is Sittin' Pretty closer than driving into Hagerstown?",
        answer:
          "Our Funkstown salon sits between Williamsport and downtown Hagerstown, so it's often a more convenient option than driving further into the city.",
      },
      {
        question: "How do I schedule from Williamsport?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule your pet's grooming appointment.`,
      },
    ],
  },
  "maugansville-md": {
    eyebrow: "Serving Maugansville, MD",
    metaTitle: "Dog & Cat Grooming Near Maugansville, MD",
    metaDescription:
      "Sittin' Pretty Pet Grooming welcomes pet owners from Maugansville, MD to our established grooming salon in nearby Funkstown.",
    h1: "Dog & Cat Grooming Near Maugansville, MD",
    intro:
      "Maugansville sits just north of Hagerstown, and Sittin' Pretty's Funkstown salon is a straightforward drive south — the same personal, full-service grooming we've offered the greater Hagerstown area for decades.",
    whyChoose: [
      "A straightforward drive south from Maugansville",
      "Decades of experience grooming local dogs and cats",
      "Personal, one-on-one attention instead of a rushed chain-salon visit",
      "Comfortable with nervous, senior, and large-breed dogs",
    ],
    faqs: [
      {
        question: "Does Sittin' Pretty serve Maugansville?",
        answer: "Yes — Maugansville pet owners are welcome at our Funkstown salon, a short drive south.",
      },
      {
        question: "Do you groom cats as well as dogs for Maugansville customers?",
        answer: "Yes, full-service dog grooming and professional cat grooming are both available.",
      },
      {
        question: "How do I schedule from Maugansville?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "long-meadow-md": {
    eyebrow: "Serving Long Meadow, MD",
    metaTitle: "Dog & Cat Grooming Near Long Meadow, MD",
    metaDescription:
      "Sittin' Pretty Pet Grooming is close to Long Meadow, MD via Route 40, offering full-service dog and cat grooming from our Funkstown salon.",
    h1: "Dog & Cat Grooming Near Long Meadow, MD",
    intro:
      "Long Meadow sits along the Route 40 corridor east of Hagerstown, close enough to Funkstown that Sittin' Pretty is a convenient, personal alternative to driving further into the city for grooming.",
    whyChoose: [
      "Close by via the Route 40 corridor",
      "An established local salon, not a national chain",
      "Full-service dog grooming plus cat grooming",
      "Personal, one-on-one attention for every appointment",
    ],
    faqs: [
      {
        question: "Does Sittin' Pretty serve Long Meadow?",
        answer: "Yes — Long Meadow is close to our Funkstown salon via Route 40.",
      },
      {
        question: "Is there a more personal option than a big-box groomer near Long Meadow?",
        answer:
          "Yes — Sittin' Pretty offers the personal, one-on-one attention of a local salon rather than a rushed chain-store visit.",
      },
      {
        question: "How do I schedule from Long Meadow?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "robinwood-md": {
    eyebrow: "Serving Robinwood, MD",
    metaTitle: "Dog & Cat Grooming Near Robinwood, MD",
    metaDescription:
      "Sittin' Pretty Pet Grooming is a short drive from the Robinwood area of Hagerstown, MD, offering full-service dog and cat grooming.",
    h1: "Dog & Cat Grooming Near Robinwood, MD",
    intro:
      "Robinwood, on the western edge of Hagerstown near Meritus Medical Center, is a short drive from Sittin' Pretty's Funkstown salon — a personal alternative to a big-box grooming chain for pet owners on that side of town.",
    whyChoose: [
      "A short drive from the Robinwood area",
      "Decades of experience grooming local dogs and cats",
      "Personal, one-on-one attention for every appointment",
      "Comfortable with nervous, senior, and large-breed dogs",
    ],
    faqs: [
      {
        question: "Does Sittin' Pretty serve the Robinwood area?",
        answer: "Yes — Robinwood is a short drive from our Funkstown salon.",
      },
      {
        question: "Do you groom large-breed dogs for Robinwood-area customers?",
        answer: "Yes, we regularly groom large-breed dogs and are comfortable with nervous or senior pets too.",
      },
      {
        question: "How do I schedule from Robinwood?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "beaver-creek-md": {
    eyebrow: "Serving Beaver Creek, MD",
    metaTitle: "Dog & Cat Grooming Near Beaver Creek, MD",
    metaDescription:
      "Sittin' Pretty Pet Grooming is a short drive from Beaver Creek, MD along the historic National Pike, offering full-service dog and cat grooming.",
    h1: "Dog & Cat Grooming Near Beaver Creek, MD",
    intro:
      "Beaver Creek sits east of Hagerstown along the historic National Pike — close enough to Sittin' Pretty's Funkstown salon for a personal grooming option without a long drive into the city.",
    whyChoose: [
      "A short drive along the historic National Pike",
      "An established local salon, not a national chain",
      "Full-service dog grooming plus cat grooming",
      "Personal, one-on-one attention for every appointment",
    ],
    faqs: [
      {
        question: "Does Sittin' Pretty serve Beaver Creek?",
        answer: "Yes — Beaver Creek is a short drive from our Funkstown salon along the National Pike.",
      },
      {
        question: "Do you groom cats for Beaver Creek customers?",
        answer: "Yes, professional cat grooming is available alongside our dog grooming services.",
      },
      {
        question: "How do I schedule from Beaver Creek?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "downsville-md": {
    eyebrow: "Serving Downsville, MD",
    metaTitle: "Dog & Cat Grooming Near Downsville, MD",
    metaDescription:
      "Sittin' Pretty Pet Grooming is a short drive from Downsville, MD, offering full-service dog and cat grooming from our established Funkstown salon.",
    h1: "Dog & Cat Grooming Near Downsville, MD",
    intro:
      "Downsville sits southwest of Funkstown near the Potomac River, and Sittin' Pretty is the closer, more personal grooming option for the area compared to driving into downtown Hagerstown.",
    whyChoose: [
      "Closer than driving into downtown Hagerstown",
      "Decades of experience grooming local dogs and cats",
      "Personal, one-on-one attention instead of a rushed chain-salon visit",
      "Full-service dog grooming plus professional cat grooming",
    ],
    faqs: [
      {
        question: "Does Sittin' Pretty serve Downsville?",
        answer: "Yes — Downsville is a short drive from our Funkstown salon.",
      },
      {
        question: "Is Sittin' Pretty closer than a Hagerstown groomer for Downsville residents?",
        answer: "Often, yes — our Funkstown salon sits southwest of downtown Hagerstown, closer to Downsville.",
      },
      {
        question: "How do I schedule from Downsville?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "cavetown-md": {
    eyebrow: "Serving Cavetown, MD",
    metaTitle: "Dog & Cat Grooming Near Cavetown, MD",
    metaDescription:
      "Sittin' Pretty Pet Grooming welcomes pet owners from Cavetown, MD to our established grooming salon in nearby Funkstown.",
    h1: "Dog & Cat Grooming Near Cavetown, MD",
    intro:
      "Cavetown sits northeast of Hagerstown, and Sittin' Pretty's Funkstown salon offers Cavetown-area pet owners a personal grooming option without needing to drive all the way through downtown Hagerstown.",
    whyChoose: [
      "No need to drive through downtown Hagerstown",
      "An established local salon, not a national chain",
      "Full-service dog grooming plus cat grooming",
      "Comfortable with nervous, senior, and large-breed dogs",
    ],
    faqs: [
      {
        question: "Does Sittin' Pretty serve Cavetown?",
        answer: "Yes — Cavetown-area pet owners are welcome at our Funkstown salon.",
      },
      {
        question: "Do you groom senior or nervous dogs for Cavetown customers?",
        answer: "Yes, pet owners regularly mention how comfortable their nervous or senior dogs are with us.",
      },
      {
        question: "How do I schedule from Cavetown?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "boonsboro-md": {
    eyebrow: "Serving Boonsboro, MD",
    metaTitle: "Dog & Cat Grooming Near Boonsboro, MD",
    metaDescription:
      "Sittin' Pretty Pet Grooming is a short drive from Boonsboro, MD, offering full-service dog and cat grooming from an established Funkstown salon.",
    h1: "Dog & Cat Grooming Near Boonsboro, MD",
    intro:
      "Boonsboro, at the foot of South Mountain southeast of Hagerstown, is a short drive from Sittin' Pretty's Funkstown salon — a personal, established alternative to a big-box grooming chain.",
    whyChoose: [
      "A short drive from historic Boonsboro",
      "Decades of experience grooming local dogs and cats",
      "Personal, one-on-one attention for every appointment",
      "Dog & cat grooming, all in one place",
    ],
    faqs: [
      {
        question: "Does Sittin' Pretty serve Boonsboro?",
        answer: "Yes — Boonsboro is a short drive from our Funkstown salon.",
      },
      {
        question: "Do you groom both dogs and cats for Boonsboro customers?",
        answer: "Yes — full-service dog grooming and professional cat grooming are both available.",
      },
      {
        question: "How do I schedule from Boonsboro?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
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

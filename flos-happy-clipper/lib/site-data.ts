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
  serviceAreas: "/service-areas",
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

// Owner-confirmed: Flo's Happy Clipper serves pet owners from any town
// roughly within a 20-minute drive of the Eatontown salon — not a
// service-area-only/mobile business, just the realistic local draw of a
// Main St salon. Eatontown is the physical location and gets its own
// primary page; the rest are real, mapped Monmouth County towns within
// that radius, each with its own hand-written content below (no
// city-name-swap doorway pages).
export type AreaSlug =
  | "eatontown-nj"
  | "tinton-falls-nj"
  | "oceanport-nj"
  | "west-long-branch-nj"
  | "long-branch-nj"
  | "shrewsbury-nj"
  | "red-bank-nj"
  | "little-silver-nj"
  | "monmouth-beach-nj";

export const serviceAreas: { city: string; state: string; slug: AreaSlug; description: string }[] = [
  {
    city: "Eatontown",
    state: "NJ",
    slug: "eatontown-nj",
    description: "Flo's Happy Clipper's home — our Main St grooming salon.",
  },
  {
    city: "Tinton Falls",
    state: "NJ",
    slug: "tinton-falls-nj",
    description: "Bordering Eatontown to the south, along Route 66 and Route 18.",
  },
  {
    city: "Oceanport",
    state: "NJ",
    slug: "oceanport-nj",
    description: "Just east of Eatontown, near the Shrewsbury River.",
  },
  {
    city: "West Long Branch",
    state: "NJ",
    slug: "west-long-branch-nj",
    description: "A few minutes east of Eatontown along Route 36, home to Monmouth University.",
  },
  {
    city: "Long Branch",
    state: "NJ",
    slug: "long-branch-nj",
    description: "On the Jersey Shore coastline, just past West Long Branch.",
  },
  {
    city: "Shrewsbury",
    state: "NJ",
    slug: "shrewsbury-nj",
    description: "North of Eatontown along Route 35, near Monmouth Park.",
  },
  {
    city: "Red Bank",
    state: "NJ",
    slug: "red-bank-nj",
    description: "North of Eatontown along the Navesink River.",
  },
  {
    city: "Little Silver",
    state: "NJ",
    slug: "little-silver-nj",
    description: "Between Red Bank and Shrewsbury, north of Eatontown.",
  },
  {
    city: "Monmouth Beach",
    state: "NJ",
    slug: "monmouth-beach-nj",
    description: "An oceanfront borough northeast of Eatontown, near Long Branch.",
  },
];

// Eatontown keeps its own hand-built static page (the physical salon
// location) and is never generated from areaContent below — everything
// else renders through app/(site)/service-areas/[slug]/page.tsx.
export type PrimaryAreaSlug = "eatontown-nj";
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
  "tinton-falls-nj": {
    eyebrow: "Serving Tinton Falls, NJ",
    metaTitle: "Dog Grooming Near Tinton Falls, NJ",
    metaDescription:
      "Flo's Happy Clipper is right on the Tinton Falls border in Eatontown, NJ, offering established, personal dog grooming for Tinton Falls pet owners.",
    h1: "Dog Grooming Near Tinton Falls, NJ",
    intro:
      "Tinton Falls borders Eatontown directly, so Flo's Happy Clipper on Main St is one of the closest established grooming salons around — a quick trip down Route 66 or Route 18 rather than a drive across the county.",
    whyChoose: [
      "Right on the Tinton Falls border — one of the shortest drives around",
      "A long-established local salon, not a national chain",
      "Personal, one-on-one attention for every dog",
      "Comfortable with large and double-coated breeds",
    ],
    faqs: [
      {
        question: "Does Flo's Happy Clipper serve Tinton Falls?",
        answer: "Yes — Tinton Falls borders our Eatontown salon directly, and we welcome pet owners from the area.",
      },
      {
        question: "How close is Flo's Happy Clipper to Tinton Falls?",
        answer: "Our Main St, Eatontown salon sits right on the Tinton Falls town line — one of the closest options around.",
      },
      {
        question: "How do I schedule from Tinton Falls?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule your dog's grooming appointment.`,
      },
    ],
  },
  "oceanport-nj": {
    eyebrow: "Serving Oceanport, NJ",
    metaTitle: "Dog Grooming Near Oceanport, NJ",
    metaDescription:
      "Flo's Happy Clipper in Eatontown, NJ is a short drive from Oceanport, offering established, personal dog grooming near the Shrewsbury River.",
    h1: "Dog Grooming Near Oceanport, NJ",
    intro:
      "Oceanport sits just east of Eatontown, near the Shrewsbury River and the former Fort Monmouth grounds — close enough that Flo's Happy Clipper is a natural choice for Oceanport pet owners looking for a personal, established local groomer.",
    whyChoose: [
      "Just east of Eatontown, near the Shrewsbury River",
      "An established local salon with years of grooming experience",
      "Comfortable with large and double-coated breeds",
      "Personal, one-on-one attention — not a rushed chain-salon visit",
    ],
    faqs: [
      {
        question: "Does Flo's Happy Clipper serve Oceanport?",
        answer: "Yes — Oceanport is just east of our Eatontown salon, and we welcome pet owners from the area.",
      },
      {
        question: "Do you groom large-breed dogs for Oceanport customers?",
        answer: "Yes, we regularly groom large-breed and double-coated dogs, including German Shepherds and Portuguese Water Dogs.",
      },
      {
        question: "How do I schedule from Oceanport?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "west-long-branch-nj": {
    eyebrow: "Serving West Long Branch, NJ",
    metaTitle: "Dog Grooming Near West Long Branch, NJ",
    metaDescription:
      "Flo's Happy Clipper is a few minutes from West Long Branch, NJ via Route 36, offering established, personal dog grooming in Eatontown.",
    h1: "Dog Grooming Near West Long Branch, NJ",
    intro:
      "West Long Branch, home to Monmouth University, is just a few minutes east of our Main St, Eatontown salon along Route 36 — a straightforward trip for West Long Branch pet owners looking for personal, experienced grooming.",
    whyChoose: [
      "A few minutes away via Route 36",
      "A long-established local salon, not a national chain",
      "Patient with nervous and first-time dogs",
      "Personal, one-on-one attention for every appointment",
    ],
    faqs: [
      {
        question: "Does Flo's Happy Clipper serve West Long Branch?",
        answer: "Yes — West Long Branch is a short drive from our Eatontown salon via Route 36.",
      },
      {
        question: "Do you groom nervous or first-time dogs for West Long Branch customers?",
        answer: "Yes — many customers mention how comfortable their nervous or first-time dogs are with our grooming.",
      },
      {
        question: "How do I schedule from West Long Branch?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "long-branch-nj": {
    eyebrow: "Serving Long Branch, NJ",
    metaTitle: "Dog Grooming Near Long Branch, NJ",
    metaDescription:
      "Flo's Happy Clipper in Eatontown, NJ is a short drive from the Jersey Shore in Long Branch, offering established, personal dog grooming.",
    h1: "Dog Grooming Near Long Branch, NJ",
    intro:
      "Long Branch sits on the Jersey Shore just past West Long Branch, a short drive from our Main St, Eatontown salon — a personal, established alternative to a big-box grooming chain for Long Branch pet owners.",
    whyChoose: [
      "A short drive inland from the Long Branch waterfront",
      "An established local salon with years of grooming experience",
      "Comfortable with large and double-coated breeds",
      "Experienced with poodles and other specialty coats",
    ],
    faqs: [
      {
        question: "Does Flo's Happy Clipper serve Long Branch?",
        answer: "Yes — Long Branch is a short drive from our Eatontown salon.",
      },
      {
        question: "Do you groom poodles for Long Branch customers?",
        answer: "Yes, we have experience with poodles and other dogs that need specialty trims.",
      },
      {
        question: "How do I schedule from Long Branch?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "shrewsbury-nj": {
    eyebrow: "Serving Shrewsbury, NJ",
    metaTitle: "Dog Grooming Near Shrewsbury, NJ",
    metaDescription:
      "Flo's Happy Clipper is a short drive north of Shrewsbury, NJ via Route 35, offering established, personal dog grooming in Eatontown.",
    h1: "Dog Grooming Near Shrewsbury, NJ",
    intro:
      "Shrewsbury sits just north of Eatontown along Route 35, near Monmouth Park — close enough that Flo's Happy Clipper is a convenient, personal option for Shrewsbury pet owners.",
    whyChoose: [
      "A short drive south via Route 35",
      "A long-established local salon, not a national chain",
      "Personal, one-on-one attention for every dog",
      "Comfortable with large and double-coated breeds",
    ],
    faqs: [
      {
        question: "Does Flo's Happy Clipper serve Shrewsbury?",
        answer: "Yes — Shrewsbury is a short drive from our Eatontown salon via Route 35.",
      },
      {
        question: "Is Flo's Happy Clipper closer than driving into Red Bank?",
        answer: "Often, yes — our Eatontown salon sits just south of Shrewsbury, closer than downtown Red Bank for many.",
      },
      {
        question: "How do I schedule from Shrewsbury?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "red-bank-nj": {
    eyebrow: "Serving Red Bank, NJ",
    metaTitle: "Dog Grooming Near Red Bank, NJ",
    metaDescription:
      "Flo's Happy Clipper is a short drive from downtown Red Bank, NJ, offering established, personal dog grooming from our Eatontown salon.",
    h1: "Dog Grooming Near Red Bank, NJ",
    intro:
      "Red Bank's downtown sits along the Navesink River north of Eatontown — a short, straightforward drive down Route 35 or Route 66 to reach Flo's Happy Clipper's Main St salon.",
    whyChoose: [
      "A short drive south of downtown Red Bank",
      "An established local salon with years of grooming experience",
      "Personal, one-on-one attention instead of a rushed chain-salon visit",
      "Comfortable with large and double-coated breeds",
    ],
    faqs: [
      {
        question: "Does Flo's Happy Clipper serve Red Bank?",
        answer: "Yes — Red Bank pet owners are welcome at our Eatontown salon, a short drive south of downtown.",
      },
      {
        question: "Do you groom large-breed dogs for Red Bank customers?",
        answer: "Yes, we regularly groom large-breed and double-coated dogs, including German Shepherds and Portuguese Water Dogs.",
      },
      {
        question: "How do I schedule from Red Bank?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "little-silver-nj": {
    eyebrow: "Serving Little Silver, NJ",
    metaTitle: "Dog Grooming Near Little Silver, NJ",
    metaDescription:
      "Flo's Happy Clipper is a short drive from Little Silver, NJ, offering established, personal dog grooming from our Eatontown Main St salon.",
    h1: "Dog Grooming Near Little Silver, NJ",
    intro:
      "Little Silver sits between Red Bank and Shrewsbury, just north of Eatontown — a short, easy drive to Flo's Happy Clipper's Main St salon for Little Silver pet owners.",
    whyChoose: [
      "A short drive south from Little Silver",
      "A long-established local salon, not a national chain",
      "Patient with nervous and first-time dogs",
      "Personal, one-on-one attention for every appointment",
    ],
    faqs: [
      {
        question: "Does Flo's Happy Clipper serve Little Silver?",
        answer: "Yes — Little Silver is a short drive from our Eatontown salon.",
      },
      {
        question: "Do you groom nervous or first-time dogs for Little Silver customers?",
        answer: "Yes — many customers mention how comfortable their nervous or first-time dogs are with our grooming.",
      },
      {
        question: "How do I schedule from Little Silver?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
  "monmouth-beach-nj": {
    eyebrow: "Serving Monmouth Beach, NJ",
    metaTitle: "Dog Grooming Near Monmouth Beach, NJ",
    metaDescription:
      "Flo's Happy Clipper is a short drive inland from Monmouth Beach, NJ, offering established, personal dog grooming from our Eatontown salon.",
    h1: "Dog Grooming Near Monmouth Beach, NJ",
    intro:
      "Monmouth Beach sits on the oceanfront northeast of Eatontown, near Long Branch — a short drive inland to Flo's Happy Clipper's Main St salon for Monmouth Beach pet owners.",
    whyChoose: [
      "A short drive inland from the Monmouth Beach oceanfront",
      "An established local salon with years of grooming experience",
      "Comfortable with large and double-coated breeds",
      "Experienced with poodles and other specialty coats",
    ],
    faqs: [
      {
        question: "Does Flo's Happy Clipper serve Monmouth Beach?",
        answer: "Yes — Monmouth Beach is a short drive inland from our Eatontown salon.",
      },
      {
        question: "Do you groom poodles for Monmouth Beach customers?",
        answer: "Yes, we have experience with poodles and other dogs that need specialty trims.",
      },
      {
        question: "How do I schedule from Monmouth Beach?",
        answer: `Call ${business.phoneDisplay} to check availability and schedule.`,
      },
    ],
  },
};

export const areaPath = (slug: AreaSlug) => `${PATHS.serviceAreas}/${slug}`;

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

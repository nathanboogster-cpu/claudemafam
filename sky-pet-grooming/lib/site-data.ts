// Central, single source of truth for every verified Sky Pet Grooming fact
// used across the site. Sources, all the owner's own:
//
//   - their current site (skypetgrooming.com): luxury mobile pet grooming at
//     your doorstep; licensed, insured and eco-friendly
//   - their logo and van wrap (photos in the Drive folder): the phone numbers,
//     the slogans, the van itself, and "Visit our website & book online"
//   - their MoeGo booking page: the service list
//   - their photos: dogs and cats groomed in the van (bathtub, grooming table,
//     dryers)
//
// The 415 and 650 numbers, the "peninsula" web address on the van and the
// San Bruno address on the MoeGo page put the base in San Bruno. The town
// list (serviceAreas, below) was chosen by Tongfluence, not the owner: see
// the selection rule there.
//
// Do not add a fact that is not on that list: no prices, hours, street
// address, staff names, years in business, ratings, reviews or awards.

// Production domain is served on www. Canonicals, og:url, schema, the sitemap
// and robots.txt must all name that host, so a bare skypetgrooming.com value
// is normalized to www here.
const RAW_SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.skypetgrooming.com").replace(/\/+$/, "");
export const SITE_URL = RAW_SITE_URL.replace(/^https?:\/\/skypetgrooming\.com$/i, "https://www.skypetgrooming.com");

// Owner-supplied MoeGo online booking page. Every Book Online button links here.
export const BOOKING_URL = "https://booking.moego.pet/ol/landing?name=SkyPetGrooming";

export const business = {
  name: "Sky Pet Grooming",
  tagline: "Mobile dog and cat grooming, delivered to your doorstep.",
  slogan: "Paws Down, The Best Around!",
  area: "San Francisco & the Peninsula",
  areaShort: "SF Peninsula",
  // The number on the logo and the van, and the one on the MoeGo page.
  phone: { display: "(415) 754-0813", href: "tel:+14157540813", e164: "+14157540813" },
  // Second number on the van.
  phoneAlt: { display: "(650) 438-3498", href: "tel:+16504383498", e164: "+16504383498" },
} as const;

// Verified trust facts, used by the trust bar, the hero and the About page.
export const pillars = [
  {
    title: "We come to you",
    body: "Our grooming van parks at your home, so there is no car ride and no salon waiting room.",
  },
  {
    title: "Licensed & insured",
    body: "Sky Pet Grooming is licensed and insured.",
  },
  {
    title: "Eco-friendly",
    body: "Sky Pet Grooming is an eco-friendly grooming service.",
  },
  {
    title: "Dogs & cats",
    body: "We groom dogs of every size, and cats too.",
  },
] as const;

// Services from the owner's MoeGo booking page, plus cat grooming (their photos).
export const services = [
  {
    key: "full-dog-grooming",
    title: "Full dog grooming",
    body: "A complete groom in our van, from small breeds to big, fluffy coats.",
    photo: "white-curly-dog-teddy-face",
  },
  {
    key: "cat-grooming",
    title: "Cat grooming",
    body: "Gentle grooming for cats, at home and without the stress of a car ride.",
    photo: "two-fluffy-cats-after-grooming",
  },
  {
    key: "de-shedding",
    title: "De-shedding",
    body: "Helps clear loose undercoat from heavy shedders.",
    photo: "golden-retriever-standing-in-van",
  },
  {
    key: "detangling",
    title: "Detangling",
    body: "Works knots and tangles out of long and curly coats.",
    photo: "apricot-poodle-lying-down",
  },
  {
    key: "nail-trimming",
    title: "Nail trimming",
    body: "Neat, comfortable nails for dogs and cats.",
    photo: "smiling-pomeranian",
  },
  {
    key: "anal-gland-expression",
    title: "Anal gland expression",
    body: "Available with your appointment. Add it when you book.",
    photo: "cream-doodle-smiling",
  },
] as const;

export type ServiceKey = (typeof services)[number]["key"];

// What the van photos show is on board.
export const vanFeatures = [
  "A full bathtub with running water",
  "A grooming table and professional dryers",
  "Parked right at your door for the whole appointment",
] as const;

// How booking works: the MoeGo page, then the visit.
export const processSteps = [
  {
    title: "Book online or call",
    body: "Pick your service and time on our booking page, or call us.",
  },
  {
    title: "We pull up at your door",
    body: "The Sky Pet Grooming van parks at your home. No drive, no drop-off.",
  },
  {
    title: "A fresh, happy pet",
    body: "Your pet is groomed in the van and back inside with you right after.",
  },
] as const;

// What to have ready when booking, so the groomer can plan the groom.
export const bookingChecklist = [
  "Your address in our service area",
  "Breed, size and age of each pet",
  "Coat type and when they were last groomed",
  "Anything we should know: nerves, health, matting",
] as const;

// FAQ answers are plain text so visible copy and FAQPage schema are identical.
export const faqs = [
  {
    question: "What is Sky Pet Grooming?",
    answer:
      "Sky Pet Grooming is a mobile grooming service for dogs and cats. Our grooming van comes to your doorstep in San Francisco and on the Peninsula.",
  },
  {
    question: "Do I need to take my pet anywhere?",
    answer:
      "No. Our van parks at your home and your pet is groomed right there. There is no car ride and no salon waiting room.",
  },
  {
    question: "Do you groom cats?",
    answer: "Yes. We groom cats as well as dogs.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Full dog grooming, cat grooming, de-shedding, detangling, nail trimming and anal gland expression. You can see every option on our online booking page.",
  },
  {
    question: "What is inside the grooming van?",
    answer: "Our van has a full bathtub, a grooming table and professional dryers, so the whole groom happens at your door.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "San Bruno, South San Francisco, Millbrae, Brisbane, Burlingame, Colma, Hillsborough, Pacifica, Daly City, San Mateo, Foster City, and San Francisco's southern and western neighborhoods. Not sure we reach your street? Call us at (415) 754-0813 or ask when you book online.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. Sky Pet Grooming is licensed and insured, and we are an eco-friendly grooming service.",
  },
  {
    question: "How much does mobile grooming cost?",
    answer:
      "It depends on your pet's breed, size and coat, and the services you choose. You will see the options when you book online, or call us at (415) 754-0813.",
  },
  {
    question: "How do I book?",
    answer: "Book online through our booking page any time, or call us at (415) 754-0813 or (650) 438-3498.",
  },
] as const;

export type NavItem = { label: string; href: string };

export const PATHS = {
  home: "/",
  mobileGrooming: "/mobile-pet-grooming/",
  serviceArea: "/service-area/",
  gallery: "/gallery/",
  blog: "/blog/",
  about: "/about/",
  faq: "/faq/",
} as const;

export const mainNav: NavItem[] = [
  { label: "Services", href: PATHS.mobileGrooming },
  { label: "Service Areas", href: PATHS.serviceArea },
  { label: "Gallery", href: PATHS.gallery },
  { label: "Blog", href: PATHS.blog },
  { label: "About", href: PATHS.about },
  { label: "FAQ", href: PATHS.faq },
];

// ---------------------------------------------------------------------------
// Service areas: one page each at /mobile-dog-grooming-<city>-ca/.
//
// Selection rule (set by Tongfluence for the owner): every city within about
// a 20-minute off-peak drive of the San Bruno base whose median household
// income is middle class or higher. Middle class here is Pew's definition:
// two-thirds to double the US median ($78,538 in the 2019-2023 ACS), so a
// floor of about $52,400; every city below also clears the stricter local
// floor of two-thirds of the Bay Area median (about $93,000).
//
// Median household income, US Census ACS 2019-2023 5-year estimates (2023
// dollars), and estimated off-peak drive from central San Bruno:
//   San Bruno            $135,976   base
//   South San Francisco  $135,909   ~5 min
//   Millbrae             $157,567   ~6 min
//   Brisbane             $151,593   ~10 min
//   Burlingame           $168,832   ~10 min
//   Colma                $121,488   ~10 min
//   Hillsborough         $250,001+  ~12 min (Census top-codes at $250,001)
//   Pacifica             $156,819   ~12 min
//   Daly City            $119,570   ~12 min
//   San Mateo            $152,669   ~15 min
//   Foster City          $193,633   ~18 min
//   San Francisco        $141,446   ~10-20 min to the southern and western
//                                   neighborhoods; the north-east of the city
//                                   is further, so copy names those areas.
// Left out as over 20 minutes: Belmont, San Carlos, Redwood City, Half Moon
// Bay, Montara. Drive times are estimates (no maps API from the build
// environment); confirm them with the owner.
//
// Income is a selection rule only: it never appears on the site.
// `intro` is public geography, not a business claim. `nearby` are the slugs
// of the closest other service areas, for internal links.
// ---------------------------------------------------------------------------
export const serviceAreas = [
  {
    city: "San Bruno",
    slug: "/mobile-dog-grooming-san-bruno-ca/",
    zips: ["94066"],
    intro:
      "San Bruno sits between Interstate 280 and US 101, just west of San Francisco International Airport, from Tanforan up to the ridge along Skyline Boulevard.",
    local: "San Bruno is our home base, so your street is never far from where the van starts its day.",
    nearby: ["south-san-francisco", "millbrae", "pacifica"],
  },
  {
    city: "South San Francisco",
    slug: "/mobile-dog-grooming-south-san-francisco-ca/",
    zips: ["94080"],
    intro:
      "South San Francisco runs from Sign Hill and its famous \"The Industrial City\" letters down to Orange Memorial Park and west to Westborough.",
    local: "South San Francisco borders San Bruno, so it is one of the shortest trips our van makes.",
    nearby: ["san-bruno", "brisbane", "daly-city"],
  },
  {
    city: "Millbrae",
    slug: "/mobile-dog-grooming-millbrae-ca/",
    zips: ["94030"],
    intro:
      "Millbrae climbs from the Millbrae Station, where BART and Caltrain meet, up through quiet residential streets toward the hills west of El Camino Real.",
    local: "Millbrae is the next town south of San Bruno, a few minutes from our base.",
    nearby: ["san-bruno", "burlingame", "hillsborough"],
  },
  {
    city: "Brisbane",
    slug: "/mobile-dog-grooming-brisbane-ca/",
    zips: ["94005"],
    intro: "Brisbane is a small town tucked against San Bruno Mountain on the Bay side of US 101, between South San Francisco and the city.",
    local: "Brisbane's hillside streets are a short drive up 101 from our San Bruno base.",
    nearby: ["south-san-francisco", "daly-city", "san-francisco"],
  },
  {
    city: "Burlingame",
    slug: "/mobile-dog-grooming-burlingame-ca/",
    zips: ["94010"],
    intro:
      "Burlingame's tree-lined streets run from the shops on Burlingame Avenue and Broadway up into the hills toward Skyline Boulevard.",
    local: "From the flats near the Bay to the Burlingame Hills, our van parks right outside your home.",
    nearby: ["millbrae", "hillsborough", "san-mateo"],
  },
  {
    city: "Colma",
    slug: "/mobile-dog-grooming-colma-ca/",
    zips: ["94014"],
    intro: "Colma is a small town between Daly City and South San Francisco, best known for the cemeteries that cover most of its land.",
    local: "Colma's homes are a short hop from our San Bruno base along I-280 and El Camino Real.",
    nearby: ["daly-city", "south-san-francisco", "san-bruno"],
  },
  {
    city: "Hillsborough",
    slug: "/mobile-dog-grooming-hillsborough-ca/",
    zips: ["94010"],
    intro:
      "Hillsborough is a quiet, residential town in the hills above Burlingame and San Mateo, with winding roads, big lots and no downtown of its own.",
    local: "Hillsborough's homes sit along long, winding roads, which makes a groomer who comes to your door especially handy.",
    nearby: ["burlingame", "san-mateo", "millbrae"],
  },
  {
    city: "Pacifica",
    slug: "/mobile-dog-grooming-pacifica-ca/",
    zips: ["94044"],
    intro: "Pacifica runs along the coast on Highway 1, from Sharp Park and Rockaway Beach to Linda Mar and Pedro Point.",
    local: "Pacifica is just over the hill from San Bruno on Sneath Lane and Skyline Boulevard, so coast-side pets are an easy stop.",
    nearby: ["san-bruno", "daly-city", "south-san-francisco"],
  },
  {
    city: "Daly City",
    slug: "/mobile-dog-grooming-daly-city-ca/",
    zips: ["94014", "94015"],
    intro: "Daly City sits just south of San Francisco, from Westlake and Serramonte to the bluffs above the ocean.",
    local: "Daly City is a short drive up I-280 from our San Bruno base.",
    nearby: ["colma", "pacifica", "san-francisco"],
  },
  {
    city: "San Mateo",
    slug: "/mobile-dog-grooming-san-mateo-ca/",
    zips: ["94401", "94402", "94403"],
    intro:
      "San Mateo stretches from the Bay shoreline at Coyote Point through downtown and Central Park to the hills west of Highway 92.",
    local: "San Mateo is a straight run down US 101 or I-280 from our San Bruno base.",
    nearby: ["burlingame", "hillsborough", "foster-city"],
  },
  {
    city: "Foster City",
    slug: "/mobile-dog-grooming-foster-city-ca/",
    zips: ["94404"],
    intro: "Foster City is a planned city built on reclaimed land along the Bay, laced with lagoons, at the western end of the San Mateo Bridge.",
    local: "Foster City is at the southern edge of our area, still a short drive down 101 from San Bruno.",
    nearby: ["san-mateo", "hillsborough", "burlingame"],
  },
  {
    city: "San Francisco",
    slug: "/mobile-dog-grooming-san-francisco-ca/",
    zips: [],
    intro:
      "We groom in San Francisco's southern and western neighborhoods, the closest to the Peninsula: the Sunset, Parkside, Lakeshore, West Portal, St. Francis Wood, Ingleside, Glen Park and the Excelsior.",
    local: "Those neighborhoods are a short drive up I-280 or Skyline Boulevard from our San Bruno base.",
    nearby: ["daly-city", "brisbane", "pacifica"],
  },
] as const;

export type ServiceArea = (typeof serviceAreas)[number];

// "south-san-francisco" -> the area whose slug contains it.
export function areaByKey(key: string): ServiceArea {
  const a = serviceAreas.find((x) => x.slug === `/mobile-dog-grooming-${key}-ca/`);
  if (!a) throw new Error(`Unknown service area: ${key}`);
  return a;
}

export const areaNav: NavItem[] = [
  { label: "All Service Areas", href: PATHS.serviceArea },
  ...serviceAreas.map((a) => ({ label: a.city, href: a.slug })),
];

export const blogPostPath = (slug: string) => `${PATHS.blog}${slug}/`;

// Every indexable URL except blog posts (the sitemap adds those from
// lib/blog-data.ts, which imports this file).
export const allPaths: string[] = [...Object.values(PATHS), ...serviceAreas.map((a) => a.slug)];

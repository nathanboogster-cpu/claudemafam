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
// San Bruno address on the MoeGo page put the service area on the San
// Francisco Peninsula. Individual cities are not confirmed, so no town pages.
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
    title: "Full dog grooming",
    body: "A complete groom in our van, from small breeds to big, fluffy coats.",
    photo: "white-curly-dog-teddy-face",
  },
  {
    title: "Cat grooming",
    body: "Gentle grooming for cats, at home and without the stress of a car ride.",
    photo: "two-fluffy-cats-after-grooming",
  },
  {
    title: "De-shedding",
    body: "Helps clear loose undercoat from heavy shedders.",
    photo: "golden-retriever-standing-in-van",
  },
  {
    title: "Detangling",
    body: "Works knots and tangles out of long and curly coats.",
    photo: "apricot-poodle-lying-down",
  },
  {
    title: "Nail trimming",
    body: "Neat, comfortable nails for dogs and cats.",
    photo: "smiling-pomeranian",
  },
  {
    title: "Anal gland expression",
    body: "Available with your appointment. Add it when you book.",
    photo: "cream-doodle-smiling",
  },
] as const;

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
  "Your address on the Peninsula or in San Francisco",
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
      "We serve San Francisco and the Peninsula. Not sure we reach your street? Call us at (415) 754-0813 or ask when you book online.",
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
  gallery: "/gallery/",
  about: "/about/",
  faq: "/faq/",
} as const;

export const mainNav: NavItem[] = [
  { label: "Services", href: PATHS.mobileGrooming },
  { label: "Gallery", href: PATHS.gallery },
  { label: "About", href: PATHS.about },
  { label: "FAQ", href: PATHS.faq },
];

// Every indexable URL, for the sitemap.
export const allPaths: string[] = Object.values(PATHS);

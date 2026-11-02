// Central, single source of truth for every verified Sky Pet Grooming fact
// used across the site. Same shape as the I Love Dogs app, but the verified
// facts are few. The only ones we have (from the client's current site at
// skypetgrooming.com and its Google listing) are:
//
//   - the name, Sky Pet Grooming, and the domain skypetgrooming.com
//   - luxury mobile pet grooming, delivered to the customer's doorstep
//   - across California
//   - licensed, insured and eco-friendly
//
// plus the online booking page (MoeGo), supplied by the owner.
//
// Do not add a fact that is not on that list: no phone, email, address,
// cities, hours, prices, service menu, species, vehicle, staff, experience,
// ratings, reviews, awards or photos. See README "Needs owner input".

// Production domain is served on www. Canonicals, og:url, schema, the sitemap
// and robots.txt must all name that host, so a bare skypetgrooming.com value
// is normalized to www here.
const RAW_SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.skypetgrooming.com").replace(/\/+$/, "");
export const SITE_URL = RAW_SITE_URL.replace(/^https?:\/\/skypetgrooming\.com$/i, "https://www.skypetgrooming.com");

// Owner-supplied MoeGo online booking page. Every Book button links here.
export const BOOKING_URL = "https://booking.moego.pet/ol/landing?name=SkyPetGrooming";

export const business = {
  name: "Sky Pet Grooming",
  tagline: "Luxury mobile pet grooming, delivered to your doorstep across California.",
  state: "California",
} as const;

// The three verified trust facts. Used by the trust bar, the home page and the
// About page, so the wording stays identical everywhere.
export const pillars = [
  {
    title: "Mobile, to your doorstep",
    body: "We bring luxury pet grooming to your doorstep, so there is no drive and no salon waiting room.",
  },
  {
    title: "Licensed & insured",
    body: "Sky Pet Grooming is licensed and insured.",
  },
  {
    title: "Eco-friendly",
    body: "Sky Pet Grooming is an eco-friendly grooming service.",
  },
] as const;

// How booking works. Step 1 is the owner's online booking page; steps 2-3
// are the verified service (mobile, at the doorstep).
export const processSteps = [
  {
    title: "Book online",
    body: "Use our online booking page to tell us about your pet and choose your appointment.",
  },
  {
    title: "We come to you",
    body: "On the day, grooming comes to your doorstep. No drive, no drop-off.",
  },
  {
    title: "Groomed at home",
    body: "Your pet is groomed at your doorstep and stays close to home the whole time.",
  },
] as const;

// What a mobile groom saves the owner. These follow from "delivered to your
// doorstep" itself; they are not service-menu claims.
export const mobileBenefits = [
  {
    title: "No drive",
    body: "No loading your pet into the car, and no trip across town and back.",
  },
  {
    title: "No waiting room",
    body: "No drop-off window and no hours waiting at a salon.",
  },
  {
    title: "Close to home",
    body: "Your pet stays at home, right up until the groom starts at your doorstep.",
  },
] as const;

// What to have ready when booking, so the groomer can plan the groom.
export const bookingChecklist = [
  "Your city or ZIP code in California",
  "Breed, size and age of each pet",
  "Coat type and when they were last groomed",
  "Anything we should know: nerves, health, matting",
] as const;

// FAQ answers are plain text so visible copy and FAQPage schema are identical.
export const faqs = [
  {
    question: "What is Sky Pet Grooming?",
    answer:
      "Sky Pet Grooming is a luxury mobile pet grooming service. We bring grooming to your doorstep across California.",
  },
  {
    question: "Do I need to take my pet anywhere?",
    answer: "No. We are mobile, so grooming comes to your doorstep. There is no drive and no salon waiting room.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve customers across California. Not sure we reach your area? Ask when you book online.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. Sky Pet Grooming is licensed and insured.",
  },
  {
    question: "Are you eco-friendly?",
    answer: "Yes. Sky Pet Grooming is an eco-friendly grooming service.",
  },
  {
    question: "How much does mobile grooming cost?",
    answer:
      "We do not publish prices on this website. Grooming depends on your pet's breed, size and coat, so tell us about your pet when you book online.",
  },
  {
    question: "How do I book?",
    answer: "Book online through our booking page. Every Book Online button on this site takes you there.",
  },
] as const;

export type NavItem = { label: string; href: string };

export const PATHS = {
  home: "/",
  mobileGrooming: "/mobile-pet-grooming/",
  about: "/about/",
  faq: "/faq/",
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: PATHS.home },
  { label: "Mobile Grooming", href: PATHS.mobileGrooming },
  { label: "About", href: PATHS.about },
  { label: "FAQ", href: PATHS.faq },
];

// Every indexable URL, for the sitemap.
export const allPaths: string[] = Object.values(PATHS);

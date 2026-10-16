// Single source of truth for every I Love Dogs Pet Grooming fact on this
// site. Everything here comes from the verified build brief (current and
// older client websites, Google, Yelp, Facebook). Do not add a fact that is
// not in that brief: no hours, ratings, reviews, awards, business age,
// email, booking widget or services beyond the three grooming packages and
// pickup and delivery.

// Production domain is owner-supplied and served on www. Canonicals, og:url,
// schema, the sitemap and robots.txt must all name that host, so a bare
// ilovedogsgrooming.com value is normalized to www here.
const RAW_SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ilovedogsgrooming.com").replace(/\/+$/, "");
export const SITE_URL = RAW_SITE_URL.replace(/^https?:\/\/ilovedogsgrooming\.com$/i, "https://www.ilovedogsgrooming.com");

export const business = {
  name: "I Love Dogs Pet Grooming",
  shortName: "I Love Dogs",
  phoneDisplay: "610-525-7387",
  phoneHref: "tel:+16105257387",
  phoneE164: "+16105257387",
  street: "723 County Line Rd",
  city: "Bryn Mawr",
  region: "PA",
  zip: "19010",
  addressFull: "723 County Line Rd, Bryn Mawr, PA 19010",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=723%20County%20Line%20Rd%2C%20Bryn%20Mawr%2C%20PA%2019010",
  facebookUrl: "https://www.facebook.com/ilovedogspetgrooming",
  yelpUrl: "https://www.yelp.com/biz/i-love-dogs-bryn-mawr-2",
  // Google and Yelp disagree on hours, so none are published anywhere.
  hoursNote: "Please call 610-525-7387 for current hours.",
} as const;

// Towns served, as listed on the client's older website.
export const towns = ["Bryn Mawr", "Gladwyne", "Haverford", "Ardmore", "Havertown"] as const;

export const PATHS = {
  home: "/",
  dogGrooming: "/dog-grooming/",
  pickup: "/pickup-and-delivery/",
  serviceArea: "/service-area/",
  about: "/about/",
  faq: "/faq/",
  contact: "/contact/",
} as const;

export type SitePath = (typeof PATHS)[keyof typeof PATHS];

export const nav: { label: string; href: SitePath }[] = [
  { label: "Dog Grooming", href: PATHS.dogGrooming },
  { label: "Pickup & Delivery", href: PATHS.pickup },
  { label: "Service Area", href: PATHS.serviceArea },
  { label: "About", href: PATHS.about },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

// Breadcrumb / footer names per page.
export const pageNames: Record<SitePath, string> = {
  [PATHS.home]: "Home",
  [PATHS.dogGrooming]: "Dog Grooming",
  [PATHS.pickup]: "Pickup & Delivery",
  [PATHS.serviceArea]: "Service Area",
  [PATHS.about]: "About",
  [PATHS.faq]: "FAQ",
  [PATHS.contact]: "Contact",
};

export const packages = [
  {
    name: "Bath & Pamper",
    price: 75,
    description: "A gentle bath, blow dry, brushing and nail trim.",
    plus: [] as string[],
  },
  {
    name: "The Works",
    price: 115,
    description: "Everything in Bath & Pamper, plus:",
    plus: ["A full haircut or tidy-up trim", "Ear cleaning", "A dog-safe cologne spritz"],
  },
  {
    name: "Full Spa Day",
    price: 150,
    description: "Everything in The Works, plus:",
    plus: ["A skin and coat treatment, such as de-shedding or deep conditioning", "Paw balm", "Teeth brushing"],
  },
] as const;

export const priceNote =
  "Prices are quoted when we meet your dog. They depend on size, coat length, coat type and condition.";

// FAQ answers are plain text so the visible copy and the FAQPage schema are
// identical, character for character.
export const faqs = [
  {
    question: "What grooming packages do you offer?",
    answer:
      "Bath & Pamper (from $75) is a gentle bath, blow dry, brushing and nail trim. The Works (from $115) adds a full haircut or tidy-up trim, ear cleaning and a dog-safe cologne spritz. Full Spa Day (from $150) adds a skin and coat treatment such as de-shedding or deep conditioning, paw balm and teeth brushing.",
  },
  {
    question: "Do you offer pickup and delivery?",
    answer:
      "Yes. We can pick your dog up and bring them home after the groom. Call us at 610-525-7387 with your address so we can confirm we cover it.",
  },
  {
    question: "What products do you use to wash dogs?",
    answer: "We use chemical-free washing products.",
  },
  {
    question: "Is the bath water warm?",
    answer: "Yes. We heat water with a tankless system, so the bath stays warm for the whole wash.",
  },
  {
    question: "Where are you located?",
    answer: "723 County Line Rd, Bryn Mawr, PA 19010.",
  },
  {
    question: "Which towns do you serve?",
    answer: "We serve Bryn Mawr, Gladwyne, Haverford, Ardmore, Havertown and the greater Eastern Main Line.",
  },
  {
    question: "How much does dog grooming cost?",
    answer:
      "Packages start at $75 for Bath & Pamper, $115 for The Works and $150 for Full Spa Day. Final prices are quoted when we meet your dog and depend on size, coat length, coat type and condition.",
  },
  {
    question: "How do I book?",
    answer: "Call 610-525-7387. Please ask about current hours when you call.",
  },
] as const;

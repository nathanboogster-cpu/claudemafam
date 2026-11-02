// Central, single source of truth for every verified I Love Dogs Pet Grooming
// fact used across the site. Sourced from the build brief (current and older
// client websites, Google, Yelp, Facebook). Same shape as the Pampered Puppies
// app, but do not add a fact that is not in the brief: no hours, ratings,
// review counts, testimonials, awards, business age, email, booking widget,
// photos, or services beyond the three packages and pickup and delivery.

// Production domain is owner-supplied and served on www. Canonicals, og:url,
// schema, the sitemap and robots.txt must all name that host, so a bare
// ilovedogsgrooming.com value is normalized to www here.
const RAW_SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ilovedogsgrooming.com").replace(/\/+$/, "");
export const SITE_URL = RAW_SITE_URL.replace(/^https?:\/\/ilovedogsgrooming\.com$/i, "https://www.ilovedogsgrooming.com");

export const business = {
  name: "I Love Dogs Pet Grooming",
  shortName: "I Love Dogs",
  owners: "Bob and Theresa Pelletier",
  phoneDisplay: "610-525-7387",
  phoneHref: "tel:+16105257387",
  phoneE164: "+16105257387",
  addressLine1: "723 County Line Rd",
  addressCity: "Bryn Mawr",
  addressState: "PA",
  addressZip: "19010",
  addressFull: "723 County Line Rd, Bryn Mawr, PA 19010",
  mapsLinkQuery:
    "https://www.google.com/maps/search/?api=1&query=723%20County%20Line%20Rd%2C%20Bryn%20Mawr%2C%20PA%2019010",
  socials: {
    facebook: "https://www.facebook.com/ilovedogspetgrooming",
    yelp: "https://www.yelp.com/biz/i-love-dogs-bryn-mawr-2",
  },
  // Google and Yelp disagree on hours, so none are published anywhere.
  hoursNote: "Please call 610-525-7387 for current hours.",
} as const;

export const people = {
  theresa: "Theresa has over 50 years of experience caring for dogs.",
  jolie: "Groomer Jolie has 15 years of professional grooming experience.",
} as const;

// Towns served, as listed on the client's older website.
export const serviceAreas = ["Bryn Mawr", "Gladwyne", "Haverford", "Ardmore", "Havertown"] as const;

export const serviceAreaGeneral = "the greater Eastern Main Line";

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

// Verified trust facts for the "Why Main Line dog owners call us" grid.
export const trustPoints = [
  {
    title: "Warm bath, every time",
    body: "Tankless water heating means the bath stays warm from the first rinse to the last.",
  },
  {
    title: "Chemical-free washing products",
    body: "We wash with chemical-free products.",
  },
  {
    title: "Family-owned",
    body: "I Love Dogs is family-owned and run by Bob and Theresa Pelletier.",
  },
  {
    title: "Over 50 years with dogs",
    body: people.theresa,
  },
  {
    title: "15 years of professional grooming",
    body: people.jolie,
  },
  {
    title: "Pickup and delivery",
    body: "We can pick your dog up and bring them home after the groom. Call to confirm your address.",
  },
] as const;

// Verified 4-step process, used across service and town pages.
export const processSteps = [
  {
    title: "Call us",
    body: "Call 610-525-7387 to book. Asking about pickup? Tell us your address so we can confirm we cover it.",
  },
  {
    title: "Drop off, or we pick up",
    body: "Bring your dog to the salon at 723 County Line Rd, or we pick your dog up.",
  },
  {
    title: "The groom",
    body: "A warm bath from our tankless system, chemical-free products and the package you chose.",
  },
  {
    title: "Home, clean",
    body: "Collect your dog from the salon, or we bring them home.",
  },
] as const;

// FAQ answers are plain text so visible copy and FAQPage schema are identical.
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

export type NavItem = { label: string; href: string };

export const PATHS = {
  home: "/",
  dogGrooming: "/dog-grooming/",
  pickup: "/pickup-and-delivery/",
  serviceArea: "/service-area/",
  about: "/about/",
  faq: "/faq/",
  contact: "/contact/",
  gallery: "/gallery/",
} as const;

// Town pages. I Love Dogs has ONE salon (Bryn Mawr, see business.addressFull);
// every page built from this data must say so and never imply a second
// location or that grooming happens at the customer's home. The township and
// county lines are public geography, not business claims. Pickup radius is
// unknown, so every page says to call and confirm the address. Bryn Mawr has
// no town page: the home page targets it.
export const townPages = [
  {
    city: "Gladwyne",
    slug: "/dog-grooming-gladwyne-pa/",
    intro:
      "Gladwyne is in Lower Merion Township, Montgomery County, and it is one of the towns our salon on County Line Road in Bryn Mawr serves.",
    angle:
      "Gladwyne dog owners can bring their dog to the salon, or call to ask whether we can pick up from their address and bring their dog home after the groom.",
  },
  {
    city: "Haverford",
    slug: "/dog-grooming-haverford-pa/",
    intro:
      "Haverford sits between Bryn Mawr and Ardmore on the Main Line, and it is one of the towns our salon on County Line Road serves.",
    angle:
      "Haverford dog owners can bring their dog to the salon. Rather not make the trip? Call with your address and we will confirm whether pickup and delivery covers it.",
  },
  {
    city: "Ardmore",
    slug: "/dog-grooming-ardmore-pa/",
    intro:
      "Ardmore spans Lower Merion Township in Montgomery County and Haverford Township in Delaware County. It is one of the Eastern Main Line towns our Bryn Mawr salon serves.",
    angle:
      "Ardmore dog owners can drop off at 723 County Line Rd, or call to ask about pickup and delivery from their address.",
  },
  {
    city: "Havertown",
    slug: "/dog-grooming-havertown-pa/",
    intro:
      "Havertown is in Haverford Township, Delaware County, and it is one of the towns our salon on County Line Road in Bryn Mawr serves.",
    angle:
      "Havertown dog owners can bring their dog to the salon, or call with their address to ask whether we can pick up and bring their dog home clean.",
  },
] as const;

export type TownPage = (typeof townPages)[number];

export const serviceNav: NavItem[] = [
  { label: "Dog Grooming & Prices", href: PATHS.dogGrooming },
  { label: "Pickup & Delivery", href: PATHS.pickup },
];

export const areaNavLinks: NavItem[] = [
  { label: "All Service Areas", href: PATHS.serviceArea },
  ...townPages.map((t) => ({ label: t.city, href: t.slug })),
];

export const companyNav: NavItem[] = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Gallery", href: PATHS.gallery },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

// Client-supplied photos (Google Drive "I Love Dogs Grooming" folder), with
// EXIF/GPS stripped. The people were identified by the owner's agency:
// Theresa Pelletier in three photos, groomer Jolie with Theresa in one.
// Alt text describes only what is visible; no breeds are guessed.
export type Photo = { src: string; width: number; height: number; alt: string };

export const teamPhotos = {
  theresaHug: {
    src: "/images/theresa-pelletier-hugging-groomed-dog.jpg",
    width: 947,
    height: 1280,
    alt: "Theresa Pelletier hugging a fluffy black, white and tan dog in the grooming room at I Love Dogs",
  },
  theresaKiss: {
    src: "/images/theresa-pelletier-kissing-small-dog.jpg",
    width: 892,
    height: 1600,
    alt: "Theresa Pelletier kissing a small cream-colored dog",
  },
  theresaTwoDogs: {
    src: "/images/theresa-pelletier-with-two-dogs.jpg",
    width: 726,
    height: 1280,
    alt: "Theresa Pelletier sitting in a wicker chair with two small long-haired dogs",
  },
  jolieAndTheresa: {
    src: "/images/jolie-and-theresa-pelletier.jpg",
    width: 1320,
    height: 1369,
    alt: "Groomer Jolie and Theresa Pelletier smiling together",
  },
} satisfies Record<string, Photo>;

export const beforeAfterPhotos: Photo[] = [
  {
    src: "/images/before-after-brown-white-fluffy-dog.jpg",
    width: 800,
    height: 799,
    alt: "Before and after grooming at I Love Dogs: a shaggy brown and white dog, then trimmed short with a rounded face",
  },
  {
    src: "/images/before-after-apricot-curly-dog.jpg",
    width: 1280,
    height: 1265,
    alt: "Before and after grooming at I Love Dogs: a curly apricot dog, then clipped into a neat rounded trim",
  },
  {
    src: "/images/before-after-gray-white-shaggy-dog.jpg",
    width: 1024,
    height: 1013,
    alt: "Before and after grooming at I Love Dogs: a gray and white dog with hair over its eyes, then a clean face and tidy coat",
  },
  {
    src: "/images/before-after-cream-dog-face-trim.jpg",
    width: 933,
    height: 950,
    alt: "Before and after grooming at I Love Dogs: a small fluffy cream dog, then a rounded face trim",
  },
  {
    src: "/images/before-after-tan-long-haired-dog.jpg",
    width: 946,
    height: 942,
    alt: "Before and after grooming at I Love Dogs: a long-haired tan dog, then a shorter, neater trim",
  },
];

export const groomedPhotos: Photo[] = [
  {
    src: "/images/groomed-two-fluffy-dogs.jpg",
    width: 360,
    height: 480,
    alt: "Two freshly groomed fluffy dogs, one red-brown and one apricot, in front of a paw-print backdrop",
  },
  {
    src: "/images/groomed-black-white-fluffy-dog.jpg",
    width: 391,
    height: 800,
    alt: "A groomed black and white fluffy dog sitting on the grooming table",
  },
  {
    src: "/images/groomed-tan-black-terrier.jpg",
    width: 462,
    height: 480,
    alt: "A small tan and black dog with a groomed coat resting on the grooming table",
  },
  {
    src: "/images/groomed-tan-dog-dark-ears.jpg",
    width: 519,
    height: 640,
    alt: "A groomed tan dog with dark ears sitting on the grooming table",
  },
  {
    src: "/images/groomed-tan-terrier-mix.jpg",
    width: 613,
    height: 640,
    alt: "A small tan dog with a short trim sitting in front of a paw-print backdrop",
  },
  {
    src: "/images/groomed-apricot-dog-short-trim.jpg",
    width: 322,
    height: 640,
    alt: "An apricot dog with a short body trim and longer ears",
  },
  {
    src: "/images/groomed-cream-small-dog.jpg",
    width: 592,
    height: 640,
    alt: "A small fluffy cream dog lying on a rug at home after a groom",
  },
  {
    src: "/images/fluffy-cream-puppy.jpg",
    width: 640,
    height: 603,
    alt: "A fluffy cream puppy sitting on a tiled floor",
  },
  {
    src: "/images/black-white-puppy-with-toy.jpg",
    width: 489,
    height: 640,
    alt: "A black and white puppy holding a blue chew toy",
  },
];

// Every indexable URL, for the sitemap.
export const allPaths: string[] = [...Object.values(PATHS), ...townPages.map((t) => t.slug)];

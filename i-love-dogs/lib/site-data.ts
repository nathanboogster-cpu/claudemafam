// Central, single source of truth for every verified I Love Dogs Pet Grooming
// fact used across the site. Sourced from the build brief (current and older
// client websites, Google, Yelp, Facebook), plus the email address and the
// mother-daughter relationship from the client's current site. Same shape as
// the Pampered Puppies app, but do not add an unverified fact: no hours,
// ratings, review counts, testimonials, business age, booking widget, or
// services beyond the three packages and pickup and delivery. The one award,
// "Best of Philly", is shown at the agency's request, worded as on the
// client's current site; it has no year or publication, so name neither.

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
  email: "ilovedogsgroomingbrynmawr@gmail.com",
  award: "Best of Philly",
  awardLine: "Voted Best of Philly",
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
  // From the client's current site.
  family: "Theresa and her daughter Jolie work side by side as a mother-daughter team.",
  jolieGrewUp: "Jolie grew up working in the salon beside her mother.",
} as const;

// Towns served, nearest first. The first five are from the client's older
// website. Rosemont, Villanova, Wynnewood and Radnor were added by the agency:
// Main Line towns within about a 10-minute drive of the salon, with median
// household incomes at or above the Pennsylvania median (2019-2023 ACS).
// Drive times are estimates from distance, not measured routes.
export const serviceAreas = [
  "Bryn Mawr",
  "Rosemont",
  "Haverford",
  "Ardmore",
  "Villanova",
  "Wynnewood",
  "Havertown",
  "Gladwyne",
  "Radnor",
] as const;

// "Bryn Mawr, Rosemont, ... and Radnor", for running text.
export const serviceAreaList = `${serviceAreas.slice(0, -1).join(", ")} and ${serviceAreas[serviceAreas.length - 1]}`;

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
    body: "I Love Dogs is family-owned and run by Bob and Theresa Pelletier. Theresa grooms alongside her daughter Jolie.",
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
    answer: `We serve ${serviceAreas.join(", ")} and the greater Eastern Main Line.`,
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
  {
    question: "Who will groom my dog?",
    answer:
      "Theresa Pelletier, who has over 50 years of experience caring for dogs, and her daughter Jolie, who has 15 years of professional grooming experience. They work side by side as a mother-daughter team.",
  },
  {
    question: "Can I email you?",
    answer:
      "Yes, at ilovedogsgroomingbrynmawr@gmail.com. To book, or to check current hours, a phone call to 610-525-7387 is fastest.",
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
  blog: "/blog/",
} as const;

// Town pages. I Love Dogs has ONE salon (Bryn Mawr, see business.addressFull);
// every page built from this data must say so and never imply a second
// location or that grooming happens at the customer's home. The township and
// county lines are public geography, not business claims. Pickup radius is
// unknown, so every page says to call and confirm the address. Bryn Mawr has
// no town page: the home page targets it.
export const townPages = [
  {
    city: "Rosemont",
    slug: "/dog-grooming-rosemont-pa/",
    intro:
      "Rosemont, just west of Bryn Mawr, spans Lower Merion and Radnor townships, and it is one of the towns our salon on County Line Road serves.",
    angle:
      "Rosemont dog owners are close to the salon at 723 County Line Rd. Can't drop off? Call with your address and we will confirm whether pickup and delivery covers it.",
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
    city: "Villanova",
    slug: "/dog-grooming-villanova-pa/",
    intro:
      "Villanova spans Radnor Township in Delaware County and Lower Merion Township in Montgomery County, and it is one of the towns our Bryn Mawr salon serves.",
    angle:
      "Villanova dog owners can bring their dog to the salon on County Line Road, or call to ask whether we can pick up from their address.",
  },
  {
    city: "Wynnewood",
    slug: "/dog-grooming-wynnewood-pa/",
    intro:
      "Wynnewood, east of Ardmore in Lower Merion Township, Montgomery County, is one of the Eastern Main Line towns our Bryn Mawr salon serves.",
    angle:
      "Wynnewood dog owners can drop off at the salon, or call with their address to ask about pickup and delivery.",
  },
  {
    city: "Havertown",
    slug: "/dog-grooming-havertown-pa/",
    intro:
      "Havertown is in Haverford Township, Delaware County, and it is one of the towns our salon on County Line Road in Bryn Mawr serves.",
    angle:
      "Havertown dog owners can bring their dog to the salon, or call with their address to ask whether we can pick up and bring their dog home clean.",
  },
  {
    city: "Gladwyne",
    slug: "/dog-grooming-gladwyne-pa/",
    intro:
      "Gladwyne is in Lower Merion Township, Montgomery County, and it is one of the towns our salon on County Line Road in Bryn Mawr serves.",
    angle:
      "Gladwyne dog owners can bring their dog to the salon, or call to ask whether we can pick up from their address and bring their dog home after the groom.",
  },
  {
    city: "Radnor",
    slug: "/dog-grooming-radnor-pa/",
    intro:
      "Radnor, west of Villanova in Radnor Township, Delaware County, is one of the Main Line towns our Bryn Mawr salon serves.",
    angle:
      "Radnor dog owners can bring their dog to the salon at 723 County Line Rd, or call with their address to ask about pickup and delivery.",
  },
] as const;

export type TownPage = (typeof townPages)[number];

// Individual service pages (/dog-grooming/<slug>/). Every service here is
// part of one or more of the three published packages; none is listed as
// sold on its own, because no source says so. `packages` names which
// packages include it, and the page's starting price is the cheapest of
// those. Sources checked: the current site, the old site, Yelp, the Google
// listing and directory listings. None lists any service beyond the
// packages and pickup and delivery.
export type PackageName = (typeof packages)[number]["name"];

export const servicePages = [
  {
    slug: "dog-bath",
    name: "Dog Bath & Blow Dry",
    schemaName: "Dog Bathing",
    seoTitle: "Dog Bath & Blow Dry in Bryn Mawr, PA | I Love Dogs",
    description:
      "A warm, gentle dog bath with chemical-free products, blow dry and brushing, in every package from $75. I Love Dogs, Bryn Mawr, PA. Call 610-525-7387.",
    hook: "Does your dog shiver through bath time?",
    intro:
      "Every groom at I Love Dogs starts with a bath. Our water is heated by a tankless system, so it stays warm from the first rinse to the last, and we wash with chemical-free products.",
    included: [
      "A gentle bath in warm water that doesn't run cold",
      "Chemical-free washing products",
      "A full blow dry, so the coat isn't left damp",
      "Brushing to lift out loose hair and small tangles",
    ],
    goodToKnow: [
      "A coat that's left damp can tangle and stay cold against the skin, which is why we blow dry every dog.",
      "Brushing at home between visits keeps tangles from turning into mats.",
      "If your dog's skin is red, flaky or itchy, check with your vet.",
    ],
    packages: ["Bath & Pamper", "The Works", "Full Spa Day"],
    guideSlug: "warm-bath-nervous-dogs-haverford",
    photo: "groomed-two-fluffy-dogs",
  },
  {
    slug: "dog-haircuts",
    name: "Dog Haircuts & Tidy-Up Trims",
    schemaName: "Dog Haircut",
    seoTitle: "Dog Haircuts & Trims in Bryn Mawr, PA | I Love Dogs",
    description:
      "A full dog haircut or a tidy-up trim, part of The Works (from $115) and Full Spa Day at I Love Dogs in Bryn Mawr, PA. Call 610-525-7387.",
    hook: "Has your dog's coat grown out of shape?",
    intro:
      "We offer a full haircut or a tidy-up trim as part of The Works and Full Spa Day. Tell us what you'd like when you call, and we'll suggest which suits your dog.",
    included: [
      "A full haircut, taking the whole coat to a new length and shape, or",
      "A tidy-up trim that keeps the current style and neatens the face, eyes, feet and rear",
      "Everything in Bath & Pamper first: warm bath, blow dry, brushing and nail trim",
    ],
    goodToKnow: [
      "A tidy-up trim suits a coat that's already a length you like. A full haircut suits a coat that has grown out, tangled or lost its shape.",
      "Coats that keep growing, such as curly and wavy coats, usually need trims on a steady routine.",
      "Hair in the eyes or tangles you can't brush out at home are signs it's time.",
    ],
    packages: ["The Works", "Full Spa Day"],
    guideSlug: "haircut-or-tidy-up-trim-wynnewood",
    photo: "before-after-brown-white-fluffy-dog",
  },
  {
    slug: "nail-trims",
    name: "Dog Nail Trims",
    schemaName: "Dog Nail Trimming",
    seoTitle: "Dog Nail Trims in Bryn Mawr, PA | I Love Dogs",
    description:
      "Dog nail trims are part of every grooming package at I Love Dogs in Bryn Mawr, PA, starting with Bath & Pamper from $75. Call 610-525-7387.",
    hook: "Can you hear your dog coming across the kitchen floor?",
    intro:
      "A nail trim is part of every grooming package we offer, starting with Bath & Pamper. Long nails can change the way a dog stands and walks, and they're more likely to catch or split.",
    included: [
      "A nail trim with every package",
      "Plus a warm bath, blow dry and brushing in Bath & Pamper",
    ],
    goodToKnow: [
      "If you can hear clicking on hard floors, or the nails touch the ground when your dog stands still, they're due.",
      "Dewclaws, on the inside of the leg, can curl around if they're left too long.",
      "If a nail is cracked, bleeding or your dog is limping, call your vet.",
    ],
    packages: ["Bath & Pamper", "The Works", "Full Spa Day"],
    guideSlug: "dog-nail-care-between-grooms-ardmore",
    photo: "groomed-tan-terrier-mix",
  },
  {
    slug: "ear-cleaning",
    name: "Dog Ear Cleaning",
    schemaName: "Dog Ear Cleaning",
    seoTitle: "Dog Ear Cleaning in Bryn Mawr, PA | I Love Dogs",
    description:
      "Dog ear cleaning is part of The Works (from $115) and Full Spa Day at I Love Dogs Pet Grooming in Bryn Mawr, PA. Call 610-525-7387 to book.",
    hook: "Does your dog have floppy or hairy ears?",
    intro:
      "Ear cleaning is part of The Works and Full Spa Day. Floppy ears and ears with a lot of hair inside let less air in, so moisture and dirt can build up.",
    included: [
      "Ear cleaning",
      "Plus a haircut or tidy-up trim and a dog-safe cologne spritz in The Works",
      "Plus everything in Bath & Pamper: warm bath, blow dry, brushing and nail trim",
    ],
    goodToKnow: [
      "A little light-colored wax is normal.",
      "Redness, swelling, a strong smell, dark discharge or a lot of head shaking are reasons to see your vet, not a groomer.",
      "Dogs who swim or are bathed often may need their ears checked more.",
    ],
    packages: ["The Works", "Full Spa Day"],
    guideSlug: "dog-ear-cleaning-basics-gladwyne",
    photo: "groomed-tan-dog-dark-ears",
  },
  {
    slug: "de-shedding",
    name: "De-Shedding & Deep Conditioning",
    schemaName: "Dog De-Shedding Treatment",
    seoTitle: "Dog De-Shedding in Bryn Mawr, PA | I Love Dogs",
    description:
      "De-shedding or deep conditioning for your dog's skin and coat, part of Full Spa Day from $150 at I Love Dogs in Bryn Mawr, PA. Call 610-525-7387.",
    hook: "Is your dog's fur all over the floor, the car and the sofa?",
    intro:
      "Our Full Spa Day includes a skin and coat treatment, chosen for your dog's coat: de-shedding for heavy shedders, or deep conditioning for a coat that feels dry or looks dull.",
    included: [
      "De-shedding, which works out loose undercoat during the groom, or",
      "Deep conditioning, for a dry or dull coat",
      "Plus paw balm and teeth brushing",
      "Plus everything in The Works: warm bath, blow dry, brushing, nail trim, haircut or tidy-up trim, ear cleaning and a cologne spritz",
    ],
    goodToKnow: [
      "Many dogs have a soft undercoat that gets trapped when it loosens. De-shedding helps it come out at the salon rather than around your home.",
      "Shaving a double coat isn't always a good idea, because it helps protect the skin and doesn't always grow back the same. Ask us first.",
      "If shedding comes with bald patches, sores or itching, see your vet.",
    ],
    packages: ["Full Spa Day"],
    guideSlug: "what-de-shedding-does-villanova",
    photo: "before-after-gray-white-shaggy-dog",
  },
  {
    slug: "teeth-brushing",
    name: "Dog Teeth Brushing",
    schemaName: "Dog Teeth Brushing",
    seoTitle: "Dog Teeth Brushing in Bryn Mawr, PA | I Love Dogs",
    description:
      "Dog teeth brushing is part of Full Spa Day (from $150) at I Love Dogs Pet Grooming in Bryn Mawr, PA, with paw balm and a coat treatment. Call 610-525-7387.",
    hook: "When did your dog last have their teeth brushed?",
    intro:
      "Teeth brushing is part of our Full Spa Day, together with paw balm and a skin and coat treatment. Regular brushing helps remove plaque before it builds up.",
    included: [
      "Teeth brushing",
      "Paw balm, to help keep paw pads soft",
      "A skin and coat treatment, such as de-shedding or deep conditioning",
      "Plus everything in The Works",
    ],
    goodToKnow: [
      "Brushing during a groom is not a dental cleaning, and it doesn't replace one at the vet.",
      "Very bad breath, red or bleeding gums, loose teeth or trouble eating are reasons to see your vet.",
      "Brushing at home, with a toothpaste made for dogs, helps between visits.",
    ],
    packages: ["Full Spa Day"],
    guideSlug: "why-teeth-brushing-matters-radnor",
    photo: "groomed-black-white-fluffy-dog",
  },
] as const satisfies readonly {
  slug: string;
  name: string;
  schemaName: string;
  seoTitle: string;
  description: string;
  hook: string;
  intro: string;
  included: readonly string[];
  goodToKnow: readonly string[];
  packages: readonly PackageName[];
  guideSlug: string;
  photo: string;
}[];

export type ServicePage = (typeof servicePages)[number];

export const servicePath = (slug: string) => `${PATHS.dogGrooming}${slug}/`;

// Starting price of a service: the cheapest package that includes it.
export function serviceFromPrice(service: ServicePage) {
  return Math.min(...packages.filter((p) => (service.packages as readonly string[]).includes(p.name)).map((p) => p.price));
}

export const serviceNav: NavItem[] = [
  { label: "Dog Grooming & Prices", href: PATHS.dogGrooming },
  ...servicePages.map((s) => ({ label: s.name, href: servicePath(s.slug) })),
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
  { label: "Blog", href: PATHS.blog },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

// Client-supplied photos (Google Drive "I Love Dogs Grooming" folder), with
// EXIF/GPS stripped. The people were identified by the owner's agency:
// Theresa Pelletier in three photos, her daughter Jolie with her in one.
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
    alt: "Groomer Jolie and her mother, Theresa Pelletier, smiling together",
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
export const allPaths: string[] = [
  ...Object.values(PATHS),
  ...servicePages.map((s) => servicePath(s.slug)),
  ...townPages.map((t) => t.slug),
];

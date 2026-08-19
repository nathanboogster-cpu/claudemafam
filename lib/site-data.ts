// Central, single source of truth for every verified business fact used across the site.
// Sourced from the Client Record, Website Build Brief, and Claude Code Final Handoff
// for Pampered Puppies (Ellen / Donna Nichols). Do not add facts that aren't in those
// documents — see the handoff §2 "what must not appear" list.

export const SITE_URL = "https://www.pamperedpuppies.net";

export const business = {
  name: "Pampered Puppies",
  ownerName: "Donna Nichols",
  ownerExperience: "35+ years of hands-on dog & cat grooming experience",
  firstAid: "First-aid trained, including for seizures and heart attacks",
  phoneDisplay: "760-881-3171",
  phoneHref: "tel:+17608813171",
  email: "pamperedpuppies.dn@gmail.com",
  addressLine1: "15444 Bear Valley Rd, Ste A",
  addressCity: "Victorville",
  addressState: "CA",
  addressZip: "92395",
  get addressFull() {
    return `${this.addressLine1}, ${this.addressCity}, ${this.addressState} ${this.addressZip}`;
  },
  mapEmbedQuery: "15444+Bear+Valley+Rd+Ste+A+Victorville+CA+92395",
  mapsLinkQuery: "https://www.google.com/maps/search/?api=1&query=15444+Bear+Valley+Rd+Ste+A+Victorville+CA+92395",
  googleRating: "4.3",
  googleReviewCount: 226,
  bbb: "BBB Accredited Business, A+ rating",
  socials: {
    facebook: "https://www.facebook.com/Pampered-Puppies-101593352183190",
    yelp: "https://www.yelp.com/biz/pampered-puppies-victorville",
    twitter: "https://twitter.com/PamperPuppies",
  },
  // Google review link used for "leave a review" CTAs on the Reviews page.
  googleReviewLink: "https://share.google/i7uzWVzW7akDJWenj",
} as const;

// HOURS — NOT YET FINAL. Three sources conflict (Thryv site, GBP, Yelp). Per the
// handoff and build brief, the GBP-sourced hours are used as the placeholder below.
// THIS MUST BE CONFIRMED WITH ELLEN BEFORE LAUNCH.
export const hours = [
  { day: "Monday", time: "10:00am – 5:00pm" },
  { day: "Tuesday", time: "10:00am – 5:00pm" },
  { day: "Wednesday", time: "Closed" },
  { day: "Thursday", time: "10:00am – 5:00pm" },
  { day: "Friday", time: "10:00am – 5:00pm" },
  { day: "Saturday", time: "10:00am – 5:00pm" },
  { day: "Sunday", time: "10:00am – 5:00pm" },
] as const;

// Schema.org openingHoursSpecification day codes, grouped by identical hours.
export const hoursSchema = [
  { dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "17:00" },
] as const;

export const serviceAreas = [
  "Victorville",
  "Spring Valley Lake",
  "Hesperia",
  "Apple Valley",
  "Barstow",
  "Helendale",
] as const;

export const serviceAreaGeneral = "the greater High Desert / San Bernardino County area";

export const dogServices = [
  "Baths",
  "Full haircut",
  "Feet, face & rear trim",
  "Deshedding",
  "Dematting",
  "Teeth brushing",
  "Ear cleaning & ear hair removal",
  "Eye cleaning",
  "Anal gland expression",
  "Nail trim & filing",
  "Temporary / semi-permanent fur color",
  "Conditioning treatments",
  "Flea treatment & removal",
  "Tick removal",
  "CBD treats & treatments",
] as const;

export const catServices = [
  "Full baths",
  "Spot shampooing",
  "Strategic fur trimming",
  "Nail clipping",
  "Flea & tick removal",
  "Deshedding",
  "Skin & coat moisturizing",
  "Temporary / semi-permanent fur color",
  "CBD treats & treatments",
] as const;

export const dogPricing = {
  small: "$55–65",
  large: "$65–85",
  note: "Starting prices — final pricing depends on breed, coat condition, and temperament.",
} as const;

export const testimonials = [
  {
    quote:
      "Donna is absolutely the best! She has been grooming my 2 dogs for quite some time now & she does a great job every time! I've also used her mobile grooming services, just AWESOME! I would highly recommend all their services they offer.",
    attribution: "Google review",
    tag: "mobile",
  },
  {
    quote:
      "This review is specifically for groomer Donna - She is simply is the best dog groomer, period... The grooming itself has always been superb, which speaks a lot given that he is a double-coated German Shepherd and Terrier mix, with two different texture fur and three different colored hairs. His nails are dark and other groomers have made accidents which leads to bleeding, but never had that concern with Donna.",
    attribution: "Lila S.",
    tag: "dog",
  },
  {
    quote:
      "Took both my boxer babies to Donna. They came home looking amazing. She was so gentle and patient with my boy who was hesitant and moody... Shop was clean and the rest of the staff was also very nice and Informative.",
    attribution: "Cora D.",
    tag: "dog",
  },
  {
    quote:
      "My cat loves to be groomed and he is very chill, so I am not sure why I had a hard time finding a regular groomer... Donna was able to brush him out and made him look and feel fantastic.",
    attribution: "Kristen L.",
    tag: "cat",
  },
  {
    quote:
      "Good people, who really care about the dogs. They take their time and do a good job. My boys always come out looking clean and handsome.",
    attribution: "James D.",
    tag: "dog",
  },
  {
    quote:
      "We are so pleased with the service we received from the owner and my groomer Candace! They are extremely kind and our Abby came home so beautiful and smelling delicious.",
    attribution: "Lisa S.",
    tag: "dog",
  },
] as const;

export type NavItem = { label: string; href: string };

export const PATHS = {
  home: "/",
  about: "/local-pampered-puppies-pet-groomer-grooming-company-about-victorville-ca",
  dog: "/local-pampered-puppies-pet-groomer-grooming-company-dog-services-victorville-ca",
  cat: "/local-pampered-puppies-pet-groomer-grooming-company-cat-services-victorville-ca",
  gallery: "/local-pampered-puppies-pet-groomer-grooming-company-gallery-victorville-ca",
  contact: "/local-pampered-puppies-pet-groomer-grooming-company-contact-victorville-ca",
  employment: "/employment",
  mobile: "/mobile-dog-cat-grooming-victorville-ca",
  reviews: "/reviews",
  faq: "/faq",
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Dog Grooming", href: PATHS.dog },
  { label: "Cat Grooming", href: PATHS.cat },
  { label: "Mobile Grooming", href: PATHS.mobile },
  { label: "Gallery", href: PATHS.gallery },
  { label: "Reviews", href: PATHS.reviews },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: "Employment", href: PATHS.employment },
];

import { PATHS, serviceAreas, townPages } from "./site-data";

// One post per service area and one per service (agency request). Town posts
// each take a different grooming topic; service posts are plain overviews of
// what each service includes and link to the deeper town posts, so the two
// sets don't compete for the same searches.
// Business facts come only from site-data (packages, warm tankless bath,
// chemical-free products, pickup and delivery, the team). Everything else is
// general, hedged grooming advice: no invented local details, drive times or
// medical claims, and health questions are pointed to a vet.

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string; // H1
  seoTitle: string; // <title>, 60 characters or fewer
  description: string;
  date: string; // ISO date, e.g. "2026-11-02"
  category: string;
  kind: "town" | "service";
  tag: string; // the town or the service the post is written for
  excerpt: string;
  content: BlogContentBlock[];
  relatedPath: string;
  relatedLabel: string;
};

const townPath = (city: string) => townPages.find((t) => t.city === city)?.slug ?? PATHS.home;

export const blogPostPath = (slug: string) => `${PATHS.blog}${slug}/`;

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-to-groom-your-dog-bryn-mawr",
    title: "How Often Should Your Dog Be Groomed? A Guide for Bryn Mawr Dog Owners",
    seoTitle: "How Often to Groom Your Dog | Bryn Mawr, PA",
    description:
      "How often to book a groom depends on your dog's coat. A plain guide for Bryn Mawr dog owners from I Love Dogs Pet Grooming on County Line Road.",
    date: "2026-11-02",
    category: "Grooming Tips",
    kind: "town",
    tag: "Bryn Mawr",
    excerpt: "There is no single schedule that suits every dog. Coat type, length and lifestyle all change the answer.",
    relatedPath: PATHS.dogGrooming,
    relatedLabel: "See our grooming packages and prices",
    content: [
      {
        type: "paragraph",
        text: "If you live in Bryn Mawr, our salon at 723 County Line Rd is right in town. One of the most common questions we hear is how often a dog should come in. There is no single schedule that suits every dog. Coat type, coat length and how your dog spends their days all change the answer.",
      },
      { type: "heading", text: "Start with your dog's coat" },
      {
        type: "list",
        items: [
          "Short, smooth coats usually need less salon time. A bath, brushing and a nail trim every so often keeps most of these dogs comfortable.",
          "Long or silky coats tangle more easily and tend to need regular brushing at home plus more frequent trims.",
          "Curly and wavy coats keep growing and can mat close to the skin, so many owners book these dogs on a steady routine.",
          "Thick double coats shed heavily at certain times of year, when a de-shedding treatment can help.",
        ],
      },
      { type: "heading", text: "Signs your dog is due" },
      {
        type: "list",
        items: [
          "You can hear nails clicking on hard floors.",
          "Hair is covering their eyes or getting tangled behind the ears.",
          "The coat feels greasy, smells, or has knots you can't brush out.",
          "Your dog keeps scratching or licking their paws. If it doesn't settle after a groom, ask your vet.",
        ],
      },
      { type: "heading", text: "Matching a package to the schedule" },
      {
        type: "paragraph",
        text: "Our Bath & Pamper (from $75) covers a gentle bath, blow dry, brushing and nail trim, which suits many dogs between bigger grooms. The Works (from $115) adds a full haircut or tidy-up trim, ear cleaning and a dog-safe cologne spritz. Full Spa Day (from $150) adds a skin and coat treatment such as de-shedding or deep conditioning, paw balm and teeth brushing. Prices are quoted when we meet your dog, because they depend on size, coat length, coat type and condition.",
      },
      {
        type: "paragraph",
        text: "Not sure where your dog fits? Call 610-525-7387 and we'll talk it through. Theresa has over 50 years of experience caring for dogs, and her daughter Jolie has 15 years of professional grooming experience.",
      },
    ],
  },
  {
    slug: "choosing-a-dog-grooming-package-rosemont",
    title: "Bath & Pamper, The Works or Full Spa Day? Choosing a Groom in Rosemont",
    seoTitle: "Choosing a Dog Grooming Package | Rosemont, PA",
    description:
      "Rosemont dog owners: what is in Bath & Pamper, The Works and Full Spa Day at I Love Dogs in Bryn Mawr, and how to pick the right one.",
    date: "2026-11-02",
    category: "Packages",
    kind: "town",
    tag: "Rosemont",
    excerpt: "Three packages, each building on the last. Here is how to tell which one your dog needs.",
    relatedPath: townPath("Rosemont"),
    relatedLabel: "Dog grooming for Rosemont, PA",
    content: [
      {
        type: "paragraph",
        text: "Rosemont sits just west of Bryn Mawr, close to our salon on County Line Road. When Rosemont owners call, the first question is often which package to book. We keep it simple: three packages, each building on the one before.",
      },
      { type: "heading", text: "Bath & Pamper, from $75" },
      {
        type: "paragraph",
        text: "A gentle bath, blow dry, brushing and nail trim. It's a good fit for short-coated dogs, and for longer coats that are already in good shape and just need freshening up between haircuts.",
      },
      { type: "heading", text: "The Works, from $115" },
      {
        type: "paragraph",
        text: "Everything in Bath & Pamper, plus a full haircut or tidy-up trim, ear cleaning and a dog-safe cologne spritz. Choose this when the coat has grown out, hair is in your dog's eyes, or the shape has gone.",
      },
      { type: "heading", text: "Full Spa Day, from $150" },
      {
        type: "paragraph",
        text: "Everything in The Works, plus a skin and coat treatment such as de-shedding or deep conditioning, paw balm and teeth brushing. It suits heavy shedders, dry or dull coats, and dogs who could use the extra attention.",
      },
      { type: "heading", text: "Still deciding?" },
      {
        type: "list",
        items: [
          "If your main worry is shedding, ask about Full Spa Day.",
          "If it's length or tangles, The Works is usually the one.",
          "If your dog just needs to be clean and trimmed, start with Bath & Pamper.",
        ],
      },
      {
        type: "paragraph",
        text: "Final prices are quoted when we meet your dog, based on size, coat length, coat type and condition. Call 610-525-7387 to book. If getting to the salon is hard, ask about pickup and delivery and we'll confirm whether we cover your Rosemont address.",
      },
    ],
  },
  {
    slug: "warm-bath-nervous-dogs-haverford",
    title: "Why a Warm Bath Helps Nervous Dogs: Notes for Haverford Dog Owners",
    seoTitle: "Warm Baths for Nervous Dogs | Haverford, PA",
    description:
      "Why water temperature matters to anxious dogs at bath time, and how I Love Dogs keeps every bath warm with a tankless system. For Haverford owners.",
    date: "2026-11-02",
    category: "Bath Time",
    kind: "town",
    tag: "Haverford",
    excerpt: "Plenty of dogs who fight the bath aren't scared of water. They're cold.",
    relatedPath: townPath("Haverford"),
    relatedLabel: "Dog grooming for Haverford, PA",
    content: [
      {
        type: "paragraph",
        text: "Haverford sits between Bryn Mawr and Ardmore, near our salon on County Line Road. If your dog dreads bath time, you're not alone. Plenty of dogs who fight the bath aren't scared of water at all. They're cold.",
      },
      { type: "heading", text: "Why temperature matters" },
      {
        type: "paragraph",
        text: "A bath that starts warm and turns lukewarm halfway through is unpleasant for anyone, and dogs notice. A wet coat holds water against the skin, so a dog can feel chilled quickly. Many dogs relax more when the water stays at a steady, comfortable temperature from start to finish.",
      },
      { type: "heading", text: "How we keep the bath warm" },
      {
        type: "paragraph",
        text: "We heat our water with a tankless system, so the bath stays warm from the first rinse to the last. There's no tank to run out halfway through a big dog. We also wash with chemical-free products.",
      },
      { type: "heading", text: "Helping a nervous dog at home" },
      {
        type: "list",
        items: [
          "Use water that feels comfortably warm on the inside of your wrist.",
          "Keep sessions short and calm, and praise your dog throughout.",
          "Lay a towel or mat in the tub so they don't slip.",
          "Dry them well afterwards so they don't stay damp and cold.",
          "If your dog seems unusually anxious or in pain, check with your vet.",
        ],
      },
      {
        type: "paragraph",
        text: "Tell us about your dog when you call 610-525-7387, especially if they get nervous. Theresa has over 50 years of experience caring for dogs, and she and her daughter Jolie work side by side at the salon.",
      },
    ],
  },
  {
    slug: "dog-nail-care-between-grooms-ardmore",
    title: "Nail Care Between Grooms: A Guide for Ardmore Dog Owners",
    seoTitle: "Dog Nail Care Between Grooms | Ardmore, PA",
    description:
      "How to tell when your dog's nails are too long and how to keep them comfortable between grooms. For Ardmore dog owners, from I Love Dogs in Bryn Mawr.",
    date: "2026-11-02",
    category: "Grooming Tips",
    kind: "town",
    tag: "Ardmore",
    excerpt: "If you can hear your dog coming across the kitchen floor, their nails are probably due.",
    relatedPath: townPath("Ardmore"),
    relatedLabel: "Dog grooming for Ardmore, PA",
    content: [
      {
        type: "paragraph",
        text: "Ardmore spans Lower Merion and Haverford townships, and it's one of the towns our Bryn Mawr salon serves. Nails are easy to forget between grooms, but they make a real difference to how comfortable a dog is on their feet.",
      },
      { type: "heading", text: "Signs nails are too long" },
      {
        type: "list",
        items: [
          "You can hear clicking on hard floors.",
          "Nails touch the ground when your dog is standing still.",
          "Your dog slips more on smooth floors.",
          "Dewclaws, on the inside of the leg, are curling around.",
        ],
      },
      { type: "heading", text: "Why it matters" },
      {
        type: "paragraph",
        text: "Long nails can change the way a dog stands and walks, and they're more likely to catch or split. If a nail is cracked, bleeding or your dog is limping, call your vet rather than trying to fix it at home.",
      },
      { type: "heading", text: "Between grooms" },
      {
        type: "list",
        items: [
          "Check the nails every couple of weeks.",
          "Walks on pavement can wear nails down a little, but they rarely replace trimming.",
          "If you trim at home, take off small amounts. Dark nails make the quick hard to see.",
          "Handle your dog's paws often so trims feel normal.",
        ],
      },
      {
        type: "paragraph",
        text: "Every one of our packages includes a nail trim, starting with Bath & Pamper from $75. Ardmore owners can drop off at 723 County Line Rd, or call 610-525-7387 to ask about pickup and delivery from your address.",
      },
    ],
  },
  {
    slug: "what-de-shedding-does-villanova",
    title: "What De-Shedding Does for Your Dog's Coat: A Villanova Guide",
    seoTitle: "What De-Shedding Does for Your Dog | Villanova, PA",
    description:
      "What a de-shedding treatment is, which dogs benefit and how to manage shedding at home. For Villanova dog owners, from I Love Dogs in Bryn Mawr.",
    date: "2026-11-02",
    category: "Coat Care",
    kind: "town",
    tag: "Villanova",
    excerpt: "If your floors and sofa are covered in fur, a de-shedding treatment can help.",
    relatedPath: townPath("Villanova"),
    relatedLabel: "Dog grooming for Villanova, PA",
    content: [
      {
        type: "paragraph",
        text: "Villanova spans Radnor and Lower Merion townships and is one of the towns our Bryn Mawr salon serves. If your floors, car and sofa are covered in fur, a de-shedding treatment can help.",
      },
      { type: "heading", text: "What de-shedding is" },
      {
        type: "paragraph",
        text: "Many dogs have a soft undercoat beneath their outer coat. When it loosens, it tends to get trapped rather than falling out cleanly. De-shedding works that loose undercoat out during the groom, so less of it ends up around your home.",
      },
      { type: "heading", text: "Dogs that benefit most" },
      {
        type: "list",
        items: [
          "Thick, double-coated dogs.",
          "Dogs going through a seasonal heavy shed.",
          "Dogs whose coat feels dense or packed down.",
        ],
      },
      { type: "heading", text: "A word on shaving" },
      {
        type: "paragraph",
        text: "It can be tempting to shave a heavy shedder, but a double coat helps protect the skin and doesn't always grow back the same. Ask us before deciding. A de-shedding treatment is often the better first step.",
      },
      { type: "heading", text: "Helping at home" },
      {
        type: "list",
        items: [
          "Brush a few times a week, more during heavy sheds.",
          "Use a brush suited to your dog's coat type.",
          "If shedding comes with bald patches, sores or itching, see your vet.",
        ],
      },
      {
        type: "paragraph",
        text: "De-shedding is one of the skin and coat treatments in our Full Spa Day, from $150, alongside paw balm and teeth brushing. Call 610-525-7387 to book or to ask about pickup and delivery from Villanova.",
      },
    ],
  },
  {
    slug: "haircut-or-tidy-up-trim-wynnewood",
    title: "Haircut or Tidy-Up Trim? Picking the Right Cut in Wynnewood",
    seoTitle: "Dog Haircut or Tidy-Up Trim? | Wynnewood, PA",
    description:
      "The difference between a full dog haircut and a tidy-up trim, and how to choose. For Wynnewood dog owners, from I Love Dogs Pet Grooming in Bryn Mawr.",
    date: "2026-11-02",
    category: "Haircuts",
    kind: "town",
    tag: "Wynnewood",
    excerpt: "Both come with The Works. Which one your dog needs depends on how much has grown out.",
    relatedPath: townPath("Wynnewood"),
    relatedLabel: "Dog grooming for Wynnewood, PA",
    content: [
      {
        type: "paragraph",
        text: "Wynnewood is in Lower Merion Township, east of Ardmore, and it's one of the towns our Bryn Mawr salon serves. Our package The Works includes either a full haircut or a tidy-up trim. Here's how to tell which one your dog needs.",
      },
      { type: "heading", text: "A full haircut" },
      {
        type: "paragraph",
        text: "A full haircut takes the whole coat to a new length and shape. It suits dogs whose coat has grown out, is starting to tangle, or has lost its shape, and owners who want a shorter, easier coat for a while.",
      },
      { type: "heading", text: "A tidy-up trim" },
      {
        type: "paragraph",
        text: "A tidy-up trim keeps the current style and neatens the areas that grow fastest or get messy, such as the face, eyes, feet and rear. It suits dogs whose coat is already a length you like.",
      },
      { type: "heading", text: "Questions to ask yourself" },
      {
        type: "list",
        items: [
          "Is hair getting in your dog's eyes or mouth?",
          "Are there tangles you can't brush out at home?",
          "Do you want a lower-maintenance length?",
          "Is your dog comfortable in the current coat?",
        ],
      },
      {
        type: "paragraph",
        text: "If you're unsure, tell us what you'd like when you call 610-525-7387 and we'll suggest the right cut. The Works starts at $115 and also includes a gentle bath, blow dry, brushing, nail trim, ear cleaning and a dog-safe cologne spritz. Wynnewood owners can ask about pickup and delivery too.",
      },
    ],
  },
  {
    slug: "dog-grooming-pickup-and-delivery-havertown",
    title: "How Dog Grooming Pickup and Delivery Works in Havertown",
    seoTitle: "Dog Grooming Pickup & Delivery | Havertown, PA",
    description:
      "How pickup and delivery works with I Love Dogs Pet Grooming for Havertown dog owners: what to expect, and how to check we cover your address.",
    date: "2026-11-02",
    category: "Pickup & Delivery",
    kind: "town",
    tag: "Havertown",
    excerpt: "We pick your dog up, groom them at our salon and bring them home clean.",
    relatedPath: PATHS.pickup,
    relatedLabel: "Read more about pickup and delivery",
    content: [
      {
        type: "paragraph",
        text: "Havertown is in Haverford Township, Delaware County, and it's one of the towns our Bryn Mawr salon serves. If a busy day makes the drive hard, pickup and delivery can help. We pick your dog up, groom them at our salon and bring them home clean.",
      },
      { type: "heading", text: "How it works" },
      {
        type: "list",
        items: [
          "Call us at 610-525-7387 and tell us your address, so we can confirm we cover it.",
          "We pick up your dog.",
          "We groom them at our salon on County Line Road, with a warm bath and chemical-free products.",
          "We bring your dog home.",
        ],
      },
      { type: "heading", text: "Every groom happens at the salon" },
      {
        type: "paragraph",
        text: "Pickup and delivery isn't grooming at your house. Your dog is groomed at our salon, then brought back to you.",
      },
      { type: "heading", text: "Getting ready" },
      {
        type: "list",
        items: [
          "Let us know about anything that matters for your dog, such as nerves or a sensitive spot.",
          "Tell us which package you'd like: Bath & Pamper, The Works or Full Spa Day.",
        ],
      },
      {
        type: "paragraph",
        text: "Packages start at $75 for Bath & Pamper. Call 610-525-7387 with your Havertown address to check pickup coverage and book.",
      },
    ],
  },
  {
    slug: "dog-ear-cleaning-basics-gladwyne",
    title: "Ear Cleaning Basics for Gladwyne Dog Owners",
    seoTitle: "Dog Ear Cleaning Basics | Gladwyne, PA",
    description:
      "Why dogs' ears need regular attention, what to watch for and when to see a vet. For Gladwyne dog owners, from I Love Dogs Pet Grooming in Bryn Mawr.",
    date: "2026-11-02",
    category: "Grooming Tips",
    kind: "town",
    tag: "Gladwyne",
    excerpt: "Floppy and hairy ears trap moisture and dirt. A little regular care goes a long way.",
    relatedPath: townPath("Gladwyne"),
    relatedLabel: "Dog grooming for Gladwyne, PA",
    content: [
      {
        type: "paragraph",
        text: "Gladwyne is in Lower Merion Township, and it's one of the towns our Bryn Mawr salon serves. Ears are easy to overlook, but they're one of the places where regular care makes a difference.",
      },
      { type: "heading", text: "Why some ears need more attention" },
      {
        type: "paragraph",
        text: "Floppy ears and ears with a lot of hair inside let less air in, so moisture and dirt can build up. Dogs who swim or are bathed often may also need their ears checked more.",
      },
      { type: "heading", text: "What to look for" },
      {
        type: "list",
        items: [
          "A little light-colored wax is normal.",
          "Redness, swelling, a strong smell or dark discharge is not. See your vet.",
          "So is frequent head shaking, scratching at the ears or tilting the head.",
        ],
      },
      { type: "heading", text: "At home" },
      {
        type: "list",
        items: [
          "Wipe only the parts of the ear you can see, with a soft cloth or cotton pad.",
          "Never push anything deep into the ear canal.",
          "Dry ears gently after baths and swims.",
          "Only use ear cleaners recommended for dogs.",
        ],
      },
      {
        type: "paragraph",
        text: "Ear cleaning is part of The Works, from $115, together with a full haircut or tidy-up trim and everything in Bath & Pamper. Full Spa Day includes it too. Call 610-525-7387 to book, or ask about pickup and delivery from Gladwyne.",
      },
    ],
  },
  {
    slug: "why-teeth-brushing-matters-radnor",
    title: "Why Teeth Brushing Is Part of Our Full Spa Day: A Radnor Guide",
    seoTitle: "Why Brush Your Dog's Teeth? | Radnor, PA",
    description:
      "Why teeth brushing matters for dogs, how to start at home and when to see a vet. For Radnor dog owners, from I Love Dogs Pet Grooming in Bryn Mawr.",
    date: "2026-11-02",
    category: "Spa Care",
    kind: "town",
    tag: "Radnor",
    excerpt: "Brushing is one of the simplest things you can do for your dog's mouth.",
    relatedPath: townPath("Radnor"),
    relatedLabel: "Dog grooming for Radnor, PA",
    content: [
      {
        type: "paragraph",
        text: "Radnor is in Radnor Township, Delaware County, west of Villanova, and it's one of the Main Line towns our Bryn Mawr salon serves. Teeth brushing is part of our Full Spa Day, and it's worth keeping up at home too.",
      },
      { type: "heading", text: "Why brushing helps" },
      {
        type: "paragraph",
        text: "Regular brushing helps remove plaque before it builds up. It's one of the simplest things you can do for your dog's mouth, and many dogs get used to it with patience.",
      },
      { type: "heading", text: "What brushing doesn't replace" },
      {
        type: "paragraph",
        text: "Brushing during a groom or at home is not a dental cleaning. If your dog has very bad breath, red or bleeding gums, loose teeth or trouble eating, see your vet.",
      },
      { type: "heading", text: "Starting at home" },
      {
        type: "list",
        items: [
          "Use a toothpaste made for dogs. Human toothpaste isn't safe for them.",
          "Start by letting your dog lick a little paste off your finger.",
          "Brush a few teeth at a time and build up slowly.",
          "Keep it short and finish with praise.",
        ],
      },
      {
        type: "paragraph",
        text: "Full Spa Day, from $150, includes teeth brushing, paw balm and a skin and coat treatment such as de-shedding or deep conditioning, plus everything in The Works. Call 610-525-7387 to book, or to ask about pickup and delivery from your Radnor address.",
      },
    ],
  },
  {
    slug: "whats-included-bath-and-pamper",
    title: "What's Included in a Bath & Pamper Groom, and Who It's For",
    seoTitle: "What's in a Bath & Pamper Dog Groom | I Love Dogs",
    description:
      "Bath & Pamper at I Love Dogs in Bryn Mawr, from $75: a gentle bath, blow dry, brushing and nail trim. What each step does and which dogs it suits.",
    date: "2026-11-02",
    category: "Services",
    kind: "service",
    tag: "Bath & Pamper",
    excerpt: "Our simplest package: a gentle bath, blow dry, brushing and nail trim, from $75.",
    relatedPath: `${PATHS.dogGrooming}#pricing`,
    relatedLabel: "See all three packages and prices",
    content: [
      {
        type: "paragraph",
        text: "Bath & Pamper is our simplest package, from $75. It covers four things: a gentle bath, a blow dry, brushing and a nail trim. Here's what each one does, and which dogs it suits best.",
      },
      { type: "heading", text: "A gentle bath" },
      {
        type: "paragraph",
        text: "We wash with chemical-free products, and our water is heated by a tankless system, so the bath stays warm from the first rinse to the last. That steady warmth matters to a lot of dogs. Our post for Haverford owners explains why a warm bath helps nervous dogs.",
      },
      { type: "heading", text: "A blow dry" },
      {
        type: "paragraph",
        text: "Drying properly matters as much as washing. A coat that's left damp can tangle and stay cold against the skin, especially on longer or thicker coats.",
      },
      { type: "heading", text: "Brushing" },
      {
        type: "paragraph",
        text: "Brushing lifts out loose hair and small tangles before they become mats, and leaves the coat neat.",
      },
      { type: "heading", text: "A nail trim" },
      {
        type: "paragraph",
        text: "Long nails can change the way a dog stands and walks. Every package includes a trim. Our post for Ardmore owners covers nail care between visits.",
      },
      { type: "heading", text: "Who it suits" },
      {
        type: "list",
        items: [
          "Short-coated dogs that don't need a haircut.",
          "Longer coats that were cut recently and just need freshening up.",
          "Dogs who need to be clean and comfortable between bigger grooms.",
        ],
      },
      {
        type: "paragraph",
        text: "Need a haircut or ear cleaning too? That's The Works, from $115. Prices are quoted when we meet your dog, based on size, coat length, coat type and condition. Call 610-525-7387 to book.",
      },
    ],
  },
  {
    slug: "whats-included-the-works",
    title: "The Works: What Happens During a Full Groom at I Love Dogs",
    seoTitle: "What's in The Works Dog Groom | I Love Dogs",
    description:
      "The Works at I Love Dogs in Bryn Mawr, from $115: everything in Bath & Pamper plus a haircut or tidy-up trim, ear cleaning and a dog-safe cologne spritz.",
    date: "2026-11-02",
    category: "Services",
    kind: "service",
    tag: "The Works",
    excerpt: "Everything in Bath & Pamper, plus a haircut or tidy-up trim, ear cleaning and a cologne spritz, from $115.",
    relatedPath: `${PATHS.dogGrooming}#pricing`,
    relatedLabel: "See all three packages and prices",
    content: [
      {
        type: "paragraph",
        text: "The Works, from $115, is our full groom. It includes everything in Bath & Pamper (a gentle bath, blow dry, brushing and nail trim), plus three more things.",
      },
      { type: "heading", text: "A full haircut or tidy-up trim" },
      {
        type: "paragraph",
        text: "A full haircut takes the whole coat to a new length and shape. A tidy-up trim keeps the current style and neatens the face, eyes, feet and rear. Our post for Wynnewood owners explains how to choose between them.",
      },
      { type: "heading", text: "Ear cleaning" },
      {
        type: "paragraph",
        text: "Floppy and hairy ears can trap moisture and dirt, so they benefit from regular cleaning. Our post for Gladwyne owners covers ear care at home and the signs that mean a trip to the vet.",
      },
      { type: "heading", text: "A dog-safe cologne spritz" },
      {
        type: "paragraph",
        text: "A light finishing spritz with a cologne made for dogs.",
      },
      { type: "heading", text: "Who it suits" },
      {
        type: "list",
        items: [
          "Dogs whose coat has grown out or lost its shape.",
          "Dogs with hair in their eyes or tangles you can't brush out.",
          "Floppy-eared dogs that need their ears cleaned.",
        ],
      },
      {
        type: "paragraph",
        text: "Want a skin and coat treatment, paw balm and teeth brushing as well? That's Full Spa Day, from $150. Prices are quoted when we meet your dog. Call 610-525-7387 to book.",
      },
    ],
  },
  {
    slug: "whats-included-full-spa-day",
    title: "Full Spa Day Explained: Skin and Coat Treatment, Paw Balm and Teeth Brushing",
    seoTitle: "What's in a Full Spa Day Dog Groom | I Love Dogs",
    description:
      "Full Spa Day at I Love Dogs in Bryn Mawr, from $150: everything in The Works plus a skin and coat treatment, paw balm and teeth brushing.",
    date: "2026-11-02",
    category: "Services",
    kind: "service",
    tag: "Full Spa Day",
    excerpt: "Our most complete package: everything in The Works, plus a skin and coat treatment, paw balm and teeth brushing, from $150.",
    relatedPath: `${PATHS.dogGrooming}#pricing`,
    relatedLabel: "See all three packages and prices",
    content: [
      {
        type: "paragraph",
        text: "Full Spa Day, from $150, is our most complete package. It includes everything in The Works (the bath, blow dry, brushing, nail trim, haircut or tidy-up trim, ear cleaning and cologne spritz), plus three extras.",
      },
      { type: "heading", text: "A skin and coat treatment" },
      {
        type: "paragraph",
        text: "This is either de-shedding or deep conditioning, chosen for your dog's coat. De-shedding works out loose undercoat, which helps heavy shedders; our post for Villanova owners covers it in detail. Deep conditioning can help a coat that feels dry or looks dull.",
      },
      { type: "heading", text: "Paw balm" },
      {
        type: "paragraph",
        text: "Paw pads can get dry and rough, particularly in cold weather or after a lot of walking on pavement. Paw balm helps keep them soft. If a pad is cracked deeply, bleeding or your dog is limping, see your vet.",
      },
      { type: "heading", text: "Teeth brushing" },
      {
        type: "paragraph",
        text: "Brushing helps remove plaque before it builds up. It doesn't replace a dental cleaning at the vet. Our post for Radnor owners explains how to start brushing at home.",
      },
      { type: "heading", text: "Who it suits" },
      {
        type: "list",
        items: [
          "Heavy shedders and thick double coats.",
          "Dogs with a dry or dull coat.",
          "Dogs who could use the full treatment, from nose to paws.",
        ],
      },
      {
        type: "paragraph",
        text: "Prices are quoted when we meet your dog, based on size, coat length, coat type and condition. Call 610-525-7387 to book.",
      },
    ],
  },
  {
    slug: "is-pickup-and-delivery-right-for-your-dog",
    title: "Is Dog Grooming Pickup and Delivery Right for You?",
    seoTitle: "Is Grooming Pickup & Delivery Right for You?",
    description:
      "Who dog grooming pickup and delivery from I Love Dogs in Bryn Mawr suits best, what to ask when you call, and how to check we cover your address.",
    date: "2026-11-02",
    category: "Services",
    kind: "service",
    tag: "Pickup & Delivery",
    excerpt: "We pick your dog up, groom them at the salon and bring them home. Here's who it helps most.",
    relatedPath: PATHS.pickup,
    relatedLabel: "Read more about pickup and delivery",
    content: [
      {
        type: "paragraph",
        text: "Pickup and delivery means we pick your dog up, groom them at our salon on County Line Road in Bryn Mawr, and bring them home clean. It isn't grooming at your house: every groom happens at the salon. Our post for Havertown owners walks through each step.",
      },
      { type: "heading", text: "Who it helps most" },
      {
        type: "list",
        items: [
          "Owners whose workday makes a salon drop-off hard.",
          "Anyone without easy access to a car.",
          "Owners with more than one dog to get to and from the salon.",
        ],
      },
      { type: "heading", text: "What to ask when you call" },
      {
        type: "list",
        items: [
          "Whether we cover your address. We confirm this for every booking.",
          "Which package your dog needs: Bath & Pamper, The Works or Full Spa Day.",
          "Anything about your dog we should know, such as nerves or a sensitive spot.",
        ],
      },
      { type: "heading", text: "Where we serve" },
      {
        type: "paragraph",
        text: `We serve ${serviceAreas.join(", ")} and the greater Eastern Main Line. Call 610-525-7387 with your address to check pickup coverage and book.`,
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

// The post written for a given town, for linking from its town page.
export function servicePosts() {
  return blogPosts.filter((p) => p.kind === "service");
}

export function blogPostForTown(city: string) {
  return blogPosts.find((p) => p.kind === "town" && p.tag === city);
}

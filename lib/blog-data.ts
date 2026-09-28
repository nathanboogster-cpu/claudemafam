import { PATHS } from "./site-data";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date, e.g. "2026-08-18"
  category: string;
  excerpt: string;
  content: BlogContentBlock[];
  relatedPath: string;
  relatedLabel: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-to-groom-your-dog-in-the-high-desert-heat",
    title: "How Often Should You Groom Your Dog in the High Desert Heat?",
    description:
      "How Victorville's hot, dry summers affect your dog's coat and skin, and how often to schedule grooming to keep them comfortable.",
    date: "2026-08-05",
    category: "Grooming Tips",
    excerpt:
      "Victorville summers are hot and dry, and that combination is tougher on a dog's coat and skin than most pet parents realize.",
    relatedPath: PATHS.dog,
    relatedLabel: "See our Dog Grooming services",
    content: [
      {
        type: "paragraph",
        text: "Victorville summers are hot and dry, and that combination is tougher on a dog's coat and skin than most pet parents realize. Heat and low humidity dry out skin, and a matted or overgrown coat traps warmth right against the body instead of letting it escape.",
      },
      { type: "heading", text: "Why coat condition matters more in summer" },
      {
        type: "paragraph",
        text: "A dog's coat is part of their temperature regulation system, not just their appearance. Mats and heavy undercoat buildup block airflow to the skin and can make it harder for a dog to cool down. Regular brushing and deshedding during the warmer months helps their natural cooling actually work.",
      },
      { type: "heading", text: "A general grooming schedule" },
      {
        type: "list",
        items: [
          "Short-coated breeds: every 6–8 weeks, with more frequent brushing at home",
          "Double-coated breeds (Huskies, Shepherds, etc.): deshedding every 4–6 weeks during shedding season",
          "Long-haired or curly-coated breeds: every 4–6 weeks to prevent matting",
          "Any breed, any coat: check paw pads and between toes more often in summer — hot pavement and dry skin cause more irritation this time of year",
        ],
      },
      {
        type: "paragraph",
        text: "Every dog's coat and skin are different, so these are general guidelines rather than a fixed rule — a quick call is the easiest way to figure out the right interval for your specific dog.",
      },
    ],
  },
  {
    slug: "mobile-vs-in-store-grooming-which-is-right-for-your-pet",
    title: "Mobile vs. In-Store Grooming: Which Is Right for Your Pet?",
    description:
      "The real tradeoffs between mobile pet grooming and a traditional in-store appointment, so you can pick what actually fits your pet and your schedule.",
    date: "2026-08-19",
    category: "Grooming Tips",
    excerpt:
      "Neither option is universally \"better\" — it comes down to your pet's temperament, your schedule, and what you're trying to solve for.",
    relatedPath: PATHS.mobile,
    relatedLabel: "Learn about Pampered Puppies At Your Door",
    content: [
      {
        type: "paragraph",
        text: "Mobile grooming has grown a lot in popularity, but that doesn't mean it's automatically the right fit for every pet. Neither option is universally \"better\" — it comes down to your pet's temperament, your schedule, and what you're trying to solve for.",
      },
      { type: "heading", text: "When mobile grooming tends to make sense" },
      {
        type: "list",
        items: [
          "Pets that get anxious around other animals or unfamiliar spaces",
          "Senior pets or pets with mobility issues who'd rather skip the car ride",
          "Multi-pet households where coordinating one in-store trip is a hassle",
          "Busy schedules where a groomer coming to you saves real time",
        ],
      },
      { type: "heading", text: "When an in-store visit still fits better" },
      {
        type: "list",
        items: [
          "Pets that do fine with new environments and enjoy the outing",
          "More involved services that benefit from a full studio setup",
          "Pet parents who prefer the lower per-visit cost of an in-store appointment",
        ],
      },
      {
        type: "paragraph",
        text: "Mobile visits typically run a bit higher than the same in-store service, since it covers the groomer's travel and setup at your home. If you're not sure which makes sense for your pet, it's worth just asking — a quick conversation about your pet's personality and your routine usually makes the answer obvious.",
      },
    ],
  },
  {
    slug: "getting-your-anxious-dog-ready-for-their-first-groom",
    title: "Getting Your Anxious Dog Ready for Their First Groom",
    description:
      "Practical, low-stress ways to prepare a nervous or first-time dog for their grooming appointment, from handling practice to what to tell your groomer.",
    date: "2026-09-02",
    category: "Pet Care",
    excerpt:
      "A little preparation at home can make a real difference in how your dog experiences their first appointment.",
    relatedPath: PATHS.anxious,
    relatedLabel: "See our Anxious & Senior Dog Grooming page",
    content: [
      {
        type: "paragraph",
        text: "A nervous first grooming visit is one of the most common worries pet parents bring up — and it's a completely reasonable one. Clippers, water, and being handled by someone new are all new experiences for a dog, and a little preparation at home can make a real difference in how they experience their first appointment.",
      },
      { type: "heading", text: "Before the appointment" },
      {
        type: "list",
        items: [
          "Get your dog comfortable being touched on their paws, ears, and face during normal petting at home",
          "Let them hear the sound of clippers or a hair dryer from a distance (a video works fine) so it's not their first time hearing it at the groomer",
          "Keep the morning of the appointment calm — a walk beforehand can help burn off nervous energy",
          "Avoid a big breakfast right before if your dog tends to get carsick or anxious",
        ],
      },
      { type: "heading", text: "What to tell your groomer" },
      {
        type: "paragraph",
        text: "Always mention any past bad experiences, specific triggers (nail trims, dryers, being crated), or medical issues before the appointment starts. A groomer who knows what to expect can adjust their pace and approach instead of discovering it mid-groom.",
      },
      {
        type: "paragraph",
        text: "For dogs who are especially anxious or senior dogs who need a slower pace, a patient, low-cage-time approach makes a real difference — it's worth asking specifically how a groomer handles nervous dogs before booking.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

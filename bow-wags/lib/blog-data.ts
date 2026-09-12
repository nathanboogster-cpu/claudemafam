// Blog content. Every post is either a deep dive into a real, already-
// verified Bow Wags policy/service (temperament test, boarding suites,
// pricing) or general, well-established dog-care knowledge — never a
// fabricated claim about Bow Wags itself (no invented stats, awards,
// events, or testimonials). Written as structured content blocks so
// app/(site)/blog/[slug]/page.tsx can render every post the same way —
// mirrors the areaContent pattern used for service-area pages.

import { business, temperamentTest, vaccinationRequirements, boardingFeatures, boardingPricing, type ServiceSlug } from "./site-data";

export type BlogBlock = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  eyebrow: string;
  publishedAt: string; // ISO date
  heroImage: { src: string; alt: string };
  body: BlogBlock[];
  relatedServiceSlugs: ServiceSlug[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-at-your-dogs-temperament-test",
    title: "What to Expect at Your Dog's Temperament Test",
    metaDescription:
      "Every dog needs a temperament test before their first daycare or boarding stay at Bow Wags. Here's what the assessment covers and how to prepare.",
    excerpt:
      "Before your dog's first daycare or boarding stay, Bow Wags runs a temperament test. Here's what it actually involves.",
    eyebrow: "Before You Book",
    publishedAt: "2026-09-12",
    heroImage: { src: "/images/dog-lobby-husky.jpg", alt: "A dog relaxing inside the Bow Wags facility" },
    body: [
      {
        type: "p",
        text: `Before any dog's first daycare or boarding stay at Bow Wags, they need a ${temperamentTest.durationNote} temperament test (${temperamentTest.price}). It's a required step, but it's a simple one — here's what it's actually for and what to expect.`,
      },
      { type: "h2", text: "Why It's Required" },
      {
        type: "p",
        text: "Daycare and boarding at Bow Wags mean supervised group play, not solo confinement. The temperament test lets staff see how a dog behaves around other dogs and in a group setting before they're placed into a playroom, so everyone — dogs and staff alike — has a safe, predictable first day.",
      },
      { type: "h2", text: "What Happens During the Assessment" },
      {
        type: "p",
        text: "The assessment runs over several hours so staff can watch how your dog settles in, plays, and interacts as the day goes on — not just a quick first impression. It gives a much more accurate read on temperament than a five-minute meet-and-greet would.",
      },
      { type: "h2", text: "How to Prepare" },
      {
        type: "list",
        items: [
          `Bring current ${vaccinationRequirements.join(", ")} vaccination records — these are required for daycare and boarding.`,
          "Feed your dog a normal meal beforehand; there's no need to change their routine.",
          "Mention any behavioral notes to staff when you call to schedule — resource guarding, leash reactivity, or anything else worth knowing ahead of time.",
        ],
      },
      {
        type: "p",
        text: `Call ${business.phoneDisplay} to schedule your dog's temperament test — it only needs to happen once, before their very first daycare or boarding visit.`,
      },
    ],
    relatedServiceSlugs: ["dog-daycare", "dog-boarding"],
  },
  {
    slug: "no-cages-how-bow-wags-boarding-suites-work",
    title: "No Cages, No Problem: How Bow Wags' Boarding Suites Work",
    metaDescription:
      "Bow Wags boarding dogs sleep in private wooden suites, not cages — and every stay includes daycare. Here's how it actually works.",
    excerpt:
      "Boarding dogs at Bow Wags don't sleep in cages — they get private wooden suites, and a full day of daycare is part of every stay.",
    eyebrow: "Dog Boarding",
    publishedAt: "2026-09-12",
    heroImage: { src: "/images/boarding-dogs-resting.jpg", alt: "Dogs resting in a boarding suite at Bow Wags" },
    body: [
      {
        type: "p",
        text: "\"Boarding\" can bring to mind rows of stacked cages in a back room. That's not how it works at Bow Wags — boarding dogs sleep in private, custom wooden suites, and every overnight stay comes with a full day of supervised play, not just a place to sleep.",
      },
      { type: "h2", text: "What the Suites Are Actually Like" },
      {
        type: "list",
        items: boardingFeatures.map((f) => `${f.title}: ${f.body}`),
      },
      { type: "h2", text: "Daycare Is Part of Every Stay" },
      {
        type: "p",
        text: boardingPricing.daycareIncludedNote,
      },
      { type: "h2", text: "Bringing Comforts From Home" },
      {
        type: "p",
        text: "Owners are welcome to bring their dog's favorite bed, blanket, and toy for their stay. Bringing your dog's own food is encouraged too, to keep mealtime consistent — though if you'd rather Bow Wags feed the house food instead, that's an option for a small daily fee.",
      },
      {
        type: "p",
        text: `First time boarding with us? A ${temperamentTest.durationNote} temperament test (${temperamentTest.price}) and current ${vaccinationRequirements.join(", ")} vaccinations are required before your dog's first stay. Call ${business.phoneDisplay} to schedule.`,
      },
    ],
    relatedServiceSlugs: ["dog-boarding", "dog-daycare"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

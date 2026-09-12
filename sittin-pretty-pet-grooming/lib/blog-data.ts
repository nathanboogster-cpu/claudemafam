// Blog content — general, evergreen pet-grooming and pet-care information,
// not specific claims about Sittin' Pretty beyond what's already verified
// elsewhere in lib/site-data.ts (experience, cage-free environment, cat
// specialization, hours, etc.). Written as structured content blocks so
// app/(site)/blog/[slug]/page.tsx can render every post the same way
// without a one-off .tsx file per post — mirrors the areaContent pattern
// used for service-area pages.

import type { ServiceSlug } from "./site-data";
import { photos } from "./site-data";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  eyebrow: string;
  publishedAt: string; // ISO date
  heroPhotoKey: keyof typeof photos;
  body: BlogBlock[];
  relatedServiceSlugs: ServiceSlug[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-groom-your-dog",
    title: "How Often Should You Groom Your Dog? A Seasonal Guide",
    metaDescription:
      "How often your dog needs grooming depends on coat type and season. A general guide to bath, brush, and full-groom frequency for dogs.",
    excerpt:
      "Grooming frequency depends a lot on your dog's coat type and the season. Here's a general guide to help you plan.",
    eyebrow: "Dog Grooming",
    publishedAt: "2026-09-12",
    heroPhotoKey: "tanTerrierMix",
    body: [
      {
        type: "p",
        text: "There's no single right answer to \"how often should I groom my dog\" — it depends on coat type, activity level, and the time of year. That said, some general guidelines can help you plan ahead instead of waiting until mats or heavy shedding force the issue.",
      },
      { type: "h2", text: "By Coat Type" },
      {
        type: "list",
        items: [
          "Short, smooth coats (Labs, Beagles): a bath and brush every 6–8 weeks is often plenty, with regular at-home brushing to manage shedding in between.",
          "Double coats (Huskies, Shepherds, Corgis): these breeds don't usually need haircuts, but benefit from a deshedding treatment a few times a year, especially during seasonal coat blows.",
          "Curly or continuously growing coats (Poodles, Doodles, Bichons): these need a full groom roughly every 4–6 weeks, since their coat doesn't shed out on its own and mats easily if left too long.",
          "Long, silky coats (Shih Tzus, Yorkies, Maltese): frequent brushing at home plus a full groom every 4–6 weeks helps prevent painful matting, especially around the ears and legs.",
        ],
      },
      { type: "h2", text: "Seasonal Considerations" },
      {
        type: "p",
        text: "Spring and fall are typically the heaviest shedding seasons for double-coated breeds, so that's often the best time to schedule a deshedding treatment. In summer, keeping a shorter, well-maintained coat can help dogs stay more comfortable in the heat — though it's worth talking to your groomer about the right length for your dog's specific coat, since some double coats actually protect against heat and shouldn't be shaved down.",
      },
      {
        type: "p",
        text: "If you're not sure where your dog's coat falls, or it's been a while since their last groom, a groomer can take a look and recommend a schedule that fits.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "dog-bath-and-brush", "deshedding-treatment"],
  },
  {
    slug: "signs-your-cat-could-use-a-professional-groom",
    title: "5 Signs Your Cat Could Use a Professional Groom",
    metaDescription:
      "Most cats self-groom well, but some situations call for a professional cat groomer. Five signs it might be time to book a visit.",
    excerpt:
      "Most cats handle their own grooming just fine — but a few situations call for professional help. Here's what to watch for.",
    eyebrow: "Cat Grooming",
    publishedAt: "2026-09-12",
    heroPhotoKey: "grayWhiteShihTzu",
    body: [
      {
        type: "p",
        text: "Cats are famously good at grooming themselves, which is part of why professional cat grooming isn't as widely offered as dog grooming — plenty of groomers simply don't take cats. But there are real situations where a cat benefits from professional help.",
      },
      { type: "h2", text: "Signs It Might Be Time" },
      {
        type: "list",
        items: [
          "Matting, especially around the belly, armpits, or behind the ears — mats can pull painfully on the skin and are hard to remove safely at home.",
          "A long-haired cat shedding heavily or developing a greasy, unkempt coat, which can happen as cats age and become less flexible.",
          "Overgrown nails that are starting to curl or catch on carpet and furniture.",
          "A cat that's stressed by bath time at home, where a calmer, more practiced approach can help.",
          "Senior cats who are grooming themselves less due to arthritis or reduced mobility.",
        ],
      },
      {
        type: "p",
        text: "None of these are emergencies, but left unaddressed, matting in particular can become uncomfortable enough that it needs to be shaved out rather than brushed out. Catching it early makes for a much easier visit.",
      },
      {
        type: "p",
        text: "Because not every groomer works with cats, it's worth calling ahead to confirm cat grooming is offered before you show up.",
      },
    ],
    relatedServiceSlugs: ["cat-grooming", "nail-trim-ear-cleaning"],
  },
  {
    slug: "why-cage-free-grooming-helps-nervous-pets",
    title: "Why a Cage-Free Grooming Visit Is Easier on Nervous Pets",
    metaDescription:
      "Cage-free grooming keeps pets out with their groomer instead of kenneled between steps. Here's why that can make a real difference for nervous pets.",
    excerpt:
      "Being kenneled between grooming steps can add stress for an already-nervous pet. Here's why a cage-free visit often goes more smoothly.",
    eyebrow: "Cage-Free Grooming",
    publishedAt: "2026-09-12",
    heroPhotoKey: "sheepdogBandana",
    body: [
      {
        type: "p",
        text: "A traditional grooming visit often involves a fair amount of waiting — a pet gets bathed, then waits in a kennel to dry, then waits again between steps. For a confident, easygoing pet, that's usually not a big deal. For a nervous or anxious one, all that caged waiting time can add stress on top of an already unfamiliar experience.",
      },
      { type: "h2", text: "What \"Cage-Free\" Actually Means" },
      {
        type: "p",
        text: "Cage-free grooming means a pet stays out with their groomer throughout the visit instead of being kenneled between steps. It doesn't change what's being done — a bath is still a bath, a haircut is still a haircut — but it removes the long stretches of isolated waiting that can wind a nervous pet up further.",
      },
      { type: "h2", text: "Why It Tends to Help" },
      {
        type: "list",
        items: [
          "Less isolated waiting time means less opportunity for anxiety to build between steps.",
          "Staying with a familiar groomer throughout the visit can be more reassuring than being left alone in a kennel.",
          "It tends to suit senior pets and large-breed dogs particularly well, since they're not confined to a small space for extended periods.",
        ],
      },
      {
        type: "p",
        text: "If your pet has struggled at a caged, high-volume grooming facility before, a cage-free, more personal approach is worth asking about.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "cat-grooming"],
  },
  {
    slug: "preparing-your-puppy-for-their-first-grooming-visit",
    title: "Preparing Your Puppy (or Kitten) for Their First Grooming Visit",
    metaDescription:
      "A few tips for getting your puppy or kitten ready for their first professional grooming visit, and what to expect once you're there.",
    excerpt:
      "A little preparation goes a long way toward a calm first grooming visit. Here's what to know before you go.",
    eyebrow: "New Pet Owners",
    publishedAt: "2026-09-12",
    heroPhotoKey: "whiteFluffyPuppy",
    body: [
      {
        type: "p",
        text: "A puppy or kitten's first grooming visit sets the tone for every visit after it. The goal of that first appointment usually isn't a full, intricate haircut — it's a calm, positive introduction to the grooming table, tools, and handling.",
      },
      { type: "h2", text: "Before the Visit" },
      {
        type: "list",
        items: [
          "Get your puppy or kitten comfortable with everyday handling at home — touching paws, ears, and mouth briefly and rewarding calm behavior.",
          "If possible, introduce the sound of a hair dryer or clippers from a distance beforehand so it's not a total surprise.",
          "Skip a big meal right before the appointment — a full stomach and an unfamiliar new experience don't always mix well.",
          "Mention your pet's age, breed, and coat type when you call to schedule, so the groomer can plan an appropriately short, gentle first visit.",
        ],
      },
      { type: "h2", text: "What to Expect" },
      {
        type: "p",
        text: "A first groom is typically kept short and low-key. Depending on age and coat, that might mean a light trim and a bath rather than a full haircut. The priority is a positive experience that sets your puppy or kitten up to be comfortable at every future visit — not cramming in every possible service on day one.",
      },
    ],
    relatedServiceSlugs: ["puppy-first-groom", "nail-trim-ear-cleaning"],
  },
  {
    slug: "deshedding-101-which-breeds-benefit-most",
    title: "Deshedding 101: What It Is and Which Breeds Benefit Most",
    metaDescription:
      "What a deshedding treatment actually does, how it's different from a regular bath, and which dog and cat breeds benefit from it most.",
    excerpt:
      "Deshedding treatments go deeper than a regular bath and brush. Here's what they do and which pets benefit most.",
    eyebrow: "Deshedding",
    publishedAt: "2026-09-12",
    heroPhotoKey: "creamFluffyDog",
    body: [
      {
        type: "p",
        text: "\"Deshedding\" gets used loosely, but a real deshedding treatment is more thorough than a standard bath and brush. It typically combines a specialized bath, deep brushing, and a blow-out process aimed at loosening and removing dead undercoat before it ends up on your floor and furniture.",
      },
      { type: "h2", text: "Which Pets Benefit Most" },
      {
        type: "list",
        items: [
          "Double-coated dog breeds (Huskies, Shepherds, Labs, Corgis) that grow a dense undercoat and \"blow coat\" seasonally.",
          "Long-haired cats, who can develop loose undercoat that contributes to hairballs if it's not managed.",
          "Any heavy-shedding pet during spring and fall, when seasonal coat changes are at their peak.",
        ],
      },
      { type: "h2", text: "What It Won't Do" },
      {
        type: "p",
        text: "A deshedding treatment reduces loose, dead undercoat — it doesn't stop healthy shedding altogether, and it isn't a haircut. For breeds that don't grow a double coat, or shorthaired breeds with a single coat, the benefit is usually smaller. If you're not sure whether your pet's coat type would benefit, it's a quick question to ask when you book.",
      },
    ],
    relatedServiceSlugs: ["deshedding-treatment", "dog-bath-and-brush"],
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

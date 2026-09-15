// ---------------------------------------------------------------------------
// RESOURCES — the educational library.
//
// Deliberately small. Two pages, not twenty. Each one exists because it has a
// distinct search intent that no commercial page on this site serves, and
// because we can write it from work we have actually done.
//
// PAGES CONSIDERED AND NOT PUBLISHED (and why):
//   /resources/how-to-get-more-dog-grooming-clients
//     Same intent as /dog-grooming-lead-generation. Two pages competing for
//     one intent is cannibalization, so the commercial page keeps it.
//   /resources/dog-grooming-seo-keywords
//     A keyword list is only worth publishing with real volume and query data
//     behind it. We do not have an exported Search Console dataset yet, and a
//     made-up keyword list is exactly the filler this site is meant to avoid.
//     Revisit once there is a real dataset to publish.
//   /resources/google-business-profile-categories-dog-groomers
//     Google's category list changes and is not reliably documented outside
//     the profile's own picker. Rather than publish a list we cannot verify,
//     categories are covered conceptually on the Google Business Profile page,
//     which points to Google's own documentation as the authority.
// ---------------------------------------------------------------------------

export type Resource = {
  slug: string;
  title: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  primaryQuery: string;
  readingTime: string;
  publishedAt: string;
  kind: "Guide" | "First-party data";
};

export const resources: Resource[] = [
  {
    slug: "how-to-rank-dog-grooming-business-on-google",
    title: "How to Rank a Dog Grooming Business on Google",
    navLabel: "How to rank on Google",
    h1: "How to Rank a Dog Grooming Business on Google",
    metaTitle: "How to Rank a Dog Grooming Business on Google (Step by Step)",
    metaDescription:
      "A do-it-yourself guide to ranking a dog grooming business in Google Maps and search: categories, service pages, service areas, reviews, and what to fix first.",
    summary:
      "The whole job, in the order it should be done, written so a groomer can work through it without hiring anyone. Covers the map pack and organic search separately, because they are ranked differently.",
    primaryQuery: "how to rank dog grooming business on google",
    readingTime: "12 min read",
    publishedAt: "2026-09-15",
    kind: "Guide",
  },
  {
    slug: "dog-grooming-website-examples",
    title: "Dog Grooming Website Examples (And What They're Made Of)",
    navLabel: "Grooming website examples",
    h1: "Dog Grooming Website Examples — And What They're Actually Made Of",
    metaTitle: "Dog Grooming Website Examples & What They're Made Of",
    metaDescription:
      "Seven real grooming websites we built and the structure behind them: 198 indexable pages, 31 service pages and 59 service-area pages, counted build by build.",
    summary:
      "Every grooming website we have built, what each one had to solve, and a count of exactly what is inside them — service pages, area pages, articles and structured data.",
    primaryQuery: "dog grooming website examples",
    readingTime: "9 min read",
    publishedAt: "2026-09-15",
    kind: "First-party data",
  },
];

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);

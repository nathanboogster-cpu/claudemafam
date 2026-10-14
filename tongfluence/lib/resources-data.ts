// ---------------------------------------------------------------------------
// RESOURCES — the educational library.
//
// Deliberately small. Three pages, not twenty. Each one exists because it has a
// distinct search intent that no commercial page on this site serves, and
// because we can write it from work we have actually done.
//
// The blog (lib/blog-posts.ts) holds the shorter, question-shaped articles.
// Each blog post targets an informational query none of these guides or the
// commercial pages own; see SEO-PLAN.md for the split.
//
// PUBLISHED LATER, ONCE THERE WAS DATA:
//   /resources/dog-grooming-seo-keywords
//     Deferred at launch because a keyword list without data is filler. The
//     site's own Search Console export (Oct 2026) showed "dog groomer
//     keywords" as its single most-shown query, with no page for it. The page
//     is built from the service and town pages we really build, grouped by
//     intent, and deliberately carries no search volumes.
//
// PAGES CONSIDERED AND NOT PUBLISHED (and why):
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
      "A do-it-yourself guide to ranking a dog grooming business on Google Maps and in search: categories, service pages, service areas, reviews, and what to fix first.",
    summary:
      "The whole job, in the order to do it, written so a groomer can work through it without hiring anyone. It covers the map and the search results on their own, because Google ranks them differently.",
    primaryQuery: "how to rank dog grooming business on google",
    readingTime: "12 min read",
    publishedAt: "2026-09-15",
    kind: "Guide",
  },
  {
    slug: "dog-grooming-website-examples",
    title: "Dog Grooming Website Examples (And What They're Made Of)",
    navLabel: "Grooming website examples",
    h1: "Dog Grooming Website Examples, and What They Are Really Made Of",
    metaTitle: "Dog Grooming Website Examples & What They're Made Of",
    metaDescription:
      "Seven real grooming websites we built and what is inside them: 198 pages, 31 service pages and 59 town pages, counted site by site.",
    summary:
      "Every grooming website we built, what each one had to solve, and a count of exactly what is inside them. Service pages, town pages, articles and more.",
    primaryQuery: "dog grooming website examples",
    readingTime: "9 min read",
    publishedAt: "2026-09-15",
    kind: "First-party data",
  },
  {
    slug: "dog-grooming-seo-keywords",
    title: "Dog Grooming Keywords: The Searches That Bring Appointments",
    navLabel: "Dog grooming keywords",
    h1: "Dog Grooming Keywords: The Searches That Bring Appointments",
    metaTitle: "Dog Grooming Keywords: What Pet Owners Search For (List)",
    metaDescription:
      "The dog groomer keywords we build pages for: near me and town searches, service, mobile, breed, price and problem searches, the ones to skip, and how to get your own numbers.",
    summary:
      "Every keyword group we build grooming pages for, with the page each one needs and the ones to skip. No made-up volumes. How to get your own numbers from Search Console for free.",
    primaryQuery: "dog groomer keywords",
    readingTime: "8 min read",
    publishedAt: "2026-10-14",
    kind: "Guide",
  },
];

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);

// ---------------------------------------------------------------------------
// BLOG — the article library.
//
// Each post targets one informational or comparison query around two
// clusters: "getting more dog grooming appointments" and "the best dog
// groomer marketing service". None targets a query a commercial page or a
// resource guide already owns (see SEO-PLAN.md, cannibalization analysis).
// Posts are ordered newest first on the hub; within a day, by this list.
// ---------------------------------------------------------------------------
import type { BlogPost, BlogBlock } from "./blog/types";
import { post as moreAppointments } from "./blog/posts/how-to-get-more-dog-grooming-appointments";
import { post as bestService } from "./blog/posts/best-dog-groomer-marketing-service";
import { post as ideas } from "./blog/posts/dog-grooming-marketing-ideas";
import { post as cost } from "./blog/posts/dog-groomer-marketing-cost";
import { post as googleAds } from "./blog/posts/google-ads-for-dog-groomers";
import { post as facebookAds } from "./blog/posts/facebook-ads-for-dog-groomers";
import { post as mobile } from "./blog/posts/mobile-dog-grooming-marketing";
import { post as startingOut } from "./blog/posts/how-to-get-dog-grooming-clients-starting-out";
import { post as openings } from "./blog/posts/fill-last-minute-grooming-openings";
import { post as referrals } from "./blog/posts/dog-grooming-referral-program";

export type { BlogPost, BlogBlock, BlogSection } from "./blog/types";

export const blogPosts: BlogPost[] = [
  moreAppointments,
  bestService,
  ideas,
  cost,
  googleAds,
  facebookAds,
  mobile,
  startingOut,
  openings,
  referrals,
];

export const blogPath = (slug: string) => `/blog/${slug}`;

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

// Words in a post's rendered text, for the reading-time label. Inline marks
// are stripped so "[a link](/x)" counts its label only.
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
const words = (s: string) => plain(s).split(/\s+/).filter(Boolean).length;

function blockWords(b: BlogBlock): number {
  switch (b.type) {
    case "p":
      return words(b.text);
    case "ul":
    case "ol":
      return b.items.reduce((n, i) => n + words(i), 0);
    case "callout":
      return words(b.text);
    case "proof":
      return 60;
  }
}

export function wordCount(post: BlogPost): number {
  return (
    words(post.intro) +
    post.takeaways.reduce((n, t) => n + words(t), 0) +
    post.sections.reduce((n, s) => n + words(s.heading) + s.blocks.reduce((m, b) => m + blockWords(b), 0), 0) +
    post.faqs.reduce((n, f) => n + words(f.question) + words(f.answer), 0)
  );
}

export function readingTime(post: BlogPost): string {
  return `${Math.max(2, Math.round(wordCount(post) / 200))} min read`;
}

// Three other posts for the "more from the blog" row: the ones this post
// links to first, then the rest in library order.
export function relatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const linked = new Set<string>();
  const scan = (s: string) => {
    for (const m of s.matchAll(/\]\(\/blog\/([a-z0-9-]+)\)/g)) linked.add(m[1]);
  };
  for (const s of post.sections) for (const b of s.blocks) {
    if (b.type === "p" || b.type === "callout") scan(b.text);
    if (b.type === "ul" || b.type === "ol") b.items.forEach(scan);
  }
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const first = others.filter((p) => linked.has(p.slug));
  const rest = others.filter((p) => !linked.has(p.slug));
  return [...first, ...rest].slice(0, count);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

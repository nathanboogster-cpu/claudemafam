// ---------------------------------------------------------------------------
// BLOG — the article type.
//
// Posts are data, not JSX, so the layout in app/(site)/blog/[slug] stays the
// same for every article and a post can be edited without touching React.
// Paragraph and list text supports two inline marks:
//   **bold text**            -> <strong>
//   [link text](/some/path)  -> <Link> (internal) or <a> (external)
// ---------------------------------------------------------------------------
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; label: string; text: string }
  /** The one measured result on the site, with its reports. */
  | { type: "proof" };

export type BlogSection = {
  id: string;
  heading: string;
  blocks: BlogBlock[];
};

export type BlogPost = {
  slug: string;
  /** The H1. */
  title: string;
  /** The <title>. Keep under about 60 characters. */
  metaTitle: string;
  /** Keep under about 160 characters. */
  metaDescription: string;
  /** One or two sentences for the card on the hub. */
  excerpt: string;
  /** The paragraph under the H1. */
  intro: string;
  primaryQuery: string;
  secondaryQueries: string[];
  publishedAt: string;
  /** Index into dogPhotos (lib/dog-photos.ts). */
  photo: number;
  takeaways: string[];
  sections: BlogSection[];
  faqs: { question: string; answer: string }[];
  /** Commercial pages this post links up to. */
  related: { href: string; label: string }[];
  cta: { title: string; body: string };
};

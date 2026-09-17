import type { Metadata } from "next";
import { SITE_URL, business } from "./site-data";

// The share image, generated at build time by app/opengraph-image.tsx and
// app/twitter-image.tsx. These are referenced explicitly rather than left to
// the file convention: Next.js merges metadata shallowly, so a page that
// defines `openGraph` at all replaces the root segment's entire openGraph
// object — file-convention image included. Setting `images` here is what
// keeps og:image on every page. Both paths are real routes that return a
// 1200x630 PNG.
const OG_IMAGE = "/opengraph-image";
const TWITTER_IMAGE = "/twitter-image";

// Builds complete, page-unique metadata (title/description/canonical plus
// matching OpenGraph + Twitter tags) so every page gets its own correct
// og:url and canonical instead of silently inheriting the homepage's.
export function pageMetadata({
  title,
  description,
  path,
  titleTemplate,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  // Set false to use the exact title as-is, bypassing the root layout's
  // "%s | Tongfluence" template — used by pages whose own title already ends
  // in the brand name.
  titleTemplate?: false;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = titleTemplate === false ? title : `${title} | ${business.name}`;

  return {
    title: titleTemplate === false ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: business.name,
      title: fullTitle,
      description,
      url,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${business.name} — ${business.shortDescription}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [TWITTER_IMAGE],
    },
  };
}

import type { Metadata } from "next";
import { SITE_URL, business } from "./site-data";

// Builds complete, page-unique metadata (title/description/canonical plus
// matching OpenGraph + Twitter Card tags) so every page gets its own correct
// og:url instead of silently inheriting the homepage's. The OG/Twitter image
// comes from the file-based app/opengraph-image.tsx generator, so no
// `images` field is set here.
export function pageMetadata({
  title,
  description,
  path,
  titleTemplate,
}: {
  title: string;
  description: string;
  path: string;
  // Set false to use the exact title as-is (bypassing the root layout's
  // "%s | Bark and Bork Mobile Pet Spa" template) — used for the homepage only.
  titleTemplate?: false;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = titleTemplate === false ? title : `${title} | ${business.shortName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: business.name,
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

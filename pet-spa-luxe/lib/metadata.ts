import type { Metadata } from "next";
import { SITE_URL } from "./site-data";

const OG_IMAGE = "/images/og-image.jpg";

// Builds complete, page-unique metadata (title/description/canonical plus
// matching OpenGraph + Twitter Card tags) so every page gets its own
// correct og:url instead of silently inheriting the homepage's.
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
  // "%s | Pet Spa Luxe" template) — used for the homepage only.
  titleTemplate?: false;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = titleTemplate === false ? title : `${title} | Pet Spa Luxe`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Pet Spa Luxe",
      title: fullTitle,
      description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Pet Spa Luxe" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

import type { Metadata } from "next";
import { SITE_URL } from "./site-data";

// Builds complete, page-unique metadata (title/description/canonical plus
// matching OpenGraph + Twitter Card tags) so every page gets its own
// correct og:url instead of silently inheriting the homepage's. The OG/
// Twitter image defaults to the static app/opengraph-image.jpg via Next's
// file convention; pass `image` (a /public path) to override it per page,
// e.g. a blog post's hero photo, so shares on Facebook show that photo.
export function pageMetadata({
  title,
  description,
  path,
  titleTemplate,
  image,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  // Set false to use the exact title as-is (bypassing the root layout's
  // "%s | Sittin' Pretty Pet Grooming" template) — used for the homepage only.
  titleTemplate?: false;
  image?: string;
  // ISO date; when set the page is tagged as an og:type=article.
  publishedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = titleTemplate === false ? title : `${title} | Sittin' Pretty Pet Grooming`;
  const images = image ? [`${SITE_URL}${image}`] : undefined;
  const siteName = "Sittin' Pretty Pet Grooming";

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: publishedTime
      ? { type: "article", siteName, title: fullTitle, description, url, publishedTime, ...(images && { images }) }
      : { type: "website", siteName, title: fullTitle, description, url, ...(images && { images }) },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images && { images }),
    },
  };
}

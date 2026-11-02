import type { Metadata } from "next";
import { business, SITE_URL } from "./site-data";

const OG_IMAGE = { url: "/images/og-image.jpg", width: 1200, height: 630, alt: "I Love Dogs Pet Grooming, Bryn Mawr, PA" };

// Complete, page-unique head tags: exact <title> (no template), meta
// description, absolute www canonical and matching OpenGraph + Twitter tags,
// so no page silently inherits the home page's og:url.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: business.name,
      title,
      description,
      url,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

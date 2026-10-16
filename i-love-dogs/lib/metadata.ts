import type { Metadata } from "next";
import { business, SITE_URL } from "./site-data";

// Complete, page-unique head tags: exact <title> (no template), meta
// description, absolute www canonical and matching OpenGraph tags, so no
// page silently inherits the home page's og:url.
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
    },
  };
}

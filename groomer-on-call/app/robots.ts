import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-data";

// Everything on this site is meant to be crawled — there are no utility,
// staging or duplicate routes to exclude. `Disallow: /` must never ship here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

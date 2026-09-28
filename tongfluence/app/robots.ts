import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-data";

// No `host` directive: it is a non-standard Yandex extension that Google
// ignores, and Next.js emits it with the scheme included, which is malformed
// even for the crawlers that do read it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The lead-form endpoint is a POST handler with nothing to crawl.
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

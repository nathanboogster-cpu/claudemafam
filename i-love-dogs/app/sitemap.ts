import type { MetadataRoute } from "next";
import { PATHS, SITE_URL } from "@/lib/site-data";

// The seven indexable pages. The 404 page is never listed.
export default function sitemap(): MetadataRoute.Sitemap {
  // Build date (YYYY-MM-DD).
  const lastModified = new Date().toISOString().slice(0, 10);
  return Object.values(PATHS).map((path) => ({ url: `${SITE_URL}${path}`, lastModified }));
}

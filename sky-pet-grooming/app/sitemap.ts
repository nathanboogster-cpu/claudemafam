import type { MetadataRoute } from "next";
import { allPaths, PATHS, SITE_URL } from "@/lib/site-data";

const priorities: Record<string, number> = {
  [PATHS.home]: 1,
  [PATHS.mobileGrooming]: 0.9,
  [PATHS.book]: 0.8,
  [PATHS.about]: 0.7,
  [PATHS.faq]: 0.7,
};

// Every indexable page. Never the 404 or the /requests inbox.
export default function sitemap(): MetadataRoute.Sitemap {
  // Build date (YYYY-MM-DD).
  const lastModified = new Date().toISOString().slice(0, 10);
  return allPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: priorities[path] ?? 0.6,
  }));
}

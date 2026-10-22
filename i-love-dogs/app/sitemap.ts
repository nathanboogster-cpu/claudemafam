import type { MetadataRoute } from "next";
import { allPaths, PATHS, SITE_URL } from "@/lib/site-data";

const priorities: Record<string, number> = {
  [PATHS.home]: 1,
  [PATHS.dogGrooming]: 0.9,
  [PATHS.pickup]: 0.9,
  [PATHS.contact]: 0.8,
  [PATHS.serviceArea]: 0.7,
  [PATHS.about]: 0.7,
  [PATHS.faq]: 0.7,
};

// Every indexable page: the core pages plus one per town. Never the 404.
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

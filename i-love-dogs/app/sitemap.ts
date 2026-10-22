import type { MetadataRoute } from "next";
import { allPaths, beforeAfterPhotos, groomedPhotos, PATHS, SITE_URL, teamPhotos } from "@/lib/site-data";

const priorities: Record<string, number> = {
  [PATHS.home]: 1,
  [PATHS.dogGrooming]: 0.9,
  [PATHS.pickup]: 0.9,
  [PATHS.contact]: 0.8,
  [PATHS.serviceArea]: 0.7,
  [PATHS.about]: 0.7,
  [PATHS.faq]: 0.7,
  [PATHS.gallery]: 0.6,
};

// Image sitemap entries, so the client's photos can show in image search.
const images: Record<string, string[]> = {
  [PATHS.gallery]: [...beforeAfterPhotos, ...groomedPhotos].map((p) => `${SITE_URL}${p.src}`),
  [PATHS.about]: Object.values(teamPhotos).map((p) => `${SITE_URL}${p.src}`),
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
    ...(images[path] ? { images: images[path] } : {}),
  }));
}

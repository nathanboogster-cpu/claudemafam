import type { MetadataRoute } from "next";
import { PATHS, SITE_URL } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const priorities: Record<string, number> = {
    [PATHS.home]: 1,
    [PATHS.dogDaycare]: 0.9,
    [PATHS.dogBoarding]: 0.9,
    [PATHS.dogGrooming]: 0.9,
    [PATHS.rates]: 0.85,
    [PATHS.reservations]: 0.85,
    [PATHS.contact]: 0.8,
    [PATHS.requirements]: 0.7,
    [PATHS.about]: 0.7,
    [PATHS.reviews]: 0.7,
    [PATHS.faq]: 0.7,
    [PATHS.gallery]: 0.6,
  };

  return Object.values(PATHS).map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: priorities[path] ?? 0.6,
  }));
}

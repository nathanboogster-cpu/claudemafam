import type { MetadataRoute } from "next";
import { PATHS, SITE_URL, serviceAreaPages } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const priorities: Record<string, number> = {
    [PATHS.home]: 1,
    [PATHS.contact]: 0.9,
    [PATHS.dog]: 0.9,
    [PATHS.cat]: 0.9,
    [PATHS.mobile]: 0.9,
    [PATHS.about]: 0.7,
    [PATHS.reviews]: 0.7,
    [PATHS.faq]: 0.7,
    [PATHS.puppy]: 0.7,
    [PATHS.anxious]: 0.7,
    [PATHS.gallery]: 0.6,
    [PATHS.employment]: 0.3,
  };

  const corePages = Object.values(PATHS).map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: priorities[path] ?? 0.5,
  }));

  const areaPages = serviceAreaPages.map((area) => ({
    url: `${SITE_URL}${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...areaPages];
}

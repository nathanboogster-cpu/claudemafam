import type { MetadataRoute } from "next";
import { PATHS, SITE_URL, services, servicePath, serviceAreas, areaPath } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const priorities: Record<string, number> = {
    [PATHS.home]: 1,
    [PATHS.services]: 0.9,
    [PATHS.contact]: 0.9,
    [PATHS.serviceAreas]: 0.8,
    [PATHS.about]: 0.7,
    [PATHS.reviews]: 0.7,
    [PATHS.faq]: 0.7,
    [PATHS.gallery]: 0.6,
  };

  const corePages = Object.values(PATHS).map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: priorities[path] ?? 0.6,
  }));

  const servicePages = services.map((s) => ({
    url: `${SITE_URL}${servicePath(s.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const areaPages = serviceAreas.map((a) => ({
    url: `${SITE_URL}${areaPath(a.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: a.slug === "eatontown-nj" ? 0.85 : 0.75,
  }));

  return [...corePages, ...servicePages, ...areaPages];
}

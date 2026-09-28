import type { MetadataRoute } from "next";
import { PATHS, SITE_URL, caseStudyPath, resourcePath } from "@/lib/site-data";
import { caseStudyBuilds } from "@/lib/client-builds";
import { resources } from "@/lib/resources-data";

// Every URL here is canonical, indexable, returns 200 and has unique value.
// Nothing is listed that redirects, 404s, or duplicates another page.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const priorities: Record<string, number> = {
    [PATHS.home]: 1,
    [PATHS.marketing]: 0.9,
    [PATHS.seo]: 0.9,
    [PATHS.websiteDesign]: 0.85,
    [PATHS.gbp]: 0.85,
    [PATHS.leadGeneration]: 0.8,
    [PATHS.reviews]: 0.8,
    [PATHS.book]: 0.9,
    [PATHS.caseStudies]: 0.8,
    [PATHS.resources]: 0.6,
    [PATHS.about]: 0.6,
    [PATHS.privacy]: 0.2,
    [PATHS.terms]: 0.2,
  };

  const corePages = Object.values(PATHS).map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: priorities[path] ?? 0.5,
  }));

  const caseStudyPages = caseStudyBuilds.map((b) => ({
    url: `${SITE_URL}${caseStudyPath(b.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourcePages = resources.map((r) => ({
    url: `${SITE_URL}${resourcePath(r.slug)}`,
    lastModified: new Date(`${r.publishedAt}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...corePages, ...caseStudyPages, ...resourcePages];
}

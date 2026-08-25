import type { MetadataRoute } from "next";
import { PATHS, SITE_URL, serviceAreaPages } from "@/lib/site-data";
import {
  PATHS as PSL_PATHS,
  services as pslServices,
  serviceAreas as pslServiceAreas,
  servicePath as pslServicePath,
  areaPath as pslAreaPath,
} from "@/lib/psl/site-data";

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

  // Pet Spa Luxe (/pet-spa-luxe) — separate business, separate route tree.
  const pslPriorities: Record<string, number> = {
    [PSL_PATHS.home]: 1,
    [PSL_PATHS.services]: 0.9,
    [PSL_PATHS.contact]: 0.9,
    [PSL_PATHS.serviceAreas]: 0.8,
    [PSL_PATHS.about]: 0.7,
    [PSL_PATHS.reviews]: 0.7,
    [PSL_PATHS.faq]: 0.7,
    [PSL_PATHS.gallery]: 0.6,
  };

  const pslCorePages = Object.values(PSL_PATHS).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: pslPriorities[path] ?? 0.6,
  }));

  const pslServicePages = pslServices.map((s) => ({
    url: `${SITE_URL}${pslServicePath(s.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const pslAreaPages = pslServiceAreas.map((a) => ({
    url: `${SITE_URL}${pslAreaPath(a.slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...areaPages, ...pslCorePages, ...pslServicePages, ...pslAreaPages];
}

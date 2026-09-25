import type { MetadataRoute } from "next";
import { PATHS, SITE_URL, pageUpdated, services, serviceAreas, servicePath, areaPath } from "@/lib/site-data";
import { blogPosts, blogPostPath } from "@/lib/blog-data";

const day = (iso: string) => new Date(`${iso}T00:00:00Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const newestPost = blogPosts.map((p) => p.publishedAt).sort().at(-1);

  const priorities: Record<string, number> = {
    [PATHS.home]: 1,
    [PATHS.services]: 0.9,
    [PATHS.contact]: 0.9,
    [PATHS.serviceAreas]: 0.8,
    [PATHS.about]: 0.7,
    [PATHS.faq]: 0.7,
    [PATHS.gallery]: 0.6,
    [PATHS.blog]: 0.6,
  };

  const corePages = (Object.keys(PATHS) as (keyof typeof PATHS)[]).map((key) => {
    const path = PATHS[key];
    const updated = key === "blog" ? newestPost : pageUpdated[key];
    return {
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      ...(updated ? { lastModified: day(updated) } : {}),
      changeFrequency: "monthly" as const,
      priority: priorities[path] ?? 0.6,
    };
  });

  const servicePages = services.map((s) => ({
    url: `${SITE_URL}${servicePath(s.slug)}`,
    lastModified: day(s.updated),
    changeFrequency: "monthly" as const,
    priority: s.isFlagship ? 0.95 : 0.85,
  }));

  const areaPages = serviceAreas.map((a) => ({
    url: `${SITE_URL}${areaPath(a.slug)}`,
    lastModified: day(a.updated),
    changeFrequency: "monthly" as const,
    priority: a.isPrimary ? 0.85 : 0.75,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}${blogPostPath(post.slug)}`,
    lastModified: day(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...corePages, ...servicePages, ...areaPages, ...blogPages];
}

import type { MetadataRoute } from "next";
import { PATHS, SITE_URL, services, servicePath, blogPostPath } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";

/**
 * Every canonical, indexable, 200-status URL on the site — and nothing else.
 * Because the list is generated from the same PATHS / services / blogPosts
 * data the nav and pages are built from, the sitemap cannot drift out of
 * sync with what actually exists, and cannot list a redirect or a 404.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const priorities: Record<string, number> = {
    [PATHS.home]: 1,
    [PATHS.services]: 0.9,
    [PATHS.contact]: 0.9,
    [PATHS.serviceAreas]: 0.8,
    [PATHS.about]: 0.7,
    [PATHS.faq]: 0.7,
    [PATHS.blog]: 0.6,
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
    // The primary commercial page outranks the supporting service pages.
    priority: s.isPrimary ? 0.95 : 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${SITE_URL}${blogPostPath(p.slug)}`,
    lastModified: new Date(`${p.publishedAt}T12:00:00Z`),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...corePages, ...servicePages, ...blogPages];
}

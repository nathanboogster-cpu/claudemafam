import type { MetadataRoute } from "next";
import { PATHS, SITE_URL, services, serviceAreas, servicePath, areaPath, blogPostPath } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";

// Last date the non-blog pages' content actually changed (the switch to the
// custom domain rewrote every canonical/OG URL). Bump it when page copy or
// site-wide content changes; a build-time date would claim every page
// changed on every deploy, which teaches Google to ignore lastmod.
const SITE_UPDATED = "2026-09-25";

const day = (iso: string) => new Date(`${iso}T00:00:00Z`);
const latest = (...isos: (string | undefined)[]) => day(isos.filter(Boolean).sort().at(-1)!);

export default function sitemap(): MetadataRoute.Sitemap {
  const newestPost = blogPosts.map((p) => p.publishedAt).sort().at(-1);
  // Service pages list their related posts, so a new related post changes them.
  const newestPostFor = (slug: string) =>
    blogPosts.filter((p) => (p.relatedServiceSlugs as string[]).includes(slug)).map((p) => p.publishedAt).sort().at(-1);

  const priorities: Record<string, number> = {
    [PATHS.home]: 1,
    [PATHS.services]: 0.9,
    [PATHS.contact]: 0.9,
    [PATHS.serviceAreas]: 0.8,
    [PATHS.cageFree]: 0.8,
    [PATHS.about]: 0.7,
    [PATHS.reviews]: 0.7,
    [PATHS.faq]: 0.7,
    [PATHS.blog]: 0.7,
    [PATHS.gallery]: 0.6,
  };

  const corePages = Object.values(PATHS).map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: path === PATHS.blog ? latest(SITE_UPDATED, newestPost) : day(SITE_UPDATED),
    changeFrequency: "monthly" as const,
    priority: priorities[path] ?? 0.6,
  }));

  const servicePages = services.map((s) => ({
    url: `${SITE_URL}${servicePath(s.slug)}`,
    lastModified: latest(SITE_UPDATED, newestPostFor(s.slug)),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const areaPages = serviceAreas.map((a) => ({
    url: `${SITE_URL}${areaPath(a.slug)}`,
    lastModified: day(SITE_UPDATED),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${SITE_URL}${blogPostPath(p.slug)}`,
    lastModified: day(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...corePages, ...servicePages, ...areaPages, ...blogPages];
}

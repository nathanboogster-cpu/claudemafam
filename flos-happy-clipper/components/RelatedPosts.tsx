import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { blogPostPath, type ServiceSlug } from "@/lib/site-data";

// Links a service page to every blog post tagged with that service
// (BlogPost.relatedServiceSlugs), using the post title as the anchor text.
// Renders nothing when no post is tagged, so new posts appear automatically.
export function RelatedPosts({ service }: { service: ServiceSlug }) {
  const posts = blogPosts.filter((p) => p.relatedServiceSlugs.includes(service));
  if (posts.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Grooming Tips From Our Blog</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={blogPostPath(p.slug)}
              className="block rounded-xl border border-fh-border bg-white px-4 py-3 text-fh-ink shadow-sm transition-colors hover:border-fh-pink-dark hover:text-fh-pink-dark"
            >
              <span className="font-semibold">{p.title}</span>
              <span className="mt-1 block text-sm text-fh-ink-soft">{p.excerpt}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

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
    <section className="mx-auto max-w-6xl px-4 pb-4">
      <h2 className="font-bw-display text-2xl font-bold text-bw-ink sm:text-3xl">From the Bow Wags Blog</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={blogPostPath(p.slug)}
              className="block rounded-xl border border-bw-border bg-white px-4 py-3 text-bw-ink shadow-sm transition-colors hover:border-bw-red-dark hover:text-bw-red-dark"
            >
              <span className="font-semibold">{p.title}</span>
              <span className="mt-1 block text-sm text-bw-ink-soft">{p.excerpt}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

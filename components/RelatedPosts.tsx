import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { PATHS } from "@/lib/site-data";

// Links a service page to every blog post whose `relatedPath` points at it,
// using the post title as the anchor text. Renders nothing when no post
// matches, so new posts appear automatically on the right page.
export function RelatedPosts({ path }: { path: string }) {
  const posts = blogPosts.filter((p) => p.relatedPath === path);
  if (posts.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">From the Pampered Puppies Blog</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`${PATHS.blog}/${p.slug}`}
              className="block rounded-2xl border border-border bg-white p-5 text-ink shadow-sm transition-shadow hover:shadow-md hover:text-terracotta-dark"
            >
              <span className="font-semibold">{p.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

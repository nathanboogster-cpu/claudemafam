import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";
import { blogPostPath } from "@/lib/blog-data";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={blogPostPath(post.slug)}
      className="group flex flex-col gap-3 rounded-2xl border border-bb-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md font-bb-sans"
    >
      <time dateTime={post.publishedAt} className="text-xs font-semibold uppercase tracking-wide text-bb-ink-soft">
        {formatDate(post.publishedAt)}
      </time>
      <h3 className="font-bb-display text-lg font-bold text-bb-ink">{post.title}</h3>
      <p className="text-sm text-bb-ink-soft">{post.excerpt}</p>
      <span className="mt-1 text-sm font-semibold text-bb-coral-dark group-hover:underline">Read more →</span>
    </Link>
  );
}

export { formatDate };

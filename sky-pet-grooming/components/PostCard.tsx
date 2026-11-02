import Link from "next/link";
import { blogPostPath } from "@/lib/site-data";
import type { BlogPost } from "@/lib/blog-data";
import { Pic } from "./Pic";

export function PostCard({ post, headingLevel = 3 }: { post: BlogPost; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link
      href={blogPostPath(post.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:border-accent hover:shadow-md"
    >
      <div className="relative aspect-[16/10] bg-sky-deep">
        <Pic slug={post.photo} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-accent-dark">{post.eyebrow}</p>
        <Heading className="mt-1 font-display text-lg font-extrabold leading-snug text-ink group-hover:text-accent-dark">{post.title}</Heading>
        <p className="mt-2 text-sm text-ink-soft">{post.excerpt}</p>
        <span className="mt-auto pt-4 text-sm font-bold text-brand">Read more →</span>
      </div>
    </Link>
  );
}

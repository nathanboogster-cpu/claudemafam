import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog/types";
import { blogPath, readingTime, formatDate } from "@/lib/blog-posts";
import { dogPhotos } from "@/lib/dog-photos";
import { ArrowRightIcon } from "./icons";

// A post on the hub or in a "more from the blog" row. The photo is a client
// dog, the same set the rest of the site uses, so the blog does not become
// the one place with stock imagery.
export function BlogCard({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  const photo = dogPhotos[post.photo] ?? dogPhotos[0];
  return (
    <Link
      href={blogPath(post.slug)}
      className="tf-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-tf-border bg-tf-card hover:border-tf-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark"
    >
      <Image
        src={photo.square}
        alt={photo.alt}
        width={560}
        height={560}
        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
        className={`${compact ? "aspect-[16/9]" : "aspect-[16/10]"} h-auto w-full object-cover object-top`}
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="tf-caps text-xs text-tf-brown">
          {readingTime(post)} · {formatDate(post.publishedAt)}
        </p>
        <h3 className={`mt-2 font-tf-display font-bold text-tf-ink ${compact ? "text-base" : "text-lg sm:text-xl"}`}>
          {post.title}
        </h3>
        {compact ? null : <p className="mt-2 flex-1 text-sm leading-relaxed text-tf-ink-soft">{post.excerpt}</p>}
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-tf-brown-dark">
          Read it
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

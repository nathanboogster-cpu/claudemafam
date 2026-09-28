import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, photos, PATHS, SITE_URL, blogPostPath } from "@/lib/site-data";
import { blogPosts, formatBlogDate } from "@/lib/blog-data";

export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Tips & Advice | Flo's Happy Clipper",
  description:
    "Dog grooming tips, seasonal advice, and answers to common questions from Flo's Happy Clipper in Eatontown, NJ.",
  path: PATHS.blog,
  titleTemplate: false,
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Blog", url: `${SITE_URL}${PATHS.blog}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Blog", href: PATHS.blog }]} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-2xl">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            Dog Grooming Tips & Advice
          </h1>
          <p className="mt-4 text-lg text-fh-ink-soft">
            Grooming tips, seasonal advice, and answers to common questions from Flo&apos;s Happy Clipper in
            Eatontown, NJ.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const photo = photos[post.heroPhotoKey];
            return (
              <Link
                key={post.slug}
                href={blogPostPath(post.slug)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-fh-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-fh-pink-dark/30 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={photo.src ?? ""}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <Eyebrow>{post.eyebrow}</Eyebrow>
                  <p className="font-fh-display text-lg font-bold text-fh-ink">{post.title}</p>
                  <p className="flex-1 text-sm text-fh-ink-soft">{post.excerpt}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-fh-ink-soft">
                    <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    <span className="inline-flex items-center gap-1 font-semibold text-fh-pink-dark">
                      Read more <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-fh-ink text-white">
        <div className="fh-blob -left-16 top-0 h-56 w-56 bg-fh-pink/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Have a Grooming Question?</h2>
          <p className="text-white/80">Call {business.phoneDisplay} and we&apos;re happy to help.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <CallButton location="blog_index_cta" variant="primary" />
            <SecondaryLinkButton location="blog_index_cta" variant="ghost" label="View Services" href={PATHS.services} />
          </div>
        </div>
      </section>
    </>
  );
}

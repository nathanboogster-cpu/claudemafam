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
  title: "Pet Grooming Tips & Advice",
  description:
    "Dog and cat grooming tips, seasonal advice, and answers to common questions from Sittin' Pretty Pet Grooming in Funkstown, MD.",
  path: PATHS.blog,
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
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Pet Grooming Tips & Advice
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            Grooming tips, seasonal advice, and answers to common questions from Sittin&apos; Pretty Pet
            Grooming in Funkstown, MD.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const photo = photos[post.heroPhotoKey];
            return (
              <Link
                key={post.slug}
                href={blogPostPath(post.slug)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-sp-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <Eyebrow>{post.eyebrow}</Eyebrow>
                  <p className="font-sp-display text-lg font-bold text-sp-ink">{post.title}</p>
                  <p className="flex-1 text-sm text-sp-ink-soft">{post.excerpt}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-sp-ink-soft">
                    <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    <span className="font-semibold text-sp-purple-dark transition-transform group-hover:translate-x-1">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-sp-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-sp-display text-3xl font-bold">Have a Grooming Question?</h2>
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

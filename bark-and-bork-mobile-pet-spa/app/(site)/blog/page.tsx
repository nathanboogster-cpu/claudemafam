import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/BlogCard";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/blog-data";
import { PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Tips & Guides",
  description:
    "Grooming advice from Bark and Bork Mobile Pet Spa: how often to groom your dog, preventing matting, preparing for a mobile appointment, and more.",
  path: PATHS.blog,
});

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

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
        <div className="text-center">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Dog Grooming Tips &amp; Guides</h1>
          <p className="mx-auto mt-4 max-w-xl text-bb-ink-soft">
            Practical grooming advice from Bark and Bork — coat care, prepping for an appointment, and what to expect
            from mobile grooming.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-bb-ink-soft">Ready for your dog&apos;s next groom? Book a mobile grooming appointment.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <BookButton location="blog_index" variant="primary" />
            <SecondaryLinkButton location="blog_index" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
      </section>
    </>
  );
}

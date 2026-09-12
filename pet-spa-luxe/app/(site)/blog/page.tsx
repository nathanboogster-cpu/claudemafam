import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, SITE_URL, blogPath } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Tips & Guides",
  description:
    "Practical dog grooming advice from Pet Spa Luxe — bathing frequency, deshedding, mobile vs. traditional grooming, and more.",
  path: PATHS.blog,
});

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogHub() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Blog", url: `${SITE_URL}${PATHS.blog}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Blog", href: PATHS.blog }]} />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <Eyebrow>Dog Grooming Tips</Eyebrow>
        <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">Blog</h1>
        <p className="mt-4 max-w-2xl text-lg text-psl-ink-soft">
          Practical grooming advice for dog owners in El Sobrante and the
          surrounding Bay Area — bathing frequency, deshedding, and what to
          expect from mobile grooming.
        </p>

        <div className="mt-10 grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={blogPath(post.slug)}
              className="group rounded-2xl border border-psl-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-psl-ink-soft">
                {formatDate(post.publishedDate)} · {post.readMinutes} min read
              </p>
              <h2 className="mt-2 font-psl-display text-xl font-bold text-psl-ink group-hover:text-psl-brass-dark sm:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-psl-ink-soft">{post.description}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-psl-brass-dark group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-psl-border bg-psl-cream-deep p-8 text-center sm:p-10">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink">Ready to Book a Groom?</h2>
          <p className="mt-2 text-psl-ink-soft">
            Mobile dog grooming brought directly to your home in El Sobrante and the surrounding Bay Area.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="blog_hub" variant="primary" />
            <RequestButton location="blog_hub" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { CallButton, BookButton } from "@/components/CTAButton";

const pageUrl = `${SITE_URL}${PATHS.blog}`;

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const metadata: Metadata = {
  title: "Grooming Tips & Pet Care Blog | Pampered Puppies, Victorville CA",
  description:
    "Dog & cat grooming tips, seasonal care advice, and pet care guidance from Pampered Puppies in Victorville, CA.",
  alternates: { canonical: PATHS.blog },
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Blog", href: PATHS.blog }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: pageUrl },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-1 font-display text-3xl font-bold text-ink sm:text-4xl">
          Grooming Tips & Pet Care
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
          Seasonal grooming advice, mobile vs. in-store guidance, and tips for
          nervous or first-time groomers — from Ellen and the Pampered Puppies team.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`${PATHS.blog}/${post.slug}`}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
                {post.category}
              </span>
              <h2 className="mt-2 font-display text-lg font-bold text-ink">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-ink-soft/70">
                <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                <span className="font-semibold text-terracotta-dark">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Ready to book your pet&rsquo;s next groom?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="blog_index_bottom" label="Call Now" />
            <BookButton location="blog_index_bottom" />
          </div>
        </div>
      </section>
    </div>
  );
}

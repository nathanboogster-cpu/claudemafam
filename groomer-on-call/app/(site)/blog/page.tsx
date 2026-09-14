import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { BrandArt } from "@/components/BrandArt";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS, SITE_URL, blogPostPath, servicePath, getService } from "@/lib/site-data";
import { blogPosts, formatBlogDate } from "@/lib/blog-data";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Dog & Cat Grooming Guides",
  description:
    `Straight answers to the questions pet owners actually ask — how often to groom, what mobile grooming involves, nails, baths and cats. From Groomer On Call.`,
  path: PATHS.blog,
});

const crumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Grooming Guides", href: PATHS.blog },
];

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))}
      />
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-goc-cream">
        <div className="goc-blob -left-20 -top-16 h-72 w-72 bg-goc-magenta/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:py-18">
          <Eyebrow>Grooming Guides</Eyebrow>
          <h1 className="mt-3 font-goc-display text-4xl font-extrabold leading-[1.06] text-goc-ink sm:text-5xl">
            Dog &amp; Cat Grooming Guides
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-goc-ink-soft">
            A small number of genuinely useful articles, written to answer the questions pet owners ask before they
            book — not to fill a page with keywords.
          </p>
        </div>
      </section>

      <Section tone="white">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={blogPostPath(post.slug)}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-goc-border bg-goc-cream transition-all duration-200 hover:-translate-y-1 hover:border-goc-magenta-dark hover:shadow-xl hover:shadow-black/5"
              >
                <BrandArt scene={post.art} aspect="wide" className="rounded-none border-0 ring-0" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-goc-magenta-darker">
                    {post.eyebrow}
                  </p>
                  <h2 className="mt-2 font-goc-display text-xl font-extrabold leading-snug text-goc-ink">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-goc-ink-soft">{post.excerpt}</p>
                  <p className="mt-4 flex items-center justify-between text-xs font-semibold text-goc-ink-soft">
                    <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    <span>{post.readingMinutes} min read</span>
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-goc-magenta-darker">
                    Read the guide
                    <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="deep">
        <h2 className="font-goc-display text-2xl font-extrabold text-goc-ink sm:text-3xl">
          Looking to book rather than read?
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-goc-ink-soft">
          Every guide here is written to support one of these services. Call {business.phoneDisplay} and skip straight
          to it.
        </p>
        <ul className="mt-7 flex flex-wrap gap-3">
          {(["mobile-dog-grooming", "dog-bath-and-blow-dry", "dog-nail-trimming", "mobile-cat-bathing"] as const).map(
            (slug) => (
              <li key={slug}>
                <Link
                  href={servicePath(slug)}
                  className="inline-flex min-h-11 items-center rounded-full border-2 border-goc-border bg-white px-5 py-2.5 text-sm font-bold text-goc-ink hover:border-goc-magenta-dark hover:text-goc-magenta-darker"
                >
                  {getService(slug).name}
                </Link>
              </li>
            ),
          )}
        </ul>
      </Section>

      <CtaBand location="blog_hub_footer" secondary={{ href: PATHS.services, label: "All Services" }} />
    </>
  );
}

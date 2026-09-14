import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { BrandArt } from "@/components/BrandArt";
import { JsonLd, breadcrumbSchema, blogPostingSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS, SITE_URL, blogPostPath, servicePath, getService } from "@/lib/site-data";
import { blogPosts, getBlogPost, formatBlogDate, type BlogBlock } from "@/lib/blog-data";
import { ArrowIcon, PhoneIcon } from "@/components/icons";

// Fully static: every post is known at build time, so each URL is a prebuilt
// HTML document. `dynamicParams = false` means any other slug 404s rather
// than being rendered on demand — no soft 404s from invented URLs.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle ?? post.title,
    description: post.metaDescription,
    path: blogPostPath(post.slug),
  });
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-10 font-goc-display text-2xl font-extrabold text-goc-ink sm:text-3xl">{block.text}</h2>;
  }
  if (block.type === "list") {
    return (
      <ul className="mt-5 space-y-2.5">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-goc-ink-soft">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-goc-magenta-dark" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "callout") {
    return (
      <p className="mt-6 rounded-2xl border-l-4 border-goc-magenta-dark bg-goc-cream-deep p-5 font-semibold leading-relaxed text-goc-ink">
        {block.text}
      </p>
    );
  }
  return <p className="mt-5 leading-relaxed text-goc-ink-soft">{block.text}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}${blogPostPath(post.slug)}`;
  const crumbs = [
    { name: "Home", href: PATHS.home },
    { name: "Grooming Guides", href: PATHS.blog },
    { name: post.title, href: blogPostPath(post.slug) },
  ];
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))}
      />
      <JsonLd
        data={blogPostingSchema({
          pageUrl: url,
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedAt,
        })}
      />
      <Breadcrumbs items={crumbs} />

      <article>
        <header className="relative overflow-hidden bg-goc-cream">
          <div className="goc-blob -right-20 -top-16 h-72 w-72 bg-goc-orange/30" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 py-12 sm:py-16">
            <Eyebrow>{post.eyebrow}</Eyebrow>
            <h1 className="mt-3 font-goc-display text-3xl font-extrabold leading-[1.1] text-goc-ink sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-goc-ink-soft">{post.excerpt}</p>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-goc-ink-soft">
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>{business.name}</span>
            </p>
          </div>
        </header>

        <div className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12">
            <BrandArt scene={post.art} aspect="wide" />
            <div className="mt-8">
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            {/* Every guide routes back to the commercial page it supports —
                this is the whole reason the article exists. */}
            <div className="mt-12 rounded-3xl border-2 border-goc-magenta-dark bg-goc-cream p-7 sm:p-8">
              <h2 className="font-goc-display text-xl font-extrabold text-goc-ink">Book this with Groomer On Call</h2>
              <p className="mt-2 leading-relaxed text-goc-ink-soft">
                Mobile pet grooming at your home — no drop-off, no waiting room.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {post.relatedServiceSlugs.map((s) => (
                  <li key={s}>
                    <Link
                      href={servicePath(s)}
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-goc-border bg-white px-5 py-2.5 text-sm font-bold text-goc-ink hover:border-goc-magenta-dark hover:text-goc-magenta-darker"
                    >
                      {getService(s).name}
                      <ArrowIcon className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={business.phoneHref}
                data-goc-event="call_click"
                data-goc-location={`blog_${post.slug}`}
                className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-goc-magenta-dark px-6 py-3 text-base font-bold text-white hover:bg-goc-magenta-darker"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </article>

      <Section tone="deep">
        <h2 className="font-goc-display text-2xl font-extrabold text-goc-ink sm:text-3xl">More Grooming Guides</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={blogPostPath(other.slug)}
                className="group flex h-full flex-col rounded-2xl border-2 border-goc-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-goc-magenta-dark"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-goc-magenta-darker">
                  {other.eyebrow}
                </span>
                <span className="mt-2 flex-1 font-goc-display text-lg font-extrabold leading-snug text-goc-ink">
                  {other.title}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-goc-magenta-darker">
                  Read
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href={PATHS.blog} className="font-bold text-goc-magenta-darker underline underline-offset-4">
            All grooming guides →
          </Link>
        </div>
      </Section>

      <CtaBand location={`blog_${post.slug}_footer`} secondary={{ href: PATHS.services, label: "All Services" }} />
    </>
  );
}

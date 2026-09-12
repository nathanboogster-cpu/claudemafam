import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { CallButton, BookButton } from "@/components/CTAButton";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Pampered Puppies Blog`,
    description: post.description,
    alternates: { canonical: `${PATHS.blog}/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const pageUrl = `${SITE_URL}${PATHS.blog}/${post.slug}`;

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Blog", href: PATHS.blog },
          { name: post.title, href: `${PATHS.blog}/${post.slug}` },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}${PATHS.blog}` },
          { name: post.title, url: pageUrl },
        ])}
      />
      <JsonLd
        data={articleSchema({
          pageUrl,
          title: post.title,
          description: post.description,
          datePublished: post.date,
        })}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
          {post.category}
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{post.title}</h1>
        <time dateTime={post.date} className="mt-3 block text-sm text-ink-soft/70">
          {dateFormat.format(new Date(post.date))}
        </time>

        <div className="mt-8 space-y-5">
          {post.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="font-display text-xl font-bold text-ink">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="list-disc space-y-1 pl-5 text-ink-soft leading-relaxed">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-ink-soft leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-cream-deep p-6">
          <p className="text-sm text-ink-soft">
            <Link href={post.relatedPath} className="font-semibold text-terracotta-dark hover:underline">
              {post.relatedLabel} →
            </Link>
          </p>
        </div>
      </article>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Ready to book your pet&rsquo;s next groom?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="blog_post_bottom" label="Call Now" />
            <BookButton location="blog_post_bottom" />
          </div>
        </div>
      </section>
    </div>
  );
}

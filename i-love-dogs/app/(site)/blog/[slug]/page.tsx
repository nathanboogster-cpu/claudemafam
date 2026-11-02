import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { blogPostPath, blogPosts, getBlogPost } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { BottomCta } from "@/components/BottomCta";
import { CallButton } from "@/components/CTAButton";

const dateFormat = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.seoTitle, description: post.description, path: blogPostPath(post.slug) });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const pageUrl = `${SITE_URL}${blogPostPath(post.slug)}`;
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Blog", href: PATHS.blog },
          { name: post.tag, href: blogPostPath(post.slug) },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}${PATHS.blog}` },
          { name: post.title, url: pageUrl },
        ])}
      />
      <JsonLd data={articleSchema({ pageUrl, title: post.title, description: post.description, datePublished: post.date })} />

      <article className="mx-auto max-w-3xl px-4 py-10">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          {post.category} · {post.tag}
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-ink-soft">
          By I Love Dogs Pet Grooming · <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
        </p>
        <div className="mt-5">
          <CallButton location={`blog_${post.slug}_top`} />
        </div>

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
          <p className="text-sm">
            <Link href={post.relatedPath} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
              {post.relatedLabel} →
            </Link>
          </p>
          <p className="text-sm">
            <Link href={`${PATHS.dogGrooming}#pricing`} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
              See packages and prices →
            </Link>
          </p>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-xl font-bold text-ink">More from the blog</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={blogPostPath(p.slug)}
                className="block h-full rounded-xl border border-border bg-white p-4 text-sm font-semibold text-brand hover:bg-cream-deep"
              >
                {p.title} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <BottomCta title="Ready to book your dog's groom?" location="blog_post_bottom" />
    </div>
  );
}

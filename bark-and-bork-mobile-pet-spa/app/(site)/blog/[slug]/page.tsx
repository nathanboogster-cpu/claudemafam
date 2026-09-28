import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { formatDate } from "@/components/BlogCard";
import { JsonLd, breadcrumbSchema, blogPostingSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { blogPosts, blogPostPath, type BlogBlock } from "@/lib/blog-data";
import { PATHS, SITE_URL } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt, path: blogPostPath(post.slug) });
}

function BlockRenderer({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-8 font-bb-display text-2xl font-bold text-bb-ink">{block.text}</h2>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-bb-ink-soft">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 leading-relaxed text-bb-ink-soft">{block.text}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const url = `${SITE_URL}${blogPostPath(post.slug)}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Blog", url: `${SITE_URL}${PATHS.blog}` },
          { name: post.title, url },
        ])}
      />
      <JsonLd
        data={blogPostingSchema({ pageUrl: url, title: post.title, description: post.excerpt, datePublished: post.publishedAt })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Blog", href: PATHS.blog },
          { name: post.title, href: blogPostPath(post.slug) },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <Eyebrow>Dog Grooming Tips</Eyebrow>
        <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">{post.title}</h1>
        <time dateTime={post.publishedAt} className="mt-3 block text-sm text-bb-ink-soft">
          {formatDate(post.publishedAt)}
        </time>

        <div className="mt-6">
          {post.body.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-bb-border bg-bb-cream-deep p-8 text-center">
          <p className="font-bb-display text-xl font-bold text-bb-ink">Ready to book?</p>
          <p className="mt-2 text-bb-ink-soft">Bark and Bork comes to you, anywhere in Compton or greater Los Angeles.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <BookButton location="blog_post" variant="primary" />
            <SecondaryLinkButton location="blog_post" variant="secondary" label="More Grooming Tips" href={PATHS.blog} />
          </div>
        </div>
      </article>
    </>
  );
}

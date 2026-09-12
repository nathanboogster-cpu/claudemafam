import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, blogPostingSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, services, servicePath, photos, PATHS, SITE_URL, blogPostPath } from "@/lib/site-data";
import { blogPosts, getBlogPost, formatBlogDate, type BlogBlock } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.metaDescription,
    path: blogPostPath(post.slug),
  });
}

function BlockRenderer({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-8 font-fh-display text-2xl font-bold text-fh-ink">{block.text}</h2>;
  }
  if (block.type === "list") {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item} className="text-fh-ink-soft">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 leading-relaxed text-fh-ink-soft">{block.text}</p>;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const url = `${SITE_URL}${blogPostPath(post.slug)}`;
  const heroPhoto = photos[post.heroPhotoKey];

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
        data={blogPostingSchema({
          pageUrl: url,
          headline: post.title,
          description: post.metaDescription,
          imageUrl: `${SITE_URL}${heroPhoto.src}`,
          datePublished: post.publishedAt,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Blog", href: PATHS.blog },
          { name: post.title, href: blogPostPath(post.slug) },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <Eyebrow>{post.eyebrow}</Eyebrow>
        <h1 className="mt-1 font-fh-display text-3xl font-bold text-fh-ink sm:text-4xl">{post.title}</h1>
        <time dateTime={post.publishedAt} className="mt-3 block text-sm text-fh-ink-soft">
          {formatBlogDate(post.publishedAt)}
        </time>

        <PhotoPlaceholder caption={heroPhoto.alt} src={heroPhoto.src} aspect="wide" className="mt-6 w-full" priority />

        <div className="mt-8">
          {post.body.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-fh-border pt-8">
          {post.relatedServiceSlugs.map((slug) => {
            const service = services.find((s) => s.slug === slug);
            if (!service) return null;
            return (
              <Link
                key={slug}
                href={servicePath(slug)}
                className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark"
              >
                {service.shortName} →
              </Link>
            );
          })}
        </div>
      </article>

      <section className="relative overflow-hidden bg-fh-ink text-white">
        <div className="fh-blob -right-16 top-0 h-56 w-56 bg-fh-pink/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Ready to Schedule a Groom?</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to book an appointment.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <CallButton location="blog_post_cta" variant="primary" />
            <SecondaryLinkButton location="blog_post_cta" variant="ghost" label="More Articles" href={PATHS.blog} />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areaByKey, blogPostPath, PATHS, services, servicePath, SITE_URL } from "@/lib/site-data";
import { blogPosts, formatBlogDate, getBlogPost, type BlogBlock, type BlogPost } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { Pic } from "@/components/Pic";
import { PostCard } from "@/components/PostCard";
import { BottomCta } from "@/components/BottomCta";
import { PinIcon } from "@/components/icons";

// Only the posts in lib/blog-data.ts are built; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function postFromParam(slug: string): BlogPost {
  const post = getBlogPost(slug);
  if (!post) notFound();
  return post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = postFromParam((await params).slug);
  return pageMetadata({ title: post.title, description: post.metaDescription, path: blogPostPath(post.slug) });
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h2") return <h2 className="mt-10 font-display text-2xl font-extrabold text-ink">{block.text}</h2>;
  if (block.type === "list") {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-accent">
        {block.items.map((item) => (
          <li key={item} className="leading-relaxed text-ink-soft">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 text-lg leading-relaxed text-ink-soft">{block.text}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = postFromParam((await params).slug);
  const url = `${SITE_URL}${blogPostPath(post.slug)}`;
  const area = post.area ? areaByKey(post.area) : undefined;
  const service = post.service ? services.find((s) => s.key === post.service) : undefined;
  // Same kind of post (area or service), excluding this one, for "keep reading".
  const more = blogPosts.filter((p) => p.slug !== post.slug && Boolean(p.area) === Boolean(post.area)).slice(0, 3);

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}${PATHS.blog}` },
          { name: post.title, url },
        ])}
      />
      <JsonLd
        data={blogPostingSchema({
          pageUrl: url,
          headline: post.title,
          description: post.metaDescription,
          imageUrl: `${SITE_URL}/photos/${post.photo}.webp`,
          datePublished: post.publishedAt,
          city: area?.city,
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Blog", href: PATHS.blog },
          { name: post.title, href: blogPostPath(post.slug) },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 pb-14 pt-8">
        <Eyebrow>{post.eyebrow}</Eyebrow>
        <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">{post.title}</h1>
        <time dateTime={post.publishedAt} className="mt-3 block text-sm text-ink-soft">
          {formatBlogDate(post.publishedAt)}
        </time>

        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
          <Pic slug={post.photo} hero fill sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
        </div>

        <div className="mt-4">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <BookButton location={`blog_${post.slug}`} />
          <CallButton location={`blog_${post.slug}`} />
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          {area && (
            <Link
              href={area.slug}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-border bg-white px-4 text-sm font-bold text-brand hover:border-accent hover:text-accent-dark"
            >
              <PinIcon className="h-4 w-4 text-accent" />
              Mobile grooming in {area.city} →
            </Link>
          )}
          {service && (
            <Link
              href={servicePath(service.key)}
              className="inline-flex min-h-[44px] items-center rounded-full border border-border bg-white px-4 text-sm font-bold text-brand hover:border-accent hover:text-accent-dark"
            >
              {service.title} →
            </Link>
          )}
          <Link
            href={PATHS.serviceArea}
            className="inline-flex min-h-[44px] items-center rounded-full border border-border bg-white px-4 text-sm font-bold text-brand hover:border-accent hover:text-accent-dark"
          >
            Our service areas →
          </Link>
        </div>
      </article>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Keep Reading</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link href={PATHS.blog} className="inline-flex min-h-[44px] items-center font-bold text-brand hover:underline">
              All posts →
            </Link>
          </p>
        </div>
      </section>

      <BottomCta title={area ? `Book a groom in ${area.city}` : "Book a groom at your door"} location={`blog_bottom_${post.slug}`} />
    </div>
  );
}

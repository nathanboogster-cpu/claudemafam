import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema, blogPostingSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, SITE_URL, blogPath } from "@/lib/site-data";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
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
    description: post.description,
    path: blogPath(post.slug),
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}${blogPath(post.slug)}`;

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          pageUrl: url,
          title: post.title,
          description: post.description,
          datePublished: post.publishedDate,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Blog", url: `${SITE_URL}${PATHS.blog}` },
          { name: post.title, url },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Blog", href: PATHS.blog },
          { name: post.title, href: blogPath(post.slug) },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <Eyebrow>Dog Grooming Tips</Eyebrow>
        <h1 className="mt-1 font-psl-display text-3xl font-bold text-psl-ink sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-psl-ink-soft">
          {formatDate(post.publishedDate)} · {post.readMinutes} min read
        </p>

        <div className="mt-8 space-y-8 text-psl-ink-soft">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-psl-display text-xl font-bold text-psl-ink sm:text-2xl">{section.heading}</h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className={`${section.heading ? "mt-3" : ""} leading-relaxed`}>
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  {section.bullets.map((b, k) => (
                    <li key={k} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-psl-border bg-psl-cream-deep p-8 text-center sm:p-10">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink">Ready to Book a Groom?</h2>
          <p className="mt-2 text-psl-ink-soft">
            Mobile dog grooming brought directly to your home in El Sobrante and the surrounding Bay Area.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="blog_post" variant="primary" />
            <RequestButton location="blog_post" variant="secondary" />
          </div>
        </div>
      </article>
    </>
  );
}

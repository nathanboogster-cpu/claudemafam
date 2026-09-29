import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { PATHS } from "@/lib/site-data";
import { blogPosts, blogPath, getPost, readingTime, relatedPosts, formatDate } from "@/lib/blog-posts";
import { dogPhotos } from "@/lib/dog-photos";
import { JsonLd, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, AnswerBlock } from "@/components/Section";
import { BlogBlocks } from "@/components/BlogProse";
import { BlogCard } from "@/components/BlogCard";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CtaBand } from "@/components/CtaBand";
import { TrustPills } from "@/components/TrustPills";
import { Reveal } from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";

// One layout for every article. The post supplies the words; this file
// supplies the shape: key takeaways first, a contents list, the sections,
// the FAQ (with FAQPage schema), three more posts, and the commercial pages
// the post links up to.
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle,
    titleTemplate: false,
    description: post.metaDescription,
    path: blogPath(post.slug),
    type: "article",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = blogPath(post.slug);
  const photo = dogPhotos[post.photo] ?? dogPhotos[0];
  const more = relatedPosts(post);
  const breadcrumbs = [
    { name: "Home", href: PATHS.home },
    { name: "Blog", href: PATHS.blog },
    { name: post.title, href: path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(post.faqs)} />
      <JsonLd
        data={articleSchema({
          headline: post.title,
          description: post.metaDescription,
          path,
          datePublished: post.publishedAt,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <article>
        <Section className="pt-6 pb-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center lg:gap-14">
            <div className="max-w-3xl">
              <p className="tf-caps text-xs text-tf-brown-dark">
                Blog · {readingTime(post)} · {formatDate(post.publishedAt)}
              </p>
              <h1 className="mt-3 font-tf-display text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-tf-ink sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">{post.intro}</p>
              <TrustPills variant="compact" className="mt-6" />
            </div>
            <Reveal className="tf-reveal-photo hidden lg:block" delay={120}>
              <figure className="m-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="18rem"
                  priority
                  className="aspect-[4/5] h-auto w-full rounded-2xl border border-tf-border object-cover"
                />
                <figcaption className="mt-2 text-xs text-tf-ink-soft">Groomed at {photo.credit}.</figcaption>
              </figure>
            </Reveal>
          </div>
        </Section>

        <Section width="narrow" className="pb-10">
          <AnswerBlock label="Key takeaways">
            <ul className="space-y-2.5 text-base">
              {post.takeaways.map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-tf-brown-dark" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </AnswerBlock>
        </Section>

        <Section width="narrow" className="pb-10">
          <nav aria-labelledby="contents" className="rounded-xl border border-tf-border bg-tf-card p-5">
            <h2 id="contents" className="tf-caps text-xs text-tf-ink">
              In this article
            </h2>
            <ol className="mt-3 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
              {post.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-block py-1 text-tf-ink-soft underline underline-offset-4 hover:text-tf-brown-dark"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Section>

        <Section width="narrow" className="pb-6">
          <div className="space-y-10">
            {post.sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} className="scroll-mt-24">
                <h2 id={`${s.id}-heading`} className="font-tf-display text-2xl font-bold text-tf-ink">
                  {s.heading}
                </h2>
                <div className="mt-4">
                  <BlogBlocks blocks={s.blocks} location={`blog_${post.slug}`} />
                </div>
              </section>
            ))}
          </div>
        </Section>

        <Section width="narrow" className="py-10">
          <FaqBlock items={post.faqs} eyebrow="FAQ" title="Common questions" headingId={`${post.slug}-faq`} />
        </Section>
      </article>

      <Section className="py-12" labelledBy="more-posts">
        <h2 id="more-posts" className="font-tf-display text-xl font-bold text-tf-ink">
          More from the blog
        </h2>
        <ul className="mt-5 grid gap-5 sm:grid-cols-3">
          {more.map((p) => (
            <li key={p.slug}>
              <BlogCard post={p} compact />
            </li>
          ))}
        </ul>
      </Section>

      <Section className="py-6">
        <RelatedLinks title="Go deeper" items={post.related} />
      </Section>

      <Section className="py-12">
        <CtaBand location={`blog_${post.slug}_footer`} title={post.cta.title} body={post.cta.body} />
      </Section>
    </>
  );
}

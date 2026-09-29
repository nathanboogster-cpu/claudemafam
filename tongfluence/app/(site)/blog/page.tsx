import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-posts";
import { resources } from "@/lib/resources-data";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { pageDogPhoto } from "@/lib/dog-photos";

// SEARCH INTENT
//   Primary:          dog grooming marketing blog (hub; mainly navigational)
//   Business purpose: hold the articles that capture the "more appointments"
//                     and "best marketing service" searches, and route each
//                     reader to the commercial page that owns their intent.
export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Marketing Blog",
  description:
    "Short, plain articles on getting more dog grooming appointments: Google profile, ads, referrals, cancellations, mobile grooming, and picking a marketing service.",
  path: PATHS.blog,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Blog", href: PATHS.blog },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Blog"
        title="More dog grooming appointments,"
        accent="one plain answer at a time."
        intro={
          <>
            Short articles on the questions grooming business owners ask us. How to get more appointments.
            What a marketing service should cost. When ads make sense. Written to be used, not scrolled.
          </>
        }
        location="blog_hero"
        image={pageDogPhoto.marketing}
        pills
        secondary={{ href: PATHS.resources, label: "The guides" }}
      />

      <Section className="py-12" labelledBy="posts">
        <SectionHeading eyebrow="All articles" id="posts" title={`${blogPosts.length} articles,`} accent="newest first." />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 3) * 80}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="py-12">
        <RelatedLinks
          title="The longer guides"
          items={[
            ...resources.map((r) => ({ href: resourcePath(r.slug), label: r.navLabel })),
            { href: PATHS.marketing, label: "Dog groomer marketing, explained" },
            { href: PATHS.caseStudies, label: "Seven grooming builds" },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand location="blog_footer" />
      </Section>
    </>
  );
}

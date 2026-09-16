import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath } from "@/lib/site-data";
import { clientBuilds, caseStudyBuilds, buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { BuildTable } from "@/components/BuildTable";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";

// SEARCH INTENT
//   Primary query:    dog grooming marketing case studies / dog groomer SEO
//                     results
//   Intent:           evaluation — a prospect checking whether we have done
//                     this before, for a business like theirs.
//   Business purpose: proof hub. Every commercial page links here, and every
//                     case study links back to the relevant commercial page.
export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Website Case Studies",
  description:
    "Seven real dog grooming businesses and exactly what we built for each: the structural problem, the pages, the profile work, and what we can't yet measure.",
  path: PATHS.caseStudies,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Case Studies", href: PATHS.caseStudies },
];

export default function CaseStudiesPage() {
  const withoutWriteups = clientBuilds.filter((b) => !b.hasCaseStudy);

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Case studies"
        title="Every grooming business we've built for, and exactly what we built."
        intro={
          <>
            These are write-ups of the work, not highlight reels. Each one covers what the business had, what
            was structurally wrong with it, every page and profile change we made, and what we are still
            waiting to be able to measure.
          </>
        }
        location="case_studies_hero"
        secondary={{ href: PATHS.marketing, label: "How the work fits together" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock label="About the numbers on this page">
          <p>
            We publish <strong>what was built</strong> — page counts, structure, and the decisions behind
            them — because that is verifiable by opening the sites. We do not publish rankings, traffic, call
            volume or review growth, because we have not exported and checked a dataset we would stand behind.
            When we have one, it will appear with its metric, its time period and its source. A bare
            &ldquo;+300%&rdquo; is not evidence, and an industry full of them is why this section reads the
            way it does.
          </p>
        </AnswerBlock>
      </Section>

      <Section className="py-12" labelledBy="full-writeups">
        <SectionHeading
          eyebrow="Full write-ups"
          id="full-writeups"
          title="Three builds, in detail"
          intro="Chosen to cover the business types we work with: two mobile operations of very different sizes, and a salon with a geography problem."
        />
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {caseStudyBuilds.map((b) => (
            <li key={b.slug}>
              <CaseStudyCard build={b} location="case_studies_hub" />
            </li>
          ))}
        </ul>
      </Section>

      <Section className="py-12" labelledBy="all-builds">
        <SectionHeading
          eyebrow="Every build"
          id="all-builds"
          title={`All ${buildStats.siteCount} grooming websites, counted`}
          intro="The same five measures across every site we've built, so the comparison is like for like."
        />
        <div className="mt-8">
          <BuildTable />
        </div>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="other-builds">
        <SectionHeading
          eyebrow="Also built"
          id="other-builds"
          title="Builds without a full write-up yet"
          intro="Listed because they are real and they count. Each will get a write-up when there is enough to say about it that is worth your time."
        />
        <ul className="mt-7 space-y-3">
          {withoutWriteups.map((b) => (
            <li key={b.slug} className="rounded-2xl border border-tf-border bg-white p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-tf-display text-base font-bold text-tf-ink">{b.name}</h3>
                <p className="text-xs text-tf-ink-soft">
                  {b.market} · {b.businessType} · {b.pages.total} pages
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{b.problem}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-tf-ink-soft">
          The page-by-page comparison of all {buildStats.siteCount}, including what they have in common, is in{" "}
          <Link
            href={resourcePath("dog-grooming-website-examples")}
            className="font-medium text-tf-brown-dark underline underline-offset-4"
          >
            dog grooming website examples
          </Link>
          .
        </p>
      </Section>

      <Section className="py-12">
        <RelatedLinks
          title="What each of these builds involved"
          items={[
            {
              href: PATHS.websiteDesign,
              label: "Dog grooming website design",
              description: "The page structure every one of these builds uses, and why.",
            },
            {
              href: PATHS.gbp,
              label: "Google Business Profile for dog groomers",
              description: "The profile work that runs alongside each build.",
            },
            {
              href: PATHS.seo,
              label: "Dog groomer SEO",
              description: "How these sites are meant to rank, and what happens after launch.",
            },
            {
              href: PATHS.reviews,
              label: "Review management for dog groomers",
              description: "The review system handed over with every build.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="case_studies_footer"
          title="Want one of these for your grooming business?"
          body="A short call: we look at your Google Business Profile and your current site while you're on the line and tell you what we'd change first."
          secondaryHref={PATHS.marketing}
          secondaryLabel="See what's included"
        />
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath, headlineResult } from "@/lib/site-data";
import { clientBuilds, caseStudyBuilds, buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { BuildTable } from "@/components/BuildTable";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { GbpCallsProof } from "@/components/GbpCallsProof";
import { Testimonials } from "@/components/Testimonials";
import { Reveal } from "@/components/Reveal";

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
    "Seven real dog grooming businesses and exactly what we built for each: the problem, the pages, the profile work, and what we cannot measure yet.",
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
        title="Every grooming business we've built for,"
        accent="and exactly what we built."
        intro={
          <>
            These are write-ups of the work, not highlight reels. Each one covers what the business had,
            what was wrong with it, every page and profile change we made, and what we are still waiting to
            measure.
          </>
        }
        location="case_studies_hero"
        secondary={{ href: PATHS.marketing, label: "How the work fits together" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock label="About the numbers on this page">
          <p>
            We show <strong>what was built</strong>. Page counts, page types, and the reasons behind them.
            You can check all of it by opening the sites.{" "}
            {headlineResult
              ? "The one result here is shown with the Google reports it came from."
              : "We do not show rankings, traffic, call numbers or review growth. We have not checked a set of data we would stand behind. When we have one, it will appear with what was measured, when, and where the number came from."}{" "}
            A bare &ldquo;+300%&rdquo; is not proof. An industry full of them is why this page reads the way
            it does.
          </p>
        </AnswerBlock>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="measured">
        <SectionHeading
          eyebrow="Measured"
          id="measured"
          title="The one performance figure"
          accent="we can show you"
          intro="What the profile work did to one client's calls from Google, with the reports the numbers came from."
        />
        <div className="mt-8">
          <GbpCallsProof location="case_studies_measured" />
        </div>
      </Section>

      <Section className="py-12" labelledBy="testimonials">
        <Reveal>
          <SectionHeading
            eyebrow="What clients say"
            id="testimonials"
            title="In their own words,"
            accent="from their messages."
            intro="Quoted word for word from emails and texts, with the original message under each one."
          />
        </Reveal>
        <div className="mt-8">
          <Testimonials />
        </div>
          <p className="mt-6 text-sm">
            <Link href={PATHS.testimonials} className="font-medium text-tf-brown-dark underline underline-offset-4">
              All testimonials, with the originals
            </Link>
          </p>
      </Section>

      <Section className="py-12" labelledBy="full-writeups">
        <SectionHeading
          eyebrow="Full write-ups"
          id="full-writeups"
          title="Three builds, in detail"
          intro="Picked to cover the kinds of business we work with. Two mobile groomers of very different sizes, and a salon with a location problem."
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
          intro="The same five counts for every site we built, so you can compare them fairly."
        />
        <div className="mt-8">
          <BuildTable />
        </div>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="other-builds">
        <SectionHeading
          eyebrow="Also built"
          id="other-builds"
          title="Sites without a full write-up yet"
          intro="Listed because they are real and they count. Each will get a write-up when there is enough to say that is worth your time."
        />
        <ul className="mt-7 space-y-3">
          {withoutWriteups.map((b) => (
            <li key={b.slug} className="rounded-xl border border-tf-border bg-tf-card p-5">
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
          The page-by-page comparison of all {buildStats.siteCount}, and what they have in common, is in{" "}
          <Link
            href={resourcePath("dog-grooming-website-examples")}
            className="font-medium text-tf-brown-dark underline underline-offset-4"
          >
            the side-by-side comparison
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
              label: "What the website needs",
              description: "The page layout every one of these sites uses, and why.",
            },
            {
              href: PATHS.gbp,
              label: "Your Google Business Profile",
              description: "The profile work that goes with each site.",
            },
            {
              href: PATHS.seo,
              label: "How the SEO works",
              description: "How these sites are meant to rank, and what happens after launch.",
            },
            {
              href: PATHS.reviews,
              label: "Getting more reviews",
              description: "The review system handed over with every site.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="case_studies_footer"
          title="Want one of these for your business?"
          body="A short call. We look at your Google profile and your current site while you are on the line and tell you what we would change first."
          secondaryHref={PATHS.marketing}
          secondaryLabel="See what's included"
        />
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, headlineResult } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { GbpCallsProof } from "@/components/GbpCallsProof";
import { CtaBand } from "@/components/CtaBand";

// SEARCH INTENT
//   Primary:          evaluation / trust. Someone checking whether real
//                     grooming businesses are happy with the work.
//   Business purpose: every client message and the one measured result in one
//                     place, each with its source, then send them to book.
//   Rules:            quotes are word for word with the original screenshot;
//                     no star ratings and no Review/AggregateRating markup.
export const metadata: Metadata = pageMetadata({
  title: "Client Testimonials",
  description:
    "What groomers have said about working with Tongfluence, quoted word for word with the original messages, plus one client's calls before and after.",
  path: PATHS.testimonials,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Testimonials", href: PATHS.testimonials },
];

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Testimonials"
        title="What grooming business owners"
        accent="tell us."
        intro={
          <>
            Quoted word for word from their emails and texts, with each original message shown underneath.
            Nothing is paraphrased; where part of a message was about something unrelated, it is cut and
            marked.
          </>
        }
        location="testimonials_hero"
        secondary={{ href: PATHS.caseStudies, label: "See the case studies" }}
      />

      <Section className="pb-14" labelledBy="client-messages">
        <Reveal>
          <SectionHeading eyebrow="In their own words" id="client-messages" title="Client messages," accent="unprompted." />
        </Reveal>
        <div className="mt-8">
          <Testimonials />
        </div>
      </Section>

      {headlineResult ? (
        <Section width="narrow" className="py-12" labelledBy="measured">
          <Reveal>
            <SectionHeading eyebrow="Measured" id="measured" title="3× more calls from Google," accent="in one month." />
          </Reveal>
          <div className="mt-8">
            <GbpCallsProof location="testimonials_measured" />
          </div>
        </Section>
      ) : null}

      <Section className="py-12">
        <CtaBand
          location="testimonials_footer"
          title="Want to be the next message on this page?"
          body="A short call: we look at your Google profile and your current site while you're on the line and tell you what we'd change first."
        />
      </Section>
    </>
  );
}

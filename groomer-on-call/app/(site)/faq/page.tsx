import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { FaqBlock } from "@/components/FaqBlock";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, market, PATHS, SITE_URL, hoursNote } from "@/lib/site-data";
import { faqGroups, allFaqs } from "@/lib/faq-data";

// The single owner of FAQPage structured data on this site. Every question in
// `allFaqs` is also rendered as visible text below, so the schema and the page
// can never disagree.

export const metadata: Metadata = pageMetadata({
  title: "Mobile Pet Grooming FAQ",
  description:
    `Answers to the questions people ask before booking a mobile groomer in the ${market.cityState} area — how it works, what's included, and where we go. ` +
    `Call ${business.phoneDisplay}.`,
  path: PATHS.faq,
});

const crumbs = [
  { name: "Home", href: PATHS.home },
  { name: "FAQ", href: PATHS.faq },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))}
      />
      <JsonLd data={faqSchema(allFaqs)} />
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-goc-cream">
        <div className="goc-blob -left-20 -top-16 h-72 w-72 bg-goc-magenta/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:py-18">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <h1 className="mt-3 font-goc-display text-4xl font-extrabold leading-[1.06] text-goc-ink sm:text-5xl">
            Mobile Pet Grooming, Answered
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-goc-ink-soft">
            Everything people usually want to know before booking a groomer who comes to them. If yours isn&rsquo;t
            here, call and ask — it&rsquo;s a quicker answer than reading.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton location="faq_hero" label="Call To Book" />
            <SecondaryLinkButton href={PATHS.services} label="View Services" />
          </div>
          <p className="mt-4 text-sm font-semibold text-goc-ink-soft">
            {business.phoneDisplay} · {hoursNote}
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-14">
          {faqGroups.map((group) => (
            <div key={group.heading}>
              <h2 className="font-goc-display text-2xl font-extrabold text-goc-ink sm:text-3xl">{group.heading}</h2>
              <div className="mt-6">
                <FaqBlock faqs={group.faqs} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand location="faq_footer" heading="Still Not Sure?" secondary={{ href: PATHS.contact, label: "Contact" }} />
    </>
  );
}

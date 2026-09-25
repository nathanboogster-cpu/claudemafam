import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, offer, objections, faqs, business } from "@/lib/site-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CheckIcon } from "@/components/icons";

// SEARCH INTENT
//   Primary:          navigational / transactional. This is the single
//                     dominant conversion action for the whole site; every
//                     "Book a call" CTA lands here.
//   Business purpose: convert. Also handles the last objections, because the
//                     people who reach this page and don't submit are the most
//                     expensive visitors on the site.
export const metadata: Metadata = pageMetadata({
  title: "Book a Call",
  description:
    "A short call: we look at your Google Business Profile and your current site while you're on the line and tell you what we'd change first. $297/month.",
  path: PATHS.book,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Book a Call", href: PATHS.book },
];

// The four FAQ entries that matter at the point of decision. Pulled from the
// shared list so they can never drift from the answers given elsewhere.
const decisionQuestions = ["Is there a contract?", "What happens if I cancel?", "What exactly do you do every month?", "Do I own my website?"];
const bookingFaqs = faqs.filter((f) => decisionQuestions.includes(f.question));

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(bookingFaqs)} />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <Section className="pt-6 pb-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <div>
            <p className="tf-caps text-xs text-tf-brown-dark">
              Book a call
            </p>
            <h1 className="mt-3 font-tf-display text-3xl font-bold leading-[1.12] text-tf-ink sm:text-4xl">
              Fifteen minutes on your Google presence.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">
              We open your Google Business Profile and your current website while you&rsquo;re on the line and
              tell you what we&rsquo;d change, in order. If the honest answer is that you don&rsquo;t need us,
              that&rsquo;s the answer you&rsquo;ll get.
            </p>

            <h2 className="mt-9 font-tf-display text-lg font-bold text-tf-ink">What the call is</h2>
            <ul className="mt-4 space-y-3">
              {[
                "A look at your Google Business Profile: category, services, service areas, photos, reviews.",
                "A look at your current website, if you have one — what's missing structurally, not what it looks like.",
                "What we'd do first, second and third, and roughly what to expect from each.",
                "A straight answer on whether this is worth $297 a month for your business.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-tf-ink-soft">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-tf-brown-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-tf-display text-lg font-bold text-tf-ink">What it isn&rsquo;t</h2>
            <p className="mt-3 text-sm leading-relaxed text-tf-ink-soft">
              No slide deck, no six-month proposal, no pressure to decide on the call. You can take the list
              of things we&rsquo;d change and do them yourself — everything we&rsquo;d tell you is already
              written up in{" "}
              <Link
                href="/resources/how-to-rank-dog-grooming-business-on-google"
                className="font-medium text-tf-brown-dark underline underline-offset-4"
              >
                our guide to ranking a grooming business on Google
              </Link>
              .
            </p>

            <div className="mt-8 rounded-xl border border-tf-border bg-tf-paper-deep p-5">
              <p className="text-sm leading-relaxed text-tf-ink">
                <span className="font-semibold">{offer.priceLine}</span> — {offer.commitment} We currently work
                with {buildStats.siteCount} grooming businesses across {buildStats.stateCount} states.
              </p>
              {business.publicContactEmail ? (
                <p className="mt-3 text-sm leading-relaxed text-tf-ink-soft">
                  Prefer email? Write to{" "}
                  <a
                    href={`mailto:${business.publicContactEmail}`}
                    className="font-medium text-tf-brown-dark underline underline-offset-4"
                  >
                    {business.publicContactEmail}
                  </a>
                  .
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <LeadForm />
          </div>
        </div>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="what-you-get">
        <SectionHeading
          eyebrow="What you'd be signing up for"
          id="what-you-get"
          title="The whole offer, on one screen"
        />
        <PricingCard location="book" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12" labelledBy="last-objections">
        <SectionHeading
          eyebrow="Before you decide"
          id="last-objections"
          title="The questions people ask on the call"
        />
        <dl className="mt-8 space-y-6">
          {objections.map((o) => (
            <div key={o.question} className="border-l-2 border-tf-brown/40 pl-5">
              <dt className="font-tf-display text-lg font-bold text-tf-ink">{o.question}</dt>
              <dd className="mt-2 text-base leading-relaxed text-tf-ink-soft">{o.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section width="narrow" className="py-12 pb-16">
        <FaqBlock
          items={bookingFaqs}
          eyebrow="The fine print"
          title="Contract, cancellation and ownership"
          headingId="booking-faq"
          intro={
            <>
              The rest of the questions are answered on{" "}
              <Link href={PATHS.home} className="font-medium text-tf-brown-dark underline underline-offset-4">
                the homepage FAQ
              </Link>
              .
            </>
          }
        />
      </Section>
    </>
  );
}

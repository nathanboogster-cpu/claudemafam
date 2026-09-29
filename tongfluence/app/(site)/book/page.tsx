import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, faqs, business, preCallVideos } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { LeadForm } from "@/components/LeadForm";
import { TrustPills } from "@/components/TrustPills";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

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
    "A short call. We look at your Google profile and your current site while you are on the line and tell you what we would change first. $297 a month.",
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
            <Eyebrow>Book a call</Eyebrow>
            <h1 className="mt-4 font-tf-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-tf-ink sm:text-5xl">
              Fifteen minutes on <span className="tf-accent">your Google presence.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">
              We open your Google profile and your current website while you are on the line. We tell you
              what we would change, in order. If the honest answer is that you do not need us, that is the
              answer you will get.
            </p>
            <TrustPills variant="compact" className="mt-6" />

            <h2 className="mt-9 font-tf-display text-lg font-bold text-tf-ink">What the call is</h2>
            <ul className="mt-4 space-y-3">
              {[
                "A look at your Google profile: category, services, service areas, photos, reviews.",
                "A look at your current website, if you have one. What pages are missing, not what it looks like.",
                "What we would do first, second and third, and about what to expect from each.",
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
              No slide deck. No pressure to decide on the call. You can take the list and do it yourself with{" "}
              <Link
                href="/resources/how-to-rank-dog-grooming-business-on-google"
                className="font-medium text-tf-brown-dark underline underline-offset-4"
              >
                our guide
              </Link>
              .
            </p>

            <div className="mt-8">
              {business.publicContactEmail ? (
                <p className="text-sm leading-relaxed text-tf-ink-soft">
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
          title="What groomers say before the call,"
          accent="answered on video."
          intro="Each answer is under a minute. Tap one to watch it."
        />
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {preCallVideos
            .filter((v) => v.question)
            .map((v) => (
              <li key={v.wistiaMediaId}>
                <Link
                  href={`${PATHS.faq}#video-answers`}
                  className="tf-lift group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-tf-border bg-tf-card px-4 py-2 text-sm font-semibold text-tf-ink hover:border-tf-brown hover:bg-tf-brown-wash"
                >
                  “{v.question}”
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-tf-brown-dark transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <Section width="narrow" className="py-12 pb-16">
        <FaqBlock
          items={bookingFaqs}
          eyebrow="The fine print"
          title="Contract, cancelling,"
          accent="and what you own"
          headingId="booking-faq"
          intro={
            <>
              Everything else is answered on{" "}
              <Link href={PATHS.faq} className="font-medium text-tf-brown-dark underline underline-offset-4">
                the FAQ page
              </Link>
              .
            </>
          }
        />
      </Section>
    </>
  );
}

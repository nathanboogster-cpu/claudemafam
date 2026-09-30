import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, faqs, business, preCallVideos, explainerVideo, headlineResult } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema, faqSchema, videoSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { BookingCalendar } from "@/components/BookingCalendar";
import { ExplainerVideo } from "@/components/ExplainerVideo";
import { TrustPills } from "@/components/TrustPills";
import { GbpCallsProof } from "@/components/GbpCallsProof";
import { Testimonials } from "@/components/Testimonials";
import { ProofStrip } from "@/components/ProofStrip";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { Reveal } from "@/components/Reveal";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

// SEARCH INTENT
//   Primary:          navigational / transactional. This is the single
//                     dominant conversion action for the whole site; every
//                     "Book a call" CTA lands here.
//   Business purpose: convert. The order is deliberate: the walkthrough
//                     video first, the calendar directly under it, then the
//                     proof for anyone who is still deciding, then the last
//                     objections and the fine print.
export const metadata: Metadata = pageMetadata({
  title: "Book a Call",
  description:
    "Pick a time for a short call. We look at your Google profile and your current site while you are on the line and tell you what we would change first.",
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

const whatTheCallIs = [
  "Your Google profile: category, services, service areas, photos, reviews.",
  "Your current website, if you have one. What pages are missing.",
  "What we would do first, second and third.",
  "A straight answer on whether this is worth $297 a month for you.",
];

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(bookingFaqs)} />
      <JsonLd
        data={videoSchema({
          name: explainerVideo.title,
          description: explainerVideo.description,
          thumbnailUrl: explainerVideo.swatchUrl,
          uploadDate: explainerVideo.uploadDate,
          duration: explainerVideo.durationIso,
          embedUrl: explainerVideo.embedUrl,
          pagePath: PATHS.book,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      {/* ---------------------------------------------------------------- */}
      {/* 1. THE VIDEO — first thing on the page.                          */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="pt-6 pb-8">
        <div className="text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Book a call</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mx-auto mt-4 max-w-3xl font-tf-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-tf-ink sm:text-5xl">
              Watch this first. <span className="tf-accent">Then pick a time.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-tf-ink-soft sm:text-lg">
              {explainerVideo.durationLabel} on exactly what we do for a grooming business, start to finish.
              The calendar is right under it.
            </p>
          </Reveal>
        </div>
        <Reveal className="tf-reveal-photo mt-8" delay={180}>
          <ExplainerVideo location="book_hero" />
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. THE CALENDAR — directly under the video.                      */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="pb-14" labelledBy="pick-a-time">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="pick-a-time" className="font-tf-display text-2xl font-bold text-tf-ink">
              Fifteen minutes on <span className="tf-accent">your Google presence.</span>
            </h2>
            <p className="mt-1 text-sm text-tf-ink-soft">
              No slide deck. No pressure to decide on the call. If you do not need us, we will say so.
            </p>
          </div>
          <TrustPills variant="compact" animate={false} />
        </div>
        <BookingCalendar />
        <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {whatTheCallIs.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-tf-ink-soft">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-tf-brown-dark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {business.publicContactEmail ? (
          <p className="mt-4 text-sm text-tf-ink-soft">
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
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 3. SOCIAL PROOF — the measured result, the clients, the builds.  */}
      {/* ---------------------------------------------------------------- */}
      {headlineResult ? (
        <Section width="narrow" className="py-14" labelledBy="measured" band>
          <Reveal>
            <SectionHeading eyebrow="Measured" id="measured" title="3× more calls from Google," accent="in one month." />
          </Reveal>
          <div className="mt-8">
            <GbpCallsProof location="book_proof" />
          </div>
        </Section>
      ) : null}

      <Section className="py-14" labelledBy="testimonials">
        <Reveal>
          <SectionHeading
            eyebrow="What clients say"
            id="testimonials"
            title="In their own words,"
            accent="from their messages."
            intro="Word for word, from their emails and texts."
          />
        </Reveal>
        <div className="mt-8">
          <Testimonials />
        </div>
        <p className="mt-6 text-sm">
          <Link href={PATHS.testimonials} className="inline-block py-2 font-medium text-tf-brown-dark underline underline-offset-4">
            All testimonials, with the originals
          </Link>
        </p>
      </Section>

      <Section className="pb-14">
        <ProofStrip />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 4. LAST OBJECTIONS, THE OFFER, THE FINE PRINT                     */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="last-objections" band>
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
                  className="tf-lift group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-tf-border bg-white px-4 py-2 text-sm font-semibold text-tf-ink hover:border-tf-brown hover:bg-tf-brown-wash"
                >
                  “{v.question}”
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-tf-brown-dark transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="what-you-get">
        <SectionHeading
          eyebrow="What you'd be signing up for"
          id="what-you-get"
          title="The whole offer, on one screen"
        />
        <PricingCard location="book" className="mt-8" />
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

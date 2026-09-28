import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqBlock } from "@/components/FaqBlock";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, cancellationPolicy, bathAndTidy, fullGroom, durationNote, dematting, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Bark and Bork Mobile Pet Spa: service area, booking, pricing by size, hours, and cancellation policy.",
  path: PATHS.faq,
});

// Only questions answerable from verified business information — see
// lib/site-data.ts. Nothing here is invented.
const faqs = [
  {
    question: "What areas do you service?",
    answer: `We're based in ${business.homeBase} and serve pet owners throughout ${business.broadMarket}. See our Service Areas page for specific cities.`,
  },
  {
    question: "Are you mobile? Do you have a walk-in salon?",
    answer:
      "We're entirely mobile — we don't have a walk-in salon. Every grooming appointment happens at your own home, wherever you are in our service area.",
  },
  {
    question: "How do I book?",
    answer: `Choose your service and book online at ${business.bookingUrl}, or call ${business.phoneDisplay}.`,
  },
  {
    question: "What is included in a Full Groom?",
    answer: `A Full Groom includes ${fullGroom.includes.join(", ").toLowerCase()}. Full Groom starts at ${fullGroom.pricing.small.price} for small dogs.`,
  },
  {
    question: "What is included in Bath & Tidy?",
    answer: `Bath & Tidy includes ${bathAndTidy.includes.join(", ").toLowerCase()} — no haircut. Bath & Tidy starts at ${bathAndTidy.pricing.small.price} for small dogs.`,
  },
  {
    question: "What size category is my dog?",
    answer:
      "Small is 20 lbs or less, Medium is 40 lbs or less, Large is 60 lbs or less, and Extra Large is over 60 lbs.",
  },
  {
    question: "Do you groom dogs over 60 pounds?",
    answer: `Yes — extra-large dogs (over 60 lbs) are welcome. Full Groom starts at ${fullGroom.pricing.xlarge.price} and Bath & Tidy starts at ${bathAndTidy.pricing.xlarge.price} for extra-large dogs.`,
  },
  {
    question: "How long does grooming take?",
    answer: `Bath & Tidy runs from about ${bathAndTidy.pricing.small.duration} for small dogs up to ${bathAndTidy.pricing.xlarge.duration} for extra-large dogs. Full Groom runs from about ${fullGroom.pricing.small.duration} for small dogs up to ${fullGroom.pricing.xlarge.duration} for extra-large dogs. ${durationNote}`,
  },
  {
    question: "Do you offer deshedding?",
    answer:
      "Yes — a deshedding treatment ($15, about 30 minutes) is available as an add-on, particularly useful for huskies, German Shepherds, and other heavy-shedding breeds.",
  },
  {
    question: "What happens if my dog is severely matted?",
    answer: dematting.note,
  },
  {
    question: "Do you treat fleas and ticks?",
    answer:
      "Yes — flea & tick treatment ($15, about 15 minutes) includes flea and tick shampoo, thorough rinsing, and careful combing during grooming. This addresses active fleas and ticks found during the visit; it doesn't guarantee complete elimination or provide ongoing prevention. Talk to your veterinarian for long-term prevention.",
  },
  {
    question: "What is your cancellation policy?",
    answer: cancellationPolicy,
  },
  {
    question: "What are your hours?",
    answer: "We're open 7 days a week, 9:00 AM to 7:00 PM.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "FAQ", url: `${SITE_URL}${PATHS.faq}` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "FAQ", href: PATHS.faq }]} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Frequently Asked Questions</h1>
        </div>

        <div className="mt-10">
          <FaqBlock items={faqs} title="" eyebrow="" />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-bb-ink-soft">Still have a question?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <BookButton location="faq_page" variant="primary" />
            <SecondaryLinkButton location="faq_page" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
      </section>
    </>
  );
}

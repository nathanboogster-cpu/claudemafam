import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqBlock } from "@/components/FaqBlock";
import { CallButton, ReserveButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import {
  business,
  hoursNote,
  temperamentTest,
  vaccinationRequirements,
  boardingPricing,
  daycarePricing,
  PATHS,
  SITE_URL,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Bow Wags dog daycare, boarding, and grooming in Marietta, GA: requirements, pricing, hours, and how to book.",
  path: PATHS.faq,
});

const faqs = [
  {
    question: "What is Bow Wags?",
    answer:
      "Bow Wags is a dog daycare, boarding, and full-service grooming facility in Marietta, GA, serving West Cobb and Cobb County.",
  },
  {
    question: "Where is Bow Wags located?",
    answer: `${business.addressFull}.`,
  },
  {
    question: "What are Bow Wags' hours?",
    answer: hoursNote,
  },
  {
    question: "Do I need to do anything before my dog's first visit?",
    answer: `Yes — a 4-hour temperament test (${temperamentTest.price}) is required before daycare or boarding, along with current ${vaccinationRequirements.join(", ")} vaccinations. Call ${business.phoneDisplay} to schedule.`,
  },
  {
    question: "How much does daycare cost?",
    answer: `A half day (up to 6 hours) is currently ${daycarePricing.halfDay.price} and a full day (over 6 hours) is currently ${daycarePricing.fullDay.price}, with multi-visit packages available. ${daycarePricing.siblingDiscount}`,
  },
  {
    question: "How much does boarding cost?",
    answer: `Nights 1–5 are currently ${boardingPricing.tiers[0].price}/night, nights 6–10 are ${boardingPricing.tiers[1].price}/night, and nights 11+ are ${boardingPricing.tiers[2].price}/night. ${boardingPricing.multiDogNote}`,
  },
  {
    question: "Is daycare included with boarding?",
    answer: boardingPricing.daycareIncludedNote,
  },
  {
    question: "Are boarding dogs kept in cages?",
    answer: "No — boarding dogs sleep in private indoor wooden suites divided by picket-style fencing, not traditional cages.",
  },
  {
    question: "Can I bring my dog's own food for boarding?",
    answer: `Yes, and it's encouraged for dietary consistency. If you'd like Bow Wags to feed the house food instead, that's ${boardingPricing.houseFoodFee}`,
  },
  {
    question: "What happens if I'm late picking up my dog on checkout day?",
    answer: `Campers picked up after 2 PM on checkout day incur a ${boardingPricing.latePickupFee}`,
  },
  {
    question: "How much does grooming cost?",
    answer: `Bow Wags doesn't publish fixed grooming prices online since it depends on breed, size, and coat. Call ${business.phoneDisplay} for current rates and appointments.`,
  },
  {
    question: "How do I make a reservation?",
    answer: `Call ${business.phoneDisplay} to reserve daycare or boarding, or to schedule a temperament test. Grooming is booked separately by phone.`,
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
          <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">Frequently Asked Questions</h1>
        </div>

        <div className="mt-10">
          <FaqBlock items={faqs} title="" eyebrow="" />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-bw-ink-soft">Still have a question?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton location="faq_page" variant="primary" />
            <ReserveButton location="faq_page" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}

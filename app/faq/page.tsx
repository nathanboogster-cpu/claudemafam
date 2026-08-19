import type { Metadata } from "next";
import Link from "next/link";
import { PATHS, SITE_URL, serviceAreas, serviceAreaGeneral, dogPricing } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

const pageUrl = `${SITE_URL}${PATHS.faq}`;

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Pampered Puppies Grooming, Victorville CA",
  description:
    "Answers to common questions about dog & cat grooming pricing, aggressive/anxious dogs, mobile grooming areas, and appointments at Pampered Puppies in Victorville, CA.",
  alternates: { canonical: PATHS.faq },
};

// Only verified facts are answered here (per the client handoff §4). Cancellation,
// deposit, no-show, and vaccination policy questions are intentionally left out —
// none of those policies have been confirmed with the client.
const faqs = [
  {
    question: "Do you groom aggressive or anxious dogs?",
    answer:
      "Yes. Aggressive or anxious animals are welcome with advance phone notice so our staff can prepare and give your pet the extra time and patience they need.",
  },
  {
    question: "How much does dog grooming cost?",
    answer: `Dog grooming starts at ${dogPricing.small} for small dogs and ${dogPricing.large} for large dogs. ${dogPricing.note}`,
  },
  {
    question: "How much does cat grooming cost?",
    answer:
      "Cat grooming pricing is provided after a quick consultation, since needs vary a lot by coat and temperament.",
  },
  {
    question: "Do you offer mobile grooming?",
    answer: `Yes — "Pampered Puppies At Your Door" is our mobile grooming service, serving ${serviceAreas.join(", ")}, and ${serviceAreaGeneral}.`,
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Same-day appointments are sometimes available — call us at 760-881-3171 to check current availability.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "FAQ", href: PATHS.faq }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "FAQ", url: pageUrl },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl text-center">
          Frequently Asked Questions
        </h1>

        <dl className="mt-8 space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <dt className="font-display text-lg font-bold text-ink">{item.question}</dt>
              <dd className="mt-2 text-ink-soft leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Have a different question? See our{" "}
          <Link href={PATHS.contact} className="font-semibold text-terracotta-dark hover:underline">
            Contact page
          </Link>{" "}
          or give us a call.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          <CallButton location="faq_bottom" label="Call Now" />
          <BookButton location="faq_bottom" />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link href={PATHS.dog} className="font-semibold text-terracotta-dark hover:underline">
            Dog Grooming
          </Link>
          <Link href={PATHS.cat} className="font-semibold text-terracotta-dark hover:underline">
            Cat Grooming
          </Link>
          <Link href={PATHS.mobile} className="font-semibold text-terracotta-dark hover:underline">
            Mobile Grooming
          </Link>
          <Link href={PATHS.puppy} className="font-semibold text-terracotta-dark hover:underline">
            Puppy Grooming
          </Link>
          <Link href={PATHS.anxious} className="font-semibold text-terracotta-dark hover:underline">
            Anxious &amp; Senior Dogs
          </Link>
          <Link href={PATHS.contact} className="font-semibold text-terracotta-dark hover:underline">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

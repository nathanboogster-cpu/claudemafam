import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqBlock } from "@/components/FaqBlock";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Flo's Happy Clipper: location, scheduling, hours, and what dogs we groom.",
  path: PATHS.faq,
});

// Only questions we can answer from verified business information — see
// lib/site-data.ts. Questions about payment methods, exact grooming
// duration, parking, or drop-off policy are intentionally omitted rather
// than answered with an invented policy.
const faqs = [
  {
    question: "Where is Flo's Happy Clipper located?",
    answer: `Our salon is at ${business.addressFull}, right on Main St.`,
  },
  {
    question: "Do you serve pet owners outside Eatontown?",
    answer:
      "Yes. While our salon is physically located in Eatontown, we welcome pet owners from any town within about a 20-minute drive, including Tinton Falls, Oceanport, West Long Branch, Long Branch, Shrewsbury, Red Bank, Little Silver, and Monmouth Beach.",
  },
  {
    question: "Do you groom dogs?",
    answer:
      "Yes — full-service dog grooming, including bathing, brushing, breed-appropriate haircuts, nail trimming, and ear cleaning, is our primary service.",
  },
  {
    question: "How do I schedule a grooming appointment?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule. We don't currently offer online booking.`,
  },
  {
    question: "What are your hours?",
    answer: "Tuesday through Saturday, 9:00 AM–5:00 PM. Closed Sunday and Monday.",
  },
  {
    question: "Do you groom large dog breeds?",
    answer:
      "Yes — we regularly groom large-breed and double-coated dogs, and pet owners often mention how comfortable their dogs are with our groomers.",
  },
  {
    question: "Do you groom nervous or first-time dogs?",
    answer:
      "Yes — many customers specifically mention how comfortable their nervous or first-time dogs are with our grooming. Call ahead to let us know about any special handling your dog needs.",
  },
  {
    question: "Is Flo's Happy Clipper a new business or an established groomer?",
    answer: "Flo's Happy Clipper is a long-established, independently owned grooming salon in Eatontown.",
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
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="mt-10">
          <FaqBlock items={faqs} title="" eyebrow="" />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-fh-ink-soft">Still have a question?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton location="faq_page" variant="primary" />
            <SecondaryLinkButton location="faq_page" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
      </section>
    </>
  );
}

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
    "Answers to common questions about Sittin' Pretty Pet Grooming: location, service area, scheduling, hours, and what pets we groom.",
  path: PATHS.faq,
});

// Only questions we can answer from verified business information — see
// lib/site-data.ts. Questions about payment methods, exact grooming
// duration, or drop-off policy are intentionally omitted rather than
// answered with an invented policy.
const faqs = [
  {
    question: "Where is Sittin' Pretty Pet Grooming located?",
    answer: `Our salon is at ${business.addressFull}, in Funkstown, just a few minutes from downtown Hagerstown.`,
  },
  {
    question: "Do you serve Hagerstown, MD?",
    answer:
      "Yes. While our salon is physically located in nearby Funkstown, we serve pet owners throughout the greater Hagerstown area.",
  },
  {
    question: "Do you groom dogs?",
    answer: "Yes — full-service dog grooming, including bathing, brushing, and breed-appropriate haircuts, is our primary service.",
  },
  {
    question: "Do you groom cats?",
    answer: "Yes, cat grooming is available at our Funkstown salon in addition to dog grooming.",
  },
  {
    question: "How do I schedule a grooming appointment?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule. We don't currently offer online booking.`,
  },
  {
    question: "What are your hours?",
    answer: "Tuesday–Friday 8:00 AM–4:00 PM, Saturday 8:00 AM–2:00 PM. Closed Sunday and Monday.",
  },
  {
    question: "Do you groom large dog breeds?",
    answer:
      "Yes — we regularly groom large-breed dogs, and pet owners often mention how comfortable their large dogs are with our groomers.",
  },
  {
    question: "Is Sittin' Pretty a new business or an established groomer?",
    answer:
      "Sittin' Pretty is an established local grooming salon that has been serving the Funkstown and Hagerstown area for decades.",
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
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="mt-10">
          <FaqBlock items={faqs} title="" eyebrow="" />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sp-ink-soft">Still have a question?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton location="faq_page" variant="primary" />
            <SecondaryLinkButton location="faq_page" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
      </section>
    </>
  );
}

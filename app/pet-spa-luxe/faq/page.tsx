import type { Metadata } from "next";
import { Eyebrow } from "@/components/psl/Eyebrow";
import { Breadcrumbs } from "@/components/psl/Breadcrumbs";
import { FaqBlock } from "@/components/psl/FaqBlock";
import { CallButton, RequestButton } from "@/components/psl/CTAButton";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/psl/schema";
import { business, PATHS, SITE_URL } from "@/lib/psl/site-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Pet Spa Luxe's mobile dog grooming: service areas, booking, what's included, and how mobile grooming works.",
  alternates: { canonical: PATHS.faq },
};

const faqs = [
  {
    question: "What is Pet Spa Luxe?",
    answer:
      "Pet Spa Luxe is a mobile dog grooming business based in El Sobrante, CA. Instead of visiting a salon, your dog is groomed at your home in a fully equipped mobile grooming setup.",
  },
  {
    question: "What areas does Pet Spa Luxe serve?",
    answer:
      "Pet Spa Luxe is based in El Sobrante, CA and offers mobile grooming throughout the surrounding Bay Area. Call to confirm availability at your specific address.",
  },
  {
    question: "How do I book an appointment?",
    answer: `Pet Spa Luxe doesn't use an online booking system. Call ${business.phoneDisplay} to check availability and schedule your dog's appointment.`,
  },
  {
    question: "Is the grooming environment cage-free?",
    answer:
      "Yes — every appointment is cage-free, with one-on-one attention for your dog throughout the visit.",
  },
  {
    question: "What services does Pet Spa Luxe offer?",
    answer:
      "Mobile dog grooming, warm-water baths, full grooming, breed-specific haircuts, deshedding, nail trimming, nail grinding, ear cleaning, and hand blow drying.",
  },
  {
    question: "Do you groom cats?",
    answer:
      "Pet Spa Luxe's verified services are for dogs. If you have a cat, call to ask directly about availability.",
  },
  {
    question: "What products are used?",
    answer: "Warm-water baths use premium shampoos and conditioners.",
  },
  {
    question: "Can I book nail trimming or ear cleaning without a full groom?",
    answer:
      "Yes — nail trimming, nail grinding, and ear cleaning can be booked as a standalone visit or added to a full groom.",
  },
  {
    question: "What are Pet Spa Luxe's hours?",
    answer: "Hours are confirmed by phone — call to check current availability.",
  },
  {
    question: "How is Pet Spa Luxe rated?",
    answer: `Pet Spa Luxe has a ${business.yelpRating}-star rating on Yelp. Read verified reviews at the Pet Spa Luxe Yelp listing.`,
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
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="mt-10">
          <FaqBlock items={faqs} title="" eyebrow="" />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-psl-ink-soft">Still have a question?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton location="faq_page" variant="primary" />
            <RequestButton location="faq_page" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}

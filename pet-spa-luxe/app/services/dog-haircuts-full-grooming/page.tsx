import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";
import { business, servicePath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("dog-haircuts-full-grooming")}`;
const description =
  "Complete mobile dog grooming with professional, breed-specific haircuts, delivered at your home in El Sobrante, CA.";

export const metadata: Metadata = {
  title: "Dog Haircuts & Full Grooming | Mobile Service",
  description,
  alternates: { canonical: servicePath("dog-haircuts-full-grooming") },
};

const included = [
  "Complete grooming service for dogs",
  "Professional haircuts, including breed-specific styling",
  "Warm-water bath before the cut",
  "Hand blow drying",
  "One-on-one attention throughout",
];

const faqs = [
  {
    question: "Do you do breed-specific haircuts?",
    answer:
      "Yes — Pet Spa Luxe offers professional dog haircuts, including breed-specific styling, as part of a full groom.",
  },
  {
    question: "Is a bath included with a full groom?",
    answer:
      "Full grooming includes a warm-water bath with premium shampoo and conditioner before your dog's haircut.",
  },
  {
    question: "How long does a full groom take?",
    answer:
      "Appointment length depends on your dog's size, coat, and the haircut requested. Call to discuss your dog's specific needs before booking.",
  },
];

export default function HaircutsPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Haircuts & Full Grooming", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Dog Haircuts & Full Grooming", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Dog Haircuts & Full Grooming", href: servicePath("dog-haircuts-full-grooming") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Full Grooming</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Dog Haircuts & Full Grooming
          </h1>
          <p className="mt-4 text-lg text-psl-ink-soft">
            A complete groom finished with a professional, breed-specific haircut
            — bathed, cut, and dried at your home, with one-on-one attention from
            start to finish.
          </p>
          <ul className="mt-6 space-y-2">
            {included.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-psl-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-psl-pink-dark" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_haircuts" variant="primary" />
            <RequestButton location="service_haircuts" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.huskyGroomed.alt} src={photos.huskyGroomed.src} aspect="video" className="w-full" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">Related Services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("mobile-dog-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Mobile Dog Grooming
          </Link>
          <Link href={servicePath("bath-deshedding")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Warm Water Bath & Deshedding
          </Link>
          <Link href={servicePath("nail-ear-care")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Nail Care & Ear Cleaning
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-psl-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-psl-display text-3xl font-bold">Book a Full Groom</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule your dog&apos;s haircut & full grooming appointment.</p>
          <CallButton location="service_haircuts_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

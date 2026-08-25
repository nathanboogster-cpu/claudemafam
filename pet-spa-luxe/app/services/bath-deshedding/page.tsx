import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, servicePath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("bath-deshedding")}`;
const description =
  "Warm-water dog bathing with premium shampoo and conditioner, plus deshedding treatments to clear loose coat — delivered at your home in El Sobrante, CA.";

export const metadata: Metadata = pageMetadata({
  title: "Warm Water Bath & Deshedding for Dogs",
  description,
  path: servicePath("bath-deshedding"),
});

const included = [
  "Warm-water bathing",
  "Premium shampoos & conditioners",
  "Deshedding treatment to remove excess, loose coat",
  "Hand blow drying",
];

const faqs = [
  {
    question: "What products are used for the bath?",
    answer: "Pet Spa Luxe uses premium shampoos and conditioners as part of every warm-water bath.",
  },
  {
    question: "What does a deshedding treatment do?",
    answer:
      "Deshedding removes excess, loose coat that regular brushing at home doesn't fully clear — useful for dogs that shed heavily.",
  },
  {
    question: "Can I book a bath without a full haircut?",
    answer:
      "Yes — a warm-water bath and deshedding treatment can be booked on its own or added to a full grooming appointment. Call to discuss what your dog needs.",
  },
];

export default function BathDesheddingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Warm Water Bath & Deshedding", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Bath & Deshedding", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Bath & Deshedding", href: servicePath("bath-deshedding") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Bath & Coat Care</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Warm Water Bath & Deshedding
          </h1>
          <p className="mt-4 text-lg text-psl-ink-soft">
            A relaxing warm-water bath with premium shampoo and conditioner,
            paired with a deshedding treatment to clear loose coat — right at
            your home.
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
            <CallButton location="service_bath" variant="primary" />
            <RequestButton location="service_bath" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.poodleDoorway.alt} src={photos.poodleDoorway.src} aspect="video" className="w-full" priority />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">Related Services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("mobile-dog-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Mobile Dog Grooming
          </Link>
          <Link href={servicePath("dog-haircuts-full-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Dog Haircuts & Full Grooming
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
          <h2 className="font-psl-display text-3xl font-bold">Book a Bath & Deshedding Visit</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_bath_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

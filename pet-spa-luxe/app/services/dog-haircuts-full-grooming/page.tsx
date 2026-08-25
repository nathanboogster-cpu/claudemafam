import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";
import { business, servicePath, photos, fullGroomingPackage, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("dog-haircuts-full-grooming")}`;
const description =
  "Full Dog Grooming — $110, all-inclusive. Warm bath, breed-specific haircut, nail trim, deshedding, and more, delivered at your home in El Sobrante, CA.";

export const metadata: Metadata = {
  title: "Full Dog Grooming — $110 All-Inclusive | Mobile Service",
  description,
  alternates: { canonical: servicePath("dog-haircuts-full-grooming") },
};

const faqs = [
  {
    question: "How much does Full Dog Grooming cost?",
    answer: `Full Dog Grooming is ${fullGroomingPackage.price}, all-inclusive — see the full list of what's included on this page.`,
  },
  {
    question: "Do you do breed-specific haircuts?",
    answer:
      "Yes — the Full Dog Grooming package includes a full haircut, styled or breed-specific, as part of the $110 price.",
  },
  {
    question: "Are anal gland expression, ear hair removal, and custom perfume included in the $110?",
    answer:
      "Those three are performed upon request as part of the same appointment — just let your groomer know when scheduling or on arrival.",
  },
  {
    question: "How long does a full groom take?",
    answer:
      "Appointment length depends on your dog's size, coat, and the haircut requested. Call to discuss your dog's specific needs before booking.",
  },
];

export default function FullGroomingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          pageUrl: url,
          name: fullGroomingPackage.name,
          description,
          price: fullGroomingPackage.price,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Full Dog Grooming", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Full Dog Grooming", href: servicePath("dog-haircuts-full-grooming") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Full Grooming Package</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Full Dog Grooming
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="rounded-full bg-psl-brass px-4 py-1.5 text-lg font-bold text-white">
              {fullGroomingPackage.price}
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide text-psl-brass-dark">
              {fullGroomingPackage.priceNote}
            </span>
          </div>
          <p className="mt-4 text-lg text-psl-ink-soft">
            One flat price, everything your dog needs — bathed, cut, and pampered at
            your home, with one-on-one attention from start to finish.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_full_grooming" variant="primary" />
            <RequestButton location="service_full_grooming" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.huskyGroomed.alt} src={photos.huskyGroomed.src} aspect="video" className="w-full" />
      </section>

      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
            What&apos;s Included — {fullGroomingPackage.price}
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {fullGroomingPackage.includes.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-psl-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-psl-pink-dark" />
                {f}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-psl-display text-xl font-bold text-psl-ink">
            Upon Request
          </h3>
          <p className="mt-1 text-sm text-psl-ink-soft">
            Included at no extra charge — just ask when you book or when your groomer arrives.
          </p>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {fullGroomingPackage.uponRequest.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-psl-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-psl-brass-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
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
          <h2 className="font-psl-display text-3xl font-bold">Book Full Dog Grooming — {fullGroomingPackage.price}</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule your dog&apos;s full grooming appointment.</p>
          <CallButton location="service_full_grooming_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

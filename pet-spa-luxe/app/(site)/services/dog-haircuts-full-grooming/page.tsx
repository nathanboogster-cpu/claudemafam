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
import { SizePricingTable } from "@/components/SizePricingTable";
import {
  business,
  servicePath,
  photos,
  fullGroomingPackage,
  sizePricing,
  PATHS,
  SITE_URL,
} from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("dog-haircuts-full-grooming")}`;
const description =
  "Full Dog Grooming — from $110, all-inclusive, priced by dog size. Warm bath, breed-specific haircut, nail trim, deshedding, and more, delivered at your home in El Sobrante, CA.";

export const metadata: Metadata = pageMetadata({
  title: "Full Dog Grooming — From $110, All-Inclusive",
  description,
  path: servicePath("dog-haircuts-full-grooming"),
});

const totalIncluded = fullGroomingPackage.categories.reduce((n, c) => n + c.items.length, 0);
const minPrice = sizePricing[0].fullGrooming;
const maxPrice = sizePricing[sizePricing.length - 1].fullGrooming;

const faqs = [
  {
    question: "How much does Full Dog Grooming cost?",
    answer: `Full Dog Grooming is priced by dog size, from ${minPrice} for small dogs up to ${maxPrice} for extra-large dogs — see the full price table on this page. Every size gets the same ${totalIncluded} grooming services, all-inclusive, with no add-on fees.`,
  },
  {
    question: "Do you do breed-specific haircuts?",
    answer: "Yes — the Full Dog Grooming package includes a full haircut, styled or breed-specific, at every size.",
  },
  {
    question: "Are anal gland expression, ear hair removal, and custom perfume included?",
    answer:
      "Those three are performed upon request as part of the same appointment, at no extra charge — just let your groomer know when scheduling or on arrival.",
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
          priceRange: { min: minPrice, max: maxPrice },
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
          <Eyebrow>The Full Dog Grooming Package</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Full Dog Grooming
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-psl-brass-dark px-4 py-1.5 text-lg font-bold text-white">
              {fullGroomingPackage.price}
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide text-psl-brass-dark">
              {fullGroomingPackage.priceNote}
            </span>
            <span className="text-sm text-psl-ink-soft">
              · {totalIncluded} services in one visit
            </span>
          </div>
          <p className="mt-4 text-lg text-psl-ink-soft">
            Priced by dog size, everything your dog needs bundled in — bathed,
            cut, and pampered at your home, with one-on-one attention from start
            to finish. No add-on fees, no upsells.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_full_grooming" variant="primary" />
            <RequestButton location="service_full_grooming" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.huskyGroomed.alt} src={photos.huskyGroomed.src} aspect="square" className="w-full" priority />
      </section>

      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="text-center">
            <Eyebrow>What&apos;s In the Package</Eyebrow>
            <h2 className="mt-1 font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
              {totalIncluded} Services, Priced by Dog Size
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl border border-psl-border bg-white shadow-sm">
            <div className="flex flex-col items-center gap-3 bg-psl-ink px-6 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-psl-brass">
                  {fullGroomingPackage.name} Package
                </p>
                <p className="mt-1 font-psl-display text-xl font-bold sm:text-2xl">
                  Everything Below, Bundled In
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-psl-display text-4xl font-bold text-psl-brass">
                  {fullGroomingPackage.price}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  {fullGroomingPackage.priceNote}
                </span>
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-10">
              {fullGroomingPackage.categories.map((cat) => (
                <div key={cat.title}>
                  <h3 className="font-psl-display text-lg font-bold text-psl-ink">{cat.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-psl-ink-soft">
                        <CheckIcon className="h-4 w-4 shrink-0 text-psl-pink-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-psl-border bg-psl-cream-deep px-6 py-6 sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-psl-brass-dark">
                Also Included, Upon Request
              </p>
              <p className="mt-1 text-sm text-psl-ink-soft">
                No extra charge — just ask when you book or when your groomer arrives.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {fullGroomingPackage.uponRequest.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-psl-border bg-white px-3 py-1.5 text-xs font-medium text-psl-ink"
                  >
                    <CheckIcon className="h-3.5 w-3.5 shrink-0 text-psl-brass-dark" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-4xl">
            <SizePricingTable />
          </div>

          <p className="mt-6 text-center text-sm text-psl-ink-soft">
            {totalIncluded} grooming services at every size — no add-on fees.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">Related Services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("mobile-dog-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Mobile Dog Grooming
          </Link>
          <Link href={servicePath("bath-deshedding")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Essential Bath
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

import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { SizePricingTable } from "@/components/SizePricingTable";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import {
  business,
  servicePath,
  photos,
  essentialBathPackage,
  sizePricing,
  PATHS,
  SITE_URL,
} from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("bath-deshedding")}`;
const description =
  "Essential Bath — from $80, priced by dog size. Warm-water bath, nail trim, ear cleaning, deshedding, and more, delivered at your home in El Sobrante, CA.";

export const metadata: Metadata = pageMetadata({
  title: "Essential Bath — From $80, By Size",
  description,
  path: servicePath("bath-deshedding"),
});

const totalIncluded = essentialBathPackage.categories.reduce((n, c) => n + c.items.length, 0);
const minPrice = sizePricing[0].essentialBath;
const maxPrice = sizePricing[sizePricing.length - 1].essentialBath;

const faqs = [
  {
    question: "How much does Essential Bath cost?",
    answer: `Essential Bath is priced by dog size, from ${minPrice} for small dogs up to ${maxPrice} for extra-large dogs — see the full price table on this page.`,
  },
  {
    question: "What's included in Essential Bath?",
    answer: `A warm-water bath with premium shampoo, deshedding treatment, nail trim, ear cleaning, teeth brushing, and more — ${totalIncluded} services in total. See the full breakdown on this page.`,
  },
  {
    question: "What's the difference between Essential Bath and Full Dog Grooming?",
    answer:
      "Essential Bath covers bathing, deshedding, nails, and hygiene touches, but does not include a haircut. Full Dog Grooming includes everything in Essential Bath plus a full haircut and finishing touches.",
  },
  {
    question: "Can I book Essential Bath on its own?",
    answer:
      "Yes — Essential Bath is a complete standalone visit, or it can be paired with a future full grooming appointment. Call to discuss what your dog needs.",
  },
];

export default function EssentialBathPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          pageUrl: url,
          name: essentialBathPackage.name,
          description,
          priceRange: { min: minPrice, max: maxPrice },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Essential Bath", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Essential Bath", href: servicePath("bath-deshedding") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Bath & Coat Care</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Essential Bath
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-psl-brass-dark px-4 py-1.5 text-lg font-bold text-white">
              {essentialBathPackage.price}
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide text-psl-brass-dark">
              {essentialBathPackage.priceNote}
            </span>
            <span className="text-sm text-psl-ink-soft">
              · {totalIncluded} services in one visit
            </span>
          </div>
          <p className="mt-4 text-lg text-psl-ink-soft">
            A warm-water bath with premium shampoo and conditioner, paired with
            deshedding, nail trim, ear cleaning, and more — priced by dog size,
            right at your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_bath" variant="primary" />
            <RequestButton location="service_bath" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.corgiBathSuds.alt} src={photos.corgiBathSuds.src} aspect="square" className="w-full" priority />
      </section>

      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="text-center">
            <Eyebrow>What&apos;s Included</Eyebrow>
            <h2 className="mt-1 font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
              {totalIncluded} Services, Priced by Dog Size
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl border border-psl-border bg-white shadow-sm">
            <div className="flex flex-col items-center gap-3 bg-psl-ink px-6 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-psl-brass">
                  {essentialBathPackage.name}
                </p>
                <p className="mt-1 font-psl-display text-xl font-bold sm:text-2xl">
                  Everything Below, Included
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-psl-display text-4xl font-bold text-psl-brass">
                  {essentialBathPackage.price}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  {essentialBathPackage.priceNote}
                </span>
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:grid-cols-3 sm:p-10">
              {essentialBathPackage.categories.map((cat) => (
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
                {essentialBathPackage.uponRequest.map((item) => (
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
            {totalIncluded} services at every size — no add-on fees.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">Related Services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("mobile-dog-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Mobile Dog Grooming
          </Link>
          <Link href={servicePath("dog-haircuts-full-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Full Dog Grooming
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
          <h2 className="font-psl-display text-3xl font-bold">Book an Essential Bath — {essentialBathPackage.price}</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_bath_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

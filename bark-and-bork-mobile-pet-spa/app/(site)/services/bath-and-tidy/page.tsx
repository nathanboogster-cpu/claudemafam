import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PricingTable } from "@/components/PricingTable";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, bathAndTidy, pricingNote, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("bath-and-tidy")}`;
const description =
  "Mobile dog Bath & Tidy from Bark and Bork — a full bath and maintenance grooming without a haircut, starting at $75+. Serving Compton and greater Los Angeles.";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Bath & Tidy in Los Angeles",
  description,
  path: servicePath("bath-and-tidy"),
});

const faqs = [
  {
    question: "What's included in Bath & Tidy?",
    answer: `Bath & Tidy includes ${bathAndTidy.includes.join(", ").toLowerCase()}. It does not include a haircut.`,
  },
  {
    question: "How much does Bath & Tidy cost?",
    answer: `Bath & Tidy starts at $75+ for small dogs (20 lbs or less) and increases by size, up to $135+ for extra-large dogs. ${pricingNote}`,
  },
  {
    question: "Is Bath & Tidy the same as a Full Groom?",
    answer:
      "No. Bath & Tidy is a full bath and maintenance grooming without a haircut. Full Groom includes everything in Bath & Tidy plus a complete haircut.",
  },
  {
    question: "How do I book Bath & Tidy?",
    answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
  },
];

export default function BathAndTidyPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Bath & Tidy", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Bath & Tidy", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Bath & Tidy", href: servicePath("bath-and-tidy") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Bath &amp; Tidy</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Mobile Dog Bath &amp; Tidy</h1>
          <p className="mt-4 text-lg text-bb-ink-soft">
            A thorough bath and maintenance grooming — no haircut — delivered right at your home. Ideal for dogs
            who need a refresh between full grooms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="service_bath_tidy" variant="primary" />
            <SecondaryLinkButton location="service_bath_tidy" variant="secondary" label="Compare Full Groom" href={servicePath("full-dog-grooming")} />
          </div>
        </div>
        <PhotoPlaceholder caption="Dog after a Bark and Bork Bath & Tidy mobile appointment" aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Bath &amp; Tidy Pricing by Size</h2>
          <PricingTable pricing={bathAndTidy.pricing} className="mt-6" />
          <p className="mt-4 text-sm text-bb-ink-soft">{pricingNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">What&apos;s Included</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {bathAndTidy.includes.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-bb-ink-soft">
              <CheckIcon className="h-4 w-4 shrink-0 text-bb-coral-dark" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Related Services &amp; Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            { label: "Full Groom", href: servicePath("full-dog-grooming") },
            { label: "Deshedding", href: servicePath("deshedding") },
            { label: "Grooming Add-Ons", href: servicePath("grooming-add-ons") },
            { label: "Mobile Grooming in Compton", href: areaPath("compton-ca") },
            { label: "Mobile Grooming in Los Angeles", href: areaPath("los-angeles-ca") },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-bb-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bb-display text-3xl font-bold">Book Your Dog&apos;s Bath &amp; Tidy</h2>
          <p className="text-white/80">Schedule online — Bark and Bork comes to {business.homeBase} and {business.primaryMarket}.</p>
          <BookButton location="service_bath_tidy_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

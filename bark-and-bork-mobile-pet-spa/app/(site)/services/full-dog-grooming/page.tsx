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
import { business, fullGroom, pricingNote, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("full-dog-grooming")}`;
const description =
  "Full-service mobile dog grooming from Bark and Bork — bath, brush out, and a complete haircut, sized to your dog, starting at $100+. Serving Compton and greater Los Angeles.";

export const metadata: Metadata = pageMetadata({
  title: "Full-Service Mobile Dog Grooming LA",
  description,
  path: servicePath("full-dog-grooming"),
});

const faqs = [
  {
    question: "What's included in a Full Groom?",
    answer: `A Full Groom includes ${fullGroom.includes.join(", ").toLowerCase()}.`,
  },
  {
    question: "How much does a Full Groom cost?",
    answer: `Full Groom starts at $100+ for small dogs (20 lbs or less) and increases by size, up to $160+ for extra-large dogs. ${pricingNote}`,
  },
  {
    question: "How long does a Full Groom take?",
    answer:
      "Approximate appointment duration ranges from 150+ minutes for small dogs up to 240+ minutes for large and extra-large dogs, depending on coat and condition.",
  },
  {
    question: "What's the difference between Full Groom and Bath & Tidy?",
    answer:
      "Full Groom includes everything in Bath & Tidy plus a complete haircut. Bath & Tidy is a full bath and maintenance grooming without a haircut.",
  },
];

export default function FullDogGroomingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Full Dog Grooming", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Full Groom", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Full Groom", href: servicePath("full-dog-grooming") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Full Groom</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">
            Full-Service Mobile Dog Grooming
          </h1>
          <p className="mt-4 text-lg text-bb-ink-soft">
            Our most complete package: a thorough bath, brush out, and a full haircut — sized to your dog and
            delivered right at your Compton or Los Angeles-area home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="service_full_groom" variant="primary" />
            <SecondaryLinkButton location="service_full_groom" variant="secondary" label="Compare Bath & Tidy" href={servicePath("bath-and-tidy")} />
          </div>
        </div>
        <PhotoPlaceholder caption="Dog after a Bark and Bork Full Groom mobile appointment" aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Full Groom Pricing by Size</h2>
          <PricingTable pricing={fullGroom.pricing} className="mt-6" />
          <p className="mt-4 text-sm text-bb-ink-soft">{pricingNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">What&apos;s Included</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {fullGroom.includes.map((f) => (
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
            { label: "Bath & Tidy", href: servicePath("bath-and-tidy") },
            { label: "Deshedding", href: servicePath("deshedding") },
            { label: "Dematting", href: servicePath("dematting") },
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
          <h2 className="font-bb-display text-3xl font-bold">Book Your Dog&apos;s Full Groom</h2>
          <p className="text-white/80">Schedule online — Bark and Bork comes to {business.homeBase} and {business.primaryMarket}.</p>
          <BookButton location="service_full_groom_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

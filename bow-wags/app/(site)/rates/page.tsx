import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReserveButton, CallButton } from "@/components/CTAButton";
import { DaycarePricingTable } from "@/components/DaycarePricingTable";
import { BoardingPricingTable } from "@/components/BoardingPricingTable";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Rates — Daycare, Boarding & Grooming",
  description:
    "Current published rates for Bow Wags dog daycare, boarding, and grooming in Marietta, GA — temperament test, half/full day daycare, boarding tiers, and fees.",
  path: PATHS.rates,
});

export default function RatesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Rates", url: `${SITE_URL}${PATHS.rates}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Rates", href: PATHS.rates }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Eyebrow>Rates</Eyebrow>
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">Current Rates</h1>
        <p className="mt-4 text-lg text-bw-ink-soft">
          These are Bow Wags&apos; current published rates for daycare and boarding.
          Rates are subject to change — call {business.phoneDisplay} to confirm
          current pricing before booking.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h2 className="font-bw-display text-2xl font-bold text-bw-ink">Dog Daycare</h2>
        <DaycarePricingTable className="mt-6" />
        <div className="mt-6">
          <ReserveButton location="rates_daycare" variant="primary" label="Reserve Daycare" />
        </div>
      </section>

      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-bw-display text-2xl font-bold text-bw-ink">Dog Boarding</h2>
          <BoardingPricingTable className="mt-6" />
          <div className="mt-6">
            <ReserveButton location="rates_boarding" variant="primary" label="Book Boarding" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="font-bw-display text-2xl font-bold text-bw-ink">Dog Grooming</h2>
        <div className="mt-6 rounded-2xl border border-bw-border bg-white p-6">
          <p className="text-bw-ink-soft">
            Grooming pricing depends on your dog&apos;s breed, size, and coat
            condition, so Bow Wags doesn&apos;t publish fixed grooming prices online.
            Call {business.phoneDisplay} for current rates and to book an appointment.
          </p>
          <div className="mt-4">
            <CallButton location="rates_grooming" variant="primary" label="Call for Grooming Rates" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 text-sm text-bw-ink-soft">
        <p>
          All rates on this page are current published rates provided by Bow Wags
          and may change without notice. Call {business.phoneDisplay} or visit the{" "}
          <a href={PATHS.faq} className="font-semibold text-bw-orange-dark hover:underline">
            FAQ
          </a>{" "}
          for the latest information.
        </p>
      </section>
    </>
  );
}

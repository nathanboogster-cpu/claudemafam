import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingTable } from "@/components/PricingTable";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { DogIcon, ScissorsIcon, DropletIcon, BrushIcon, ShieldCheckIcon, HeartIcon } from "@/components/icons";
import { bathAndTidy, fullGroom, pricingNote, durationNote, addOns, services, servicePath, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Grooming Services & Pricing",
  description:
    "Compare Bark and Bork's mobile dog grooming services: Full Groom vs. Bath & Tidy, deshedding, dematting, and add-ons — with transparent starting prices by size.",
  path: PATHS.services,
});

const serviceIcons: Record<string, React.ReactNode> = {
  "mobile-dog-grooming": <DogIcon className="h-6 w-6" />,
  "full-dog-grooming": <ScissorsIcon className="h-6 w-6" />,
  "bath-and-tidy": <DropletIcon className="h-6 w-6" />,
  deshedding: <BrushIcon className="h-6 w-6" />,
  dematting: <BrushIcon className="h-6 w-6" />,
  "flea-tick-treatment": <ShieldCheckIcon className="h-6 w-6" />,
  "anal-gland-expression": <HeartIcon className="h-6 w-6" />,
  "teeth-brushing": <BrushIcon className="h-6 w-6" />,
};

// Maps each addOns entry to its dedicated service page — De-Shedding's
// standalone page uses a different slug than its addOns entry.
const addOnLink: Record<string, string> = {
  "flea-tick-treatment": servicePath("flea-tick-treatment"),
  "anal-gland-expression": servicePath("anal-gland-expression"),
  "deshedding-addon": servicePath("deshedding"),
  "teeth-brushing": servicePath("teeth-brushing"),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Services", href: PATHS.services }]} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Mobile Grooming Services</Eyebrow>
        <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">What Does Your Dog Need?</h1>
        <p className="mt-4 max-w-2xl text-lg text-bb-ink-soft">
          Every Bark and Bork appointment starts with two core packages. <strong>Full Groom</strong> includes a
          complete haircut. <strong>Bath &amp; Tidy</strong> is a full bath and maintenance grooming without a
          haircut. Both are sized to your dog and delivered right at your home.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-bb-border bg-white p-6 shadow-sm">
            <h2 className="font-bb-display text-xl font-bold text-bb-ink">Full Groom</h2>
            <p className="mt-1 text-sm text-bb-ink-soft">{fullGroom.summary}</p>
            <PricingTable pricing={fullGroom.pricing} className="mt-4" />
            <SecondaryLinkButton
              location="services_hub_full_groom"
              variant="secondary"
              label="Full Groom Details"
              href={servicePath("full-dog-grooming")}
              className="mt-4"
            />
          </div>
          <div className="rounded-3xl border border-bb-border bg-white p-6 shadow-sm">
            <h2 className="font-bb-display text-xl font-bold text-bb-ink">Bath &amp; Tidy</h2>
            <p className="mt-1 text-sm text-bb-ink-soft">{bathAndTidy.summary}</p>
            <PricingTable pricing={bathAndTidy.pricing} className="mt-4" />
            <SecondaryLinkButton
              location="services_hub_bath_tidy"
              variant="secondary"
              label="Bath & Tidy Details"
              href={servicePath("bath-and-tidy")}
              className="mt-4"
            />
          </div>
        </div>
        <p className="mt-4 text-sm text-bb-ink-soft">{pricingNote}</p>
        <p className="mt-1 text-sm text-bb-ink-soft">{durationNote}</p>
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">All Services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.shortName}
                description={s.summary}
                href={servicePath(s.slug)}
                icon={serviceIcons[s.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Add-Ons</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((a) => (
            <Link
              key={a.slug}
              href={addOnLink[a.slug] ?? PATHS.services}
              className="rounded-2xl border border-bb-border bg-white p-5 hover:border-bb-coral-dark"
            >
              <p className="font-bb-display text-lg font-bold text-bb-ink">{a.name}</p>
              <p className="mt-1 text-sm font-semibold text-bb-coral-dark">
                {a.price} · {a.duration}
              </p>
              <p className="mt-2 text-sm text-bb-ink-soft">{a.summary}</p>
            </Link>
          ))}
          <Link
            href={servicePath("dematting")}
            className="rounded-2xl border border-bb-border bg-white p-5 hover:border-bb-coral-dark"
          >
            <p className="font-bb-display text-lg font-bold text-bb-ink">Dematting</p>
            <p className="mt-1 text-sm font-semibold text-bb-coral-dark">$50+ · 60 minutes</p>
            <p className="mt-2 text-sm text-bb-ink-soft">Careful dematting for tangled or matted coats.</p>
          </Link>
        </div>
      </section>

      <section className="bg-bb-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bb-display text-3xl font-bold">Ready to Choose Your Grooming Service?</h2>
          <BookButton location="services_hub_cta" variant="primary" label="Choose Your Grooming Service" className="mt-2" />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { StatBand } from "@/components/StatBand";
import { CallButton, ReserveButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { ClipboardIcon, HouseIcon, ScissorsIcon } from "@/components/icons";
import { services, servicePath, PATHS, SITE_URL } from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "dog-daycare": <ClipboardIcon className="h-6 w-6" />,
  "dog-boarding": <HouseIcon className="h-6 w-6" />,
  "dog-grooming": <ScissorsIcon className="h-6 w-6" />,
};

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Bow Wags offers dog daycare, boarding, and full-service grooming in Marietta, GA. See what's included in each service and current rates.",
  path: PATHS.services,
});

export default function ServicesHub() {
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
        <Eyebrow>Our Services</Eyebrow>
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">Services</h1>
        <p className="mt-4 max-w-2xl text-lg text-bw-ink-soft">
          Bow Wags offers dog daycare, boarding, and full-service grooming at one Marietta, GA facility.
          Choose a service below to see what&apos;s included, or call to talk through what your dog needs.
        </p>

        <StatBand className="mt-10" />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.name}
              description={s.summary}
              href={servicePath(s.slug)}
              icon={serviceIcons[s.slug]}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-bw-border bg-bw-cream-deep p-8 text-center sm:p-10">
          <h2 className="font-bw-display text-2xl font-bold text-bw-ink">Not Sure Which Service Is Right?</h2>
          <p className="mx-auto mt-3 max-w-xl text-bw-ink-soft">
            Call and we&apos;ll help you figure out the right fit for your dog.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="services_hub" variant="primary" />
            <ReserveButton location="services_hub" variant="secondary" label="See Current Rates" href={PATHS.rates} />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <ReserveButton
            location="services_hub"
            variant="ghost"
            label="See Our Service Areas"
            href={PATHS.serviceAreas}
          />
        </div>
      </section>
    </>
  );
}

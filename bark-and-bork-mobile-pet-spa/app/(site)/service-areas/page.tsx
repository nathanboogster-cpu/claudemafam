import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, serviceAreas, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Grooming Service Areas",
  description:
    "Bark and Bork Mobile Pet Spa is based in Compton, CA and grooms dogs throughout greater Los Angeles, including South Gate, Lynwood, Carson, Gardena, Long Beach & Inglewood.",
  path: PATHS.serviceAreas,
});

export default function ServiceAreasHub() {
  const primary = serviceAreas.filter((a) => a.isPrimary);
  const secondary = serviceAreas.filter((a) => !a.isPrimary);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Service Areas", href: PATHS.serviceAreas }]} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Service Areas</Eyebrow>
        <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Where Bark and Bork Grooms</h1>
        <p className="mt-4 max-w-2xl text-lg text-bb-ink-soft">
          Bark and Bork is home-based in {business.homeBase} and grooms dogs throughout {business.broadMarket}.
          We don&apos;t have a walk-in salon — every appointment happens at your own home.
        </p>

        <h2 className="mt-12 font-bb-display text-2xl font-bold text-bb-ink">Primary Service Area</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {primary.map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} state={a.state} description={a.description} href={areaPath(a.slug)} />
          ))}
        </div>

        <h2 className="mt-12 font-bb-display text-2xl font-bold text-bb-ink">Also Serving</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {secondary.map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} state={a.state} description={a.description} href={areaPath(a.slug)} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-bb-border bg-bb-cream-deep p-8 text-center sm:p-10">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink">Not Sure If We Serve Your Address?</h2>
          <p className="mx-auto mt-3 max-w-xl text-bb-ink-soft">
            Book online and enter your address at checkout, or call us directly and we&apos;ll confirm availability
            for your area.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BookButton location="service_areas_hub" variant="primary" />
            <SecondaryLinkButton location="service_areas_hub" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
      </section>
    </>
  );
}

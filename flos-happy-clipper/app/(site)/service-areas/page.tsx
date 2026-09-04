import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { serviceAreas, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Service Areas",
  description:
    "Flo's Happy Clipper is based on Main St in Eatontown, NJ and serves pet owners within about a 20-minute drive across Monmouth County.",
  path: PATHS.serviceAreas,
});

export default function ServiceAreasHub() {
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
        <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
          Where Flo&apos;s Happy Clipper Grooms
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-fh-ink-soft">
          Our grooming salon is on Main St in Eatontown, NJ, and we welcome pet owners from anywhere
          within roughly a 20-minute drive across Monmouth County.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {serviceAreas.map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} state={a.state} description={a.description} href={areaPath(a.slug)} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-fh-border bg-fh-cream-deep p-8 text-center sm:p-10">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink">Not Sure If We Serve Your Area?</h2>
          <p className="mx-auto mt-3 max-w-xl text-fh-ink-soft">
            Call Flo&apos;s Happy Clipper directly and we&apos;ll let you know whether your area is a fit for an appointment.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="service_areas_hub" variant="primary" />
            <SecondaryLinkButton location="service_areas_hub" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
      </section>
    </>
  );
}

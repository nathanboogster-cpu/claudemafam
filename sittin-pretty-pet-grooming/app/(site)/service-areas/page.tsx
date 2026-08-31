import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { serviceAreas, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Pet Grooming Service Areas",
  description:
    "Sittin' Pretty Pet Grooming is based in Funkstown, MD and serves pet owners in Hagerstown and Halfway, MD. Call to confirm we serve your area.",
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
        <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
          Where Sittin&apos; Pretty Grooms
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-sp-ink-soft">
          Our grooming salon is based in Funkstown, MD, and we serve pet owners throughout the greater
          Hagerstown area, including Halfway and the surrounding Washington County communities.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {serviceAreas.map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} state={a.state} description={a.description} href={areaPath(a.slug)} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-sp-border bg-sp-cream-deep p-8 text-center sm:p-10">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink">Not Sure If We Serve Your Area?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sp-ink-soft">
            Call Sittin&apos; Pretty directly and we&apos;ll let you know whether your area is a fit for an appointment.
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

import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { CallButton, ReserveButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { serviceAreas, areaPath, business, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas",
  description:
    "Bow Wags is based in Marietta, GA and welcomes dog owners from Powder Springs, Smyrna, Austell, Kennesaw, and Mableton for daycare, boarding, and grooming.",
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
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">
          Where Bow Wags Serves
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-bw-ink-soft">
          Bow Wags is at {business.addressFull}, and welcomes dog owners from anywhere within about a
          15-minute drive across West Cobb and the surrounding towns.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} state={a.state} description={a.description} href={areaPath(a.slug)} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-bw-border bg-bw-cream-deep p-8 text-center sm:p-10">
          <h2 className="font-bw-display text-2xl font-bold text-bw-ink">Not Sure If We Serve Your Area?</h2>
          <p className="mx-auto mt-3 max-w-xl text-bw-ink-soft">
            Call Bow Wags directly and we&apos;ll let you know whether your area is a good fit.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="service_areas_hub" variant="primary" />
            <ReserveButton location="service_areas_hub" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
      </section>
    </>
  );
}

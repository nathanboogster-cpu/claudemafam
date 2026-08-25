import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { serviceAreas, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mobile Dog Grooming Service Areas",
  description:
    "Pet Spa Luxe is based in El Sobrante, CA and offers mobile dog grooming throughout the surrounding Bay Area. Call to confirm availability at your address.",
  alternates: { canonical: PATHS.serviceAreas },
};

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
        <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
          Where Pet Spa Luxe Grooms
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-psl-ink-soft">
          Pet Spa Luxe is based in El Sobrante, CA and grooms dogs by mobile
          appointment throughout the surrounding Bay Area. We publish a
          dedicated page only for confirmed service areas — if your city isn&apos;t
          listed yet, call and we&apos;ll confirm whether we can reach you.
        </p>

        <div className="mx-auto mt-10 grid max-w-md gap-4">
          {serviceAreas.map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} href={areaPath(a.slug)} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-psl-border bg-psl-cream-deep p-8 text-center sm:p-10">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink">
            Not Sure If We Reach Your Address?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-psl-ink-soft">
            Call Pet Spa Luxe directly and we&apos;ll confirm whether mobile grooming
            is available at your home.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="service_areas_hub" variant="primary" />
            <RequestButton location="service_areas_hub" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}

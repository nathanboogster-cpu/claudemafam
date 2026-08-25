import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { StatBand } from "@/components/StatBand";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { TruckIcon, ScissorsIcon, DropletIcon, NailIcon } from "@/components/icons";
import { services, serviceFeatures, servicePath, PATHS, SITE_URL } from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "mobile-dog-grooming": <TruckIcon className="h-6 w-6" />,
  "dog-haircuts-full-grooming": <ScissorsIcon className="h-6 w-6" />,
  "bath-deshedding": <DropletIcon className="h-6 w-6" />,
  "nail-ear-care": <NailIcon className="h-6 w-6" />,
};

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Grooming Services in El Sobrante, CA",
  description:
    "Explore Pet Spa Luxe's mobile dog grooming services: full grooming, breed-specific haircuts, warm-water baths, deshedding, and nail & ear care — all at your door.",
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
        <Eyebrow>Mobile Dog Grooming Services</Eyebrow>
        <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
          Grooming Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-psl-ink-soft">
          Every Pet Spa Luxe appointment happens at your home, one-on-one, in a
          cage-free mobile grooming setup. Choose a service below to see exactly
          what&apos;s included.
        </p>

        <StatBand className="mt-10" />

        <h2 className="mt-14 font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
          Choose a Service
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.name}
              description={s.summary}
              href={servicePath(s.slug)}
              price={s.price}
              icon={serviceIcons[s.slug]}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-psl-border bg-psl-cream-deep p-8 sm:p-10">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink">
            What&apos;s Included With Every Groom
          </h2>
          <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {serviceFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-psl-ink-soft">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-psl-brass" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="services_hub" variant="primary" />
            <RequestButton location="services_hub" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}

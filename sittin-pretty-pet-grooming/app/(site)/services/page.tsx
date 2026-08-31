import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { StatBand } from "@/components/StatBand";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { DogIcon, CatIcon, ScissorsIcon, NailIcon, BrushIcon, PuppyIcon } from "@/components/icons";
import { services, servicePath, PATHS, SITE_URL } from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "dog-grooming": <DogIcon className="h-6 w-6" />,
  "dog-bath-and-brush": <ScissorsIcon className="h-6 w-6" />,
  "cat-grooming": <CatIcon className="h-6 w-6" />,
  "nail-trim-ear-cleaning": <NailIcon className="h-6 w-6" />,
  "deshedding-treatment": <BrushIcon className="h-6 w-6" />,
  "puppy-first-groom": <PuppyIcon className="h-6 w-6" />,
};

export const metadata: Metadata = pageMetadata({
  title: "Dog & Cat Grooming Services in Funkstown, MD",
  description:
    "Explore Sittin' Pretty's pet grooming services: full-service dog grooming, dog bath & brush, and cat grooming — all at our Funkstown, MD salon.",
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
        <Eyebrow>Grooming Services</Eyebrow>
        <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">Services</h1>
        <p className="mt-4 max-w-2xl text-lg text-sp-ink-soft">
          Sittin&apos; Pretty is a full-service pet grooming salon in Funkstown, MD. Choose a service below to
          see what to expect, or call us to talk through what your pet needs.
        </p>

        <StatBand className="mt-10" />

        <h2 className="mt-14 font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">Choose a Service</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-16 rounded-3xl border border-sp-border bg-sp-cream-deep p-8 sm:p-10 text-center">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink">Not Sure Which Service Is Right?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sp-ink-soft">
            Call us and we&apos;ll help you figure out the right groom for your pet&apos;s breed, coat, and age.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="services_hub" variant="primary" />
            <SecondaryLinkButton location="services_hub" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
      </section>
    </>
  );
}

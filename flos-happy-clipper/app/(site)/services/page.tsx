import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { StatBand } from "@/components/StatBand";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { DogIcon, ScissorsIcon, NailIcon, DropletIcon, BugIcon, ShieldCheckIcon } from "@/components/icons";
import { services, servicePath, PATHS, SITE_URL } from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "dog-grooming": <DogIcon className="h-6 w-6" />,
  "dog-bathing": <ScissorsIcon className="h-6 w-6" />,
  "dog-nail-trimming": <NailIcon className="h-6 w-6" />,
  "dog-ear-cleaning": <DropletIcon className="h-6 w-6" />,
  "dog-flea-tick-treatment": <BugIcon className="h-6 w-6" />,
  "dog-anal-gland-expression": <ShieldCheckIcon className="h-6 w-6" />,
};

const fullAppointments = services.filter((s) => s.isFlagship);
const addOnServices = services.filter((s) => !s.isFlagship);

export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Services in Eatontown, NJ",
  description:
    "Explore Flo's Happy Clipper's dog grooming services: full grooms, bathing, nail trimming, ear cleaning, flea & tick treatment, and anal gland expression — all at our Main St salon in Eatontown, NJ.",
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
        <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">Services</h1>
        <p className="mt-4 max-w-2xl text-lg text-fh-ink-soft">
          Flo&apos;s Happy Clipper is a dog grooming salon on Main St in Eatontown, NJ. Choose a service below
          to see what to expect, or call us to talk through what your dog needs.
        </p>

        <StatBand className="mt-10" />

        <h2 className="mt-14 font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Full Grooming Appointments</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {fullAppointments.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.name}
              description={s.summary}
              href={servicePath(s.slug)}
              icon={serviceIcons[s.slug]}
            />
          ))}
        </div>

        <h2 className="mt-14 font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Add-On Services</h2>
        <p className="mt-2 max-w-2xl text-fh-ink-soft">
          Available on their own as a quick appointment, or added to any bath or full groom.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addOnServices.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.name}
              description={s.summary}
              href={servicePath(s.slug)}
              icon={serviceIcons[s.slug]}
            />
          ))}
        </div>

        <div className="fh-paw-pattern mt-16 rounded-3xl border border-fh-border bg-fh-cream-deep p-8 sm:p-10 text-center">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink">Not Sure Which Service Is Right?</h2>
          <p className="mx-auto mt-3 max-w-xl text-fh-ink-soft">
            Call us and we&apos;ll help you figure out the right groom for your dog&apos;s breed, coat, and age.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="services_hub" variant="primary" />
            <SecondaryLinkButton location="services_hub" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <SecondaryLinkButton location="services_hub" variant="ghost" label="See Our Service Areas" href={PATHS.serviceAreas} />
        </div>
      </section>
    </>
  );
}

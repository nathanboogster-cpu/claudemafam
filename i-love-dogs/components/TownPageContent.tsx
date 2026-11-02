import Link from "next/link";
import { PATHS, SITE_URL, townPages, business, type TownPage } from "@/lib/site-data";
import { CallButton, DirectionsButton } from "./CTAButton";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { WhyChooseUs } from "./WhyChooseUs";
import { ProcessSteps } from "./ProcessSteps";
import { FaqBlock } from "./FaqBlock";
import { Eyebrow } from "./Eyebrow";
import { StudioInfoCard } from "./StudioInfoCard";
import { PackageCards } from "./PackageCards";
import { BottomCta } from "./BottomCta";
import { PinIcon } from "./icons";
import { RecentWork } from "./RecentWork";

export function TownPageContent({ town }: { town: TownPage }) {
  const pageUrl = `${SITE_URL}${town.slug}`;
  const otherTowns = townPages.filter((t) => t.city !== town.city);
  const loc = `town_${town.city.toLowerCase()}`;

  const faqs = [
    {
      question: `Do you serve ${town.city}?`,
      answer: `Yes. ${town.city} is one of the towns we serve from our salon at ${business.addressFull}.`,
    },
    {
      question: `Can you pick up my dog in ${town.city}?`,
      answer: `We offer pickup and delivery. Call ${business.phoneDisplay} with your ${town.city} address so we can confirm we cover it.`,
    },
    {
      question: "How much does dog grooming cost?",
      answer:
        "Packages start at $75 for Bath & Pamper, $115 for The Works and $150 for Full Spa Day. Final prices are quoted when we meet your dog and depend on size, coat length, coat type and condition.",
    },
    {
      question: "Do you groom at my home?",
      answer: `No. Every groom happens at our salon in Bryn Mawr. Pickup and delivery means we collect your dog and bring them home after the groom.`,
    },
  ];

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Area", href: PATHS.serviceArea },
          { name: town.city, href: town.slug },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Service Area", url: `${SITE_URL}${PATHS.serviceArea}` },
          { name: town.city, url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: `Dog Grooming for ${town.city}, PA`,
          description: `Dog grooming for ${town.city}, PA dog owners at I Love Dogs Pet Grooming in Bryn Mawr, with pickup and delivery available.`,
          areaServed: [town.city],
          withPackages: true,
        })}
      />

      <section className="bg-gradient-to-b from-cream-deep to-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Pickup &amp; Delivery Available</Eyebrow>
            <h1 className="mt-2 flex items-start gap-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              <PinIcon className="mt-2 h-7 w-7 shrink-0 text-brand" />
              Dog Grooming for {town.city}, PA
            </h1>
            <p className="mt-4 text-ink-soft leading-relaxed">{town.intro}</p>
            <p className="mt-4 text-ink-soft leading-relaxed">{town.angle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton location={`${loc}_top`} />
              <DirectionsButton location={`${loc}_top`} />
            </div>
          </div>
          <StudioInfoCard location={`${loc}_hero`} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Packages</Eyebrow>
        <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">Grooming Packages and Prices</h2>
        <div className="mt-6">
          <PackageCards />
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          See the full{" "}
          <Link href={`${PATHS.dogGrooming}#pricing`} className="font-semibold text-brand hover:underline">
            dog grooming packages
          </Link>{" "}
          and how{" "}
          <Link href={PATHS.pickup} className="font-semibold text-brand hover:underline">
            pickup and delivery
          </Link>{" "}
          works.
        </p>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <ProcessSteps title={`How It Works for ${town.city} Dog Owners`} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <RecentWork offset={townPages.indexOf(town) + 1} title="Recent Grooms at Our Salon" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <WhyChooseUs />
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FaqBlock items={faqs} title={`${town.city} Dog Grooming FAQ`} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow className="text-center block">Service Areas</Eyebrow>
        <h2 className="mt-1 font-display text-xl font-bold text-ink text-center">Other Towns We Serve</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href={PATHS.home}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-white p-4 text-center text-sm font-semibold text-brand hover:bg-cream-deep"
          >
            <PinIcon className="h-4 w-4 shrink-0" />
            Bryn Mawr →
          </Link>
          {otherTowns.map((t) => (
            <Link
              key={t.slug}
              href={t.slug}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-white p-4 text-center text-sm font-semibold text-brand hover:bg-cream-deep"
            >
              <PinIcon className="h-4 w-4 shrink-0" />
              {t.city} →
            </Link>
          ))}
        </div>
      </section>

      <BottomCta title={`Book a groom for your ${town.city} dog`} location={`${loc}_bottom`} />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import {
  business,
  market,
  services,
  supportingServices,
  servicePath,
  PATHS,
  SITE_URL,
  hoursNote,
} from "@/lib/site-data";
import { CheckIcon, PawIcon, CatIcon } from "@/components/icons";

// The services hub. Its job is routing, not ranking: it sends both readers
// and crawlers down to the four service pages that carry the commercial
// intent, and it is where the full verified GBP service list is reconciled
// against the site's page structure in one visible place.

export const metadata: Metadata = pageMetadata({
  title: `Mobile Grooming Services in ${market.cityState}`,
  description:
    `Dog and cat grooming carried out at your home in the ${market.cityState} area — full grooms, baths, nail trims and ear cleaning. ` +
    `Call ${business.phoneDisplay} to book.`,
  path: PATHS.services,
});

const crumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Services", href: PATHS.services },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))}
      />
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-goc-cream">
        <div className="goc-blob -right-24 -top-16 h-72 w-72 bg-goc-orange/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:py-18">
          <Eyebrow>Grooming Services · We Come To You</Eyebrow>
          <h1 className="mt-3 font-goc-display text-4xl font-extrabold leading-[1.06] text-goc-ink sm:text-5xl">
            Mobile Grooming Services in {market.cityState}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-goc-ink-soft">
            Every service below happens at your home. Pick the one that matches what your pet needs — or call and
            describe the coat, and we&rsquo;ll tell you which appointment actually fits.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton location="services_hub_hero" label="Call To Book" />
            <SecondaryLinkButton href={PATHS.serviceAreas} label="Do You Come To Me?" />
          </div>
          <p className="mt-4 text-sm font-semibold text-goc-ink-soft">
            {business.phoneDisplay} · {hoursNote}
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Dog Grooming"
          title="For Dogs"
          intro="Three appointment types, covering everything from a complete groom with a haircut down to a ten-minute nail trim."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {services
            .filter((s) => s.slug !== "mobile-cat-bathing")
            .map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                summary={service.summary}
                featured={service.isPrimary}
              />
            ))}
        </div>
        <div className="mt-8 rounded-3xl border-2 border-goc-border bg-goc-cream p-6 sm:p-8">
          <h3 className="flex items-center gap-2.5 font-goc-display text-lg font-extrabold text-goc-ink">
            <PawIcon className="h-5 w-5 text-goc-magenta-dark" />
            Which one does my dog need?
          </h3>
          <ul className="mt-5 space-y-3">
            {[
              {
                label: "Needs a haircut, or the coat has grown out",
                href: servicePath("mobile-dog-grooming"),
                anchor: "Full-service mobile dog grooming",
              },
              {
                label: "Coat is fine, they're just dirty or shedding heavily",
                href: servicePath("dog-bath-and-blow-dry"),
                anchor: "Dog bath and blow dry",
              },
              {
                label: "You can hear nails clicking on the floor",
                href: servicePath("dog-nail-trimming"),
                anchor: "Dog nail trimming",
              },
            ].map((row) => (
              <li key={row.href} className="flex flex-col gap-1 border-b border-goc-border pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-goc-ink-soft">{row.label}</span>
                <Link
                  href={row.href}
                  className="inline-block shrink-0 py-1 font-bold text-goc-magenta-darker underline-offset-4 hover:underline"
                >
                  {row.anchor} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Cat Grooming Care"
          title="For Cats"
          intro="Cats are welcome, with a scope we'd rather state plainly than have you discover on the day."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          <ServiceCard
            slug="mobile-cat-bathing"
            name={services.find((s) => s.slug === "mobile-cat-bathing")!.name}
            summary={services.find((s) => s.slug === "mobile-cat-bathing")!.summary}
          />
          <div className="rounded-3xl border-2 border-goc-border bg-white p-7">
            <h3 className="flex items-center gap-2.5 font-goc-display text-lg font-extrabold text-goc-ink">
              <CatIcon className="h-5 w-5 text-goc-magenta-dark" />
              What&rsquo;s offered for cats
            </h3>
            <ul className="mt-4 space-y-2.5">
              {["Cat bathing", "Cat ear cleaning"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-semibold text-goc-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-goc-magenta-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-2xl bg-goc-cream p-4 text-sm leading-relaxed text-goc-ink-soft">
              Cat haircuts, lion cuts and shave-downs, de-matting and cat nail trims are not currently offered. If
              that&rsquo;s what your cat needs, book with a groomer who specialises in it.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Also Included"
          title="Services Offered Alongside A Groom"
          intro="These are real services, but they aren't separate appointments — they're covered in full on the pages below rather than on thin pages of their own."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {supportingServices.map((s) => (
            <li key={s.name} className="rounded-2xl border-2 border-goc-border bg-goc-cream p-6">
              <h3 className="font-goc-display text-lg font-extrabold text-goc-ink">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-goc-ink-soft">{s.summary}</p>
              <Link
                href={servicePath(s.onPage)}
                className="mt-4 inline-flex min-h-11 items-center font-bold text-goc-magenta-darker underline-offset-4 hover:underline"
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl leading-relaxed text-goc-ink-soft">
          No pricing is published on this site, because what a groom costs depends on the pet — size, coat type,
          condition, and which service you&rsquo;re booking. Call {business.phoneDisplay}, describe your pet, and
          you&rsquo;ll get a straight answer instead of a range that may not apply to you.
        </p>
      </Section>

      <CtaBand location="services_hub_footer" secondary={{ href: PATHS.faq, label: "Read The FAQ" }} />
    </>
  );
}

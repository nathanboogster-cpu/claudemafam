import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, services, serviceAreas, photos, servicePath, areaPath, PATHS, SITE_URL, type AreaSlug } from "@/lib/site-data";

const url = `${SITE_URL}${areaPath("los-angeles-ca")}`;

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Groomer Serving Greater Los Angeles",
  description:
    "Bark and Bork Mobile Pet Spa brings mobile dog grooming to homes throughout greater Los Angeles, based out of Compton, CA. Transparent pricing, online booking.",
  path: areaPath("los-angeles-ca"),
});

// Grouped by the plain regional names Angelenos already use. Every slug here
// must be a real service area in lib/site-data.ts.
const regions: { name: string; blurb: string; slugs: AreaSlug[] }[] = [
  {
    name: "Compton & Its Neighbors",
    blurb: "Our home base and the communities that border it.",
    slugs: ["compton-ca", "willowbrook-ca", "lynwood-ca", "paramount-ca"],
  },
  {
    name: "Gateway Cities",
    blurb: "Southeast LA County cities north and east of Compton.",
    slugs: ["south-gate-ca", "downey-ca", "bellflower-ca"],
  },
  {
    name: "South Bay & Westside of Our Route",
    blurb: "Cities west and southwest of Compton, out toward LAX.",
    slugs: ["gardena-ca", "hawthorne-ca", "inglewood-ca", "carson-ca"],
  },
  {
    name: "Long Beach",
    blurb: "The coastal city directly south of Compton.",
    slugs: ["long-beach-ca"],
  },
];

const faqs = [
  {
    question: "Does Bark and Bork have a grooming salon in Los Angeles?",
    answer:
      "No — Bark and Bork is a mobile grooming business based in Compton, CA. We don't have a walk-in storefront in Los Angeles; instead, we bring the grooming appointment directly to your home.",
  },
  {
    question: "What parts of Los Angeles do you serve?",
    answer:
      "We focus on communities within reach of our Compton base: Compton, Willowbrook, Lynwood, Paramount, South Gate, Downey, Bellflower, Gardena, Hawthorne, Inglewood, Carson, and Long Beach. If you're elsewhere in greater Los Angeles, call us to check your address.",
  },
  {
    question: "How do I book mobile grooming in Los Angeles?",
    answer: `Book online at ${business.bookingUrl}, or call ${business.phoneDisplay} to confirm availability for your address.`,
  },
  {
    question: "How much does mobile grooming cost in Los Angeles?",
    answer:
      "Bath & Tidy starts at $75+ and Full Groom starts at $100+ for small dogs, with pricing increasing by size. See our Services page for the full pricing table.",
  },
];

export default function LosAngelesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
          { name: "Los Angeles, CA", url },
        ])}
      />
      <JsonLd
        data={serviceSchema({ pageUrl: url, name: "Mobile Dog Grooming", description: metadata.description as string, city: "Los Angeles, CA" })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceAreas },
          { name: "Los Angeles, CA", href: areaPath("los-angeles-ca") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Los Angeles • Mobile Dog Grooming</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">
            A Mobile Dog Groomer for Greater Los Angeles
          </h1>
          <p className="mt-4 text-lg text-bb-ink-soft">
            Bark and Bork is based in {business.homeBase} and brings mobile dog grooming to homes throughout
            greater Los Angeles. We&apos;re not a walk-in Los Angeles storefront — every appointment happens at
            your own address, wherever you are in the greater LA area.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="area_los_angeles" variant="primary" />
            <SecondaryLinkButton location="area_los_angeles" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.vanExteriorRear.alt} src={photos.vanExteriorRear.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">A Big Metro, Served From Compton</h2>
        <div className="mt-5 space-y-4 text-bb-ink-soft">
          <p>
            Greater Los Angeles covers a huge area, and a single grooming van can&apos;t be everywhere at once. So we
            concentrate on the communities within reach of our Compton base: South LA, the Gateway Cities to the
            east, the South Bay to the west, and Long Beach to the south.
          </p>
          <p>
            Each city below has its own page with details for that area. If your neighborhood isn&apos;t listed,
            call {business.phoneDisplay} before booking and we&apos;ll tell you whether we can reach your address.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {regions.map((r) => (
            <div key={r.name} className="rounded-2xl border border-bb-border bg-white p-5">
              <h3 className="font-semibold text-bb-ink">{r.name}</h3>
              <p className="mt-1 text-sm text-bb-ink-soft">{r.blurb}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {r.slugs.map((slug) => {
                  const a = serviceAreas.find((x) => x.slug === slug)!;
                  return (
                    <li key={slug}>
                      <Link href={areaPath(slug)} className="text-sm font-medium text-bb-coral-dark underline underline-offset-4">
                        {a.city}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Why Los Angeles Pet Owners Choose Bark and Bork</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "No trip across town to a traditional grooming salon",
              "Grooming happens right at your Los Angeles-area home",
              "Online booking available 7 days a week, 9 AM–7 PM",
              "Transparent starting prices for every dog size, small to extra-large",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-bb-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-bb-coral-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Services Available in Los Angeles</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={servicePath(s.slug)}
              className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark"
            >
              {s.shortName}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-bb-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bb-display text-3xl font-bold">Book Mobile Grooming in Los Angeles</h2>
          <p className="text-white/80">Schedule online, any day of the week.</p>
          <BookButton location="area_los_angeles_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

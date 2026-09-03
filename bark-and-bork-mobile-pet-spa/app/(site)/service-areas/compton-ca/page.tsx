import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, services, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${areaPath("compton-ca")}`;

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Grooming in Compton, CA",
  description:
    "Bark and Bork Mobile Pet Spa is based in Compton, CA — mobile dog grooming brought right to your home. Transparent pricing, online booking, open 7 days.",
  path: areaPath("compton-ca"),
});

const faqs = [
  {
    question: "Is Bark and Bork based in Compton?",
    answer:
      "Yes — Compton is Bark and Bork's home base. We're a mobile grooming business, not a walk-in salon, so every appointment happens at your own Compton home.",
  },
  {
    question: "How do I book mobile grooming in Compton?",
    answer: `Book online at ${business.bookingUrl}, or call ${business.phoneDisplay}.`,
  },
  {
    question: "What are your hours in Compton?",
    answer: "We're open 7 days a week, 9:00 AM to 7:00 PM.",
  },
  {
    question: "What size dogs do you groom in Compton?",
    answer:
      "We groom dogs of every size — small (20 lbs or less), medium (40 lbs or less), large (60 lbs or less), and extra-large (over 60 lbs).",
  },
];

export default function ComptonPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
          { name: "Compton, CA", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceAreas },
          { name: "Compton, CA", href: areaPath("compton-ca") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Home Base • Compton, CA</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">
            Mobile Dog Grooming in Compton, CA
          </h1>
          <p className="mt-4 text-lg text-bb-ink-soft">
            Compton is home base for Bark and Bork Mobile Pet Spa. As a mobile grooming business, we don&apos;t
            have a walk-in storefront here — instead, we bring the full grooming setup directly to your Compton
            home for every appointment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="area_compton" variant="primary" />
            <SecondaryLinkButton location="area_compton" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder caption="Bark and Bork mobile groomer at a Compton, CA home" aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Why Compton Pet Owners Choose Bark and Bork</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Home-based in Compton, close to every appointment",
              "No car ride or waiting room — grooming happens at your address",
              "Online booking available 7 days a week, 9 AM–7 PM",
              "Transparent starting prices for every dog size",
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
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Services Available in Compton</h2>
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

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Nearby Areas We Also Serve</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            { label: "South Gate", href: areaPath("south-gate-ca") },
            { label: "Lynwood", href: areaPath("lynwood-ca") },
            { label: "Carson", href: areaPath("carson-ca") },
            { label: "Gardena", href: areaPath("gardena-ca") },
            { label: "Los Angeles", href: areaPath("los-angeles-ca") },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-bb-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bb-display text-3xl font-bold">Book Mobile Grooming in Compton</h2>
          <p className="text-white/80">Schedule online, any day of the week.</p>
          <BookButton location="area_compton_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

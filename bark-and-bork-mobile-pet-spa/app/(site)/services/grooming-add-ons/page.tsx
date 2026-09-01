import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, addOns, bathAndTidy, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("grooming-add-ons")}`;

export const metadata: Metadata = pageMetadata({
  title: "Grooming Add-Ons: Flea & Tick, Teeth Brushing & Anal Gland Care",
  description:
    "Add flea & tick treatment, teeth brushing, or anal gland expression to any Bark and Bork mobile grooming appointment. See pricing and what's already included standard.",
  path: servicePath("grooming-add-ons"),
});

const extraAddOns = addOns.filter((a) => a.slug !== "deshedding-addon");

const faqs = [
  {
    question: "Are nail trim, ear cleaning, and sanitary trim extra?",
    answer:
      "No — nail trim, ear cleaning, sanitary trim, paw pad trim, and a light face tidy are already included standard in every Bath & Tidy and Full Groom appointment. The add-ons on this page are additional services beyond that.",
  },
  {
    question: "Does flea & tick treatment prevent future infestations?",
    answer: extraAddOns.find((a) => a.slug === "flea-tick-treatment")!.detail,
  },
  {
    question: "Is anal gland expression a veterinary procedure?",
    answer: extraAddOns.find((a) => a.slug === "anal-gland-expression")!.detail,
  },
  {
    question: "Can I add these to any grooming appointment?",
    answer: "Yes, all of these can be added on to a Bath & Tidy or Full Groom appointment when you book online.",
  },
];

export default function GroomingAddOnsPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Grooming Add-Ons", url },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Grooming Add-Ons", href: servicePath("grooming-add-ons") },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Extra Care</Eyebrow>
        <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Grooming Add-Ons</h1>
        <p className="mt-4 max-w-2xl text-lg text-bb-ink-soft">
          Add extra care to any Bath &amp; Tidy or Full Groom appointment. Note: nail trim, ear cleaning, sanitary
          trim, paw pad trim, and a light face tidy are already included standard in every appointment — they&apos;re
          not listed here as add-ons.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {extraAddOns.map((a) => (
            <div key={a.slug} className="rounded-2xl border border-bb-border bg-white p-6">
              <p className="font-bb-display text-lg font-bold text-bb-ink">{a.name}</p>
              <p className="mt-1 text-sm font-semibold text-bb-coral-dark">
                {a.price} · {a.duration}
              </p>
              <p className="mt-3 text-sm text-bb-ink-soft">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Already Included in Every Groom</h2>
          <p className="mt-3 max-w-2xl text-bb-ink-soft">
            Every Bath &amp; Tidy and Full Groom appointment already includes the following, at no extra charge:
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {["Nail trim", "Ear cleaning", "Sanitary trim", "Paw pad trim", "Light face tidy", "Finishing spray"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-bb-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-bb-coral-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Related Services &amp; Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            { label: "Bath & Tidy", href: servicePath("bath-and-tidy") },
            { label: "Full Groom", href: servicePath("full-dog-grooming") },
            { label: "Deshedding", href: servicePath("deshedding") },
            { label: "Mobile Grooming in Compton", href: areaPath("compton-ca") },
            { label: "Mobile Grooming in Los Angeles", href: areaPath("los-angeles-ca") },
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
          <h2 className="font-bb-display text-3xl font-bold">Add Extra Care to Your Booking</h2>
          <p className="text-white/80">
            Bath &amp; Tidy starts at {bathAndTidy.pricing.small.price} — schedule online and add extras at checkout.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <BookButton location="service_addons_cta" variant="primary" />
            <SecondaryLinkButton location="service_addons_cta" variant="secondary" label={`Call ${business.phoneDisplay}`} href={business.phoneHref} />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, servicePath, areaPath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("deshedding-treatment")}`;
const description =
  "Deshedding treatment for dogs and cats in Funkstown, MD — a deeper deshed to cut down on loose fur and shedding around the house.";

export const metadata: Metadata = pageMetadata({
  title: "Deshedding Treatment in Funkstown, MD",
  description,
  path: servicePath("deshedding-treatment"),
});

const faqs = [
  {
    question: "What is a deshedding treatment?",
    answer:
      "It's a deeper bath and brush-out focused on pulling loose undercoat fur that regular brushing at home can miss, leaving your pet shedding less afterward.",
  },
  {
    question: "Which pets benefit most from deshedding?",
    answer:
      "Heavy-coated and double-coated breeds tend to benefit the most, especially during seasonal shedding. Call " +
      business.phoneDisplay +
      " and we can tell you if it's a good fit for your pet's coat.",
  },
  {
    question: "Can I add deshedding to a full groom?",
    answer: "Yes — deshedding can be added to a full groom or booked as part of a bath & brush visit.",
  },
];

export default function DesheddingTreatmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Deshedding Treatment", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Deshedding Treatment", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Deshedding Treatment", href: servicePath("deshedding-treatment") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Add-On Service</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Deshedding Treatment in Funkstown, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            A deeper deshedding treatment for heavy-coated dogs and cats, aimed at clearing loose
            undercoat and cutting down on shedding around the house.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_deshedding" variant="primary" />
            <SecondaryLinkButton location="service_deshedding" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.creamFluffyDog.alt} src={photos.creamFluffyDog.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A deeper bath and brush-out focused on loose undercoat",
              "Less shedding around the house afterward",
              "Available for dogs and cats",
              "Can be added to a full groom or a bath & brush visit",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-sp-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-sp-purple-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">Related Services & Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("dog-bath-and-brush")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-purple-dark">
            Dog Bath & Brush
          </Link>
          <Link href={servicePath("dog-grooming")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-purple-dark">
            Dog Grooming
          </Link>
          <Link href={areaPath("funkstown-md")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-purple-dark">
            Serving Funkstown, MD
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-sp-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-sp-display text-3xl font-bold">Book a Deshedding Treatment</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_deshedding_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

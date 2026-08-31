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
import { business, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("cat-grooming")}`;
const description =
  "Professional cat grooming near Hagerstown, MD at Sittin' Pretty Pet Grooming in Funkstown — gentle, experienced handling for cats.";

export const metadata: Metadata = pageMetadata({
  title: "Cat Grooming Near Hagerstown, MD",
  description,
  path: servicePath("cat-grooming"),
});

const faqs = [
  {
    question: "Do you groom cats?",
    answer: "Yes — Sittin' Pretty offers professional cat grooming in addition to our dog grooming services.",
  },
  {
    question: "Is cat grooming handled differently than dog grooming?",
    answer:
      "Yes, cats are groomed with their own approach and pace. Call " +
      business.phoneDisplay +
      " to discuss your cat's temperament and coat before scheduling.",
  },
  {
    question: "How do I schedule cat grooming?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your cat's grooming appointment.`,
  },
];

export default function CatGroomingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Cat Grooming", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Cat Grooming", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Cat Grooming", href: servicePath("cat-grooming") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Cat Grooming</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Cat Grooming Near Hagerstown, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            Professional cat grooming at our Funkstown salon, for owners who&apos;d rather leave it to an
            experienced groomer than handle it at home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_cat_grooming" variant="primary" />
            <SecondaryLinkButton location="service_cat_grooming" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption="Cat grooming at Sittin' Pretty Pet Grooming" aspect="square" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Gentle, experienced handling",
              "A calm, unhurried approach suited to cats",
              "Available at the same Funkstown salon as our dog grooming",
              "Call ahead so we can plan around your cat's temperament",
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
          <Link href={servicePath("dog-grooming")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-purple-dark">
            Dog Grooming
          </Link>
          <Link href={areaPath("hagerstown-md")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-purple-dark">
            Serving Hagerstown, MD
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
          <h2 className="font-sp-display text-3xl font-bold">Book Cat Grooming</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_cat_grooming_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

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

const url = `${SITE_URL}${servicePath("nail-trim-ear-cleaning")}`;
const description =
  "Nail trimming and ear cleaning for dogs and cats in Funkstown, MD — available as part of a full groom or as a standalone visit.";

export const metadata: Metadata = pageMetadata({
  title: "Nail Trim & Ear Cleaning in Funkstown, MD",
  description,
  path: servicePath("nail-trim-ear-cleaning"),
});

const faqs = [
  {
    question: "Can I book just a nail trim, without a full groom?",
    answer:
      "Yes — nail trimming and ear cleaning are both available as a quick standalone visit, separate from a full groom.",
  },
  {
    question: "How often should my pet's nails be trimmed?",
    answer:
      "It depends on your pet's activity level and how quickly their nails grow. Call " +
      business.phoneDisplay +
      " and we can recommend a schedule.",
  },
  {
    question: "Do you trim nails and clean ears for cats too?",
    answer: "Yes — nail trim and ear cleaning is available for cats as well as dogs.",
  },
];

export default function NailTrimEarCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Nail Trim & Ear Cleaning", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Nail Trim & Ear Cleaning", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Nail Trim & Ear Cleaning", href: servicePath("nail-trim-ear-cleaning") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Add-On Service</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Nail Trim & Ear Cleaning in Funkstown, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            A quick, low-stress nail trim and ear cleaning for dogs and cats — included with a full
            groom, or booked on its own when that&apos;s all your pet needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_nail_ear" variant="primary" />
            <SecondaryLinkButton location="service_nail_ear" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.tanChihuahua.alt} src={photos.tanChihuahua.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Nail trimming for dogs and cats",
              "Ear cleaning to help prevent buildup and irritation",
              "A quick, low-stress visit — no full groom required",
              "Gentle handling for nervous or first-time pets",
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
          <Link href={servicePath("cat-grooming")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-purple-dark">
            Cat Grooming
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
          <h2 className="font-sp-display text-3xl font-bold">Book a Nail Trim or Ear Cleaning</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_nail_ear_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

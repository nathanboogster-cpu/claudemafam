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

const url = `${SITE_URL}${servicePath("dog-flea-tick-treatment")}`;
const description =
  "Dog flea and tick treatment in Eatontown, NJ — available as an add-on to any bath or full groom, at Flo's Happy Clipper on Main St.";

export const metadata: Metadata = pageMetadata({
  title: "Dog Flea & Tick Treatment in Eatontown, NJ",
  description,
  path: servicePath("dog-flea-tick-treatment"),
});

const faqs = [
  {
    question: "Is flea and tick treatment included with a full groom?",
    answer: "It's available as an add-on to any bath or full groom — just ask when you schedule.",
  },
  {
    question: "Can you treat my dog if they already have fleas or ticks?",
    answer:
      "Call " +
      business.phoneDisplay +
      " ahead of time to let us know — we can talk through what your dog needs and make sure we're set up for the visit.",
  },
  {
    question: "Can I book flea and tick treatment on its own?",
    answer: "Yes — it's available as a standalone add-on any time you schedule a bath or groom.",
  },
];

export default function DogFleaTickTreatmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Flea & Tick Treatment", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Dog Flea & Tick Treatment", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Dog Flea & Tick Treatment", href: servicePath("dog-flea-tick-treatment") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Add-On Service</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            Dog Flea & Tick Treatment in Eatontown, NJ
          </h1>
          <p className="mt-4 text-lg text-fh-ink-soft">
            A flea and tick treatment added to your dog&apos;s bath or groom, to help keep them comfortable
            and pest-free.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_flea_tick" variant="primary" />
            <SecondaryLinkButton location="service_flea_tick" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.terrierMixGroom.alt} src={photos.terrierMixGroom.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="fh-paw-pattern bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A flea and tick treatment applied during your dog's bath or groom",
              "Help easing itching and discomfort caused by fleas and ticks",
              "Available as an add-on to any bathing or full-groom appointment",
              "Call ahead if you know your dog has fleas or ticks so we can plan the visit",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-fh-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-fh-pink-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Related Services & Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("dog-grooming")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Full Dog Grooming
          </Link>
          <Link href={servicePath("dog-bathing")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Dog Bathing
          </Link>
          <Link href={areaPath("red-bank-nj")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Serving Red Bank, NJ
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="relative overflow-hidden bg-fh-ink text-white">
        <div className="fh-blob -left-16 top-0 h-56 w-56 bg-fh-pink/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Schedule Flea & Tick Treatment</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_flea_tick_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

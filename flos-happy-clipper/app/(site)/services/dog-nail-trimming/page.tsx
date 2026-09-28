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

const url = `${SITE_URL}${servicePath("dog-nail-trimming")}`;
const description =
  "Dog nail trimming in Eatontown, NJ — a quick, careful trim available on its own or added to a bath or full groom, at Flo's Happy Clipper on Main St.";

export const metadata: Metadata = pageMetadata({
  title: "Dog Nail Trimming in Eatontown, NJ",
  description,
  path: servicePath("dog-nail-trimming"),
});

const faqs = [
  {
    question: "Can I just bring my dog in for a nail trim?",
    answer: "Yes — nail trims are available as their own quick appointment, separate from a bath or full groom.",
  },
  {
    question: "How often does my dog need a nail trim?",
    answer:
      "It depends on your dog's activity level and how quickly their nails grow. Call " +
      business.phoneDisplay +
      " and we can recommend a schedule for your dog.",
  },
  {
    question: "My dog is nervous about having their nails done — can you still help?",
    answer:
      "Yes — we're patient with nervous and first-time dogs and take the time needed to keep them comfortable.",
  },
];

export default function DogNailTrimmingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Nail Trimming", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Dog Nail Trimming", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Dog Nail Trimming", href: servicePath("dog-nail-trimming") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Add-On Service</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            Dog Nail Trimming in Eatontown, NJ
          </h1>
          <p className="mt-4 text-lg text-fh-ink-soft">
            A quick, careful nail trim to keep your dog comfortable — available on its own or added to a
            bath or full groom at our Main St salon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_nail_trim" variant="primary" />
            <SecondaryLinkButton location="service_nail_trim" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.toyPoodleApricot.alt} src={photos.toyPoodleApricot.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="fh-paw-pattern bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A careful trim of each nail to a safe, comfortable length",
              "Gentle handling for dogs who are nervous about their paws",
              "A quick appointment — no bath or haircut required",
              "Can be added to any bathing or full-groom appointment",
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
          <Link href={areaPath("tinton-falls-nj")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Serving Tinton Falls, NJ
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="relative overflow-hidden bg-fh-ink text-white">
        <div className="fh-blob -left-16 top-0 h-56 w-56 bg-fh-blue/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Schedule a Nail Trim</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_nail_trim_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, servicePath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("nail-ear-care")}`;
const description =
  "Mobile nail trimming, nail grinding, and ear cleaning for dogs — as a standalone visit or added to a full groom, at your home in El Sobrante, CA.";

export const metadata: Metadata = pageMetadata({
  title: "Dog Nail Trimming, Grinding & Ear Cleaning",
  description,
  path: servicePath("nail-ear-care"),
});

const included = ["Nail trimming", "Nail grinding", "Ear cleaning", "One-on-one, cage-free handling"];

const faqs = [
  {
    question: "Can I book just nail care without a full groom?",
    answer:
      "Yes — nail trimming, nail grinding, and ear cleaning can be booked as a standalone mobile visit or added on to a full groom.",
  },
  {
    question: "What's the difference between nail trimming and nail grinding?",
    answer:
      "Both are offered as part of nail care. Call to discuss which is the better fit for your dog's nails and temperament.",
  },
  {
    question: "Is ear cleaning included with nail care visits?",
    answer: "Ear cleaning is available as part of this service — let us know when scheduling.",
  },
];

export default function NailEarCarePage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Nail Care & Ear Cleaning", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Nail Care & Ear Cleaning", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Nail Care & Ear Cleaning", href: servicePath("nail-ear-care") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Add-On or Standalone Visit</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Nail Care & Ear Cleaning
          </h1>
          <p className="mt-4 text-lg text-psl-ink-soft">
            Quick, focused nail trimming, nail grinding, and ear cleaning — on
            its own or paired with a full groom, always one-on-one at your home.
          </p>
          <ul className="mt-6 space-y-2">
            {included.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-psl-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-psl-pink-dark" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_nail_ear" variant="primary" />
            <RequestButton location="service_nail_ear" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.bulldogBandana.alt} src={photos.bulldogBandana.src} aspect="square" className="w-full" priority />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">Related Services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("mobile-dog-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Mobile Dog Grooming
          </Link>
          <Link href={servicePath("dog-haircuts-full-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Dog Haircuts & Full Grooming
          </Link>
          <Link href={servicePath("bath-deshedding")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Warm Water Bath & Deshedding
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-psl-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-psl-display text-3xl font-bold">Book Nail & Ear Care</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_nail_ear_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

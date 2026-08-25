import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, serviceFeatures, servicePath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("mobile-dog-grooming")}`;
const description =
  "Full-service mobile dog grooming brought directly to your home in El Sobrante, CA. Fully equipped mobile setup, cage-free, one-on-one attention.";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Grooming — We Come to You",
  description,
  path: servicePath("mobile-dog-grooming"),
});

const faqs = [
  {
    question: "How does mobile dog grooming work?",
    answer:
      "Pet Spa Luxe arrives at your home with a fully equipped mobile grooming setup. Your dog is groomed right there — no drop-off, no car ride, and no time spent waiting in a salon lobby.",
  },
  {
    question: "Is the mobile grooming environment cage-free?",
    answer:
      "Yes. Grooming happens in a cage-free environment with one-on-one attention throughout the appointment.",
  },
  {
    question: "What's included in a mobile dog grooming appointment?",
    answer:
      "Depending on what your dog needs, a mobile grooming appointment can include a warm-water bath with premium shampoo and conditioner, a full groom or breed-specific haircut, deshedding, nail trimming or grinding, ear cleaning, and hand blow drying.",
  },
  {
    question: "Where does Pet Spa Luxe offer mobile grooming?",
    answer:
      "Pet Spa Luxe is based in El Sobrante, CA and grooms dogs by mobile appointment throughout the surrounding Bay Area. Call to confirm availability at your address.",
  },
];

export default function MobileDogGroomingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Mobile Dog Grooming", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Mobile Dog Grooming", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Mobile Dog Grooming", href: servicePath("mobile-dog-grooming") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Flagship Service</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Mobile Dog Grooming in El Sobrante, CA
          </h1>
          <p className="mt-4 text-lg text-psl-ink-soft">
            Full-service dog grooming brought directly to your home. Pet Spa
            Luxe&apos;s fully equipped mobile grooming setup means your dog gets
            groomed at your door — no car ride, no waiting room, no cages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_mobile_dog_grooming" variant="primary" />
            <RequestButton location="service_mobile_dog_grooming" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.vanInterior.alt} src={photos.vanInterior.src} aspect="video" className="w-full" priority />
      </section>

      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
            What&apos;s Included
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {serviceFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-psl-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-psl-pink-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
          Related Services
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("dog-haircuts-full-grooming")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Dog Haircuts & Full Grooming
          </Link>
          <Link href={servicePath("bath-deshedding")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Warm Water Bath & Deshedding
          </Link>
          <Link href={servicePath("nail-ear-care")} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Nail Care & Ear Cleaning
          </Link>
          <Link href={`${PATHS.serviceAreas}/el-sobrante`} className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass">
            Mobile Grooming in El Sobrante
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-psl-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-psl-display text-3xl font-bold">Book Mobile Dog Grooming</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule your dog&apos;s mobile grooming appointment.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <CallButton location="service_mobile_dog_grooming_cta" variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
}

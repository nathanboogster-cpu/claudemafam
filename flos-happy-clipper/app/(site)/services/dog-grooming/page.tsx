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

const url = `${SITE_URL}${servicePath("dog-grooming")}`;
const description =
  "Full-service dog grooming in Eatontown, NJ — bath, brush-out, breed-appropriate haircut, nail trim, and ear cleaning from a long-established local groomer.";

export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming in Eatontown, NJ",
  description,
  path: servicePath("dog-grooming"),
});

const faqs = [
  {
    question: "What's included in a dog grooming appointment?",
    answer:
      "A full dog groom at Flo's Happy Clipper includes a bath, brush-out, breed-appropriate haircut or trim, nail trim, and ear cleaning. Call us at " +
      business.phoneDisplay +
      " and we can talk through exactly what your dog needs based on breed, coat, and age.",
  },
  {
    question: "Do you groom large or double-coated dogs?",
    answer:
      "Yes. Local pet owners regularly bring in large-breed and double-coated dogs — including German Shepherds and Portuguese Water Dogs — and mention how comfortable they are with the results.",
  },
  {
    question: "Can you groom nervous or first-time dogs?",
    answer:
      "Yes — many of our regular customers specifically mention how comfortable their nervous or first-time dogs are with our grooming. Call ahead to let us know about any special handling your dog needs.",
  },
  {
    question: "Do you groom poodles or other specialty coats?",
    answer:
      "Yes, we have experience with poodles and other dogs that need specialty trims. Call us to discuss what you're looking for.",
  },
  {
    question: "How do I schedule a dog grooming appointment?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your dog's groom.`,
  },
];

export default function DogGroomingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Grooming", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Dog Grooming", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Dog Grooming", href: servicePath("dog-grooming") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Flagship Service</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            Dog Grooming in Eatontown, NJ
          </h1>
          <p className="mt-4 text-lg text-fh-ink-soft">
            Full-service dog grooming at our Main St salon — a thorough bath, brush-out, breed-appropriate
            haircut or trim, nail trim, and ear cleaning, delivered with the personal attention of an
            established local groomer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_dog_grooming" variant="primary" />
            <SecondaryLinkButton location="service_dog_grooming" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.doubleCoatedGroom.caption} aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A thorough bath and brush-out",
              "A haircut or trim suited to your dog's breed and coat",
              "Nail trim and ear cleaning",
              "Personal, one-on-one attention — not a rushed assembly line",
              "Comfortable handling for nervous, large-breed, and double-coated dogs",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-fh-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-fh-amber-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Related Services & Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("dog-bathing")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink hover:border-fh-amber-dark">
            Dog Bathing
          </Link>
          <Link href={PATHS.gallery} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink hover:border-fh-amber-dark">
            See Our Work
          </Link>
          <Link href={areaPath("tinton-falls-nj")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink hover:border-fh-amber-dark">
            Dog Grooming Near Tinton Falls
          </Link>
          <Link href={areaPath("red-bank-nj")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink hover:border-fh-amber-dark">
            Dog Grooming Near Red Bank
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-fh-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Book Your Dog&apos;s Groom</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_dog_grooming_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

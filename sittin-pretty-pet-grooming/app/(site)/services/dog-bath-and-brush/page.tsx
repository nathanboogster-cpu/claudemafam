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

const url = `${SITE_URL}${servicePath("dog-bath-and-brush")}`;
const description =
  "Dog bath and brush service in Funkstown, MD — a thorough wash and brush-out for dogs who need a refresh between full grooms. Serving the Hagerstown area.";

export const metadata: Metadata = pageMetadata({
  title: "Dog Bath & Brush in Funkstown, MD",
  description,
  path: servicePath("dog-bath-and-brush"),
});

const faqs = [
  {
    question: "What's the difference between dog bathing and a full groom?",
    answer:
      "A bath & brush is a thorough wash and brush-out without a haircut — a good option between full grooms, or for dogs who don't need a trim right now.",
  },
  {
    question: "Can I book just a bath, without a full groom?",
    answer: "Yes — dog bathing is available as its own appointment, separate from a full haircut.",
  },
  {
    question: "How often should my dog get a bath and brush?",
    answer:
      "It depends on your dog's coat and lifestyle. Call " + business.phoneDisplay + " and we can recommend a schedule for your dog specifically.",
  },
];

export default function DogBathAndBrushPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Bath & Brush", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Dog Bath & Brush", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Dog Bath & Brush", href: servicePath("dog-bath-and-brush") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Bathing Service</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Dog Bath & Brush in Funkstown, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            A thorough wash and brush-out for dogs who need a refresh between full grooms — or for owners
            who just want a professional bath without a haircut.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_dog_bath" variant="primary" />
            <SecondaryLinkButton location="service_dog_bath" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption="Dog bathing at Sittin' Pretty Pet Grooming" aspect="square" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A thorough wash and rinse",
              "A full brush-out to clear loose coat",
              "No haircut included — just bathing and brushing",
              "A quicker, lower-cost option between full grooms",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-sp-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-sp-green-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">Related Services & Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("dog-grooming")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-green-dark">
            Full Dog Grooming
          </Link>
          <Link href={servicePath("cat-grooming")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-green-dark">
            Cat Grooming
          </Link>
          <Link href={areaPath("funkstown-md")} className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-green-dark">
            Serving Funkstown, MD
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-sp-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-sp-display text-3xl font-bold">Book a Dog Bath & Brush</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_dog_bath_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

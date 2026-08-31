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

const url = `${SITE_URL}${servicePath("puppy-first-groom")}`;
const description =
  "A gentle first grooming visit for puppies in Funkstown, MD — a low-stress introduction to the grooming table at Sittin' Pretty Pet Grooming.";

export const metadata: Metadata = pageMetadata({
  title: "Puppy's First Groom in Funkstown, MD",
  description,
  path: servicePath("puppy-first-groom"),
});

const faqs = [
  {
    question: "When should my puppy have their first grooming visit?",
    answer:
      "Call " + business.phoneDisplay + " to talk through your puppy's age, breed, and coat, and we can recommend timing.",
  },
  {
    question: "What happens during a puppy's first groom?",
    answer:
      "The visit is kept short and gentle — the goal is a calm, positive first experience on the grooming table, not necessarily a full haircut.",
  },
  {
    question: "Do you groom kittens too?",
    answer: "Yes — a gentle first visit is available for kittens as well as puppies.",
  },
];

export default function PuppyFirstGroomPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Puppy's First Groom", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Puppy's First Groom", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Puppy's First Groom", href: servicePath("puppy-first-groom") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>New Pet Owners</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Puppy&apos;s First Groom in Funkstown, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            A gentle, low-stress introduction to the grooming table for puppies (and kittens) —
            focused on a calm first experience, not just a haircut.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_puppy_groom" variant="primary" />
            <SecondaryLinkButton location="service_puppy_groom" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.whiteFluffyPuppy.alt} src={photos.whiteFluffyPuppy.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A calm, gentle introduction to grooming",
              "Kept short — a positive first experience comes first",
              "Available for puppies and kittens",
              "A good starting point before regular grooming visits begin",
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
          <h2 className="font-sp-display text-3xl font-bold">Book Your Puppy&apos;s First Groom</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_puppy_groom_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

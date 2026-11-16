import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, servicePath, areaPath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("puppy-grooming")}`;
const description =
  "Puppy grooming in Eatontown, NJ — a gentle, patient first grooming visit that helps your puppy get used to the bath, the dryer, and the table at Flo's Happy Clipper on Main St.";

export const metadata: Metadata = pageMetadata({
  title: "Puppy Grooming in Eatontown, NJ",
  description,
  path: servicePath("puppy-grooming"),
});

const faqs = [
  {
    question: "When should my puppy have their first groom?",
    answer:
      "Many owners start once their puppy has had its vaccinations, so early visits are a positive, low-pressure introduction rather than a full makeover. Call " +
      business.phoneDisplay +
      " and we can talk through timing for your puppy.",
  },
  {
    question: "What happens at a puppy's first visit?",
    answer:
      "The goal is a calm, positive first experience: a gentle bath, brush-out, and a light tidy, with time for your puppy to get used to the sounds and handling of a grooming salon.",
  },
  {
    question: "Do I need an appointment?",
    answer: `Yes. Call ${business.phoneDisplay} to check availability and book your puppy's first visit.`,
  },
];

export default function PuppyGroomingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Puppy Grooming", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Puppy Grooming", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Puppy Grooming", href: servicePath("puppy-grooming") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Puppy&apos;s First Groom</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            Puppy Grooming in Eatontown, NJ
          </h1>
          <p className="mt-4 text-lg text-fh-ink-soft">
            A puppy&apos;s first trips to the groomer shape how they feel about grooming for life. At our Main St
            salon we keep early visits gentle and unhurried, so your puppy learns that the bath, the dryer, and the
            grooming table are nothing to worry about.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_puppy_grooming" variant="primary" />
            <SecondaryLinkButton location="service_puppy_grooming" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.maltipooPuppy.alt} src={photos.maltipooPuppy.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="fh-paw-pattern bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">What an Early Visit Can Include</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A gentle bath and blow-dry, introduced at your puppy's pace",
              "A brush-out to get your puppy used to being handled",
              "A light tidy around the face, feet, and sanitary area",
              "A nail trim, so paws get used to being touched early",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-fh-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-fh-pink-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Why Start Early</h2>
        <p className="mt-4 text-fh-ink-soft">
          Breeds with coats that keep growing, like poodles, doodles, Shih Tzus, and bichons, will need regular
          grooming their whole lives. Short, positive visits while they&apos;re young make every future
          appointment easier for your dog, and give you a chance to plan a grooming schedule that fits their coat.
        </p>
        <p className="mt-4 text-fh-ink-soft">
          Once your puppy is comfortable, they can move on to a{" "}
          <Link href={servicePath("dog-bathing")} className="font-semibold text-fh-pink-dark hover:underline">
            bath and brush-out
          </Link>{" "}
          or a{" "}
          <Link href={servicePath("dog-grooming")} className="font-semibold text-fh-pink-dark hover:underline">
            full dog groom
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Related Services & Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("dog-grooming")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Full Dog Grooming
          </Link>
          <Link href={servicePath("dog-nail-trimming")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Dog Nail Trimming
          </Link>
          <Link href={areaPath("eatontown-nj")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Dog Grooming in Eatontown, NJ
          </Link>
        </div>
      </section>

      <RelatedPosts service="puppy-grooming" />

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="relative overflow-hidden bg-fh-ink text-white">
        <div className="fh-blob -right-16 top-0 h-56 w-56 bg-fh-pink/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Book Your Puppy&apos;s First Groom</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_puppy_grooming_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

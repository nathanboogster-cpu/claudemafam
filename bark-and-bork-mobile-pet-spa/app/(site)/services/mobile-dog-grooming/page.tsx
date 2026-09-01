import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { ProcessSteps } from "@/components/ProcessSteps";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, photos, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("mobile-dog-grooming")}`;
const description =
  "Bark and Bork brings professional dog grooming to your home — based in Compton, serving greater Los Angeles. No car ride, no waiting room. Book online.";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Grooming in Los Angeles",
  description,
  path: servicePath("mobile-dog-grooming"),
});

const faqs = [
  {
    question: "What exactly is mobile dog grooming?",
    answer:
      "Mobile dog grooming means the groomer comes to you. Instead of driving your dog to a salon, Bark and Bork brings the bath, dryer, and grooming table directly to your home for the appointment.",
  },
  {
    question: "Where does Bark and Bork groom dogs?",
    answer: `We're based in ${business.homeBase} and groom dogs throughout ${business.broadMarket}. See our Service Areas page for specific cities.`,
  },
  {
    question: "Is mobile grooming more expensive than a salon?",
    answer: `Bath & Tidy starts at $75+ and Full Groom starts at $100+ for small dogs — see our full pricing table on the Services page. ${
      "Starting prices may vary depending on coat condition, grooming requirements, pet size, matting, and other service needs where applicable."
    }`,
  },
  {
    question: "How do I book a mobile grooming appointment?",
    answer: `Choose a service and book online at ${business.bookingUrl}, or call ${business.phoneDisplay}.`,
  },
];

export default function MobileDogGroomingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          pageUrl: url,
          name: "Mobile Dog Grooming",
          description,
        })}
      />
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
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">
            Mobile Dog Grooming in Los Angeles
          </h1>
          <p className="mt-4 text-lg text-bb-ink-soft">
            Bark and Bork is based in {business.homeBase} and brings professional dog grooming directly to your
            home anywhere across {business.broadMarket}. It&apos;s a convenient, more personal alternative to the
            traditional salon trip — no car ride, no waiting room, just a scheduled appointment at your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="service_mobile_grooming" variant="primary" label="Book Mobile Grooming" />
            <SecondaryLinkButton location="service_mobile_grooming" variant="secondary" label="View Pricing" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder
          caption={photos.vanInteriorSkylight.alt}
          src={photos.vanInteriorSkylight.src}
          aspect="portrait"
          className="w-full"
          priority
        />
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">How Mobile Grooming Works</h2>
          <ProcessSteps className="mt-8" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Why Choose Mobile Grooming</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {[
            "No trip to a traditional grooming salon",
            "Grooming happens at your own home",
            "Individual, one-on-one appointment experience",
            "Convenient scheduling that fits a busy Los Angeles lifestyle",
          ].map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-bb-ink-soft">
              <CheckIcon className="h-4 w-4 shrink-0 text-bb-coral-dark" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Choose Your Grooming Package</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={servicePath("full-dog-grooming")}
            className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark"
          >
            Full Groom
          </Link>
          <Link
            href={servicePath("bath-and-tidy")}
            className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark"
          >
            Bath &amp; Tidy
          </Link>
          <Link
            href={servicePath("deshedding")}
            className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark"
          >
            Deshedding
          </Link>
          <Link
            href={areaPath("compton-ca")}
            className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark"
          >
            Mobile Grooming in Compton
          </Link>
          <Link
            href={areaPath("los-angeles-ca")}
            className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark"
          >
            Mobile Grooming in Los Angeles
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-bb-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bb-display text-3xl font-bold">Book Mobile Grooming Today</h2>
          <p className="text-white/80">Schedule your dog&apos;s appointment online, any day of the week.</p>
          <BookButton location="service_mobile_grooming_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

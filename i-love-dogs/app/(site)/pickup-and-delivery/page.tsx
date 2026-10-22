import Link from "next/link";
import { business, faqs, PATHS, SITE_URL, townPages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { FaqBlock } from "@/components/FaqBlock";
import { Eyebrow } from "@/components/Eyebrow";
import { BottomCta } from "@/components/BottomCta";
import { StudioInfoCard } from "@/components/StudioInfoCard";
import { PinIcon } from "@/components/icons";

const pageUrl = `${SITE_URL}${PATHS.pickup}`;

export const metadata = pageMetadata({
  title: "Dog Grooming Pickup & Delivery | Bryn Mawr, PA",
  description:
    "Dog grooming with pickup and delivery from I Love Dogs in Bryn Mawr, PA. Call 610-525-7387 to confirm we cover your address.",
  path: PATHS.pickup,
});

const steps = [
  { title: "Call us.", body: "Tell us your address so we can confirm we cover it." },
  { title: "We pick up your dog.", body: "" },
  { title: "We groom.", body: "Warm bath and chemical-free products." },
  { title: "We bring your dog home.", body: "" },
];

const pickupFaqs = [
  faqs[1],
  {
    question: "Do you groom at my home?",
    answer:
      "No. Every groom happens at our salon in Bryn Mawr. Pickup and delivery means we collect your dog and bring them home after the groom.",
  },
  faqs[5],
];

export default function PickupPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Pickup & Delivery", href: PATHS.pickup }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Pickup & Delivery", url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Pet Pickup and Delivery for Grooming",
          description:
            "Pickup and delivery service for dog grooming clients of I Love Dogs Pet Grooming in Bryn Mawr, PA.",
        })}
      />

      <section className="bg-gradient-to-b from-cream-deep to-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Pickup &amp; Delivery</Eyebrow>
            <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Dog Grooming Pickup &amp; Delivery</h1>
            <p className="mt-4 text-lg text-ink-soft">
              What if getting your dog to the groomer wasn&rsquo;t your problem?
              <br />
              We pick up your dog and bring them back clean.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton location="pickup_top" />
            </div>
          </div>
          <StudioInfoCard location="pickup_hero" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">How Pickup &amp; Delivery Works</h2>
        </div>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold text-ink">{step.title}</h3>
              {step.body ? <p className="mt-1 text-sm text-ink-soft">{step.body}</p> : null}
              {i === 2 ? (
                <Link href={`${PATHS.dogGrooming}#pricing`} className="mt-1 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand hover:underline">
                  See packages and prices →
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-ink text-center">Towns We Serve</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
            We serve Bryn Mawr, Gladwyne, Haverford, Ardmore, Havertown and the greater Eastern Main Line. Call{" "}
            {business.phoneDisplay} with your address to confirm pickup.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {townPages.map((t) => (
              <Link
                key={t.slug}
                href={t.slug}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-cream p-4 text-center text-sm font-semibold text-brand hover:bg-cream-deep"
              >
                <PinIcon className="h-4 w-4 shrink-0" />
                {t.city} →
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href={PATHS.serviceArea} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
              See the service area →
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <FaqBlock items={pickupFaqs} title="Pickup & Delivery FAQ" />
      </section>

      <BottomCta title="Want us to pick up your dog?" body="Call with your address so we can confirm we cover it." location="pickup_bottom" />
    </div>
  );
}

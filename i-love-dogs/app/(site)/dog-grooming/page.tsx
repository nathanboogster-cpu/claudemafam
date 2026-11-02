import Link from "next/link";
import { beforeAfterPhotos, faqs, PATHS, SITE_URL, townPages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { CallButton, DirectionsButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqBlock } from "@/components/FaqBlock";
import { Eyebrow } from "@/components/Eyebrow";
import { PackageCards } from "@/components/PackageCards";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon } from "@/components/icons";
import { Photo } from "@/components/Photo";
import { RecentWork } from "@/components/RecentWork";

const pageUrl = `${SITE_URL}${PATHS.dogGrooming}`;

export const metadata = pageMetadata({
  title: "Dog Grooming Prices & Packages | Bryn Mawr, PA",
  description:
    "Dog grooming packages in Bryn Mawr, PA: Bath & Pamper from $75, The Works from $115, Full Spa Day from $150. Call 610-525-7387.",
  path: PATHS.dogGrooming,
});

// FAQ #1 (packages), #7 (cost), #3 (products), #4 (warm water).
const groomingFaqs = [faqs[0], faqs[6], faqs[2], faqs[3]];

export default function DogGroomingPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Dog Grooming", href: PATHS.dogGrooming }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Dog Grooming", url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Dog Grooming",
          description: "Dog grooming packages in Bryn Mawr, PA: Bath & Pamper, The Works and Full Spa Day.",
          withPackages: true,
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>Bryn Mawr, PA · Dog Grooming</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Dog Grooming in Bryn Mawr</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Not sure which groom your dog needs?
            <br />
            Three packages, with starting prices up front.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location="dog_grooming_top" />
            <DirectionsButton location="dog_grooming_top" />
          </div>
        </div>
        <Photo photo={beforeAfterPhotos[0]} aspect="square" preload caption="Before and after a groom at our Bryn Mawr salon." />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="pricing" className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Grooming Packages and Prices
          </h2>
          <div className="mt-6">
            <PackageCards />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">How We Wash</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2 text-ink-soft">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
              We use chemical-free washing products.
            </li>
            <li className="flex items-start gap-2 text-ink-soft">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
              The water is heated by a tankless system, so the bath stays warm throughout.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">Booking</h2>
          <p className="mt-4 text-ink-soft">Call 610-525-7387 to book and to get a quote for your dog.</p>
          <p className="mt-2 text-ink-soft">
            Can&rsquo;t drop off?{" "}
            <Link href={PATHS.pickup} className="font-semibold text-brand hover:underline">
              Ask about pickup and delivery.
            </Link>
          </p>
          <CallButton location="dog_grooming_booking" className="mt-5" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <RecentWork offset={1} title="Before and After" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <ProcessSteps title="What to Expect at Your Dog's Groom" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <WhyChooseUs />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FaqBlock items={groomingFaqs} title="Dog Grooming FAQ" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-xl font-bold text-ink text-center">More Ways We Can Help</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link href={PATHS.pickup} className="rounded-xl border border-border bg-white p-4 text-sm font-semibold text-brand hover:bg-cream-deep">
            Pickup &amp; Delivery →
          </Link>
          {townPages.map((t) => (
            <Link
              key={t.slug}
              href={t.slug}
              className="rounded-xl border border-border bg-white p-4 text-sm font-semibold text-brand hover:bg-cream-deep"
            >
              Dog Grooming for {t.city} →
            </Link>
          ))}
        </div>
      </section>

      <BottomCta title="Ready to book your dog's groom?" location="dog_grooming_bottom" />
    </div>
  );
}

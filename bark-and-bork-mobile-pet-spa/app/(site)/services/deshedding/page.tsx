import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, addOns, photos, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const deshedInfo = addOns.find((a) => a.slug === "deshedding-addon")!;
const url = `${SITE_URL}${servicePath("deshedding")}`;
const description =
  "Mobile dog deshedding treatment from Bark and Bork — $15, about 30 minutes, added on to any grooming appointment. Serving Compton and greater Los Angeles.";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Deshedding Treatment",
  description,
  path: servicePath("deshedding"),
});

const faqs = [
  {
    question: "What is a deshedding treatment?",
    answer: deshedInfo.detail,
  },
  {
    question: "How much does deshedding cost?",
    answer: `Deshedding is ${deshedInfo.price} and takes about ${deshedInfo.duration}, added on to a Bath & Tidy or Full Groom appointment.`,
  },
  {
    question: "Which dogs benefit most from deshedding?",
    answer:
      "Double-coated and heavy-shedding breeds like Huskies and German Shepherds tend to benefit most from a deshedding treatment.",
  },
  {
    question: "Can I add deshedding to any appointment?",
    answer: "Yes — deshedding can be added on to a Bath & Tidy or Full Groom appointment when you book online.",
  },
];

export default function DesheddingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Deshedding Treatment", description, priceRange: "15" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Deshedding", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Deshedding", href: servicePath("deshedding") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Add-On Service</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Mobile Dog Deshedding</h1>
          <p className="mt-4 text-lg text-bb-ink-soft">{deshedInfo.detail}</p>
          <p className="mt-4 flex items-baseline gap-2">
            <span className="font-bb-display text-3xl font-bold text-bb-coral-dark">{deshedInfo.price}</span>
            <span className="text-sm text-bb-ink-soft">· about {deshedInfo.duration}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="service_deshedding" variant="primary" />
            <SecondaryLinkButton location="service_deshedding" variant="secondary" label="View All Services" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder
          caption="A Bark and Bork client dog after a mobile grooming appointment"
          src={photos.groomBichonHeld.src}
          aspect="portrait"
          className="w-full"
          priority
        />
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Best For Heavy-Shedding Breeds</h2>
          <p className="mt-4 max-w-2xl text-bb-ink-soft">
            Deshedding is particularly relevant for Huskies, German Shepherds, and other double-coated or
            high-shedding dogs. It&apos;s added on to a Bath &amp; Tidy or Full Groom appointment — it&apos;s not a
            standalone visit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Related Services &amp; Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            { label: "Full Groom", href: servicePath("full-dog-grooming") },
            { label: "Bath & Tidy", href: servicePath("bath-and-tidy") },
            { label: "Dematting", href: servicePath("dematting") },
            { label: "Mobile Grooming in Compton", href: areaPath("compton-ca") },
            { label: "Mobile Grooming in Los Angeles", href: areaPath("los-angeles-ca") },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-bb-border bg-white px-4 py-2 text-sm font-medium text-bb-ink hover:border-bb-coral-dark">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-bb-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bb-display text-3xl font-bold">Add Deshedding to Your Booking</h2>
          <p className="text-white/80">Schedule online — Bark and Bork comes to {business.homeBase} and {business.primaryMarket}.</p>
          <BookButton location="service_deshedding_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

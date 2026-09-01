import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, addOns, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const info = addOns.find((a) => a.slug === "teeth-brushing")!;
const url = `${SITE_URL}${servicePath("teeth-brushing")}`;
const description =
  "Dog teeth brushing from Bark and Bork — $10, about 10 minutes, added on to any mobile grooming appointment. Serving Compton and greater Los Angeles.";

export const metadata: Metadata = pageMetadata({
  title: "Dog Teeth Brushing",
  description,
  path: servicePath("teeth-brushing"),
});

const faqs = [
  {
    question: "What does the teeth brushing add-on include?",
    answer: info.detail,
  },
  {
    question: "Is this the same as a professional dental cleaning?",
    answer:
      "No — this is a teeth brushing add-on during grooming, not a substitute for professional veterinary dental cleaning. Talk to your veterinarian about your dog's dental health needs.",
  },
  {
    question: "How much does it cost?",
    answer: `Teeth Brushing is ${info.price} and takes about ${info.duration}, added on to a Bath & Tidy or Full Groom appointment.`,
  },
  {
    question: "How do I add this to my booking?",
    answer: `Book online at ${business.bookingUrl} and add Teeth Brushing at checkout, or call ${business.phoneDisplay}.`,
  },
];

export default function TeethBrushingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Teeth Brushing", description, priceRange: "10" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Teeth Brushing", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Teeth Brushing", href: servicePath("teeth-brushing") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Add-On Service</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Dog Teeth Brushing</h1>
          <p className="mt-4 text-lg text-bb-ink-soft">{info.detail}</p>
          <p className="mt-4 flex items-baseline gap-2">
            <span className="font-bb-display text-3xl font-bold text-bb-coral-dark">{info.price}</span>
            <span className="text-sm text-bb-ink-soft">· about {info.duration}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="service_teeth_brushing" variant="primary" />
            <SecondaryLinkButton location="service_teeth_brushing" variant="secondary" label="View All Services" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder caption="Dog at a Bark and Bork mobile grooming appointment" aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">A Simple Add-On for Fresher Breath</h2>
          <p className="mt-4 max-w-2xl text-bb-ink-soft">
            A quick teeth brushing added on to your dog&apos;s grooming appointment. For ongoing dental health,
            talk to your veterinarian about a professional dental cleaning plan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Related Services &amp; Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            { label: "Bath & Tidy", href: servicePath("bath-and-tidy") },
            { label: "Full Groom", href: servicePath("full-dog-grooming") },
            { label: "Anal Gland Expression", href: servicePath("anal-gland-expression") },
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
          <h2 className="font-bb-display text-3xl font-bold">Add Teeth Brushing to Your Booking</h2>
          <p className="text-white/80">Schedule online — Bark and Bork comes to {business.homeBase} and {business.primaryMarket}.</p>
          <BookButton location="service_teeth_brushing_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { sizeTiers, business, dematting, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("dematting")}`;
const description =
  "Mobile dog dematting from Bark and Bork, starting at $50+, about 60 minutes. Careful, compassionate dematting for tangled or matted coats. Serving Compton and greater Los Angeles.";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Dog Dematting",
  description,
  path: servicePath("dematting"),
});

const faqs = [
  {
    question: "What happens if my dog is severely matted?",
    answer: dematting.note,
  },
  {
    question: "How much does dematting cost?",
    answer: `Dematting starts at ${dematting.pricing.small} for small dogs and increases by size, up to ${dematting.pricing.xlarge} for extra-large dogs. Approximate duration is about ${dematting.duration}.`,
  },
  {
    question: "Can dematting always save a matted coat?",
    answer:
      "Not always. Severe matting can be painful to brush out, so in those cases we may need to clip the coat short instead, for your dog's comfort and safety. We'll walk you through the best option before starting.",
  },
  {
    question: "How do I book dematting?",
    answer: `Book online at ${business.bookingUrl} or call ${business.phoneDisplay}.`,
  },
];

export default function DemattingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Dematting", description, priceRange: "50" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Dematting", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Dematting", href: servicePath("dematting") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Add-On Service</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Mobile Dog Dematting</h1>
          <p className="mt-4 text-lg text-bb-ink-soft">
            Careful, compassionate dematting for dogs with tangled or matted coats, delivered right at your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="service_dematting" variant="primary" />
            <SecondaryLinkButton location="service_dematting" variant="secondary" label="View All Services" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder caption="Dog after a Bark and Bork dematting treatment" aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Dematting Pricing by Size</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-bb-border bg-white shadow-sm">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-bb-border bg-white text-bb-ink">
                  <th className="px-4 py-3 font-semibold">Size</th>
                  <th className="px-4 py-3 font-semibold">Weight</th>
                  <th className="px-4 py-3 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {sizeTiers.map((tier, i) => (
                  <tr key={tier.key} className={i !== sizeTiers.length - 1 ? "border-b border-bb-border" : ""}>
                    <td className="px-4 py-3 font-semibold text-bb-ink">{tier.label}</td>
                    <td className="px-4 py-3 text-bb-ink-soft">{tier.weight}</td>
                    <td className="px-4 py-3 font-bold text-bb-coral-dark">{dematting.pricing[tier.key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-bb-ink-soft">Approximate duration: {dematting.duration}.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">A Compassionate Approach to Severe Matting</h2>
        <p className="mt-4 max-w-2xl text-bb-ink-soft">{dematting.note}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Related Services &amp; Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            { label: "Full Groom", href: servicePath("full-dog-grooming") },
            { label: "Bath & Tidy", href: servicePath("bath-and-tidy") },
            { label: "Deshedding", href: servicePath("deshedding") },
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
          <h2 className="font-bb-display text-3xl font-bold">Book Dematting for Your Dog</h2>
          <p className="text-white/80">Schedule online — Bark and Bork comes to {business.homeBase} and {business.primaryMarket}.</p>
          <BookButton location="service_dematting_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}

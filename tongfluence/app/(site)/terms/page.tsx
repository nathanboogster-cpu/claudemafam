import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, business, offer } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";

// Plain-language terms describing the actual service arrangement. These match
// the answers given in the FAQ and on the booking page — if one changes, both
// change. Not legal advice; have them reviewed before launch.
export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms we work under: $297 a month, month to month, cancel anytime, and what happens to your website, domain and Google Business Profile if you leave.",
  path: PATHS.terms,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Terms of Service", href: PATHS.terms },
];

const sections = [
  {
    id: "the-service",
    heading: "What the service is",
    paragraphs: [
      `${business.name} provides marketing and search optimization for dog grooming businesses. The monthly service covers a website built and maintained for the business, optimization of its Google Business Profile, a review request system, and ongoing search optimization based on that business's own Search Console and profile data.`,
      "The work is performed remotely. There is no in-person component and no walk-in location.",
    ],
  },
  {
    id: "price",
    heading: "Price and billing",
    paragraphs: [
      `${offer.priceLine}, billed monthly in advance. There is no setup fee, no separate website build fee, and no additional charge for adding pages during the engagement.`,
      "Prices quoted are in US dollars. Any change to the monthly price would be notified in advance and would never be applied retroactively.",
    ],
  },
  {
    id: "term",
    heading: "Term and cancellation",
    paragraphs: [
      "The arrangement is month to month. There is no minimum term and no notice period beyond the current billing month: cancel and the service ends at the end of the period already paid for. We do not charge a cancellation fee and we do not pro-rate a partial month back.",
      "We may also end the arrangement, with notice, if we cannot do the work properly — for example if we cannot get the access we need, or if we are asked to publish something we believe to be untrue.",
    ],
  },
  {
    id: "ownership",
    heading: "What belongs to you",
    paragraphs: [
      "Your domain name is registered to you and remains yours throughout and after the engagement.",
      "Your Google Business Profile remains yours. We are added as a manager so we can make changes; we are never the owner of your profile. If you cancel, we are removed and every change we made stays in place.",
      "The content written for your website is yours. While you are a client the website is hosted and maintained as part of the monthly service. If you cancel, tell us where you want the content and we will provide what we have so you can take it elsewhere.",
    ],
  },
  {
    id: "what-we-need",
    heading: "What we need from you",
    paragraphs: [
      "Manager access to your Google Business Profile, an accurate list of your services and prices, confirmation of your business details, and photos of your own work when you have them.",
      "We only publish facts we can verify. If we ask you to confirm something — your hours, your founding year, your review count — and it is not confirmed, it does not go on the site.",
    ],
  },
  {
    id: "no-guarantees",
    heading: "What we do not promise",
    paragraphs: [
      "We do not guarantee rankings, traffic, leads, appointments or revenue. Nobody can, because Google's results are not ours to control and your local competition is not ours to control either.",
      "We do not guarantee any star rating or review outcome. We set up and support a system for asking every client for a review; what customers write is up to them. We do not filter who is asked, do not offer anything in exchange for a review, and do not write reviews.",
      "We do not run paid advertising, and nothing in this service includes ad management or ad spend.",
    ],
  },
  {
    id: "liability",
    heading: "Liability",
    paragraphs: [
      "Our total liability in connection with the service is limited to the fees paid in the three months before the claim. We are not liable for indirect or consequential losses, including lost profits or lost business.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <Section width="prose" className="pt-6 pb-16">
        <h1 className="font-tf-display text-3xl font-extrabold text-tf-ink sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-base leading-relaxed text-tf-ink-soft">
          The arrangement in plain language. These terms say the same thing as the answers on{" "}
          <Link href={PATHS.book} className="font-medium text-tf-brown-dark underline underline-offset-4">
            the booking page
          </Link>{" "}
          — deliberately, so there is nothing to discover later.
        </p>

        <div className="mt-10 space-y-9">
          {sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id} className="font-tf-display text-xl font-bold text-tf-ink">
                {s.heading}
              </h2>
              <div className="tf-prose mt-3">
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}

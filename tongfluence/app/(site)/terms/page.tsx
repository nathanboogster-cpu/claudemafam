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
    "The terms we work under: $297 a month, month to month, cancel any time, and what happens to your website, domain and Google profile if you leave.",
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
      `${business.name} does marketing and search work for dog grooming businesses. The monthly service covers four things. A website we build and maintain for the business. Work on its Google Business Profile. A system for asking for reviews. And monthly search work based on the business's own search and profile data.`,
      "The work is done from a distance. There is no in-person part and no walk-in location.",
    ],
  },
  {
    id: "price",
    heading: "Price and billing",
    paragraphs: [
      `${offer.priceLine}, billed each month in advance. There is no setup fee. There is no separate website fee. There is no extra charge for adding pages while you are a client.`,
      "Prices are in US dollars. We would tell you about any change to the monthly price in advance. A change would never apply to months already paid.",
    ],
  },
  {
    id: "term",
    heading: "Term and cancellation",
    paragraphs: [
      "The service is month to month. There is no minimum term. There is no notice period beyond the current month. Cancel, and the service ends at the end of the month you already paid for. We do not charge a fee to cancel. We do not refund part of a month.",
      "We may also end the service, with notice, if we cannot do the work properly. For example, if we cannot get the access we need. Or if we are asked to post something we believe is not true.",
    ],
  },
  {
    id: "ownership",
    heading: "What belongs to you",
    paragraphs: [
      "Your domain name is in your name. It stays yours during and after the service.",
      "Your Google Business Profile stays yours. We are added as a manager so we can make changes. We are never the owner of your profile. If you cancel, we are removed and every change we made stays.",
      "The content written for your website is yours. While you are a client, we host and maintain the website as part of the monthly service. If you cancel, tell us where you want the content and we will give you what we have.",
    ],
  },
  {
    id: "what-we-need",
    heading: "What we need from you",
    paragraphs: [
      "Manager access to your Google Business Profile. A correct list of your services and prices. A check on your business details. And photos of your own work, when you have them.",
      "We only post facts we can check. If we ask you to confirm something, like your hours, your founding year or your review count, and it is not confirmed, it does not go on the site.",
    ],
  },
  {
    id: "no-guarantees",
    heading: "What we do not promise",
    paragraphs: [
      "We do not promise rankings, traffic, leads, appointments or revenue. Nobody can. Google's results are not ours to control. Neither are the other groomers in your town.",
      "We do not promise any star rating or review result. We set up and support a system for asking every client for a review. What customers write is up to them. We do not pick who is asked. We do not offer anything for a review. We do not write reviews.",
      "Paid ads, such as Google Local Services Ads or Facebook and Instagram ads, are not part of the monthly service described here. We only run them where agreed separately.",
    ],
  },
  {
    id: "liability",
    heading: "Liability",
    paragraphs: [
      "The most we can owe you in connection with the service is the fees you paid in the three months before the claim. We are not responsible for indirect losses, such as lost profits or lost business.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <Section width="prose" className="pt-6 pb-16">
        <h1 className="font-tf-display text-3xl font-bold text-tf-ink sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-base leading-relaxed text-tf-ink-soft">
          The deal in plain words. These terms say the same thing as the answers on{" "}
          <Link href={PATHS.book} className="font-medium text-tf-brown-dark underline underline-offset-4">
            the booking page
          </Link>{" "}
          . That is on purpose, so there is nothing to find out later.
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

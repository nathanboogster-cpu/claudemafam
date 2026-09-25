import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, business } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";

// Describes only what this website actually does. Nothing here is boilerplate
// copied from a generator: every claim matches the code — see lib/track.ts for
// the analytics behaviour and app/api/lead/route.ts for the form handling.
// It is not legal advice and should be reviewed before launch.
export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "What Tongfluence collects through this website, why, and how long it is kept. Short, because the site does very little.",
  path: PATHS.privacy,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Privacy Policy", href: PATHS.privacy },
];

const sections = [
  {
    id: "what-we-collect",
    heading: "What this website collects",
    paragraphs: [
      "If you fill in the form on the booking page, we receive what you typed into it: your name, your business name, your email address, your phone number if you gave one, your business type, your current website address, and your message. That is sent to us by email so we can reply to you.",
      "Alongside a form submission we also record where you arrived from — the first page you landed on, the referring website, and any UTM campaign parameters in the link you followed. This is so we can tell whether an enquiry came from Google, from an advert, from a referral or from somewhere else. It is attached to your enquiry and nothing else.",
      "Separately, this site uses Vercel Analytics to count page views and a small number of interaction events (clicking a 'Book a call' button, scrolling the pricing block into view, starting and submitting the form). Vercel Analytics does not use cookies and does not build a profile of you across websites.",
    ],
  },
  {
    id: "what-we-dont",
    heading: "What it does not do",
    paragraphs: [
      "There are no advertising cookies, no tracking pixels from social networks, and no third-party marketing scripts on this site. We do not sell or share what you send us. We do not add you to a mailing list — if you fill in the form, you get a reply from a person, not a sequence.",
      "The site stores one thing in your browser's session storage: the page you arrived on and where you came from, so that if you fill in the form five pages later we know how you found us. It is cleared when you close the tab and never leaves your browser unless you submit the form.",
    ],
  },
  {
    id: "how-long",
    heading: "How long we keep it",
    paragraphs: [
      "Enquiries sent through the form are kept while we are in contact and for as long as we might reasonably need to refer back to them. If you would like yours deleted, ask and we will delete it.",
      "Aggregate analytics are retained by Vercel according to their own retention policy and are not tied to you personally.",
    ],
  },
  {
    id: "processors",
    heading: "Who else touches it",
    paragraphs: [
      "This website is hosted by Vercel, which processes requests in order to serve the site and produces the aggregate analytics described above. Form submissions are delivered to us by email using Resend. Both are service providers acting on our instructions.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your choices",
    paragraphs: [
      "You can ask us what we hold about you, ask for it to be corrected, or ask for it to be deleted, and we will do so. Because the site collects so little, that request is usually a single email thread.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <Section width="prose" className="pt-6 pb-16">
        <h1 className="font-tf-display text-3xl font-extrabold text-tf-ink sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-base leading-relaxed text-tf-ink-soft">
          This page describes exactly what the {business.name} website does with information. It is short
          because the site does very little.
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

        <p className="mt-10 border-t border-tf-border pt-6 text-sm leading-relaxed text-tf-ink-soft">
          Questions about any of this, or a request to delete something, can go through{" "}
          <Link href={PATHS.book} className="font-medium text-tf-brown-dark underline underline-offset-4">
            the contact form
          </Link>
          .
        </p>
      </Section>
    </>
  );
}

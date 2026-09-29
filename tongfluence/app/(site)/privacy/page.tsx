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
    "What Tongfluence collects through this website, why, and how long we keep it. Short, because the site does very little.",
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
      "If you fill in the form on the booking page, we get what you typed. Your name. Your business name. Your email. Your phone number, if you gave one. Your business type. Your current website. And your message. It is sent to us by email so we can reply to you.",
      "With a form, we also record where you came from. The first page you landed on. The website that sent you. And any campaign tags in the link you followed. This lets us tell whether a message came from Google, an ad, a referral or somewhere else. It is attached to your message and nothing else.",
      "This site also uses Vercel Analytics to count page views and a few actions. Clicking a 'Book a call' button. Scrolling the price into view. Starting and sending the form. Vercel Analytics does not use cookies. It does not build a profile of you across websites.",
    ],
  },
  {
    id: "what-we-dont",
    heading: "What it does not do",
    paragraphs: [
      "There are no ad cookies. No tracking pixels from social networks. No outside marketing scripts. We do not sell or share what you send us. We do not add you to a mailing list. If you fill in the form, you get a reply from a person, not a series of emails.",
      "The site stores one thing in your browser while you visit. The page you arrived on and where you came from. That way, if you fill in the form five pages later, we know how you found us. It is cleared when you close the tab. It never leaves your browser unless you send the form.",
    ],
  },
  {
    id: "how-long",
    heading: "How long we keep it",
    paragraphs: [
      "Messages sent through the form are kept while we are in touch, and for as long as we might need to look back at them. If you want yours deleted, ask and we will delete it.",
      "Vercel keeps the page-view counts under its own rules. They are not tied to you.",
    ],
  },
  {
    id: "processors",
    heading: "Who else touches it",
    paragraphs: [
      "Vercel hosts this website. It handles requests to serve the site and makes the page-view counts described above. Form messages reach us by email through Resend. Both are service providers that act on our instructions.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your choices",
    paragraphs: [
      "You can ask us what we hold about you. You can ask us to fix it or delete it, and we will. The site collects so little that this is usually one email thread.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <Section width="prose" className="pt-6 pb-16">
        <h1 className="font-tf-display text-3xl font-bold text-tf-ink sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-base leading-relaxed text-tf-ink-soft">
          This page says exactly what the {business.name} website does with your information. It is short,
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

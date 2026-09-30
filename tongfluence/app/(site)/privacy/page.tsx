import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, business } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";

// Describes only what this website actually does. Nothing here is boilerplate
// copied from a generator: every claim matches the code — see lib/track.ts for
// the analytics behaviour and components/BookingCalendar.tsx for the booking.
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
      "If you book a call, you do it in a calendar on the booking page. The calendar is provided by GoHighLevel, the booking software we use. What you enter there goes into our GoHighLevel account. The time you picked. Your name. Your email. Your phone number, if you gave one. And anything you typed in the notes. GoHighLevel uses it to send you the confirmation and a reminder, and we use it to run the call.",
      "This site also uses Vercel Analytics to count page views and a few actions. Clicking a 'Book a call' button. Scrolling the price into view. Playing a video. Vercel Analytics does not use cookies. It does not build a profile of you across websites.",
      "The site notes where you came from. The first page you landed on. The website that sent you. And any campaign tags in the link you followed. That is attached to those page-view counts and clicks, so we can tell whether visitors come from Google, an ad or a referral. It is not tied to your name.",
    ],
  },
  {
    id: "what-we-dont",
    heading: "What it does not do",
    paragraphs: [
      "There are no ad cookies. No tracking pixels from social networks. The only outside script on the site is the booking calendar, and it only loads on the booking page. The calendar may set its own cookies inside the embed to make the booking work. We do not sell or share what you send us. We do not add you to a mailing list. If you book a call, you get the confirmation, a reminder, and a reply from a person, not a series of emails.",
      "The site stores one thing in your browser while you visit. The page you arrived on and where you came from. It is cleared when you close the tab.",
    ],
  },
  {
    id: "how-long",
    heading: "How long we keep it",
    paragraphs: [
      "Bookings are kept in GoHighLevel while we are in touch, and for as long as we might need to look back at them. If you want yours deleted, ask and we will delete it.",
      "Vercel keeps the page-view counts under its own rules. They are not tied to you.",
    ],
  },
  {
    id: "processors",
    heading: "Who else touches it",
    paragraphs: [
      "Vercel hosts this website. It handles requests to serve the site and makes the page-view counts described above. GoHighLevel runs the booking calendar and stores the bookings. Both are service providers that act on our instructions.",
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
            the booking page
          </Link>
          , or by email if an address is shown there.
        </p>
      </Section>
    </>
  );
}

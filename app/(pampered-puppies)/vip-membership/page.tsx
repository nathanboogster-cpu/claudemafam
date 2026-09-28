import type { Metadata } from "next";
import { PATHS, SITE_URL, vipMembership } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { VipMembership } from "@/components/VipMembership";
import { FaqBlock } from "@/components/FaqBlock";

const pageUrl = `${SITE_URL}${PATHS.membership}`;

export const metadata: Metadata = {
  title: "PPG VIP Membership | Pampered Puppies, Victorville CA",
  description:
    "Join the PPG VIP Membership for $99/year and get 18% off every grooming service, plus priority scheduling on appointments.",
  alternates: { canonical: PATHS.membership },
};

const howToJoin = [
  "Call us or hit Book Now below and let us know you'd like to join.",
  "Ellen sets up your PPG VIP Membership for $99/year.",
  `Your ${vipMembership.discountPercent} discount and priority scheduling apply from your very next visit.`,
];

const membershipFaqs = [
  {
    question: "How do I join the PPG VIP Membership?",
    answer:
      "Call us or use the Book Now button on this page — there's no online signup form yet, so Ellen sets up your membership directly.",
  },
  {
    question: "What do I get with the membership?",
    answer: `${vipMembership.discountPercent} off every grooming service on every visit, plus priority scheduling on appointments.`,
  },
  {
    question: "Does the discount apply to mobile grooming too?",
    answer:
      '"Pampered Puppies At Your Door" mobile visits count as a service too, so your membership discount applies there as well.',
  },
];

export default function VipMembershipPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "VIP Membership", href: PATHS.membership }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "VIP Membership", url: pageUrl },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <VipMembership />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center font-display text-2xl font-bold text-ink">How to Join</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {howToJoin.map((step, i) => (
              <li key={step} className="rounded-2xl border border-border bg-cream-deep p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm text-ink-soft">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <FaqBlock items={membershipFaqs} title="VIP Membership FAQ" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Ready to save on every visit?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="membership_bottom" label="Call Now" />
            <BookButton location="membership_bottom" />
          </div>
        </div>
      </section>
    </div>
  );
}

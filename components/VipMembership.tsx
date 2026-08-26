import { vipMembership } from "@/lib/site-data";
import { CallButton, BookButton } from "./CTAButton";
import { Eyebrow } from "./Eyebrow";
import { CheckIcon } from "./icons";

// Star icon reused from the 5-star rating rows elsewhere on the site.
function StarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
    </svg>
  );
}

export function VipMembership({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gold bg-gradient-to-br from-cream-deep to-terracotta-light/20 p-8 text-center shadow-sm sm:p-10">
        <div className="flex justify-center text-gold">
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
        </div>
        <Eyebrow className="mt-3">Membership</Eyebrow>
        <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
          {vipMembership.name}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Join for <strong className="text-ink">{vipMembership.price}</strong>{" "}
          and automatically unlock <strong className="text-ink">{vipMembership.discountPercent} off every service</strong>, every visit.
        </p>
        <ul className="mx-auto mt-5 flex max-w-sm flex-col items-start gap-2 text-left">
          {vipMembership.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-sm text-ink-soft">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
              {perk}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="vip_membership" label="Ask About VIP Membership" />
          <BookButton location="vip_membership" />
        </div>
      </div>
    </section>
  );
}

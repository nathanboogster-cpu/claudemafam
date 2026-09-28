import { vipMembership } from "@/lib/site-data";
import { CallButton, BookButton } from "./CTAButton";
import { Eyebrow } from "./Eyebrow";
import { CheckIcon, StarIcon } from "./icons";

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

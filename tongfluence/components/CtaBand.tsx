import { offer } from "@/lib/site-data";
import { BookCallButton, SecondaryCTA } from "./CTAButton";

// The closing CTA used at the bottom of every commercial page. One dominant
// action (book a call), one secondary (see the work), and the price stated
// plainly so nobody has to go hunting for it before they decide.
export function CtaBand({
  location,
  title = "See what we'd change about your Google presence",
  body = "A short call: we look at your Google profile and your current site while you're on the line, and tell you what we'd fix first. If it's not worth doing, we'll say that too.",
  secondaryHref = "/case-studies",
  secondaryLabel = "See client results",
}: {
  location: string;
  title?: string;
  body?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="rounded-2xl bg-tf-ink px-6 py-10 text-white sm:px-10 sm:py-12">
      <div className="max-w-2xl">
        <h2 className="font-tf-display text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-3 text-base leading-relaxed text-white/80">{body}</p>
        <p className="mt-4 text-sm text-white/70">
          <span className="font-semibold text-white">{offer.priceLine}</span> — {offer.commitment}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <BookCallButton
            location={location}
            className="bg-white !text-tf-ink hover:bg-tf-paper-deep focus-visible:outline-white"
          />
          <SecondaryCTA
            href={secondaryHref}
            label={secondaryLabel}
            location={location}
            className="border-white/30 bg-transparent !text-white hover:bg-white/10 focus-visible:outline-white"
          />
        </div>
      </div>
    </div>
  );
}

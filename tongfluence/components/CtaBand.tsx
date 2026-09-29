import { offer } from "@/lib/site-data";
import { BookCallButton, SecondaryCTA } from "./CTAButton";
import { CheckIcon } from "./icons";

// The closing CTA used at the bottom of every commercial page. One dominant
// action (book a call), one secondary (see the work), and the terms as three
// badges so nobody has to go hunting for them before they decide.
const terms = [offer.priceLine, "Cancel anytime", "No contract, no setup fee"];

export function CtaBand({
  location,
  title = "See what we'd change about your Google presence",
  body = "A short call. We open your Google profile and your current site while you are on the line, and tell you what we would fix first.",
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
    <div className="tf-cta-band rounded-2xl bg-tf-ink px-6 py-10 text-white sm:px-10 sm:py-12">
      <div className="max-w-2xl">
        <h2 className="font-tf-display text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-3 text-base leading-relaxed text-white/80">{body}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {terms.map((t) => (
            <li
              key={t}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white"
            >
              <CheckIcon className="h-3.5 w-3.5 text-tf-bronze-light" />
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <BookCallButton
            location={location}
            className="bg-white !text-tf-ink hover:bg-tf-paper-deep focus-visible:outline-white"
          />
          <SecondaryCTA href={secondaryHref} label={secondaryLabel} location={location} variant="onDark" />
        </div>
      </div>
    </div>
  );
}

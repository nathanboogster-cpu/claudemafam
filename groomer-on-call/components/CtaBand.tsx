import { CallButton, SecondaryLinkButton } from "./CTAButton";
import { business, market } from "@/lib/site-data";

/**
 * The closing conversion block, repeated at the foot of every page. Calling
 * is the single primary action — the brief keeps it that way until a real
 * booking system is verified, so there is no fake "Book online" button
 * anywhere on this site.
 */
export function CtaBand({
  location,
  heading = "Ready To Book A Groom?",
  body,
  secondary,
}: {
  location: string;
  heading?: string;
  body?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="goc-dark relative overflow-hidden bg-goc-ink text-white">
      <div className="goc-blob -left-20 top-0 h-72 w-72 bg-goc-magenta/30" aria-hidden="true" />
      <div className="goc-blob -bottom-24 right-0 h-72 w-72 bg-goc-orange/25" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 py-16 text-center sm:py-20">
        <h2 className="font-goc-display text-3xl font-extrabold sm:text-4xl">{heading}</h2>
        <p className="max-w-xl text-lg leading-relaxed text-white/75">
          {body ??
            `Call ${business.phoneDisplay} and we'll go over what your pet needs, confirm we reach your address in the ${market.cityState} area, and find a time. Your groomer comes to you.`}
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <CallButton location={location} variant="accent" />
          {secondary ? (
            <SecondaryLinkButton href={secondary.href} label={secondary.label} variant="ghost" />
          ) : null}
        </div>
        <div className="goc-route mt-4 w-40 opacity-70" aria-hidden="true" />
      </div>
    </section>
  );
}

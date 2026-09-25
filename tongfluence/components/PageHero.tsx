import { Section, Eyebrow } from "./Section";
import { BookCallButton, SecondaryCTA } from "./CTAButton";

// The top of every commercial and resource page: the H1 that matches the
// page's search intent, a one-paragraph statement of what the page answers,
// and the above-the-fold CTA.
export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  location,
  primaryLabel = "Book a call",
  secondary,
  meta,
}: {
  eyebrow: string;
  title: string;
  /** Closing words set in the tan accent. */
  accent?: string;
  intro: React.ReactNode;
  location: string;
  primaryLabel?: string;
  secondary?: { href: string; label: string };
  meta?: React.ReactNode;
}) {
  return (
    <Section className="pt-6 pb-10 sm:pt-8">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-tf-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-tf-ink sm:text-5xl lg:text-[3.4rem]">
          {title}
          {accent ? <span className="tf-accent"> {accent}</span> : null}
        </h1>
        <div className="mt-5 text-lg leading-relaxed text-tf-ink-soft">{intro}</div>
        {meta ? <div className="mt-5 text-sm text-tf-ink-soft">{meta}</div> : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <BookCallButton location={location} label={primaryLabel} />
          {secondary ? (
            <SecondaryCTA href={secondary.href} label={secondary.label} location={location} />
          ) : null}
        </div>
      </div>
    </Section>
  );
}

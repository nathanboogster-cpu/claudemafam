// Shared page scaffolding. Every section uses the same max width and gutter so
// vertical rhythm stays consistent and nothing needs a bespoke wrapper.

export function Section({
  children,
  className = "",
  width = "wide",
  id,
  as: Tag = "section",
  labelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  width?: "wide" | "narrow" | "prose";
  id?: string;
  as?: "section" | "div" | "article" | "aside";
  labelledBy?: string;
}) {
  const widths = {
    wide: "max-w-6xl",
    narrow: "max-w-4xl",
    prose: "max-w-3xl",
  } as const;

  return (
    <Tag id={id} aria-labelledby={labelledBy} className={`mx-auto w-full ${widths[width]} px-4 ${className}`}>
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  id,
  align = "left",
  level = 2,
}: {
  eyebrow?: string;
  title: string;
  /** Words set in the tan accent after the title, as on tongfluence.com. */
  accent?: string;
  intro?: React.ReactNode;
  id?: string;
  align?: "left" | "center";
  level?: 2 | 3;
}) {
  const Heading = level === 2 ? "h2" : "h3";
  const alignment = align === "center" ? "text-center mx-auto max-w-2xl" : "";

  return (
    <div className={alignment}>
      {eyebrow ? <Eyebrow align={align}>{eyebrow}</Eyebrow> : null}
      <Heading
        id={id}
        className={`font-tf-display font-bold leading-[1.15] tracking-[-0.015em] text-tf-ink ${
          level === 2 ? "mt-3 text-[1.75rem] sm:text-4xl" : "mt-3 text-xl sm:text-2xl"
        }`}
      >
        {title}
        {accent ? <span className="tf-accent"> {accent}</span> : null}
      </Heading>
      {intro ? <div className="mt-4 text-base leading-relaxed text-tf-ink-soft">{intro}</div> : null}
    </div>
  );
}

// "— WHAT CLIENTS SAY": a short rule, then the label in tracked caps. The rule
// draws itself in as the section reveals (see .tf-rule in globals.css).
export function Eyebrow({
  children,
  align = "left",
  className = "",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <p
      className={`tf-caps flex items-center gap-3 text-xs text-tf-brown ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <span aria-hidden="true" className="tf-rule block h-px w-5 shrink-0 bg-current" />
      {children}
    </p>
  );
}

// An answer-first passage: a single self-contained paragraph that states the
// answer to the page's question before any argument or marketing context.
// Placed high on every commercial and resource page so the key fact can be
// extracted — by a reader skimming, or by a search/AI system quoting — without
// needing the rest of the page around it.
export function AnswerBlock({
  children,
  label = "Short answer",
  className = "",
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-tf-border bg-tf-card p-5 sm:p-6 ${className}`}>
      <Eyebrow>{label}</Eyebrow>
      <div className="mt-2 text-base leading-relaxed text-tf-ink sm:text-lg">{children}</div>
    </div>
  );
}

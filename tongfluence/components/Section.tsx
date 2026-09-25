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
  intro,
  id,
  align = "left",
  level = 2,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  id?: string;
  align?: "left" | "center";
  level?: 2 | 3;
}) {
  const Heading = level === 2 ? "h2" : "h3";
  const alignment = align === "center" ? "text-center mx-auto max-w-2xl" : "";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="tf-caps text-xs text-tf-brown-dark">{eyebrow}</p>
      ) : null}
      {/* The logo's hairline rule, drawn in beneath the eyebrow as the section
          reveals (see .tf-rule in globals.css). Decorative only. */}
      <span
        aria-hidden="true"
        className={`tf-rule mt-2 block h-px w-10 bg-tf-brown/50 ${align === "center" ? "mx-auto" : ""}`}
      />
      <Heading
        id={id}
        className={`font-tf-display font-bold text-tf-ink ${
          level === 2 ? "mt-2 text-2xl sm:text-3xl" : "mt-2 text-xl sm:text-2xl"
        }`}
      >
        {title}
      </Heading>
      {intro ? <div className="mt-3 text-base leading-relaxed text-tf-ink-soft">{intro}</div> : null}
    </div>
  );
}

// An answer-first passage: a single self-contained paragraph that states the
// answer to the page's question before any argument or marketing context.
// Placed high on every commercial and resource page so the key fact can be
// extracted — by a reader skimming, or by a search/AI system quoting — without
// needing the rest of the page around it.
export function AnswerBlock({ children, label = "Short answer" }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="rounded-2xl border border-tf-border bg-tf-brown-wash p-5 sm:p-6">
      <p className="tf-caps text-xs text-tf-brown-darker">{label}</p>
      <div className="mt-2 text-base leading-relaxed text-tf-ink sm:text-lg">{children}</div>
    </div>
  );
}

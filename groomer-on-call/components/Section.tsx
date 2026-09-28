import { Eyebrow } from "./Eyebrow";

/**
 * Standard section heading block. Renders a real <h2> so the heading
 * hierarchy stays meaningful — headings are never used here purely to
 * control type size.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark = false,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  onDark?: boolean;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={`mt-2 font-goc-display text-3xl font-extrabold sm:text-4xl ${
          onDark ? "text-white" : "text-goc-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-lg leading-relaxed ${onDark ? "text-white/75" : "text-goc-ink-soft"}`}>{intro}</p>
      ) : null}
    </div>
  );
}

/** Light section wrapper with consistent vertical rhythm. */
export function Section({
  children,
  className = "",
  id,
  tone = "cream",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "white" | "deep" | "ink";
}) {
  const tones = {
    cream: "bg-goc-cream",
    white: "bg-white",
    deep: "bg-goc-cream-deep",
    ink: "goc-dark goc-paw-pattern-light bg-goc-ink text-white",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">{children}</div>
    </section>
  );
}

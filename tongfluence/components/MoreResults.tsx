import Link from "next/link";
import { moreResults, caseStudyPath } from "@/lib/site-data";
import { ProofScreenshots } from "./ProofScreenshots";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./icons";

// The compact row under the Carlos block: one tile per client, the same
// tile style, a smaller number. The figure and its label come from
// lib/site-data.ts (moreResults), so they can be updated without touching
// this file. A leading "~" and a trailing "/ mo" are set smaller, the way
// the Carlos tiles set their prefix.
function BigValue({ value }: { value: string }) {
  const m = value.match(/^(~?)\s*(.*?)\s*(\/\s*mo)?$/);
  const prefix = m?.[1] ?? "";
  const core = m?.[2] ?? value;
  const suffix = m?.[3] ?? "";
  return (
    <p className="mt-3 font-tf-display text-5xl font-bold leading-none text-tf-ink">
      {prefix ? <span className="mr-0.5 align-[0.12em] text-3xl">{prefix}</span> : null}
      {core}
      {suffix ? <span className="ml-2 align-[0.12em] text-2xl text-tf-ink-soft">{suffix}</span> : null}
    </p>
  );
}

export function MoreResults({ location }: { location: string }) {
  const r = moreResults;
  if (!r.items.length) return null;
  return (
    <figure className="m-0 mt-8" data-location={location}>
      <p className="tf-caps text-xs text-tf-brown">{r.heading}</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {r.items.map((t, i) => (
          <Reveal key={t.slug} delay={i * 90} className="rounded-xl border border-tf-border bg-tf-card p-6">
            <p className="tf-caps text-xs text-tf-brown">{t.client}</p>
            <BigValue value={t.value} />
            <p className="mt-3 text-sm text-tf-ink-soft">{t.label}</p>
            <ProofScreenshots items={t.screenshots} className="mt-4" />
            <Link
              href={caseStudyPath(t.slug)}
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-tf-brown-dark"
            >
              Read the build
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        ))}
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-tf-ink-soft">{r.method}</figcaption>
    </figure>
  );
}

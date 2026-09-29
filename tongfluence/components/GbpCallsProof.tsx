import Image from "next/image";
import { gbpCallsProof } from "@/lib/site-data";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

// The measured result: three figures, the two Google reports they were read
// from, and one sentence saying whose numbers they are and where they came
// from. The arithmetic sits behind a disclosure for anyone who wants it.
//
// Each fact is stated once. Metric, sample, period, source and method are all
// here, but not as a five-row form repeated above a caption that repeats them.
export function GbpCallsProof({ location }: { location: string }) {
  const p = gbpCallsProof;
  const who = p.clientName || "One client";
  const appts = p.appointments.period ? p.appointments : null;

  const tiles = [
    { label: p.before.label, value: p.before.calls, prefix: "", note: "calls from his Google profile" },
    {
      label: p.after.label,
      value: p.after.calls,
      prefix: "",
      note: `calls, ${p.multiple.toFixed(1)}× February`,
      highlight: true,
    },
    ...(appts
      ? [{ label: p.after.label, value: appts.count, prefix: appts.approximate ? "~" : "", note: "appointments booked in MoeGo" }]
      : []),
  ];

  return (
    <figure className="m-0" data-location={location}>
      <div className={`grid gap-3 ${tiles.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {tiles.map((t, i) => (
          <Reveal
            key={t.note}
            delay={i * 90}
            className={`rounded-xl border p-6 ${
              t.highlight ? "border-tf-ink bg-tf-ink text-white" : "border-tf-border bg-tf-card text-tf-ink"
            }`}
          >
            <p className={`tf-caps text-[0.68rem] ${t.highlight ? "text-tf-bronze-light" : "text-tf-brown"}`}>
              {t.label}
            </p>
            <p className="mt-3 font-tf-display text-6xl font-bold leading-none">
              {t.prefix ? <span className="mr-0.5 align-[0.12em] text-4xl">{t.prefix}</span> : null}
              <CountUp value={t.value} />
            </p>
            <p className={`mt-3 text-sm ${t.highlight ? "text-white/80" : "text-tf-ink-soft"}`}>{t.note}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {[p.before, p.after].map((m, i) => (
          <Reveal key={m.label} delay={120 + i * 90} className="overflow-hidden rounded-xl border border-tf-border bg-[#202125]">
            <Image
              src={m.image}
              alt={`Google Business Profile performance report for ${m.label}: ${m.calls} calls made from the profile, shown as a daily line chart.`}
              width={1600}
              height={i === 0 ? 566 : 546}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
            <p className="border-t border-white/10 px-4 py-2 text-xs text-white/70">
              {m.label} · {m.calls} calls
            </p>
          </Reveal>
        ))}
      </div>

      <figcaption className="mt-4 text-sm leading-relaxed text-tf-ink-soft">
        {who}, one Tongfluence client. Calls are Google&rsquo;s own count, from the reports above
        {appts ? "; appointments are an approximate count from his booking software" : ""}.
        <details className="group mt-2">
          <summary className="cursor-pointer list-none font-medium text-tf-brown-dark underline underline-offset-4 hover:text-tf-brown-darker">
            How this was counted
          </summary>
          <p className="mt-2">
            Raw monthly totals: {p.after.calls} ÷ {p.before.calls} = {p.multiple.toFixed(1)}×. February is{" "}
            {p.after.days - p.before.days} days shorter, so per day the rise is {p.perDayBefore.toFixed(2)} to{" "}
            {p.perDayAfter.toFixed(2)}, or {p.perDayMultiple.toFixed(1)}×. Nothing is excluded.
          </p>
        </details>
      </figcaption>
    </figure>
  );
}

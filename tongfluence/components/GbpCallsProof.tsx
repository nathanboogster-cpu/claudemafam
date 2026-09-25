import Image from "next/image";
import { gbpCallsProof } from "@/lib/site-data";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

// The measured result, shown as evidence rather than as a headline.
//
// Form: a KPI row of stat tiles, not a chart — two months and a multiple are
// "a handful of headline numbers", and a two-bar chart would only add
// decoration. The values sit in the body sans at display size with
// proportional figures; the delta names the period it is against; the
// screenshots the numbers were read from are published beneath them so the
// reading can be checked, and the caption says out loud that this is one
// business.
export function GbpCallsProof({ location }: { location: string }) {
  const p = gbpCallsProof;
  const who = p.clientName ? `${p.clientName}, a Tongfluence client` : "one Tongfluence client";
  const appts = p.appointments.period ? p.appointments : null;

  return (
    <figure className="m-0" data-location={location}>
      <div className="grid gap-4 sm:grid-cols-3">
        <Reveal className="rounded-3xl border border-tf-border bg-white p-6" delay={0}>
          <p className="tf-caps text-[0.65rem] text-tf-ink-soft">{p.before.label} · before</p>
          <p className="mt-3 font-sans text-5xl font-semibold leading-none text-tf-ink">
            <CountUp value={p.before.calls} />
          </p>
          <p className="mt-2 text-sm text-tf-ink-soft">
            calls from the profile · {p.perDayBefore.toFixed(2)} a day
          </p>
        </Reveal>

        <Reveal className="rounded-3xl border border-tf-border bg-white p-6" delay={90}>
          <p className="tf-caps text-[0.65rem] text-tf-ink-soft">{p.after.label} · after</p>
          <p className="mt-3 font-sans text-5xl font-semibold leading-none text-tf-ink">
            <CountUp value={p.after.calls} />
          </p>
          <p className="mt-2 text-sm text-tf-ink-soft">
            calls from the profile · {p.perDayAfter.toFixed(2)} a day
          </p>
        </Reveal>

        <Reveal className="rounded-3xl border border-tf-brown/30 bg-tf-brown-wash p-6" delay={180}>
          <p className="tf-caps text-[0.65rem] text-tf-brown-darker">Change · March vs February</p>
          <p className="mt-3 font-sans text-5xl font-semibold leading-none text-tf-brown-darker">
            <CountUp value={p.multiple} decimals={1} suffix="×" />
          </p>
          <p className="mt-2 text-sm text-tf-ink-soft">
            raw totals · {p.perDayMultiple.toFixed(1)}× per day, since February is {p.after.days - p.before.days}{" "}
            days shorter
          </p>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[p.before, p.after].map((m, i) => (
          <Reveal key={m.label} className="overflow-hidden rounded-2xl border border-tf-border bg-[#202125]" delay={120 + i * 90}>
            <Image
              src={m.image}
              alt={`Google Business Profile performance report for ${m.label}: ${m.calls} calls made from the Business Profile, shown as a daily line chart.`}
              width={1600}
              height={i === 0 ? 566 : 546}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
            <p className="border-t border-white/10 px-4 py-2.5 text-xs text-white/70">
              {m.label} — {m.calls} calls. Screenshot of the Google Business Profile Performance report.
            </p>
          </Reveal>
        ))}
      </div>

      {appts ? (
        <Reveal className="mt-6 rounded-3xl border border-tf-border bg-white p-6" delay={60}>
          <p className="tf-caps text-[0.65rem] text-tf-ink-soft">And in the calendar</p>
          <p className="mt-3 font-sans text-5xl font-semibold leading-none text-tf-ink">
            {appts.approximate ? "~" : ""}
            <CountUp value={appts.count} />
          </p>
          <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">
            appointments booked, {appts.period}. Counted in {appts.source}
            {appts.approximate ? " — an approximate count, not an export" : ""}. Calls are what Google
            measures; this is what ended up in the diary.
          </p>
        </Reveal>
      ) : null}

      <figcaption className="mt-5 text-sm leading-relaxed text-tf-ink-soft">
        <span className="font-semibold text-tf-ink">What this is:</span> {p.metric.toLowerCase()}, for {who},
        as Google reports it — the month before the profile work and the month after. It is a single
        business, not an average, and calls are counted by Google, not by us. Source: {p.source}.
      </figcaption>
    </figure>
  );
}

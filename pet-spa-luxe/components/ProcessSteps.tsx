import { processSteps } from "@/lib/site-data";

export function ProcessSteps({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {processSteps.map((step, i) => (
        <div key={step.title} className="relative rounded-2xl border border-psl-border bg-white p-6 shadow-sm">
          <span className="font-psl-display text-4xl font-bold text-psl-brass-dark">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 font-semibold text-psl-ink">{step.title}</p>
          <p className="mt-1 text-sm text-psl-ink-soft">{step.body}</p>
        </div>
      ))}
    </div>
  );
}

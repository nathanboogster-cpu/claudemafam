import { processSteps } from "@/lib/site-data";

export function ProcessSteps({ className = "" }: { className?: string }) {
  return (
    <ol className={`grid gap-6 sm:grid-cols-3 font-bb-sans ${className}`}>
      {processSteps.map((step, i) => (
        <li key={step.title} className="flex flex-col gap-3 rounded-2xl border border-bb-border bg-white p-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bb-coral-dark text-sm font-bold text-white">
            {i + 1}
          </span>
          <p className="font-bb-display text-lg font-bold text-bb-ink">{step.title}</p>
          <p className="text-sm text-bb-ink-soft">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

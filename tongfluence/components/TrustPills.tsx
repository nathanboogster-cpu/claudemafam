import { buildStats } from "@/lib/client-builds";
import { offer, headlineResult, gbpCallsProof } from "@/lib/site-data";
import { CheckIcon, GlobeIcon, PawIcon, ChartIcon, StarIcon } from "./icons";
import { Reveal } from "./Reveal";

// Trust pills: short, checkable facts, each one true of the business today.
// Every value is read from the same data the rest of the site publishes, so a
// pill can never claim something the site does not back up elsewhere.
type Pill = { icon: React.ComponentType<{ className?: string }>; text: string };

export function trustPills(variant: "full" | "compact" = "full"): Pill[] {
  const pills: Pill[] = [
    { icon: PawIcon, text: "Groomers only" },
    { icon: GlobeIcon, text: `${buildStats.siteCount} grooming businesses, ${buildStats.totalPages} pages built` },
    { icon: CheckIcon, text: `${offer.priceLine}, cancel anytime` },
  ];
  if (headlineResult) {
    pills.push({
      icon: ChartIcon,
      text: `${gbpCallsProof.before.calls} → ${gbpCallsProof.after.calls} calls in a month, one client`,
    });
  }
  if (variant === "full") {
    pills.push({ icon: StarIcon, text: "No contract, no setup fee" });
  }
  return pills;
}

export function TrustPills({
  variant = "full",
  className = "",
  animate = true,
}: {
  variant?: "full" | "compact";
  className?: string;
  animate?: boolean;
}) {
  const pills = trustPills(variant);
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {pills.map((p, i) => {
        const Icon = p.icon;
        const inner = (
          <>
            <Icon className="h-3.5 w-3.5 shrink-0 text-tf-brown-dark" />
            {p.text}
          </>
        );
        const cls =
          "inline-flex items-center gap-1.5 rounded-full border border-tf-border bg-white px-3 py-1.5 text-xs font-semibold text-tf-ink";
        return animate ? (
          <Reveal as="li" key={p.text} delay={i * 70} className={cls}>
            {inner}
          </Reveal>
        ) : (
          <li key={p.text} className={cls}>
            {inner}
          </li>
        );
      })}
    </ul>
  );
}

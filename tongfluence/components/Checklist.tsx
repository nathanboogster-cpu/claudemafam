import { CheckIcon, CrossIcon } from "./icons";

// A do/don't list. Used where the honest answer is a set of concrete items
// rather than a paragraph — which is also the form a reader skimming on a
// phone between appointments can actually use.
export function Checklist({
  items,
  tone = "do",
}: {
  items: { title: string; body?: string }[];
  tone?: "do" | "dont";
}) {
  const Icon = tone === "do" ? CheckIcon : CrossIcon;
  const iconColor = tone === "do" ? "text-tf-brown-dark" : "text-tf-warn";

  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
          <div>
            <p className="font-semibold text-tf-ink">{item.title}</p>
            {item.body ? <p className="mt-1 text-sm leading-relaxed text-tf-ink-soft">{item.body}</p> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

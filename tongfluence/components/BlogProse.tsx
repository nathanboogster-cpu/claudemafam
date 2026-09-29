import Link from "next/link";
import type { BlogBlock } from "@/lib/blog/types";
import { GbpCallsProof } from "./GbpCallsProof";
import { headlineResult } from "@/lib/site-data";

// Renders a blog post's blocks. Text supports two inline marks, **bold** and
// [label](href); everything else is plain. Internal links use next/link,
// external ones open in a new tab.
const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function Inline({ text }: { text: string }) {
  const parts = text.split(INLINE).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const cls = "font-medium text-tf-brown-dark underline underline-offset-4 hover:text-tf-brown-darker";
          return href.startsWith("/") ? (
            <Link key={i} href={href} className={cls}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} className={cls} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function BlogBlocks({ blocks, location }: { blocks: BlogBlock[]; location: string }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="mt-4 text-base leading-[1.75] text-tf-ink-soft first:mt-0">
                <Inline text={b.text} />
              </p>
            );
          case "ul":
          case "ol": {
            const Tag = b.type;
            return (
              <Tag
                key={i}
                className={`mt-4 space-y-2.5 pl-5 text-base leading-[1.7] text-tf-ink-soft ${
                  b.type === "ol" ? "list-decimal marker:font-semibold marker:text-tf-brown" : "list-disc marker:text-tf-brown"
                }`}
              >
                {b.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    <Inline text={item} />
                  </li>
                ))}
              </Tag>
            );
          }
          case "callout":
            return (
              <div key={i} className="mt-5 rounded-xl border border-tf-border bg-tf-card p-5">
                <p className="tf-caps text-xs text-tf-brown">{b.label}</p>
                <p className="mt-2 text-base leading-relaxed text-tf-ink">
                  <Inline text={b.text} />
                </p>
              </div>
            );
          case "proof":
            return headlineResult ? (
              <div key={i} className="mt-6">
                <GbpCallsProof location={location} />
              </div>
            ) : null;
        }
      })}
    </>
  );
}

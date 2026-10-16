import { faqs } from "@/lib/site-data";

export function FaqList({ only }: { only?: number[] }) {
  const items = only ? only.map((n) => faqs[n - 1]) : faqs;
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.question}>
          <summary>{f.question}</summary>
          <p>{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

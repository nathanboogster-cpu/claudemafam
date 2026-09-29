import Image from "next/image";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "./Reveal";

// Client testimonials, quoted word for word from their messages, each shown
// with the original message (a cropped screenshot) beneath it so the quote can
// be checked against its source. No star ratings: these are messages, not
// reviews, and nothing here is marked up as a Review.
export function Testimonials() {
  return (
    <ul className="grid items-start gap-4 md:grid-cols-3">
      {testimonials.map((t, i) => {
        const who = t.name ? (t.business ? `${t.name}, ${t.business}` : t.name) : "A Tongfluence client";
        return (
          <Reveal as="li" key={t.image.src} delay={i * 90} className="flex flex-col rounded-xl border border-tf-border bg-tf-card p-6">
            <blockquote>
              <p className="font-tf-display text-xl font-bold leading-snug text-tf-ink">
                <span aria-hidden="true" className="text-tf-accent">&ldquo;</span>
                {t.quote}
                <span aria-hidden="true" className="text-tf-accent">&rdquo;</span>
              </p>
            </blockquote>
            <p className="mt-5 text-sm font-semibold text-tf-ink">{who}</p>
            <p className="text-xs text-tf-ink-soft">
              {[t.market, `${t.channel}, ${t.dateLabel}`].filter(Boolean).join(" · ")}
            </p>
            <Image
              src={t.image.src}
              alt={t.image.alt}
              width={t.image.width}
              height={t.image.height}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="mt-4 h-auto w-full rounded-lg border border-tf-border"
            />
          </Reveal>
        );
      })}
    </ul>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { preCallVideoAspect, wistiaSwatchUrl, type PreCallVideo } from "@/lib/site-data";
import { WistiaPlayer } from "./WistiaPlayer";

// Video answers, all visible at once: each card is the question as a heading
// with its video beneath. The poster frame shows immediately; the Wistia
// player itself mounts only as a card comes near the viewport, so a page of
// seven videos does not boot seven players on load.
export function VideoAnswers({
  items,
  location,
}: {
  items: (PreCallVideo & { question: string })[];
  location: string;
}) {
  return (
    <ol className="grid gap-5 md:grid-cols-2">
      {items.map((item, i) => (
        <VideoAnswerCard key={item.wistiaMediaId} item={item} index={i} location={location} />
      ))}
    </ol>
  );
}

function VideoAnswerCard({
  item,
  index,
  location,
}: {
  item: PreCallVideo & { question: string };
  index: number;
  location: string;
}) {
  const ref = useRef<HTMLLIElement | null>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const length = item.durationSeconds
    ? `${Math.floor(item.durationSeconds / 60)}:${String(item.durationSeconds % 60).padStart(2, "0")}`
    : null;

  return (
    <li ref={ref} className="flex flex-col rounded-xl border border-tf-border bg-tf-card p-5">
      <div className="flex items-start gap-3">
        <span className="w-8 shrink-0 pt-0.5 font-tf-display text-xl font-bold leading-none text-tf-brown">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="flex-1 font-tf-display text-lg font-bold leading-snug text-tf-ink">{item.question}</h3>
      </div>
      <div className="mt-4 flex-1" />
      {near ? (
        <WistiaPlayer mediaId={item.wistiaMediaId} aspect={preCallVideoAspect} location={location} />
      ) : (
        <div
          className="tf-video rounded-xl border border-tf-border bg-tf-paper-deep"
          style={{ aspectRatio: String(preCallVideoAspect), backgroundImage: `url('${wistiaSwatchUrl(item.wistiaMediaId)}')` }}
        />
      )}
      {length ? <p className="mt-2 text-xs text-tf-ink-soft">Video answer · {length}</p> : null}
    </li>
  );
}

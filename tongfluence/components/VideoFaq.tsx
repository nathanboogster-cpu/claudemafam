"use client";

import { useState } from "react";
import { preCallVideoAspect, type PreCallVideo } from "@/lib/site-data";
import { WistiaPlayer } from "./WistiaPlayer";

// Questions answered on video. Each row is the question as a native
// <details>, so it is keyboard-accessible and works without JavaScript; the
// player for a question is only mounted the first time that question is
// opened, so a page with seven answers loads no video until one is asked for.
export function VideoFaq({
  items,
  location,
}: {
  items: (PreCallVideo & { question: string })[];
  location: string;
}) {
  // Ids of every question opened so far. Once mounted, a player stays mounted
  // so closing and reopening a question keeps its place in the video.
  const [opened, setOpened] = useState<string[]>([]);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isMounted = opened.includes(item.wistiaMediaId);
        return (
          <details
            key={item.wistiaMediaId}
            className="group rounded-xl border border-tf-border bg-tf-card"
            onToggle={(e) => {
              if ((e.currentTarget as HTMLDetailsElement).open && !isMounted) {
                setOpened((ids) => [...ids, item.wistiaMediaId]);
              }
            }}
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark">
              <span className="w-8 shrink-0 font-tf-display text-xl font-bold leading-none text-tf-brown">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-tf-display text-lg font-bold leading-snug text-tf-ink">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tf-brown-dark text-white transition-transform group-open:rotate-90"
              >
                <svg viewBox="0 0 16 16" className="ml-0.5 h-3.5 w-3.5" fill="currentColor">
                  <path d="M4 2.5v11l9-5.5z" />
                </svg>
              </span>
              <span className="sr-only">Play the answer</span>
            </summary>
            <div className="px-5 pb-5">
              {isMounted ? (
                <WistiaPlayer
                  mediaId={item.wistiaMediaId}
                  aspect={preCallVideoAspect}
                  location={location}
                  autoPlay
                />
              ) : (
                <div className="rounded-xl bg-tf-paper-deep" style={{ aspectRatio: String(preCallVideoAspect) }} />
              )}
            </div>
          </details>
        );
      })}
    </div>
  );
}

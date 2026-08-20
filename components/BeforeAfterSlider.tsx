"use client";

import { useState } from "react";
import { PawIcon } from "./PawIcon";

// Before/After comparison placeholder. Built as a real, working slider (native
// range input — draggable, keyboard-accessible, touch-friendly) so it's ready
// to take real before/after photos the moment Ellen supplies them; for now
// both sides are clearly-labeled placeholders, not fabricated "results."
export function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto select-none overflow-hidden rounded-2xl border border-border sm:aspect-video">
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream-deep to-sage/20">
        <div className="flex flex-col items-center gap-2 text-ink-soft">
          <PawIcon className="h-10 w-10 opacity-40" />
          <span className="text-sm font-semibold">After — real photo pending from client</span>
        </div>
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-terracotta-light/40 to-cream-deep">
          <div className="flex flex-col items-center gap-2 text-ink-soft">
            <PawIcon className="h-10 w-10 opacity-40" />
            <span className="text-sm font-semibold">Before — real photo pending from client</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${pos}%` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full bg-white text-terracotta-dark shadow-md"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
        </svg>
      </div>

      <span aria-hidden="true" className="pointer-events-none absolute left-2 top-2 rounded-full bg-ink/70 px-2 py-0.5 text-xs font-semibold text-white">
        Before
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute right-2 top-2 rounded-full bg-ink/70 px-2 py-0.5 text-xs font-semibold text-white">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

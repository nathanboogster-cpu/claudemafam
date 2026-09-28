"use client";

import { useEffect, useRef, useState } from "react";

// Counts a number up from zero when it scrolls into view. The final value is
// rendered on the server, so the number is always correct in the HTML and
// nothing about it depends on the animation running. Respects reduced motion
// by never starting.
//
// Figures are proportional (the font's default), not tabular: a standalone
// display-size number set in tabular figures looks loose, and the brief
// width jitter during a sub-second count is a fair trade for that.
// Formatting is expressed as data (decimals, suffix) rather than a function,
// because this is a client component and a server component cannot hand it a
// function — that is the one prop shape that fails at prerender time.
export function CountUp({
  value,
  duration = 900,
  className = "",
  decimals = 0,
  suffix = "",
}: {
  value: number;
  duration?: number;
  className?: string;
  decimals?: number;
  suffix?: string;
}) {
  const format = (n: number) => `${n.toFixed(decimals)}${suffix}`;
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(value * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
        else setDisplay(value);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {format(display)}
    </span>
  );
}

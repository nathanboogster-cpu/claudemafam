"use client";

import { useEffect, useRef, useState } from "react";

// Scroll-triggered reveal. Children render in their final position in the
// server HTML (so crawlers, no-JS visitors and the layout-shift metric all see
// the finished page); the transition only plays once JavaScript confirms the
// element has entered the viewport. Under prefers-reduced-motion the CSS in
// globals.css collapses the transition to nothing, so this is purely additive.
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger, in ms, for items in a group. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — the ref is typed for the union; each Tag is an HTMLElement.
      ref={ref}
      className={`tf-reveal ${shown ? "is-shown" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { explainerVideo } from "@/lib/site-data";
import { EVENTS, trackEvent } from "@/lib/track";

// Wistia's web-component embed, loaded lazily.
//
// PERFORMANCE: this is the only third-party script on the site besides Vercel
// Analytics, and it is heavy, so both files load with next/script's
// `lazyOnload` — after the page is interactive rather than competing with it.
// Until the <wistia-player> element upgrades, the container shows the video's
// own poster frame at a locked 16:9, so the embed can never shift the layout
// and there is always something to look at.
//
// Wistia's own snippet blurs that poster while the player boots. That is kept,
// but behind CSS in app/globals.css rather than an inline <style>, so it
// participates in the rest of the design system.
//
// The <wistia-player> element is typed in types/wistia.d.ts.

type WistiaVideo = {
  bind: (event: string, handler: () => void) => void;
  hashedId: () => string;
};

declare global {
  interface Window {
    _wq?: unknown[];
  }
}

export function ExplainerVideo({ location }: { location: string }) {
  const played = useRef(false);

  useEffect(() => {
    // Wistia's queue API: anything pushed to _wq runs once the player for that
    // media is ready, whether that is before or after this effect runs, so
    // there is no race with the lazily-loaded script.
    window._wq = window._wq || [];
    window._wq.push({
      id: explainerVideo.wistiaMediaId,
      onReady: (video: WistiaVideo) => {
        video.bind("play", () => {
          // Only the first play is a signal worth recording — replays and
          // seek-induced plays would inflate it into noise.
          if (played.current) return;
          played.current = true;
          trackEvent(EVENTS.videoPlay, { location });
        });
        video.bind("end", () => {
          trackEvent(EVENTS.videoComplete, { location });
        });
      },
    });
  }, [location]);

  return (
    <>
      <div
        className="tf-video overflow-hidden rounded-2xl border border-tf-border bg-tf-paper-deep shadow-sm"
        style={{
          aspectRatio: String(explainerVideo.aspectRatio),
          backgroundImage: `url('${explainerVideo.swatchUrl}')`,
        }}
      >
        <wistia-player
          media-id={explainerVideo.wistiaMediaId}
          aspect={String(explainerVideo.aspectRatio)}
        />
      </div>

      <noscript>
        <p className="mt-4 text-sm text-tf-ink-soft">
          The video needs JavaScript to play.{" "}
          <a
            href={explainerVideo.fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-tf-brown-dark underline underline-offset-4"
          >
            Watch it on Wistia instead
          </a>
          .
        </p>
      </noscript>

      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src={`https://fast.wistia.com/embed/${explainerVideo.wistiaMediaId}.js`}
        type="module"
        strategy="lazyOnload"
      />
    </>
  );
}

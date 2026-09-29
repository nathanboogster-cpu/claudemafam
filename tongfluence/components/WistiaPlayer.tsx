"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { wistiaEmbedUrl, wistiaSwatchUrl } from "@/lib/site-data";
import { EVENTS, trackEvent } from "@/lib/track";

// One Wistia video, via Wistia's <wistia-player> web component.
//
// PERFORMANCE: Wistia's player.js is the heaviest script on the site, so it
// loads with next/script's `lazyOnload`, after the page is interactive. The
// shared id means it is fetched once however many players a page mounts. Until
// the element upgrades, the box shows the video's own poster frame at a locked
// aspect ratio (blurred, as in Wistia's snippet — see .tf-video in
// globals.css), so an embed can never shift the layout.
//
// TRACKING: the first play and each completion fire video_play and
// video_complete with the page location and the Wistia media id, so the
// explainer and each FAQ answer are distinguishable.
//
// <wistia-player> is typed in types/wistia.d.ts.

type WistiaVideo = {
  bind: (event: string, handler: () => void) => void;
};

declare global {
  interface Window {
    _wq?: unknown[];
  }
}

export function WistiaPlayer({
  mediaId,
  aspect,
  location,
  autoPlay = false,
  className = "rounded-xl",
}: {
  mediaId: string;
  aspect: number;
  location: string;
  /** Start playing as soon as the player is ready (used when the viewer has
   *  just asked for this video by opening it). */
  autoPlay?: boolean;
  className?: string;
}) {
  const played = useRef(false);

  useEffect(() => {
    // Wistia's queue: handlers pushed to _wq run once the player for that
    // media is ready, whether that is before or after this effect, so there is
    // no race with the lazily loaded script.
    window._wq = window._wq || [];
    window._wq.push({
      id: mediaId,
      onReady: (video: WistiaVideo & { play?: () => void }) => {
        video.bind("play", () => {
          // Only the first play is worth recording; replays would inflate it.
          if (played.current) return;
          played.current = true;
          trackEvent(EVENTS.videoPlay, { location, media: mediaId });
        });
        video.bind("end", () => trackEvent(EVENTS.videoComplete, { location, media: mediaId }));
        if (autoPlay) video.play?.();
      },
    });
  }, [mediaId, location, autoPlay]);

  return (
    <>
      <div
        className={`tf-video overflow-hidden border border-tf-border bg-tf-paper-deep ${className}`}
        style={{ aspectRatio: String(aspect), backgroundImage: `url('${wistiaSwatchUrl(mediaId)}')` }}
      >
        <wistia-player media-id={mediaId} aspect={String(aspect)} />
      </div>

      <noscript>
        <p className="mt-3 text-sm text-tf-ink-soft">
          The video needs JavaScript to play.{" "}
          <a
            href={wistiaEmbedUrl(mediaId)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-tf-brown-dark underline underline-offset-4"
          >
            Watch it on Wistia instead
          </a>
          .
        </p>
      </noscript>

      <Script id="wistia-player-js" src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        id={`wistia-embed-${mediaId}`}
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        type="module"
        strategy="lazyOnload"
      />
    </>
  );
}

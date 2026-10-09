// ---------------------------------------------------------------------------
// WATCH PAGES — one dedicated page per video, at /video/<slug>.
//
// Google only indexes a video when it is the main content of a page ("Video
// isn't on a watch page" otherwise). The homepage, /book and /faq keep their
// embeds; each embed links to its watch page, and each VideoObject on those
// pages points its mainEntityOfPage at the watch page.
//
// Names and descriptions come from the same data the embeds use, so a watch
// page can never disagree with the VideoObject already published for it.
// ---------------------------------------------------------------------------
import { explainerVideo, preCallVideos, wistiaSwatchUrl, wistiaEmbedUrl, preCallVideoAspect } from "./site-data";

export type WatchVideo = {
  slug: string;
  mediaId: string;
  name: string;
  description: string;
  uploadDate: string;
  durationSeconds: number;
  aspect: number;
  /** Where the embed lives on the site, for the breadcrumb and the back link. */
  source: "home" | "faq";
};

// Short, stable slugs per Wistia media id. The question text is the H1; the
// slug only has to be readable and never change once it is in the sitemap.
const faqSlugs: Record<string, string> = {
  "6ic5brm3xd": "not-sure-if-i-need-this",
  r9yvjigysf: "mobile-with-no-storefront",
  amtcdc194e: "i-already-show-up-on-google",
  hmj7r3bvbd: "what-if-i-get-too-busy",
  gm32vc9733: "my-calendar-is-already-full",
  lwdv0uut95: "i-get-all-my-clients-from-referrals",
  gx15ov061y: "paid-for-marketing-before",
};

export const faqVideoDescription = (question: string) =>
  `Tongfluence’s answer to a grooming business owner who says: “${question}”`;

export const isoDuration = (s: number) => `PT${Math.floor(s / 60)}M${s % 60}S`;

export const watchVideos: WatchVideo[] = [
  {
    slug: "how-tongfluence-works",
    mediaId: explainerVideo.wistiaMediaId,
    name: explainerVideo.title,
    description: explainerVideo.description,
    uploadDate: explainerVideo.uploadDate,
    durationSeconds: explainerVideo.durationSeconds,
    aspect: explainerVideo.aspectRatio,
    source: "home",
  },
  ...preCallVideos.flatMap((v): WatchVideo[] =>
    v.question && v.uploadDate && v.durationSeconds && faqSlugs[v.wistiaMediaId]
      ? [
          {
            slug: faqSlugs[v.wistiaMediaId],
            mediaId: v.wistiaMediaId,
            name: v.question,
            description: faqVideoDescription(v.question),
            uploadDate: v.uploadDate,
            durationSeconds: v.durationSeconds,
            aspect: preCallVideoAspect,
            source: "faq",
          },
        ]
      : [],
  ),
];

export const videoPath = (slug: string) => `/video/${slug}`;
export const getWatchVideo = (slug: string) => watchVideos.find((v) => v.slug === slug);
export const watchPathForMedia = (mediaId: string) => {
  const v = watchVideos.find((w) => w.mediaId === mediaId);
  return v ? videoPath(v.slug) : undefined;
};

export const thumbnailUrl = (v: WatchVideo) => wistiaSwatchUrl(v.mediaId);
export const embedUrl = (v: WatchVideo) => wistiaEmbedUrl(v.mediaId);

export function durationLabel(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Wistia extras, fetched at build time: the caption transcript and a direct
// video file URL for VideoObject.contentUrl.
//
// Both are optional. The watch pages are statically generated, so these
// requests run on Vercel during `next build`, where fast.wistia.com is
// reachable, and the results are baked into the HTML. If a request fails or
// the media has no captions, the page falls back honestly (a marked
// placeholder for the transcript, no contentUrl), never invented text.
// ---------------------------------------------------------------------------

export type WistiaExtras = {
  /** Transcript paragraphs, from Wistia's captions. Null when unavailable. */
  transcript: string[] | null;
  /** Direct MP4 URL for schema.org contentUrl. Null when unavailable. */
  contentUrl: string | null;
};

const TIMEOUT_MS = 8000;

async function getJson(url: string): Promise<unknown> {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.json();
}

type CaptionLine = { text?: unknown };
type CaptionTrack = { language?: unknown; hash?: { lines?: CaptionLine[] } };

// Wistia's captions endpoint returns one track per language, each a list of
// timed lines whose `text` is an array of strings. Lines are joined into
// sentences and grouped into short paragraphs so the transcript reads as prose.
function parseCaptions(data: unknown): string[] | null {
  const tracks = (data as { captions?: CaptionTrack[] } | null)?.captions;
  if (!Array.isArray(tracks) || tracks.length === 0) return null;
  const track = tracks.find((t) => typeof t.language === "string" && /^en/i.test(t.language)) ?? tracks[0];
  const lines = track?.hash?.lines;
  if (!Array.isArray(lines)) return null;
  const words = lines
    .flatMap((l) => (Array.isArray(l.text) ? l.text : typeof l.text === "string" ? [l.text] : []))
    .map((t) => String(t).replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join(" ");
  if (!words) return null;
  const sentences = words.match(/[^.!?]+[.!?]+["”']?\s*|[^.!?]+$/g) ?? [words];
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += 5) {
    paragraphs.push(sentences.slice(i, i + 5).join("").trim());
  }
  return paragraphs.filter(Boolean);
}

type Asset = { type?: unknown; url?: unknown; width?: unknown };

// The media JSON lists every encoded asset. Prefer the original upload, then
// the widest mp4. Wistia delivery URLs end in .bin; appending /file.mp4 is
// Wistia's documented way to get a direct, correctly typed video file.
function parseContentUrl(data: unknown): string | null {
  const assets = (data as { media?: { assets?: Asset[] } } | null)?.media?.assets;
  if (!Array.isArray(assets)) return null;
  const mp4s = assets.filter((a) => typeof a.url === "string" && /^https?:\/\//.test(a.url) && typeof a.type === "string");
  const pick =
    mp4s.find((a) => a.type === "original") ??
    mp4s
      .filter((a) => /mp4/i.test(String(a.type)))
      .sort((a, b) => Number(b.width ?? 0) - Number(a.width ?? 0))[0];
  if (!pick) return null;
  return String(pick.url).replace(/\.bin$/, "/file.mp4");
}

export async function fetchWistiaExtras(mediaId: string): Promise<WistiaExtras> {
  const [captions, media] = await Promise.allSettled([
    getJson(`https://fast.wistia.com/embed/medias/${mediaId}/captions.json`),
    getJson(`https://fast.wistia.com/embed/medias/${mediaId}.json`),
  ]);
  return {
    transcript: captions.status === "fulfilled" ? parseCaptions(captions.value) : null,
    contentUrl: media.status === "fulfilled" ? parseContentUrl(media.value) : null,
  };
}

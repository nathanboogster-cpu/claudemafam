// ---------------------------------------------------------------------------
// PROOF SCREENSHOTS — the report images shown next to a measured figure.
//
// Every results block on the site (the Carlos calls figures, the per-build
// results on the case-study cards, the "More results" tiles) carries a list
// of these. An empty list renders nothing, so a figure can be published as
// soon as it is read from Google and the chart image added later without
// touching layout. Images live in public/images/proof/.
// ---------------------------------------------------------------------------
export type ProofScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Short line under the image, e.g. "Jun–Oct 2026 · profile actions". */
  caption?: string;
};

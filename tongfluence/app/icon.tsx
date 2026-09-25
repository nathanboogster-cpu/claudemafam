import { ImageResponse } from "next/og";
import { brandAssetDataUri } from "@/lib/brand-asset";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// The favicon, built from the real logo on the brand's paper ground.
//
// It uses a tighter crop than the header mark (logo-favicon.png), because the
// arc, swoosh and rising bars are the first things to disappear when the icon
// is drawn at 16px — at that size the full mark is mush, while the TF
// letterforms still read. Falls back to the TF colour split if the artwork is
// ever missing, so the build never fails over a favicon.
export default function Icon() {
  const mark = brandAssetDataUri("logo-favicon.png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f3ee",
          borderRadius: 12,
        }}
      >
        {mark ? (
          <img src={mark} alt="" width={58} height={58} style={{ objectFit: "contain" }} />
        ) : (
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: "-0.04em" }}>
            <span style={{ color: "#1f1b18" }}>T</span>
            <span style={{ color: "#6b4526" }}>F</span>
          </div>
        )}
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Code-generated Open Graph image — no real brand/hero photography was
// supplied for this build, so this uses the same brand colors and copy as
// the rest of the site rather than a placeholder stock photo.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fbf7f2 0%, #f3e6d6 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "#d8451f",
            color: "#fff",
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          B&amp;B
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#211c1a" }}>Bark &amp; Bork</div>
        <div style={{ display: "flex", fontSize: 32, color: "#5b534c", marginTop: 16 }}>
          Mobile Dog Grooming • Compton &amp; Greater Los Angeles
        </div>
      </div>
    ),
    { ...size },
  );
}

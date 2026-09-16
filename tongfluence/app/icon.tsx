import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon built from the logo's two-colour split: a warm near-black ground
// with the "T" in white and the "F" in the brand brown, echoing the way the
// wordmark divides. Generated rather than shipped as a binary so it stays in
// sync with the palette in app/globals.css.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f1b18",
          borderRadius: 14,
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        <span style={{ color: "#f6f3ee" }}>T</span>
        <span style={{ color: "#c69863" }}>F</span>
      </div>
    ),
    size,
  );
}

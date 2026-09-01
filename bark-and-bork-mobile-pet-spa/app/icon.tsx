import { ImageResponse } from "next/og";

// No real logo file was supplied for this build, so the favicon is
// generated at build time from a simple paw + brand-color monogram rather
// than a placeholder binary asset. Swap for a real logo-derived icon.png
// once brand assets are supplied.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          background: "#d8451f",
          borderRadius: 16,
          color: "#fff",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        B&amp;B
      </div>
    ),
    { ...size },
  );
}

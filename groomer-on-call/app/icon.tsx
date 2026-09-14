import { ImageResponse } from "next/og";

// Favicon: the brand's magenta badge with a white heart, matching the
// header wordmark lockup in components/Logo.tsx.
export const size = { width: 32, height: 32 };
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
          background: "#c0006f",
          borderRadius: 8,
          color: "#ffffff",
          fontSize: 22,
        }}
      >
        ♥
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// The favicon, generated from the same mark the header uses — a search
// result's two lines crossed by a grooming comb. Generated rather than
// shipped as a binary so it stays in sync with the brand colours in
// app/globals.css and costs nothing to change.
export default function Icon() {
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
          gap: 6,
          background: "#10684a",
          borderRadius: 14,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ width: 34, height: 6, borderRadius: 3, background: "#faf9f6" }} />
          <div style={{ width: 24, height: 6, borderRadius: 3, background: "#faf9f6" }} />
        </div>
        <div style={{ display: "flex", gap: 5, marginTop: 4 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ width: 4, height: 11, borderRadius: 2, background: "#a7d8c5" }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}

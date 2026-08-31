import { ImageResponse } from "next/og";
import { business } from "@/lib/site-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// No brand/photo assets were supplied for this build — a generated card
// with the verified business name, tagline, and address stands in until
// real photography is available.
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
          background: "#faf6ef",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "#33512f",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <svg width="56" height="56" viewBox="0 0 64 64" fill="#faf6ef">
            <ellipse cx="32" cy="42" rx="16" ry="13" />
            <ellipse cx="12" cy="24" rx="7" ry="9" />
            <ellipse cx="52" cy="24" rx="7" ry="9" />
            <ellipse cx="24" cy="12" rx="6" ry="8" />
            <ellipse cx="40" cy="12" rx="6" ry="8" />
          </svg>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#262019" }}>
          {business.name}
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "#5c5142" }}>
          Funkstown, MD • Serving the Hagerstown Area
        </div>
      </div>
    ),
    { ...size },
  );
}

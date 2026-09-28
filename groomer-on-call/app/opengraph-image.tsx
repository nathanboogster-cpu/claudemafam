import { ImageResponse } from "next/og";
import { business, market } from "@/lib/site-data";

// Generated at build time, so there is no static OG asset to keep in sync
// with the brand — and every page inherits it via metadataBase.
export const alt = `${business.name} — mobile pet grooming in ${market.cityState}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#171215",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "#ec008c",
            opacity: 0.28,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#fb8b24",
            opacity: 0.24,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            fontWeight: 800,
            color: "#fb8b24",
            textTransform: "uppercase",
          }}
        >
          Mobile Pet Grooming
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 92,
            lineHeight: 1.02,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          {business.name}
        </div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 40, color: "#ffe9d8", fontWeight: 600 }}>
          We come to your home · {market.cityState}
        </div>
        <div style={{ display: "flex", marginTop: 44, alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              background: "#c0006f",
              color: "#ffffff",
              fontSize: 38,
              fontWeight: 800,
              padding: "18px 40px",
              borderRadius: 9999,
            }}
          >
            Call {business.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

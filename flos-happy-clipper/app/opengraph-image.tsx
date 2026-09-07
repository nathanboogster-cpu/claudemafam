import { ImageResponse } from "next/og";
import { business } from "@/lib/site-data";

export const alt = `${business.name} — Dog Grooming in Eatontown, NJ`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site-wide fallback share-card image (Next.js's file convention picks this
// up for every page's og:image/twitter:image unless a page provides its
// own). Built with shapes and text only — no external font or image
// fetches — so it renders reliably everywhere this runs.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fdf5ea",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            backgroundColor: "#f3b8ce",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -140,
            width: 460,
            height: 460,
            borderRadius: "50%",
            backgroundColor: "#9ed3ea",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: 40,
            padding: "64px 96px",
            boxShadow: "0 20px 60px rgba(34,48,92,0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "rgba(178,58,99,0.12)",
              borderRadius: 999,
              padding: "10px 24px",
              marginBottom: 28,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#b23a63" }} />
            <span style={{ fontSize: 28, fontWeight: 700, color: "#b23a63", letterSpacing: 2 }}>
              EATONTOWN, NJ
            </span>
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#22305c" }}>
            Flo&apos;s Happy Clipper
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#52608a", marginTop: 18 }}>
            Dog Grooming &bull; Established Local Salon
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              backgroundColor: "#b23a63",
              color: "#ffffff",
              borderRadius: 999,
              padding: "16px 40px",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            {business.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

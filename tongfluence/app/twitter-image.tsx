import { ImageResponse } from "next/og";
import { business, offer } from "@/lib/site-data";

export const alt = `${business.name} — ${business.shortDescription}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// One branded share card for the whole site, generated at build time. Every
// page still gets its own og:title and og:description (see lib/metadata.ts),
// which is what actually differentiates a share preview; the image stays
// consistent so the brand is recognisable wherever a link is pasted.
export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#10684a",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, color: "#15181c", letterSpacing: "-0.02em" }}>
            {business.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#15181c",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            Get more dog grooming appointments from Google.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#4b535d", maxWidth: 900 }}>
            SEO-built grooming website, Google Business Profile optimization and a review system —
            for grooming businesses only.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              background: "#10684a",
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 700,
              padding: "12px 26px",
              borderRadius: 999,
            }}
          >
            {offer.priceLine}
          </div>
          <div style={{ fontSize: 26, color: "#4b535d" }}>Cancel anytime</div>
        </div>
      </div>
    ),
    size,
  );
}

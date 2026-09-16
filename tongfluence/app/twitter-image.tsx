import { ImageResponse } from "next/og";
import { business, offer } from "@/lib/site-data";

export const alt = `${business.name} — ${business.shortDescription}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// One branded share card for the whole site, generated at build time and
// built to the logo: warm off-white ground, the two-tone wordmark, hairline
// rules, and the tagline set in widely-tracked caps. Every page still gets
// its own og:title and og:description (see lib/metadata.ts), which is what
// actually differentiates a preview; the card itself stays constant so the
// brand is recognisable wherever a link is pasted.
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
          background: "#f6f3ee",
          padding: "68px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 13,
                background: "#1f1b18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 27,
                fontWeight: 800,
              }}
            >
              <span style={{ color: "#f6f3ee" }}>T</span>
              <span style={{ color: "#c69863" }}>F</span>
            </div>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: "-0.01em" }}>
              <span style={{ color: "#1f1b18" }}>TONG</span>
              <span style={{ color: "#6b4526" }}>FLUENCE</span>
            </div>
          </div>
          <div style={{ display: "flex", width: "100%", height: 1, background: "#e2dace" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: "#1f1b18",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 950,
            }}
          >
            Get more dog grooming appointments from Google.
          </div>
          <div style={{ marginTop: 26, fontSize: 29, color: "#564e47", maxWidth: 900 }}>
            SEO-built grooming website, Google Business Profile optimization and a review system —
            for grooming businesses only.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", width: "100%", height: 1, background: "#e2dace" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                background: "#6b4526",
                color: "#ffffff",
                fontSize: 27,
                fontWeight: 700,
                padding: "11px 26px",
                borderRadius: 999,
              }}
            >
              {offer.priceLine}
            </div>
            <div style={{ fontSize: 25, color: "#564e47" }}>Cancel anytime</div>
            <div
              style={{
                marginLeft: "auto",
                fontSize: 19,
                color: "#8a5a33",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontWeight: 600,
              }}
            >
              More leads. More bookings. More growth.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

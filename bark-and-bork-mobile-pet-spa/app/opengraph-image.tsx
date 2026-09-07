import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Embeds the real Bark and Bork logo mark (cropped from the client's
// business card) as a data URI so the OG image matches the actual brand,
// not a generated placeholder.
const logoBase64 = readFileSync(join(process.cwd(), "public/images/logo-mark.png")).toString("base64");

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
          background: "linear-gradient(135deg, #fff2f2 0%, #f5d6e0 100%)",
          padding: 64,
        }}
      >
        <img
          src={`data:image/png;base64,${logoBase64}`}
          alt=""
          width={140}
          height={140}
          style={{ borderRadius: "50%", marginBottom: 28 }}
        />
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#4a2a1f" }}>Bark &amp; Bork</div>
        <div style={{ display: "flex", fontSize: 32, color: "#7a5c4e", marginTop: 16 }}>
          Mobile Dog Grooming • Compton &amp; Greater Los Angeles
        </div>
      </div>
    ),
    { ...size },
  );
}

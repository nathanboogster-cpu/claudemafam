import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// No logo asset was supplied for this build — a simple generated paw
// monogram stands in as the favicon until a real logo is provided.
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
          background: "#33512f",
          borderRadius: "8px",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 64 64" fill="#faf6ef">
          <ellipse cx="32" cy="42" rx="16" ry="13" />
          <ellipse cx="12" cy="24" rx="7" ry="9" />
          <ellipse cx="52" cy="24" rx="7" ry="9" />
          <ellipse cx="24" cy="12" rx="6" ry="8" />
          <ellipse cx="40" cy="12" rx="6" ry="8" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

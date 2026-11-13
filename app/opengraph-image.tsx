import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.15,
            fontWeight: 600,
            maxWidth: "90%",
          }}
        >
          An independent volunteer group for Nampa Municipal Airport.
        </div>
        <div style={{ fontSize: 24, color: "#a1a1aa" }}>
          {siteConfig.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}

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
          background: "#0b2545",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            height: 16,
            width: "100%",
            background: "#e09a2d",
          }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#9ec9ea",
                fontWeight: 600,
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                width: 72,
                height: 6,
                background: "#e09a2d",
                borderRadius: 4,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 58,
              lineHeight: 1.15,
              fontWeight: 600,
              maxWidth: "94%",
            }}
          >
            An independent volunteer group for Nampa Municipal Airport.
          </div>
          <div style={{ fontSize: 24, color: "#d7e8f7" }}>
            {siteConfig.domain}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

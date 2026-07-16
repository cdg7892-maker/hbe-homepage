import { ImageResponse } from "next/og"
import { SITE } from "./lib/site"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fdfcf8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "#4a8a68",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            fontWeight: 800,
          }}
        >
          한
        </div>
        <div style={{ fontSize: 60, fontWeight: 800, color: "#2c4736" }}>{SITE.companyName}</div>
        <div style={{ fontSize: 30, color: "#7a8177" }}>강진군 방역·해충방제 전문업체</div>
      </div>
    ),
    { ...size }
  )
}

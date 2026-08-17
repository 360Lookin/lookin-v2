import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "66px 72px 62px",
          background: "#ffffff",
          color: "#111827",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 760,
            height: 760,
            right: -170,
            top: -250,
            borderRadius: 999,
            background: "#e7e2fa",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 330,
            height: 330,
            right: 54,
            bottom: -190,
            borderRadius: 999,
            background: "#bdb5e9",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 18,
            height: 18,
            right: 82,
            top: 80,
            borderRadius: 999,
            background: "#eb0000",
          }}
        />

        <div style={{ display: "flex", alignItems: "baseline", fontSize: 46, fontWeight: 800, letterSpacing: -4 }}>
          <span>look</span><span style={{ color: "#5b1e91" }}>in</span><span style={{ color: "#eb0000" }}>.</span>
        </div>

        <div style={{ position: "relative", display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              marginBottom: 20,
              color: "#5b1e91",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Web design · New Plymouth · New Zealand
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 500, letterSpacing: -5, lineHeight: 0.96 }}>
            <span>A better website,</span>
            <span>without the usual hassle.</span>
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22 }}>
          <span style={{ color: "#4b5563" }}>Strategy, design, development and original content.</span>
          <span style={{ color: "#5b1e91", fontWeight: 700 }}>lookin.nz</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}

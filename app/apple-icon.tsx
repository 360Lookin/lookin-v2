import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 38,
          background: "#111827",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 126,
          fontWeight: 800,
          letterSpacing: -14,
        }}
      >
        <span style={{ marginLeft: -8 }}>l</span><span style={{ color: "#eb0000" }}>.</span>
      </div>
    ),
    size,
  );
}

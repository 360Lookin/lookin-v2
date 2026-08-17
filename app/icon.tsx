import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

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
          borderRadius: 15,
          background: "#111827",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 44,
          fontWeight: 800,
          letterSpacing: -5,
        }}
      >
        <span style={{ marginLeft: -3 }}>l</span><span style={{ color: "#eb0000" }}>.</span>
      </div>
    ),
    size,
  );
}

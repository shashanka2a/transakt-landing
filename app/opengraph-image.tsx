import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Transakt - Crypto for the Whole Family";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#18140F",
          color: "#F0E8D8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              backgroundColor: "#00FF87",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0E1611"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 6h14" />
              <path d="M15 2l4 4-4 4" />
              <path d="M10 6v14" />
            </svg>
          </div>
          <span style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.04em" }}>
            Transakt
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              maxWidth: "900px",
            }}
          >
            Crypto for the <span style={{ color: "#00FF87" }}>Whole Family.</span>
            <br />
            Finally Simple.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#8E8475",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Passkey Native (Privy) • ENS Family Subnames • ZK Step-Up Biometrics • Gasless L2
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(240, 232, 216, 0.1)",
            paddingTop: "24px",
            color: "#8E8475",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          <span>transakt.family</span>
          <span style={{ color: "#00FF87" }}>Base &amp; Ethereum</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

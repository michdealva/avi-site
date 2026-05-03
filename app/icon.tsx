import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1D23",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="44"
          height="22"
          viewBox="0 0 1057.34 541.85"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <polygon
              fill="none"
              stroke="#2ECC52"
              strokeMiterlimit="10"
              strokeWidth="40"
              points="1.96 540.64 114.9 540.64 232.06 314.75 412.43 314.75 525.37 533.89 650.96 533.89 895.38 1.21 772.33 1.21 588.59 395.67 374.5 1.21 271.67 1.21 1.96 540.64"
            />
            <polygon
              fill="none"
              stroke="#2ECC52"
              strokeMiterlimit="10"
              strokeWidth="40"
              points="720.07 530.52 834.7 530.52 1055.53 1.21 956.07 1.21 720.07 530.52"
            />
            <polygon
              fill="none"
              stroke="#2ECC52"
              strokeMiterlimit="10"
              strokeWidth="40"
              points="254.82 265.87 384.62 265.87 319.72 122.58 254.82 265.87"
            />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}

import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const TrustMinimisedIcon: React.FC<GlowIconBoxProps> = ({ glow = "true" }) => {
  const svg = (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M24.5 2L6.5 10V22C6.5 33.1 14.18 43.48 24.5 46C34.82 43.48 42.5 33.1 42.5 22V10L24.5 2ZM24.5 23.98H38.5C37.44 32.22 31.94 39.56 24.5 41.86V24H10.5V12.6L24.5 6.38V23.98Z"
        fill="url(#paint0_linear_372_9694)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_372_9694"
          x1="24.5"
          y1="2"
          x2="24.5"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2FE4AB" />
          <stop offset="1" stopColor="#B6EA5C" />
        </linearGradient>
      </defs>
    </svg>
  );

  return glow ? <GlowIconBox>{svg}</GlowIconBox> : svg;
};

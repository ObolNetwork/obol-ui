import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const RunIcon: React.FC<GlowIconBoxProps> = ({ glow = "true" }) => {
  const svg = (
    <svg
    width="41"
    height="32"
    viewBox="0 0 41 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.5 0H4.5C2.28 0 0.5 1.8 0.5 4V28C0.5 30.2 2.28 32 4.5 32H36.5C38.7 32 40.5 30.2 40.5 28V4C40.5 1.8 38.72 0 36.5 0ZM36.5 28H4.5V8H36.5V28ZM32.5 26H20.5V22H32.5V26ZM11.5 26L8.68 23.18L13.84 18L8.66 12.82L11.5 10L19.5 18L11.5 26Z"
      fill="url(#paint0_linear_909_47972)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_909_47972"
        x1="20.5"
        y1="0"
        x2="20.5"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2FE4AB" />
        <stop offset="1" stopColor="#B6EA5C" />
      </linearGradient>
    </defs>
  </svg>
  );

  return glow ? <GlowIconBox color="run">{svg}</GlowIconBox> : svg;
};

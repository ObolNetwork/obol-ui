import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const MigrateIcon: React.FC<GlowIconBoxProps> = ({ glow = "true" }) => {
  const svg = (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.5 12H24.5L20.5 8H8.5C6.3 8 4.5 9.8 4.5 12V36C4.5 38.2 6.3 40 8.5 40H40.5C42.7 40 44.5 38.2 44.5 36V16C44.5 13.8 42.7 12 40.5 12ZM40.5 36H8.5V12H18.84L21.66 14.82L22.84 16H40.5V36ZM24.82 24H16.5V28H24.82L21.64 31.18L24.48 34L32.5 26.02L24.48 18L21.66 20.82L24.82 24Z"
        fill="url(#paint0_linear_924_10916)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_924_10916"
          x1="24.5"
          y1="8"
          x2="24.5"
          y2="40"
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

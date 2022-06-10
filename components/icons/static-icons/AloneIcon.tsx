import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const AloneIcon: React.FC<GlowIconBoxProps> = ({ glow = "true" }) => {
  const svg = (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12C26.2 12 28 13.8 28 16C28 18.2 26.2 20 24 20C21.8 20 20 18.2 20 16C20 13.8 21.8 12 24 12ZM24 32C29.4 32 35.6 34.58 36 36H12C12.46 34.56 18.62 32 24 32ZM24 8C19.58 8 16 11.58 16 16C16 20.42 19.58 24 24 24C28.42 24 32 20.42 32 16C32 11.58 28.42 8 24 8ZM24 28C18.66 28 8 30.68 8 36V40H40V36C40 30.68 29.34 28 24 28Z"
        fill="url(#paint0_linear_924_10951)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_924_10951"
          x1="24"
          y1="8"
          x2="24"
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

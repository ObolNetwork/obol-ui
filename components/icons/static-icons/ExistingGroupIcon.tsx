import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const ExistingGroupIcon: React.FC<GlowIconBoxProps> = ({
  glow = "true",
}) => {
  const svg = (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_924_10942)">
        <path
          d="M8.5 26C10.7 26 12.5 24.2 12.5 22C12.5 19.8 10.7 18 8.5 18C6.3 18 4.5 19.8 4.5 22C4.5 24.2 6.3 26 8.5 26ZM10.76 28.2C10.02 28.08 9.28 28 8.5 28C6.52 28 4.64 28.42 2.94 29.16C1.46 29.8 0.5 31.24 0.5 32.86V36H9.5V32.78C9.5 31.12 9.96 29.56 10.76 28.2ZM40.5 26C42.7 26 44.5 24.2 44.5 22C44.5 19.8 42.7 18 40.5 18C38.3 18 36.5 19.8 36.5 22C36.5 24.2 38.3 26 40.5 26ZM48.5 32.86C48.5 31.24 47.54 29.8 46.06 29.16C44.36 28.42 42.48 28 40.5 28C39.72 28 38.98 28.08 38.24 28.2C39.04 29.56 39.5 31.12 39.5 32.78V36H48.5V32.86ZM32.98 27.3C30.64 26.26 27.76 25.5 24.5 25.5C21.24 25.5 18.36 26.28 16.02 27.3C13.86 28.26 12.5 30.42 12.5 32.78V36H36.5V32.78C36.5 30.42 35.14 28.26 32.98 27.3ZM16.64 32C16.82 31.54 16.9 31.22 18.46 30.62C20.4 29.86 22.44 29.5 24.5 29.5C26.56 29.5 28.6 29.86 30.54 30.62C32.08 31.22 32.16 31.54 32.36 32H16.64ZM24.5 16C25.6 16 26.5 16.9 26.5 18C26.5 19.1 25.6 20 24.5 20C23.4 20 22.5 19.1 22.5 18C22.5 16.9 23.4 16 24.5 16ZM24.5 12C21.18 12 18.5 14.68 18.5 18C18.5 21.32 21.18 24 24.5 24C27.82 24 30.5 21.32 30.5 18C30.5 14.68 27.82 12 24.5 12Z"
          fill="url(#paint0_linear_924_10942)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_924_10942"
          x1="24.5"
          y1="12"
          x2="24.5"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2FE4AB" />
          <stop offset="1" stopColor="#B6EA5C" />
        </linearGradient>
        <clipPath id="clip0_924_10942">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return glow ? <GlowIconBox>{svg}</GlowIconBox> : svg;
};

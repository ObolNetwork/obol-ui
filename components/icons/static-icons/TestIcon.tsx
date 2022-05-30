import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const TestIcon: React.FC<GlowIconBoxProps> = ({ glow = "true" }) => {
  const svg = (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 16H34.38C33.48 14.44 32.24 13.1 30.74 12.08L34 8.82L31.18 6L26.84 10.34C25.92 10.12 24.98 10 24 10C23.02 10 22.08 10.12 21.18 10.34L16.82 6L14 8.82L17.24 12.08C15.76 13.1 14.52 14.44 13.62 16H8V20H12.18C12.08 20.66 12 21.32 12 22V24H8V28H12V30C12 30.68 12.08 31.34 12.18 32H8V36H13.62C15.7 39.58 19.56 42 24 42C28.44 42 32.3 39.58 34.38 36H40V32H35.82C35.92 31.34 36 30.68 36 30V28H40V24H36V22C36 21.32 35.92 20.66 35.82 20H40V16ZM32 24V30C32 30.44 31.94 30.94 31.86 31.4L31.66 32.7L30.92 34C29.48 36.48 26.84 38 24 38C21.16 38 18.52 36.46 17.08 34L16.34 32.72L16.14 31.42C16.06 30.96 16 30.46 16 30V22C16 21.54 16.06 21.04 16.14 20.6L16.34 19.3L17.08 18C17.68 16.96 18.52 16.06 19.5 15.38L20.64 14.6L22.12 14.24C22.74 14.08 23.38 14 24 14C24.64 14 25.26 14.08 25.9 14.24L27.26 14.56L28.48 15.4C29.48 16.08 30.3 16.96 30.9 18.02L31.66 19.32L31.86 20.62C31.94 21.06 32 21.56 32 22V24ZM20 28H28V32H20V28ZM20 20H28V24H20V20Z"
        fill="url(#paint0_linear_909_47958)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_909_47958"
          x1="24"
          y1="6"
          x2="24"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD603C" />
          <stop offset="0.32915" stopColor="#DD833C" />
          <stop offset="1" stopColor="#DDCA3C" />
        </linearGradient>
      </defs>
    </svg>
  );

  return glow ? <GlowIconBox color="test">{svg}</GlowIconBox> : svg;
};

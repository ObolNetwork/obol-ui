import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const CreateIcon: React.FC<GlowIconBoxProps> = ({ glow = "true" }) => {
  const svg = (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.308 26.1011L28.0654 30.3438L40.0578 42.3362L44.3004 38.0936L32.308 26.1011Z"
        fill="url(#paint0_linear_909_47943)"
      />
      <path
        d="M35.5002 20C39.3602 20 42.5002 16.86 42.5002 13C42.5002 11.84 42.1802 10.76 41.6802 9.79997L36.2802 15.2L33.3002 12.22L38.7002 6.81998C37.7402 6.31998 36.6602 5.99998 35.5002 5.99998C31.6402 5.99998 28.5002 9.13998 28.5002 13C28.5002 13.82 28.6602 14.6 28.9202 15.32L25.2202 19.02L21.6602 15.46L23.0802 14.04L20.2602 11.22L24.5002 6.97998C22.1602 4.63998 18.3602 4.63998 16.0202 6.97998L8.9402 14.06L11.7602 16.88H6.1202L4.7002 18.3L11.7802 25.38L13.2002 23.96V18.3L16.0202 21.12L17.4402 19.7L21.0002 23.26L6.1802 38.08L10.4202 42.32L33.1802 19.58C33.9002 19.84 34.6802 20 35.5002 20Z"
        fill="url(#paint1_linear_909_47943)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_909_47943"
          x1="30.1867"
          y1="28.2224"
          x2="42.1791"
          y2="40.2149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CD2DD" />
          <stop offset="1" stopColor="#6767E4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_909_47943"
          x1="23.6002"
          y1="5.22498"
          x2="23.6002"
          y2="42.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CD2DD" />
          <stop offset="1" stopColor="#6767E4" />
        </linearGradient>
      </defs>
    </svg>
  );

  return glow ? <GlowIconBox color="create">{svg}</GlowIconBox> : svg;
};

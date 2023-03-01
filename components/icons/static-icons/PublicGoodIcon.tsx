import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const PublicGoodIcon: React.FC<GlowIconBoxProps> = ({
  glow = "true",
}) => {
  const svg = (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M32 26C38.18 20.38 44 15.12 44 10.6C44 6.9 41.1 4 37.4 4C35.32 4 33.3 4.98 32 6.5C30.68 4.98 28.68 4 26.6 4C22.9 4 20 6.9 20 10.6C20 15.12 25.82 20.38 32 26ZM26.6 8C27.48 8 28.38 8.42 28.96 9.1L32 12.68L35.04 9.1C35.62 8.42 36.52 8 37.4 8C38.88 8 40 9.12 40 10.6C40 12.84 35.92 16.94 32 20.58C28.08 16.94 24 12.82 24 10.6C24 9.12 25.12 8 26.6 8Z"
        fill="url(#paint0_linear_372_9678)"
      />
      <path
        d="M38 32H34C34 29.6 32.5 27.44 30.26 26.6L17.94 22H2V44H14V41.12L28 45L44 40V38C44 34.68 41.32 32 38 32ZM6 40V26H10V40H6ZM27.94 40.82L14 36.96V26H17.22L28.86 30.34C29.54 30.6 30 31.26 30 32C30 32 26.02 31.9 25.4 31.7L20.64 30.12L19.38 33.92L24.14 35.5C25.16 35.84 26.22 36.02 27.3 36.02H38C38.78 36.02 39.48 36.48 39.8 37.14L27.94 40.82Z"
        fill="url(#paint1_linear_372_9678)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_372_9678"
          x1="32"
          y1="4"
          x2="32"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2FE4AB" />
          <stop offset="1" stopColor="#B6EA5C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_372_9678"
          x1="23"
          y1="22"
          x2="23"
          y2="45"
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

import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const CodeIcon: React.FC<GlowIconBoxProps> = ({ glow = "true" }) => {
  const svg = (
    <svg width="49" height="48" viewBox="0 0 49 48" >
    <path
      d="M19.3 33.2L10.1 24L19.3 14.8L16.5 12L4.5 24L16.5 36L19.3 33.2ZM29.7 33.2L38.9 24L29.7 14.8L32.5 12L44.5 24L32.5 36L29.7 33.2Z"
      fill="url(#paint0_linear_372_9668)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_372_9668"
        x1="24.5"
        y1="12"
        x2="24.5"
        y2="36"
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


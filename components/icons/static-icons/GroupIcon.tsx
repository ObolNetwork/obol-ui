import { GlowIconBox, GlowIconBoxProps } from "../GlowIconBox";

export const GroupIcon: React.FC<GlowIconBoxProps> = ({ glow = "true" }) => {
  const svg = (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_924_10926)">
        <path
          d="M44.5 18V14H40.5V18H36.5V22H40.5V26H44.5V22H48.5V18H44.5Z"
          fill="url(#paint0_linear_924_10926)"
        />
        <path
          d="M16.5 24C20.92 24 24.5 20.42 24.5 16C24.5 11.58 20.92 8 16.5 8C12.08 8 8.5 11.58 8.5 16C8.5 20.42 12.08 24 16.5 24ZM16.5 12C18.7 12 20.5 13.8 20.5 16C20.5 18.2 18.7 20 16.5 20C14.3 20 12.5 18.2 12.5 16C12.5 13.8 14.3 12 16.5 12Z"
          fill="url(#paint1_linear_924_10926)"
        />
        <path
          d="M16.5 26C11.16 26 0.5 28.68 0.5 34V40H32.5V34C32.5 28.68 21.84 26 16.5 26ZM28.5 36H4.5V34.02C4.9 32.58 11.1 30 16.5 30C21.9 30 28.1 32.58 28.5 34V36Z"
          fill="url(#paint2_linear_924_10926)"
        />
        <path
          d="M25.52 8.1001C27.36 10.2201 28.5 12.9801 28.5 16.0001C28.5 19.0201 27.36 21.7801 25.52 23.9001C29.44 23.4001 32.5 20.0801 32.5 16.0001C32.5 11.9201 29.44 8.6001 25.52 8.1001Z"
          fill="url(#paint3_linear_924_10926)"
        />
        <path
          d="M33.5601 27.6602C35.3401 29.3202 36.5001 31.4002 36.5001 34.0002V40.0002H40.5001V34.0002C40.5001 31.1002 37.3201 28.9802 33.5601 27.6602Z"
          fill="url(#paint4_linear_924_10926)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_924_10926"
          x1="42.5"
          y1="14"
          x2="42.5"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2FE4AB" />
          <stop offset="1" stopColor="#B6EA5C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_924_10926"
          x1="16.5"
          y1="8"
          x2="16.5"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2FE4AB" />
          <stop offset="1" stopColor="#B6EA5C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_924_10926"
          x1="16.5"
          y1="26"
          x2="16.5"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2FE4AB" />
          <stop offset="1" stopColor="#B6EA5C" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_924_10926"
          x1="29.01"
          y1="8.1001"
          x2="29.01"
          y2="23.9001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2FE4AB" />
          <stop offset="1" stopColor="#B6EA5C" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_924_10926"
          x1="37.0301"
          y1="27.6602"
          x2="37.0301"
          y2="40.0002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2FE4AB" />
          <stop offset="1" stopColor="#B6EA5C" />
        </linearGradient>
        <clipPath id="clip0_924_10926">
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

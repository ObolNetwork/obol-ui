import type * as Stitches from "@stitches/react";

import { styled, CSS } from "../../stitches.config";

const SvgIconPlanet = styled("svg", {
  $$stopColor1: "url(#paint0_linear_946_5074)",
  $$stopColor2: "url(#paint1_linear_946_5074)",
  "& rect": {
    "& .rect1": {
      fill: "$$stopColor1",
    },
    "& .rect2": {
      fill: "$$stopColor2",
    },
  },

  variants: {
    planet: {
      blue: {
        $$stopColor1: "url(#paint0_linear_946_5074)",
        $$stopColor2: "url(#paint1_linear_946_5074)",
      },
      orange: {
        $$stopColor1: "url(#paintOrange1)",
        $$stopColor2: "url(#paintOrange2)",
      },
    },
  },
});

export type SvgIconPlanetProps = {
  css?: CSS;
} & Stitches.VariantProps<typeof SvgIconPlanet>;

export const Planet = (props: SvgIconPlanetProps) => (
  <SvgIconPlanet
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    {...props}
  >
    <rect
      className="rect1"
      opacity="0.2"
      width="96"
      height="96"
      rx="48"
      fill="url(#paint0_linear_946_5074)"
    />
    <rect
      className="rect2"
      x="16"
      y="16"
      width="64"
      height="64"
      rx="32"
      fill="url(#paint1_linear_946_5074)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_946_5074"
        x1="3.57628e-07"
        y1="96"
        x2="83.5958"
        y2="-9.80089"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3CD2DD" />
        <stop offset="1" stopColor="#208EE5" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_946_5074"
        x1="16"
        y1="80"
        x2="71.7305"
        y2="9.46607"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3CD2DD" />
        <stop offset="1" stopColor="#208EE5" />
      </linearGradient>
    </defs>

    <defs>
      <linearGradient
        id="paintOrange1"
        x1="3.57628e-07"
        y1="96"
        x2="83.5958"
        y2="-9.80089"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD603C" />
        <stop offset="1" stopColor="#E3EA5C" />
      </linearGradient>
      <linearGradient
        id="paintOrange2"
        x1="16"
        y1="80"
        x2="71.7305"
        y2="9.46607"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD603C" />
        <stop offset="1" stopColor="#E3EA5C" />
      </linearGradient>
    </defs>
  </SvgIconPlanet>
);

import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color1?: string;
  color2?: string;
}
// eslint-disable-next-line react/display-name
export const PlanetIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color1, color2, ...props }, ref) => {
    return (
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <rect
          opacity="0.2"
          width="96"
          height="96"
          rx="48"
          fill="url(#paint0_linear_946_4966)"
        />
        <rect
          x="16"
          y="16"
          width="64"
          height="64"
          rx="32"
          fill="url(#paint1_linear_946_4966)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_946_4966"
            x1="0"
            y1="96"
            x2="96"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_946_4966"
            x1="16"
            y1="80"
            x2="80"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

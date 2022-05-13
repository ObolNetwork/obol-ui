import * as Stitches from "@stitches/react";

import { styled, keyframes } from "../../../stitches.config";
import { colorVariants } from "../../utils/color-variants";

const loading = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Spin = styled("div", {
  $$color: "$colors$white",
  $$size: "$space$2",
  animation: `${loading} 1.4s infinite linear`,
  background:
    "linear-gradient(to right, $bg04 10%, rgba(255, 255, 255, 0) 42%)",
  borderRadius: "50%",
  fontSize: "$$size",
  height: "11em",
  margin: "50px auto",
  position: "relative",
  textIndent: "-9999em",
  transform: "translateZ(0)",
  width: "11em",
  "&::before": {
    background: "$bg04",
    borderRadius: "100% 0 0 0",
    content: "",
    height: "50%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "50%",
  },
  "&::after": {
    background: "$$color",
    borderRadius: "50%",
    bottom: 0,
    content: "",
    height: "75%",
    left: 0,
    margin: "auto",
    position: "absolute",
    right: 0,
    top: 0,
    width: "75%",
  },
  variants: {
    color: {
      ...colorVariants,
    },
    size: {
      sm: {
        $$size: "$space$2",
      },
      md: {
        $$size: "$space$xxxs",
      },
      lg: {
        $$size: "$space$xxs",
      },
      xl: {
        $$size: "$space$xs",
      },
    },
  },
});

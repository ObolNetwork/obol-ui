import { styled } from "../../stitches.config";

export const GlowIconBox = styled("div", {
  position: "block",
  $$size: "$space$3xl",
  width: "$$size",
  height: "$$size",

  "&::before": {
    content: " ",
    width: "$$size",
    height: "$$size",
    position: "absolute",
    background: "linear-gradient(180deg, $obolGreen 0%, $obolGreenLight 100%)",
    opacity: "0.3",
    filter: "blur(18px)",
    borderRadius: "310px",
  },

  variants: {
    color: {
      create: {
        "&::before": {
          background: "linear-gradient(180deg, #3CD2DD 0%, #6767E4 100%)",
        },
      },
      test: {
        "&::before": {
          background:
            "linear-gradient(180deg, #DD603C 0%, #DD833C 32.91%, #DDCA3C 100%)",
        },
      },
      run: {
        "&::before": {
          background: "linear-gradient(180deg, #2FE4AB 0%, #B6EA5C 100%)",
        },
      },
    },
  },
});

export interface GlowIconBoxProps {
  glow?: boolean;
}

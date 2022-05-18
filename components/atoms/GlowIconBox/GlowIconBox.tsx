import { styled } from "../../../stitches.config";

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
});

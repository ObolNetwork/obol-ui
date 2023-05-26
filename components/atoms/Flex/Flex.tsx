import { styled } from "../../../stitches.config";

export const Flex = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  width: "$full",
  variants: {
    direction: {
      column: {
        fd: "column",
      },
    },
  },
});
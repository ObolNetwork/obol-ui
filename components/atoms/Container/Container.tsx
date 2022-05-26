import { styled } from "../../../stitches.config";
import { Box } from "../index";

export const Container = styled(Box, {
  display: "flex",
  gap: "$xl",
  flexDirection: "column",
  alignItems: "center",
  p: "$2xl",
  "@sm": { px: "$lg" },
  background: "$bg02",
  border: "2px solid $bg03",
  borderRadius: "$3",
  width: "auto",
  variants: {
    column: {
      true: {
        flexDirection: "column",
      },
    },
  },
});

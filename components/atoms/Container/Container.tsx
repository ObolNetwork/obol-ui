import { styled } from "../../../stitches.config";
import { Box } from "../index";

export const Container = styled(Box, {
  display: "flex",
  gap: "$xl",
  alignItems: "center",
  p: "$2xl",
  "@sm": { flexDirection: "column", px: "$lg" },
  background: "$bg02",
  border: "2px solid $bg03",
  borderRadius: "$3",
  width: "$full",
  variants: {
    column: {
      true: {
        flexDirection: "column",
      },
    },
  },
});

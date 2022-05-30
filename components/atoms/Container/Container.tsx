import { styled } from "../../../stitches.config";
import { Box } from "../index";

export const Container = styled(Box, {
  display: "flex",
  gap: "$xl",
  justifyContent: "center",
  alignItems: "center",
  p: "$2xl",
  flexDirection: "column",
  "@sm": { px: "$lg", gap: "$lg" },
  background: "$bg02",
  border: "2px solid $bg03",
  borderRadius: "$3",
  width: "auto",
  variants: {
    layout: {
      colum: {
        flexDirection: "column",
      },
      row: {
        display: "grid",
        gridAutoColumns: "1fr",
        gridAutoFlow: "column",
        "@md": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gridAutoColumns: "unset",
          gridAutoFlow: "unset",
        },
      },
    },
    alignItems: {
      start: {
        alignItems: "start",
      },
    },
    ghost: {
      true: {
        background: "transparent",
        border: "2px solid transparent",
        p: 0,
      },
    },
    variant: {
      textContent: {
        gap: "$xs",
        $$textAlign: "start",
        justifyContent: "$$textAlign",
        alignItems: "$$textAlign",
        textAlign: "$$textAlign",
        "& span": {
          textAlign: "$$textAlign",
        },
      },
      card: {
        background: "$bg03",
      },
    },
    fullWidth: {
      true: {
        width: "$full",
      },
    },
  },
});

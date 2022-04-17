import type * as Stitches from "@stitches/react";

import { styled } from "../../../stitches.config";
import { modifyVariantsForStory } from "../../utils/types";

export const Button = styled("button", {
  //reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  px: "$lg",
  py: "$md",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  textAlign: "center",
  borderRadius: "$3",
  color: "$primaryTextDefault",

  fontWeight: 700,
  fontSize: "$4",
  lineHeight: "$base",

  variants: {
    color: {
      primary: {
        backgroundColor: "$primaryBgDefault",
        "&:hover": {
          backgroundColor: "$primaryBgDefaultHover",
        },
      },
      secondary: {
        backgroundColor: "$grayBgDefault",
        border: "2px solid $grayBgDefault",
        color: "$neutralDark",
        "&:hover": {
          backgroundColor: "$gray2BgDefault",
          border: "2px solid $gray2BgDefault",
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: "transparent",
        color: "white",
      },
    },

    fullWidth: {
      true: {
        width: "$full",
      },
    },
    outlined: {
      true: {
        backgroundColor: "transparent",
        border: "1px solid",
      },
    },
    variant: {
      nav: {
        backgroundColor: "$navButtonBgDefault",
        color: "$textMiddle",
        "&:hover": {
          backgroundColor: "$navButtonBgHover",
          color: "$textLight",
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

/* Storybook utility for stitches variant props

NOTE: this can't live in the stories file because the storybook navigator will take a story and will crash
      I can't figure out why it can't be defined without being exported.
*/

type ComponentVariants = Stitches.VariantProps<typeof Button>;
type ComponentProps = ComponentVariants;

export const ButtonStory =
  modifyVariantsForStory<ComponentVariants, ComponentProps, typeof Button>(
    Button
  );

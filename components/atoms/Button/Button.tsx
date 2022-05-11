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
  py: "$xs",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  textAlign: "center",
  borderRadius: "$3",
  gap: "$xxs",

  height: "$3xl",
  fontWeight: "$bold",
  fontSize: "$4",
  lineHeight: "$base",

  border: "2px solid transparent",
  $$color: "$colors$bg01",
  color: "$$color",

  "&:disabled": {
    pointerEvents: "none",
    color: "$bg04",
    backgroundColor: "transparent",
    border: "2px solid $bg04",
    "& svg": {
      "& path": {
        fill: "$bg04",
        stroke: "$bg04",
      },
    },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: "$obolGreen",
        "&:hover": {
          backgroundColor: "$obolGreenHover",
          $$color: "$colors$textGreenHover",
          "& svg": {
            "& path": {
              fill: "$textGreenHover",
              stroke: "$textGreenHover",
            },
          },
        },
      },
      secondary: {
        "& svg": {
          "& path": {
            fill: "$body",
            stroke: "$body",
          },
        },
        backgroundColor: "$bg03",
        border: "2px solid $bg03",
        color: "$body",
        "&:hover": {
          backgroundColor: "$bg04",
          border: "2px solid $bg04",
        },
      },
      create: {
        backgroundColor: "$create",
        "&:hover": {
          backgroundColor: "$createHover",
          $$color: "$colors$textCreateHover",
          "& svg": {
            "& path": {
              fill: "$textCreateHover",
              stroke: "$textCreateHover",
            },
          },
        },
      },
      test: {
        backgroundColor: "$test",
        "&:hover": {
          backgroundColor: "$testHover",
          $$color: "$colors$textGrayHover",
          "& svg": {
            "& path": {
              fill: "$textGrayHover",
              stroke: "$textGrayHover",
            },
          },
        },
      },
      coordinate: {
        backgroundColor: "$coordinate",
        "&:hover": {
          backgroundColor: "$coordinateHover",
          $$color: "$colors$textGrayHover",
          "& svg": {
            "& path": {
              fill: "$textGrayHover",
              stroke: "$textGrayHover",
            },
          },
        },
      }
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
        borderRadius: "$3",
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

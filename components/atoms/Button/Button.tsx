import * as Stitches from "@stitches/react";

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

  $$background: "transparent",
  backgroundColor: "$$background",

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

  "& div": {
    "&::after": {
      background: "$$background",
    },
  },
  variants: {
    color: {
      ghost: {
        $$background: "transparent",
      },
      primary: {
        $$background: "$colors$obolGreen",
        "&:hover": {
          $$color: "$colors$textGreenHover",
          $$background: "$colors$obolGreenHover",
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
        $$background: "$colors$bg03",
        border: "2px solid $bg03",
        color: "$body",
        "&:hover": {
          $$background: "$colors$bg04",
          border: "2px solid $bg04",
        },
      },
      create: {
        $$background: "$colors$create",
        "&:hover": {
          $$background: "$colors$createHover",
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
        $$background: "$colors$test",
        "&:hover": {
          $$background: "$colors$testHover",
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
        $$background: "$colors$coordinate",
        "&:hover": {
          $$background: "$colors$coordinateHover",
          $$color: "$colors$textGrayHover",
          "& svg": {
            "& path": {
              fill: "$textGrayHover",
              stroke: "$textGrayHover",
            },
          },
        },
      },
    },
    ghost: {
      true: {
        $$background: "transparent",
        color: "white",
        "&:hover": {
          $$background: "transparent",
        },
      },
    },
    icon: {
      true: {
        padding: "$sm",
        border: 0,
      },
    },
    fullWidth: {
      true: {
        width: "$full",
      },
    },
    outlined: {
      true: {
        $$background: "transparent",
        border: "1px solid",
      },
    },
    variant: {
      nav: {
        borderRadius: "$3",
        $$background: "$colors$navButtonBgDefault",
        color: "$textMiddle",
        "&:hover": {
          $$background: "$colors$navButtonBgHover",
          color: "$textLight",
        },
      },
      tx: {
        px: "$7xl",
        py: "$xs",
        height: "3xl",
        fontSize: "$4",
        fontWeight: "$bold",
        $$background: "$colors$txButton",
      },
      wallet: {
        $$background: "$colors$bg03",
        border: "2px solid $bg03",
        color: "$body",
        "&:hover": {
          $$background: "$colors$bg04",
          border: "2px solid $bg04",
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

type ButtonComponentVariants = Stitches.VariantProps<typeof Button>;
export type ButtonComponentProps = ButtonComponentVariants & {
  loading?: boolean;
};

export const ButtonStory = modifyVariantsForStory<
  ButtonComponentVariants,
  ButtonComponentProps,
  typeof Button
>(Button);

// export const WalletButton =

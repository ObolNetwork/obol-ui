import * as Stitches from "@stitches/react";

import { styled } from "../../../stitches.config";
import { modifyVariantsForStory } from "../../utils/types";

export const IconButton = styled("button", {
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
  display: "flex",
  btrr: "$1",
  bbrr: "$1",
  p: "10px",

  backgroundColor: "$bg04",
  "&:hover": {
    backgroundColor: "$bg05",
    cursor: "pointer",
  },
  "&:disabled": {
    backgroundColor: "$bg02",
    color: "$muted",
    "& path": {
      stroke: "$muted",
      fill: "$muted",
    },
  },
  margin: 0,
  border: "2px solid transparent",
  variants: {
    ghost: {
      true: {
        backgroundColor: "transparent",
        color: "white",
        "&:hover": {
          backgroundColor: "transparent",
        },
        p: "10px",
      },
    },
    fullWidth: {
      true: {
        width: "$full",
      },
    },
    borderDisabled: {
      true: {
        border: "2px solid $bg04",
      },
    },
  },
});
/* Storybook utility for stitches variant props

NOTE: this can't live in the stories file because the storybook navigator will take a story and will crash
      I can't figure out why it can't be defined without being exported.
*/

type IconButtonComponentVariants = Stitches.VariantProps<typeof IconButton>;
export type IconButtonComponentProps = IconButtonComponentVariants;

export const IconButtonStory =
  modifyVariantsForStory<
    IconButtonComponentVariants,
    IconButtonComponentProps,
    typeof IconButton
  >(IconButton);

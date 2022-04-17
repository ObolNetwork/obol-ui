import type * as Stitches from "@stitches/react";

import { styled } from "../../../stitches.config";
import { modifyVariantsForStory } from "../../utils/types";

export const Link = styled("a", {
  display: "flex",
  gap: "$sm",
  alignItems: "center",
  fontStyle: "$",
  fontWeight: "$bold",
  fontSize: "$4",
  height: "$lg",
  lineHeight: "$normal",
  cursor: "pointer",

  variants: {
    variant: {
      default: {
        color: "$textGreenDark",
        "& svg": {
          "& path": {
            fill: "$textGreenDark",
            stroke: "$textGreenDark",
          },
        },
        "&:hover": {
          color: "$textGreen2",
          "& svg": {
            "& path": {
              fill: "$textGreen2",
              stroke: "$textGreen2",
            },
          },
        },
      },
      docs: {
        color: "$textMiddle",
        "&:hover": {
          color: "$textLight",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/* Storybook utility for stitches variant props

NOTE: this can't live in the stories file because the storybook navigator will take a story and will crash
      I can't figure out why it can't be defined without being exported.
*/

type ComponentVariants = Stitches.VariantProps<typeof Link>;
type ComponentProps = ComponentVariants;

export const LinkStory =
  modifyVariantsForStory<ComponentVariants, ComponentProps, typeof Link>(Link);

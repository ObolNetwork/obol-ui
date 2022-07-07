import type * as Stitches from "@stitches/react";

import { styled } from "../../../stitches.config";
import { modifyVariantsForStory } from "../../utils/types";

export const Link = styled("a", {
  display: "flex",
  gap: "$xxs",
  alignItems: "center",
  fontStyle: "$",
  fontWeight: "$bold",
  fontSize: "$4",
  height: "$lg",
  lineHeight: "$normal",
  cursor: "pointer",
  textDecoration: "none",
  variants: {
    variant: {
      default: {
        color: "$obolGreen",
        "& svg": {
          "& path": {
            fill: "$obolGreen",
            stroke: "$obolGreen",
          },
        },
        "&:hover": {
          color: "$linkButtonHover",
          "& svg": {
            "& path": {
              fill: "$linkButtonHover",
              stroke: "$linkButtonHover",
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
    disabled: {
      true: {
        pointerEvents: "none",
        color: "$muted",
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

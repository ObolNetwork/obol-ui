import * as Stitches from "@stitches/react";

import { styled } from "../../../stitches.config";
import { modifyVariantsForStory } from "../../utils/types";
export const TextField = styled("input", {
  borderRadius: "$1",
  border: "2px solid $bg04",
  backgroundColor: "$bg03",
  color: "$textLight",
  px: "$sm",
  py: "$xs",
  fontSize: "$4",

  "&:focus": {
    backgroundColor: "$bg02",
  },

  "&::placeholder": {
    color: "$muted",
  },
});

/* Storybook utility for stitches variant props

NOTE: this can't live in the stories file because the storybook navigator will take a story and will crash
      I can't figure out why it can't be defined without being exported.
*/

type ComponentVariants = Stitches.VariantProps<typeof TextField>;
export type ComponentProps = ComponentVariants;

export const TextFieldStory =
  modifyVariantsForStory<ComponentVariants, ComponentProps, typeof TextField>(
    TextField
  );

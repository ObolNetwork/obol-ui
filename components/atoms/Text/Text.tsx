import type * as Stitches from "@stitches/react";

import { styled, theme } from "../../../stitches.config";
import { modifyVariantsForStory } from "../../utils/types";
const { colors } = theme;

type MappedColor = {
  [K in keyof typeof colors]: { $$color: `$color${string}` };
};

const colorVariants = Object.keys(colors).reduce(
  (prev, curr) => ({ ...prev, [curr]: { $$color: "$colors$" + curr } }),
  {} as MappedColor
);

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",
  $$color: "$colors$textLight",
  color: "$$color",

  variants: {
    variant: {
      h1: {
        fontSize: "$11",
        lineHeight: '64px',
        fontWeight: "bold",
      },
      h2: {
        fontSize: "$10",
        lineHeight: '56px',
        fontWeight: "bold",
      },
      h3: {
        fontSize: "$9",
        lineHeight: '48px',
        fontWeight: "bold",
      },
      h4: {
        fontSize: "$8",
        lineHeight: '32px',
        fontWeight: "bold",
      },
      h5: {
        fontSize: "$5",
        lineHeight: '28px',
        fontWeight: "bold",
      },
      body: {
        fontSize: "$4",
        lineHeight: '24px',
        fontWeight: "medium",
        $$color: "$colors$body"
      },
      metadata: {
        fontSize: "$2",
        lineHeight: '18px',
        fontWeight: "medium",
      },
      subline: {
        fontSize: "$3",
        lineHeight: '18px',
        fontWeight: "bold",
        textTransform: "capitalize"
      },
    },
    size: {
      1: { fontSize: "$1" },
      2: { fontSize: "$2" },
      3: { fontSize: "$3" },
      4: { fontSize: "$4" },
      5: { fontSize: "$5" },
      6: { fontSize: "$6" },
      7: { fontSize: "$7" },
      8: { fontSize: "$8" },
      9: { fontSize: "$9" },
      10: { fontSize: "$10" },
    },
    color: {
      ...colorVariants,
    },
    glow: {
      true: {
        textShadow: "0px 0px $$color, 0 0 30px $$color, 0 0 20px $$color;"
      },
    },
    inline:{
      true:{
        display: 'inline'
      }
    }
  },
});

export default Text;

/* Storybook utility for stitches variant props

NOTE: this can't live in the stories file because the storybook navigator will take a story and will crash
      I can't figure out why it can't be defined without being exported.
*/

type ComponentVariants = Stitches.VariantProps<typeof Text>;
type ComponentProps = ComponentVariants;

export const TextStory =
  modifyVariantsForStory<ComponentVariants, ComponentProps, typeof Text>(Text);
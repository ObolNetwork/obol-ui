import { theme } from "../../stitches.config";

const { colors } = theme;

const COLORS = { ...colors };

type MappedColor = {
  [K in keyof typeof COLORS]: { $$color: `$colors${string}` };
};

export const colorVariants = Object.keys(colors).reduce(
  (prev, curr) => ({ ...prev, [curr]: { $$color: "$colors$" + curr } }),
  {} as MappedColor
);

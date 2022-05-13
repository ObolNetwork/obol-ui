import { theme } from '../../stitches.config';

const { colors } = theme;

type MappedColor = {
  [K in keyof typeof colors]: { $$color: `$color${string}` };
};

export const colorVariants = Object.keys(colors).reduce(
  (prev, curr) => ({ ...prev, [curr]: { $$color: '$colors$' + curr } }),
  {} as MappedColor
);
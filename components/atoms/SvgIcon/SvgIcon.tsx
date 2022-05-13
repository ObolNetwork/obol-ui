import type * as Stitches from '@stitches/react';

import { styled, CSS } from '../../../stitches.config';

import { colorVariants } from "../../utils/color-variants";

export const SvgIcon = styled('svg', {
  $$size: '1em',
  $$color: '$colors$black',
  lineHeight: '1em',
  verticalAlign: 'middle',
  width: '$$size',
  height: '$$size',
  '& path': {
    stroke: '$$color',
    fill: '$$color',
  },
  variants: {
    color: {
      inherit: {
        $$color: 'currentColor',
      },
      ...colorVariants,
    },
    size: {
      xs: {
        $$size: '10px',
      },
      sm: {
        $$size: '12px',
      },
      md: {
        $$size: '16px',
      },
      lg: {
        $$size: '24px',
      },
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

SvgIcon.defaultProps = {
  viewBox: '0 0 16 16',
  preserveAspectRatio: 'none',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};

export type SvgIconProps = {
  css?: CSS;
} & Stitches.VariantProps<typeof SvgIcon>;

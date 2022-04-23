import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from "@stitches/react";

export const mediaQueryKeys = {
  xs: "(max-width: 520px)",
  sm: "(max-width: 900px)",
  md: "(max-width: 1200px)",
  lg: "(max-width: 1800px)",
} as const;

// TODO: discuss the nomenclature of sizes & spaces
const spaces = {
  1: "1px",
  2: "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "24px",
  xl: "32px",
  "1xl": "40px",
  "2xl": "48px",
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // TODO: gather colors from figma with an script when document in figma is already define
      white: "#fff",
      black: "#000",
      lightBackground: "#E1E1E1",
      obolBlue: "#162A40",

      // background
      primaryBgDefault: "#CCE1E6",
      primaryBgDefaultHover: "#EFF4F6",
      primaryTextDefault: "#3B6F7D",
      secondaryBgDefault: "rgba(255, 255, 255, 0.05)",
      secondaryBgHover: "hsla(0, 0%, 100%, 0.1)",
      grayBgDefault: "hsla(190, 42%, 9%, 0.05)",
      gray2BgDefault: "hsla(190, 42%, 9%, 0.1)",
      neutralDark: "#0D1D21",
      navButtonBgDefault: "#132A2F",
      navButtonBgHover: "#1A3A42",
      cardBackgroundDark: "#25383C",
      cardBackgroundLight: "hsla(150, 20%, 99%, 0.2)",

      // text
      textMiddle: "#ABB7BA",
      textLight: "#DFEAED",
      textTabHover: "#DFEAED66",
      textTabInactive: "#DFEAED4D",
      textGreenDark: "#16968E",
      textGreenLight: "#DDFFEE",
      textGreen1: "#18AF6B",
      textGreen2: "#27CAA1",
      textGreen3: "#9DBFC8",

      //dark
      obolMidGreen: "#2FE4AB",
      obolDarkDark: "#16968E",
      obolDisabled: "#1A292D",

      purple: "#9167E4",
      orange: "#DD603C",
      teal: "#3CD2DD",
    },
    space: {
      ...spaces,
    },
    sizes: {
      max: "max-content",
      min: "min-content",
      full: "100%",
      ...spaces,
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      5: "16px",
      round: "50%",
      pill: "9999px",
    },
    fontSizes: {
      1: "11px",
      2: "12px",
      3: "15px",
      4: "16px",
      5: "18px",
      6: "20px",
      7: "21px",
      8: "24px",
      9: "32px",
      10: "52px",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      tall2: 1.75,
      taller: "2",
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    ...mediaQueryKeys,
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export const globalStyles = globalCss({
  "input, textarea": {
    appearance: "none",
    borderWidth: 0,
    boxSizing: "border-box",
    fontFamily: "inherit",
    margin: "0",
    outline: "none",
    padding: "0",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    "&::before": {
      boxSizing: "border-box",
    },
    "&::after": {
      boxSizing: "border-box",
    },
  },
  button: {
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
  },
  "div, hr": {
    boxSizing: "border-box",
  },
  img: {
    verticalAlign: "middle",
    maxWidth: "100%",
  },
});

export type CSS = Stitches.CSS<typeof config>;

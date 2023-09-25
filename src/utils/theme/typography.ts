export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const typography = {
  fontFamily: "'Roboto', sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
  },
  body1: {
    lineHeight: 1.5,
  },
  body2: {
    lineHeight: 22 / 14,
  },
  caption: {
    lineHeight: 1.5,
  },
  overline: {
    fontWeight: 500,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
} as const;

export default typography;

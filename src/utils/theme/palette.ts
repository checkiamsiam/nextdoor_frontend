import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

// Declare to add new color to palette
declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    primary?: string;
    secondary?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
    contrastText: string;
  }
}

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  lighter: "#a6d5f5",
  light: "#6BC3FF",
  main: "#1299E8",
  dark: "#0E7FC6",
  darker: "#0A669D",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#FFAD77",
  light: "#fa7e55",
  main: "#FF5722",
  dark: "#D54C1A",
  darker: "#AD4215",
  contrasText: "#fff",
};

// const SECONDARY = {
//   lighter: "#ffebcc",
//   light: "#ffc266",
//   main: "#FF5722",
//   dark: "#e69500",
//   dark_hover: "#cc8400",
//   darker: "#996300",
//   contrastText: "#fff",
// };

const INFO = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  ...COMMON,
  text: {
    primary: "#212B36",
    secondary: "#002359",
    disabled: GREY[500],
  },
  background: {
    paper: "#F2F4F8",
    primary: "#F2F4F8",
    secondary: "#002359",
    neutral: GREY[200],
  },
  action: {
    ...COMMON.action,
    active: GREY[600],
  },
};

export default palette;

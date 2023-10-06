import {
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
  createTheme,
} from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import { shadows } from "./themeOptions";

type Props = {
  children: React.ReactNode;
};

const themeOptions: ThemeOptions = {
  palette: palette,
  typography,
  // overrides default theme options
  shadows,
};

export const theme = createTheme(themeOptions);

export default function ThemeProvider({ children }: Props) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

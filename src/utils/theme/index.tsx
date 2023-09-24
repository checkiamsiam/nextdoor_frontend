import {
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
  createTheme,
} from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";

type Props = {
  children: React.ReactNode;
};

const themeOptions: ThemeOptions = {
  palette: palette,
  typography,
};

export const theme = createTheme(themeOptions);

export default function ThemeProvider({ children }: Props) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

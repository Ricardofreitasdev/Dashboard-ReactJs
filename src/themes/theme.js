import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff2667",
      main: "#d50644",
      dark: "#c5003b",

    },
    secondary: {
      light: "#0854c5",
      main: "#042e6d",
      dark: "#021f4b"
    }
  },
  typography: {
    fontSize: 15
  },
});


export default theme;
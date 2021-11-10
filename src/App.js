import React from "react";
import Routes from "./routes/Routes";
import UserProvider from "./context/UserProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./themes/theme";
import LayoutProvider from "./context/LayoutProvider";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <LayoutProvider>
            <Routes />
          </LayoutProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

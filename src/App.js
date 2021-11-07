import React from "react";
import Routes from "./routes/Routes";
import UserProvider from "./context/UserProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./themes/theme";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

// import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import { getDesignTokens } from "./ui/theme/getDesignTokens";

const darkModeTheme = createTheme(getDesignTokens("light"));
function App() {
  return (
    <>
      <ThemeProvider theme={darkModeTheme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;

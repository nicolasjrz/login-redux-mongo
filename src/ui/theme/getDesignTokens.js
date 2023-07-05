import { grey, deepPurple } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...grey,
      ...(mode === "dark" && {
        main: deepPurple[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepPurple[900],
        paper: deepPurple[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[600],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

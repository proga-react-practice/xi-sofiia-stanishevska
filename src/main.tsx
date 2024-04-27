import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";

import "@fontsource/chakra-petch";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#46505A",
    },
    action: {
      active: "#000",
    },
  },
  typography: {
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      fontFamily: "Chakra Petch, sans-serif",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      fontFamily: "Chakra Petch, sans-serif",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 600,
      fontFamily: "Chakra Petch, sans-serif",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          display: "block",
          width: "100%",
          "& .MuiInputBase-root": {
            width: 350,
            maxWidth: "100%",
            display: "block",
            marginBottom: 10,
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          display: "block",
          width: "100%",
          marginBottom: 7,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000", // Apply border color to the outlined input
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000",
          borderColor: "#000",
          "&:hover": {
            backgroundColor: "rgb(150, 150, 150)",
            color: "#000",
            borderColor: "#000",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
export default theme;

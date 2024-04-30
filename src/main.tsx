import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
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
    fontFamily: "Chakra Petch, sans-serif",
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          display: "block",
          "& .MuiInputBase-root": {
            width: 300,
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
          marginBottom: 9,
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
          fontWeight: 600,
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

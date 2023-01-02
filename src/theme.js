import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#00C853",
      dark: "#00712F",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#FE5656",
    },
    text: {
      primary: "#373737",
      secondary: "#7B7B7B",
      inputDefaultColor: "rgba(0, 0, 0, 0.2)",
    },
    disabled: "#817F7F",
  },
  typography: {
    fontFamily: "'IRANYekan', " + roboto.style.fontFamily,
    fontSize: 18,
    h1: {
      fontSize: 34,
      fontWeight: 800,
      color: "#000",
    },
    h5: {
      fontSize: 22,
      fontWeight: 700,
    },
    h6: {
      fontSize: 18,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 300,
      color: "#373737",
    },
    button: {
      fontWeight: 400,
      textTransform: "none",
      fontFamily: "'IRANYekan', " + roboto.style.fontFamily,
    },
  },
  shape: {
    borderRadius: "15px",
  },
});

export default theme;

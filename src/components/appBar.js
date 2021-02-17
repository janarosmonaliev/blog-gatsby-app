import React from "react";
import { Link } from "gatsby";
import Navigation from "../components/navigation";
import LogoSVG from "../components/LogoSvg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        "&:hover": {
          backgroundColor: "rgba(171, 171, 171, 0.1)",
          // backgroundColor: "#f2f2f3",
        },
      },
      label: {
        fontSize: "1rem",
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(171, 171, 171, 0.1)",
          // backgroundColor: "#f2f2f3",
        },
      },
    },
  },
});

export default function Navbar(props) {
  return (
    <ThemeProvider theme={theme}>
      <header className="site-header">
        <a className="logo-wrapper" href="/">
          <LogoSVG></LogoSVG>
        </a>
        <Navigation callback={(e) => props.toggleTheme(e)} />
      </header>
    </ThemeProvider>
  );
}

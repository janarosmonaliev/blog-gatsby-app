import React from "react";
import { AppBar, Toolbar, Button, Paper, Box } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Link, useStaticQuery } from "gatsby";
import Logo from "../images/janarosmo-logo-lg.svg";
import Navigation from "../components/navigation";
import LogoSVG from "../components/LogoSvg";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-title">
        <Link to="/">
          {/* <img className={classes.logo} alt="janosmo logo"></img> */}
          <LogoSVG></LogoSVG>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

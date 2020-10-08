import React from "react";
import { Link } from "gatsby";
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

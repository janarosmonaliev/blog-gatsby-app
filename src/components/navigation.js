import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import ResumeMenu from "../components/resumeMenu";
import { Button, Box } from "@material-ui/core";

export default function Navigation(props) {
  return (
    <nav className="navigation">
      <ResumeMenu />
      <Box mx={1}>
        <Button
          disableTouchRipple={true}
          href="https://github.com/janarosmonaliev"
          className="nav-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Button>
      </Box>
      <Box mx={1}>
        <Button
          disableTouchRipple={true}
          className="nav-button"
          href="/contact"
        >
          Contact
        </Button>
      </Box>

      <ThemeChanger />
    </nav>
  );
}

import React from "react";
import ThemeChanger from "../components/themeChanger";
import ResumeMenu from "../components/resumeMenu";
import { Button, Box } from "@material-ui/core";

export default function Navigation(props) {
  return (
    <nav className="navigation">
      <Box mx={1}>
        <Button disableTouchRipple={true} className="nav-button" href="/blog">
          Blog
        </Button>
      </Box>
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

      <ThemeChanger callback={(e) => props.callback(e)} />
    </nav>
  );
}

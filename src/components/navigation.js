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
          // size="large"
          className="nav-button"
          href="/contact"
        >
          {/* <Box fontWeight={600} className="nav-button"> */}
          Contact
          {/* <Link to="/contact">Contact</Link> */}
          {/* </Box> */}
        </Button>
      </Box>
      <ThemeChanger />
    </nav>
  );
}

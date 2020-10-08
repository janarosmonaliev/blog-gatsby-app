import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import ResumeMenu from "../components/resumeMenu";
import { Button, Box } from "@material-ui/core";

export default (props) => (
  <nav className="navigation">
    <Box mx={1}>
      <ResumeMenu />
    </Box>
    <Box mx={1} fontWeight={600}>
      <Button disableTouchRipple={true} size="large" className="nav-button">
        <Link to="/contact">
          <Box fontWeight={600}>Contact</Box>
        </Link>
      </Button>
    </Box>
    <ThemeChanger />
  </nav>
);

import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import ResumeMenu from "../components/resumeMenu";
import { AppBar, Toolbar, Button, Paper, Box } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  logo: {
    height: "40px",
    marginTop: "4px",
  },
});

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
  //   <Toolbar px={0}>
  // </Toolbar>
);

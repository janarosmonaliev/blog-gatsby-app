import React from "react";
import { Menu, MenuItem, Button, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ModalResume from "./modalResume";
import ResumePDF from "../images/Osmonaliev-Zhanarbek-CV.pdf";

const useStyles = makeStyles({
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#4209ED",
      textDecoration: "none",
    },
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    borderRadius: "10px",
  },
})((props) => (
  <Menu
    getContentAnchorEl={null}
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function ResumeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div>
      <Box mx={1}>
        <Button
          disableTouchRipple={true}
          aria-controls="resume-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="nav-button"
          // size="large"
        >
          Resume
        </Button>
      </Box>
      <StyledMenu
        id="resume-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box className={classes.menuList + "menu-card"}>
          <ModalResume />
          <MenuItem>
            <a
              className={classes.link}
              href={ResumePDF}
              target="_blank"
              download="Zhanarbek-Osmonaliev-CV.pdf"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </MenuItem>
        </Box>
      </StyledMenu>
    </div>
  );
}

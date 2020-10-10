import React from "react";
import { Menu, MenuItem, Button, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ModalResume from "./modalResume";

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
  const [isActive, setButtonState] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setButtonState(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setButtonState(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        disableTouchRipple={true}
        aria-controls="resume-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="nav-button"
        color={isActive ? "primary" : "black"}
        size="large"
      >
        <Box fontWeight={600} className="nav-button">
          Resume
        </Box>
      </Button>
      <StyledMenu
        id="resume-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box className={classes.menuList}>
          <ModalResume />
          <MenuItem>
            <a
              className={classes.link}
              href={"/assets/Osmonaliev-Zhanarbek-CV.pdf"}
              target="_blank"
              download
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

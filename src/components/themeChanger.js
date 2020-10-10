import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Sun, Moon } from "react-feather";
import { IconButton, SvgIcon } from "@material-ui/core";

export default () => {
  const [isLightMode, setMode] = React.useState(true);
  const changeTheme = (toggleTheme) => {
    setMode(!isLightMode);
    return "light";
  };
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <IconButton aria-label="close" size="medium">
          <label>
            <input
              type="checkbox"
              className="theme-changer"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <div className="mode-container">
              {/* <i className="gg-sun"></i>
              <i className="gg-moon"></i> */}
              <SvgIcon className="gg-sun">
                <Sun className="gg-sun" />
              </SvgIcon>
              <SvgIcon className="gg-moon">
                <Moon className="gg-moon" />
              </SvgIcon>
            </div>
          </label>
        </IconButton>
      )}
    </ThemeToggler>
  );
};

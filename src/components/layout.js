import React from "react";
import "prism-themes/themes/prism-material-oceanic.css";

import Navbar from "../components/appBar";

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <Navbar toggleTheme={(e) => console.log(e)}></Navbar>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Zhanarbek Osmonaliev</p>
      </footer>
    </div>
  );
};

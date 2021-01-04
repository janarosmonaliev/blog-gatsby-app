import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import "prismjs/themes/prism-tomorrow.css";
import "prism-themes/themes/prism-material-oceanic.css";

import Navbar from "../components/appBar";

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <Navbar></Navbar>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Zhanarbek Osmonaliev</p>
      </footer>
    </div>
  );
};

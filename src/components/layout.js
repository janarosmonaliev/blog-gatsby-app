import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "prismjs/themes/prism-okaidia.css";
import Navbar from "../components/appBar";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
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

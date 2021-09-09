import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Canvas from "../three-js/canvas";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/appBar";
import { Grid, SvgIcon, Hidden, Container } from "@material-ui/core";
import { Box, Book, Terminal, X } from "react-feather";
const useStyles = makeStyles({
  // styles here
  textDisplay: {
    fontFamily: "PP Neue Machine, Inter, sans-serif",
    fontSize: "36px",
    lineHeight: "44px",
    "@media(min-width: 768px)": {
      fontSize: "56px",
      lineHeight: "64px",
    },
  },
});

function HelmetMeta({ website, ...props }) {
  const site = website;
  return (
    <Helmet>
      <title>{site.siteMetadata.home.title}</title>
      <meta name="title" content={site.siteMetadata.home.title}></meta>
      <meta name="description" content={site.siteMetadata.home.description} />
      <meta
        name="keywords"
        content="Janar Osmonaliev, Zhanarbek, Janarbek, Stony Brook, developer, kyrgyzstan, Жанар, Осмоналиев, personal, website"
      ></meta>
      <meta name="viewport" content={site.siteMetadata.viewport}></meta>
      <meta name="image" content={site.siteMetadata.home.image}></meta>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={site.siteMetadata.siteUrl}></meta>
      <meta property="og:title" content={site.siteMetadata.home.title}></meta>
      <meta
        property="og:description"
        content={site.siteMetadata.home.description}
      ></meta>
      <meta property="og:image" content={site.siteMetadata.home.image}></meta>

      {/* Twitter */}
      <meta
        property="twitter:card"
        content={site.siteMetadata.home.image}
      ></meta>
      <meta property="twitter:url" content={site.siteMetadata.siteUrl}></meta>
      <meta
        property="twitter:title"
        content={site.siteMetadata.home.title}
      ></meta>
      <meta
        property="twitter:description"
        content={site.siteMetadata.home.description}
      ></meta>
      <meta
        property="twitter:image"
        content={site.siteMetadata.home.image}
      ></meta>
      <html lang="en" />
    </Helmet>
  );
}

const Content = () => {
  const classes = useStyles();
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: "flex",
          width: "100%",
          left: "10px",
          right: "10px",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
        }}
      >
        <p className={classes.textDisplay}>
          Hi, I am Zhanar. <br /> I <span>develop</span> user-friendly products.
        </p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.5}
        speed={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Scroll down</p>
      </ParallaxLayer>
    </Parallax>
  );
};

const IndexPage = ({ data: { site } }) => {
  // const [themeDark, setTheme] = useState(theme);
  return (
    <div>
      <HelmetMeta website={site} />
      <div id="navbar-wrapper">
        <Navbar></Navbar>
      </div>
      <div id="landing-wrapper">
        <Content />
      </div>
    </div>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        siteUrl
        viewport
        image
        home {
          title
          description
          image
        }
      }
    }
  }
`;

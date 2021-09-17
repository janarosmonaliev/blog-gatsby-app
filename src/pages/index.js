import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Canvas from "../three-js/canvas";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/appBar";
import { Grid, SvgIcon, Hidden, Container } from "@material-ui/core";
import { Box, Book, Terminal, X } from "react-feather";
import TextLoop from "react-text-loop";
import LandingBackground from "../images/landing-page-gradient.jpg";
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
  backgroundWrapper: {
    display: "block",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%) center bottom",
    position: "fixed",
    width: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
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
    <Parallax pages={1.5}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          overflow: "visible",
        }}
      >
        <div
          className={classes.backgroundWrapper}
          style={{
            backgroundImage: "url(" + LandingBackground + ")",
            opacity: 1,
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1.5}
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
        <h1 className={classes.textDisplay}>
          I am Zhanar.
          <br />I{" "}
          <TextLoop
            delay={300}
            mask={true}
            interval={2000}
            // springConfig={{ stiffness: 180, damping: 10 }}
          >
            <span className={"text-highlight"}>develop</span>
            <span className={"text-highlight"}>design</span>
            <span className={"text-highlight"}>create</span>
          </TextLoop>{" "}
          user-friendly products.
        </h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.9999}
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
        <p>Hi there</p>
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

import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Canvas from "../three-js/canvas";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/appBar";
// import Scramble from "react-scramble"; TODO Decide on using it
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
const useStyles = makeStyles({
  text: {
    fontSize: "44px",
    position: "fixed",
    top: "40%",
    left: "10%",
    right: "10%",
    ["@media(min-width: 768px)"]: {
      fontSize: "56px",
      top: "30%",
      left: "30%",
    },
  },
});

function HelmetMeta({ website, ...props }) {
  const site = website;
  return (
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="title" content={site.siteMetadata.title}></meta>
      <meta name="description" content={site.siteMetadata.description} />
      <meta
        name="keywords"
        content="computer science, design, resume, developer, software, engineer, UI"
      ></meta>
      <meta name="viewport" content={site.siteMetadata.viewport}></meta>
      <meta name="image" content={site.siteMetadata.image}></meta>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={site.siteMetadata.siteUrl}></meta>
      <meta property="og:title" content={site.siteMetadata.title}></meta>
      <meta
        property="og:description"
        content={site.siteMetadata.description}
      ></meta>
      <meta property="og:image" content={site.siteMetadata.image}></meta>

      {/* Twitter */}
      <meta property="twitter:card" content={site.siteMetadata.image}></meta>
      <meta property="twitter:url" content={site.siteMetadata.siteUrl}></meta>
      <meta property="twitter:title" content={site.siteMetadata.title}></meta>
      <meta
        property="twitter:description"
        content={site.siteMetadata.description}
      ></meta>
      <meta property="twitter:image" content={site.siteMetadata.image}></meta>
      <html lang="en" />
    </Helmet>
  );
}

function About(props) {
  let parallax = null;
  const classes = useStyles();
  return (
    <div>
      <Parallax
        ref={(ref) => (parallax = ref)}
        vertical
        scrolling={true}
        pages={3}
        className="parallax-wrapper"
      >
        <ParallaxLayer
          offset={0}
          speed={1.0}
          onClick={() => parallax.scrollTo(1)}
        >
          <span className={classes.text}>
            Hi there! <br /> I am Zhanar, <br /> a web developer.
          </span>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <span className={classes.text}>
            Currently pursuing my degree in Computer Science with HCI
            specialization from Stony Brook University
          </span>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.0}>
          <span className={classes.text}>iweubfiwefbwefs</span>
        </ParallaxLayer>
      </Parallax>
      {/* <h1>
        Hi there! <br /> I am Zhanar, <br /> a web developer.
      </h1> */}
    </div>
  );
}

const IndexPage = ({ data: { site } }) => {
  return (
    <div>
      <div className="site-wrapper">
        <Navbar></Navbar>
      </div>
      <HelmetMeta website={site} />
      <Canvas></Canvas>
      <About></About>
    </div>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        viewport
        image
      }
    }
  }
`;

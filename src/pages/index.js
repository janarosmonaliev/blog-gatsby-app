import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Canvas from "../three-js/canvas";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/appBar";
import Scramble from "react-scramble";

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
      left: "15%",
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

const IndexPage = ({ data: { site } }) => {
  const classes = useStyles();
  return (
    <>
      <div className="site-wrapper">
        <Navbar></Navbar>
      </div>
      <HelmetMeta website={site} />
      <Canvas></Canvas>
      <h1 className={classes.text}>
        <Scramble
          // autoStart
          mouseEnterTrigger="start"
          // mouseLeaveTrigger="pause"
          preScramble
          speed={"slow"}
          text="Hi there!"
          steps={[
            {
              roll: 15,
              action: "-",
              type: "forward",
            },
          ]}
        />
        <br></br>
        <Scramble
          // autoStart
          mouseEnterTrigger="start"
          // mouseLeaveTrigger="pause"
          preScramble
          speed={"slow"}
          text="I am Janar"
          steps={[
            {
              roll: 15,
              action: "-",
              type: "forward",
            },
          ]}
        />
      </h1>
    </>
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

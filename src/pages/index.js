import React, { useState, useRef, useEffect } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/appBar";
import GithubGlobeImage from "../images/github-globe-feature.png";
import TinyDeskImage from "../images/tinydesk-feature.png";
import {
  Grid,
  SvgIcon,
  Tooltip,
  Hidden,
  Container,
  Button,
} from "@material-ui/core";
import { GitHub, Dribbble, Camera } from "react-feather";
import TextLoop from "react-text-loop";
import LandingBackground from "../images/landing-page-gradient.png";
import LandingAvatar from "../images/landing-avatar.jpg";
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
  textHeading: {
    marginBottom: "28px",
    fontFamily: "PP Neue Machine, Inter, sans-serif",
    fontSize: "28px",
    lineHeight: "28px",
    "@media(min-width: 768px)": {
      fontSize: "36px",
      lineHeight: "32px",
    },
  },
  text: {
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "32px",
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

const IndexPage = ({ data: { site } }) => {
  // const [themeDark, setTheme] = useState(theme);
  return (
    <div>
      <HelmetMeta website={site} />
      <div id="navbar-wrapper">
        <Navbar></Navbar>
      </div>
      <div id="landing-wrapper">
        <Container maxWidth="lg">
          <h3>
            Sorry, the landing page is currently under construction for v2
            release.
          </h3>
        </Container>
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

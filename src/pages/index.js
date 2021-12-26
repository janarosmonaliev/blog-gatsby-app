import React, { useState, useRef, useEffect } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
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
  Box,
  Paper,
} from "@material-ui/core";
import { GitHub, Dribbble, Camera } from "react-feather";
import TextLoop from "react-text-loop";
import LandingBackground from "../images/landing-page-gradient.png";
import LandingAvatar from "../images/landing-avatar.jpg";
import Avatar from "../images/avatar-animoji.png";
import { withStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  // styles here
  textDisplay: {
    fontWeight: 700,
    fontFamily: "PP Neue Machine, Inter, sans-serif",
    fontSize: "36px",
    lineHeight: "48px",
    "@media(min-width: 768px)": {
      fontSize: "60px",
      lineHeight: "72px",
    },
  },
  text: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",
    "@media(min-width: 768px)": {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "32px",
    },
  },
  textSecondary: {
    color: "#828282",
  },
  paperTinyDesk: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)), url(${TinyDeskImage})`,
    backgroundRepeat: false,
    backgroundSize: "cover",
    backgroundPosition: "top center",
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

const StyledPaper = withStyles({
  root: {
    borderRadius: "30px",
    minHeight: "420px",
    padding: "2rem",
    color: "inherit",
  },
})(Paper);

const IndexPage = ({ data: { site } }) => {
  const classes = useStyles();
  return (
    <div>
      <div id="navbar-wrapper">
        <Navbar></Navbar>
      </div>
      <HelmetMeta website={site} />
      <div id="landing-wrapper">
        <Container maxWidth="lg">
          {/* NOTE Welcome page area */}
          <Box mt={10} mb={30}>
            <Box mb={3}>
              <img
                src={Avatar}
                className="img-avatar-animoji"
                loading="lazy"
                width="101px"
                height="101px"
                alt="Zhanar's animoji avatar"
              ></img>
            </Box>
            <h1 className={classes.textDisplay}>
              Hi, I'm Zhanar{" "}
              <Hidden smDown>
                <span className={classes.textSecondary}>(Janar)</span>
              </Hidden>
              <br />I{" "}
              <TextLoop
                delay={300}
                mask={true}
                interval={2000}
                springConfig={{ stiffness: 200, damping: 15 }}
              >
                <span className={"text-highlight"}>develop</span>
                <span className={"text-highlight"}>design</span>
                <span className={"text-highlight"}>create</span>
              </TextLoop>{" "}
              user-friendly products.
            </h1>
          </Box>
          {/* NOTE About me  */}
          <Box mt={20} mb={30}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <StyledPaper
                  className="styled-paper"
                  elevation={0}
                  // variant="outlined"
                >
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <h1>About me</h1>
                      <p className={classes.text}>
                        My name is Zhanar Osmonaliev. I am a student software
                        developer. I believe in design quality and always pay
                        attention to details because that's what makes a great
                        product.
                      </p>
                      <p className={classes.text}>
                        I have led a team of students as a Designer and a Lead
                        Developer to create{" "}
                        <a href="https://www.tinydesk.me" target="_blank">
                          TinyDesk
                        </a>{" "}
                        - a web application to help you manage your bookmarks
                        and boost your productivity.
                      </p>
                      <p className={classes.text}>
                        I am currently pursuing an undergraduate degree in
                        Computer Science with a specialization in AI and Data
                        Science at Stony Brook University.
                      </p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img
                        src={LandingAvatar}
                        className="img-fluid inner-box"
                      ></img>
                    </Grid>
                  </Grid>
                </StyledPaper>
              </Grid>
            </Grid>
          </Box>

          <Box mt={20} mb={30}>
            <h1 className={classes.textDisplay}>Projects</h1>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <StyledPaper className="styled-paper" elevation={0}>
                  hi, im stuck here.
                </StyledPaper>
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledPaper
                  className={
                    classes.paperTinyDesk + " styled-paper text-center"
                  }
                  elevation={0}
                >
                  {/* <h2 className="text-constant-light">Tiny Desk</h2> */}
                  {/* <p className="text-constant-light">Hello there</p> */}
                </StyledPaper>
              </Grid>
            </Grid>
          </Box>
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

import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/appBar";
import { Grid, Hidden, Container, Box, Paper } from "@material-ui/core";
import TextLoop from "react-text-loop";
import LandingAvatar from "../images/landing-avatar.jpg";
import Avatar from "../images/avatar-animoji.png";
import { withStyles } from "@material-ui/styles";
import ProjectsModule from "../components/projects-module";
import MiscModule from "../components/misc-module";
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
  customPaper: {
    borderRadius: "30px",
    minHeight: "420px",
    padding: "2rem 1rem 1rem 1rem",
    color: "inherit",
    "@media(min-width: 960px)": {
      padding: "2rem",
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

const CustomPaper = withStyles(
  {
    root: {
      borderRadius: "30px",
      minHeight: "420px",
      padding: "2rem 1rem 1rem 1rem",
      color: "inherit",
      "@media(min-width: 960px)": {
        padding: "2rem",
      },
    },
  },
  { index: 1 }
)(Paper);

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
                <span className={"text-primary"}>develop</span>
                <span className={"text-primary"}>design</span>
                <span className={"text-primary"}>create</span>
              </TextLoop>{" "}
              user-friendly products.
            </h1>
          </Box>
          {/* NOTE About me  */}
          <Box mt={20} mb={30}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CustomPaper
                  // classes={{ root: classes.CustomPaper }}
                  className="styled-paper"
                  elevation={0}
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
                        <a
                          href="https://www.tinydesk.me"
                          target="_blank"
                          rel="noreferrer"
                        >
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
                        alt="Zhanar Osmonaliev"
                      ></img>
                    </Grid>
                  </Grid>
                </CustomPaper>
              </Grid>
            </Grid>
          </Box>

          <Box mt={20} mb={20}>
            <h1 className={classes.textDisplay}>Projects</h1>
            <ProjectsModule />
          </Box>

          <Box mt={20} mb={20}>
            <h1 className={classes.textDisplay}>More</h1>
            <MiscModule />
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

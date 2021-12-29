import React from "react";
import { navigate } from "gatsby";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Box, Paper, IconButton, SvgIcon } from "@material-ui/core";
import TinyDeskImage0 from "../images/tinydesk-feature-0.png";
import TinyDeskImage1 from "../images/tinydesk-feature-1.png";
import TinyDeskImage2 from "../images/tinydesk-feature-2.png";
import GithubGlobeImage from "../images/github-globe-feature.png";
import { Dribbble, ExternalLink, GitHub, BookOpen } from "react-feather";

const useStyles = makeStyles({
  cardText: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  githubGlobe: {
    backgroundImage: `url(${GithubGlobeImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "@media(min-width: 960px)": {
      backgroundSize: "cover",
    },
  },
  tinyDesk0: {
    backgroundImage: `url(${TinyDeskImage0})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top left",
  },
  tinyDesk1: {
    backgroundImage: `url(${TinyDeskImage1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  halfSingleLeft: {
    borderRadius: "30px 30px 0 0",
    "@media(min-width: 960px)": {
      borderRadius: "30px 0 0 30px",
    },
  },
  halfSingleRight: {
    borderRadius: "0 0 30px 30px",
    "@media(min-width: 960px)": {
      borderRadius: "0 30px 30px 0",
    },
  },
  halfFirstLeft: {
    borderRadius: "30px 30px 0 0",
    "@media(min-width: 960px)": {
      borderRadius: "30px 0 0 0",
    },
  },
  halfFirstRight: {
    borderRadius: "0",
    "@media(min-width: 960px)": {
      borderRadius: "0 30px 0 0",
    },
  },
  middle: {
    borderRadius: "0",
  },
  halfLastLeft: {
    borderRadius: "0",
    "@media(min-width: 960px)": {
      borderRadius: "0 0 0 30px",
    },
  },
  halfLastRight: {
    borderRadius: "0 0 30px 30px",
    "@media(min-width: 960px)": {
      borderRadius: "0 0 30px 0",
    },
  },
  wholeFirst: {
    borderRadius: "30px 30px 0 0",
  },
  wholeLast: {
    borderRadius: "0 0 30px 30px",
  },
});

const StyledPaper = withStyles({
  root: {
    minHeight: "450px",
    padding: "2rem 1rem 2rem 1rem",
    color: "inherit",
    "@media(min-width: 960px)": {
      padding: "2rem",
    },
  },
})(Paper);

const StyledLink = (props) => {
  return (
    <IconButton
      aria-label="link"
      size="medium"
      className="link-icon-landing"
      href={props.href}
      target="_blank"
      referrerPolicy="noreferrer"
    >
      <SvgIcon fontSize="small">{props.icon}</SvgIcon>
    </IconButton>
  );
};

const ProjectsModule = (props) => {
  const classes = useStyles();
  return (
    <>
      {/* SECTION TinyDesk */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <StyledPaper
            className="styled-paper"
            elevation={0}
            classes={{ root: classes.wholeFirst }}
          >
            <Grid
              container
              spacing={2}
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={4}>
                <h1>TinyDesk</h1>
                <p className={classes.cardText}>
                  TinyDesk is a web application that lets users manage bookmarks
                  and boost their productivity with handy widgets.
                </p>
                <p className={classes.cardText}>
                  The project was supervised by{" "}
                  <a
                    href="https://www.alexckuhn.com/about/"
                    referrerPolicy="noreferrer"
                    target="_blank"
                  >
                    Alex Kuhn
                  </a>{" "}
                  (ex-Apple Engineer) and was led by me as a Lead Developer and
                  Designer. I was mainly responsible for system architecture and
                  user interface design.
                </p>
                <p className={classes.cardText}>
                  It was built with{" "}
                  <span className="text-highlight">GatsbyJS</span> &{" "}
                  <span className="text-highlight">Material UI</span> and
                  deployed to <span className="text-highlight">Heroku</span>.
                </p>
                <StyledLink
                  href="https://github.com/janarosmonaliev/tinydesk"
                  icon={<GitHub />}
                ></StyledLink>
                <StyledLink
                  href="https://www.behance.net/gallery/125950519/TinyDesk-Product-Design"
                  icon={<Dribbble />}
                ></StyledLink>
                <StyledLink
                  href="https://www.tinydesk.me"
                  icon={<ExternalLink />}
                ></StyledLink>
              </Grid>
              <Grid item xs={12} md={8}>
                <img src={TinyDeskImage2} className="img-fluid"></img>
              </Grid>
            </Grid>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper
            classes={{ root: classes.halfLastLeft }}
            className={classes.tinyDesk1 + " styled-paper"}
            elevation={0}
          ></StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper
            classes={{ root: classes.halfLastRight }}
            className={classes.tinyDesk0 + " styled-paper"}
            elevation={0}
          ></StyledPaper>
        </Grid>
      </Grid>
      {/* NOTE Space between projects */}
      <Box my={10} />
      {/* SECTION Github Globe */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <StyledPaper
            classes={{ root: classes.halfSingleLeft }}
            className="styled-paper"
            elevation={0}
          >
            <Grid
              container
              spacing={0}
              alignItems="center"
              style={{ minHeight: "450px" }}
            >
              <Grid item xs={12}>
                <h1>Github Globe</h1>
                <p className={classes.cardText}>
                  If you ever visited{" "}
                  <a
                    href="https://github.com/home"
                    target="_blank"
                    referrerPolicy="noreferrer"
                  >
                    Github's homepage
                  </a>
                  , you will notice a 3D globe that visualizes platform's
                  current activity.
                </p>
                <p className={classes.cardText}>
                  I decided to recreate it with{" "}
                  <span className="text-highlight">ThreeJS</span> and make the
                  project open-source. I built the Globe using Vasco Asturiano's{" "}
                  <a
                    href="https://github.com/vasturiano/three-globe"
                    target="_blank"
                    referrerPolicy="noreferrer"
                  >
                    three-globe
                  </a>{" "}
                  as base, shaded the 3D scene to resemble a dreamy space
                  environment and bundled everything with{" "}
                  <span className="text-highlight">Webpack</span>.
                </p>
                <p className={classes.cardText}>
                  Additionally, the Globe visualizes my flight history across
                  the world from 2019 to 2020. So far, this is my most popular
                  open-source project, with 95+ stars on Github.
                </p>
                <StyledLink
                  href="https://github.com/janarosmonaliev/github-globe"
                  icon={<GitHub />}
                />
                <StyledLink
                  href="https://janarosmonaliev.com/github-globe"
                  icon={<BookOpen />}
                />
                <StyledLink
                  href={
                    "https://dribbble.com/shots/16395736-Github-Globe-Open-Sourced-ThreeJS-Project?utm_source=Clipboard_Shot&utm_campaign=janarosmonaliev&utm_content=Github%20Globe%20-%20Open%20Sourced%20ThreeJS%20Project&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=janarosmonaliev&utm_content=Github%20Globe%20-%20Open%20Sourced%20ThreeJS%20Project&utm_medium=Social_Share"
                  }
                  icon={<Dribbble />}
                />
                <StyledLink
                  href="https://janarosmonaliev.github.io/github-globe/"
                  icon={<ExternalLink />}
                />
              </Grid>
            </Grid>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper
            classes={{ root: classes.halfSingleRight }}
            className={classes.githubGlobe + " styled-paper"}
            elevation={0}
          ></StyledPaper>
        </Grid>
      </Grid>
      {/* NOTE Space between projects */}
      <Box my={10} />
    </>
  );
};

export default ProjectsModule;

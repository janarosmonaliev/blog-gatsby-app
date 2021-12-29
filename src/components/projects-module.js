import React from "react";
import { navigate } from "gatsby";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Box, Paper, IconButton, SvgIcon } from "@material-ui/core";
import TinyDeskImage0 from "../images/tinydesk-feature-0.png";
import TinyDeskImage1 from "../images/tinydesk-feature-1.png";
import TinyDeskImage2 from "../images/tinydesk-feature-2.png";
import { Dribbble, ExternalLink, GitHub } from "react-feather";

const useStyles = makeStyles({
  cardText: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  tinyDesk0: {
    backgroundImage: `url(${TinyDeskImage0})`,
    backgroundRepeat: false,
    backgroundSize: "cover",
    backgroundPosition: "top left",
  },
  tinyDesk1: {
    backgroundImage: `url(${TinyDeskImage1})`,
    backgroundRepeat: false,
    backgroundSize: "cover",
    backgroundPosition: "center center",
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
    >
      <SvgIcon fontSize="small">{props.icon}</SvgIcon>
    </IconButton>
  );
};

const ProjectsModule = (props) => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default ProjectsModule;

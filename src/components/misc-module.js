import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Box, Paper } from "@material-ui/core";
import UnsplashCard from "../images/unsplash-card.jpg";
import FStudioCard from "../images/fstudio-card.jpg";

const useStyles = makeStyles({
  styledCard: {
    minHeight: "350px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  styledCardContent: {
    backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
    padding: "2rem 1rem 1.5rem 1rem",
    borderRadius: "0 0 20px 20px",
  },
  cardTitle: {
    marginBottom: "0.4rem",
  },
  cardText: {
    fontSize: "15px",
    color: "#d3d3d3",
    fontWeight: 300,
    lineHeight: "20px",
  },
  cardActionText: {
    fontSize: "15px",
    marginBottom: "0px",
    color: "#b9b9b9",
    display: "inline-block",
  },
  unsplashCard: {
    backgroundImage: `url(${UnsplashCard})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
  },
  fstudioCard: {
    backgroundImage: `url(${FStudioCard})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
  },
});

const MiscStyledPaper = withStyles({
  root: {
    color: "white",
    borderRadius: "20px",
    overflow: "hidden",
  },
})(Paper);

const StyledCard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <MiscStyledPaper elevation={0} className={props.class}>
        <div className={classes.styledCard}>
          <div className={classes.styledCardContent}>
            <h2 className={classes.cardTitle}>{props.title}</h2>
            <p className={classes.cardText}>{props.description}</p>
            <a
              className={classes.cardActionText}
              rel="noreferrer"
              href={props.href}
              target="_blank"
            >
              {props.linkText} {"->"}
            </a>
          </div>
        </div>
      </MiscStyledPaper>
    </div>
  );
};

const MiscModule = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <StyledCard
            class={classes.unsplashCard}
            title="Shot On iPhone Series"
            description="My gallery of photos shot and edited on iPhone X."
            href="https://unsplash.com/@janarosmonaliev"
            linkText="unsplash.com"
          ></StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard
            class={classes.fstudioCard}
            title="F Studio Web Design"
            description="Collaboration with an e-commerce platform for emerging designers and artists."
            href="https://fstudionyc.com"
            linkText="fstudionyc.com"
          ></StyledCard>
        </Grid>

        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </>
  );
};

export default MiscModule;

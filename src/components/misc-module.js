import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Box, Paper, IconButton, SvgIcon } from "@material-ui/core";

const useStyles = makeStyles({
  cardText: {
    fontSize: "16px",
    lineHeight: "24px",
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
      rel="noreferrer"
    >
      <SvgIcon fontSize="small">{props.icon}</SvgIcon>
    </IconButton>
  );
};

const MiscModule = () => {
  return (
    <>
      <Grid container spacing={1}></Grid>
    </>
  );
};

export default MiscModule;

import React from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout";
import Avatar from "@material-ui/core/Avatar";
import MyPhoto from "../images/Avatar-sm.png";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, SvgIcon, Box } from "@material-ui/core";
import { ArrowLeft } from "react-feather";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(171, 171, 171, 0.15)",
          // backgroundColor: "#f2f2f3",
        },
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(171, 171, 171, 0.15)",
          // backgroundColor: "#f2f2f3",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  author: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0px",
    // justifyContent: "space-between",
  },
  authorInfo: {
    display: "flex",
    flexDirection: "column",
  },
  photo: {
    height: "48px",
    width: "48px",
  },
  name: {
    marginLeft: "8px",
    fontSize: "14px",
    ["@media(min-width: 768px)"]: {
      fontSize: "15px",
    },
  },
  date: {
    marginLeft: "8px",
    fontSize: "13px",
    color: "#758695",
    ["@media(min-width: 768px)"]: {
      fontSize: "14px",
    },
  },
}));
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <title>{frontmatter.title} | Zhanarbek Osmonaliev</title>
          <meta name="title" content={frontmatter.title}></meta>
          <meta name="description" content={frontmatter.metaDescription} />
          <meta
            name="image"
            content={"https://janarosmonaliev.com" + frontmatter.thumbnail}
          ></meta>
          <meta
            name="keywords"
            content={frontmatter.flair + " blogpost, story, janar, osmonaliev"}
          ></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          ></meta>
          <html lang="en" />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content={siteMetadata.siteUrl}></meta>
          <meta name="og:title" content={frontmatter.title}></meta>
          <meta name="og:description" content={frontmatter.metaDescription} />
          <meta
            name="og:image"
            content={"https://janarosmonaliev.com" + frontmatter.thumbnail}
          ></meta>

          {/* Twitter */}
          <meta
            property="twitter:card"
            content={"https://janarosmonaliev.com" + frontmatter.thumbnail}
          ></meta>
          <meta property="twitter:url" content={siteMetadata.siteUrl}></meta>
          <meta property="twitter:title" content={frontmatter.title}></meta>
          <meta
            property="twitter:description"
            content={frontmatter.metaDescription}
          ></meta>
          <meta
            property="twitter:image"
            content={"https://janarosmonaliev.com" + frontmatter.thumbnail}
          ></meta>
        </Helmet>
        <div className="blog-post-container">
          <article className="post">
            <Box className="button-back-wrapper">
              <IconButton
                aria-label="back"
                size="medium"
                // className="button-back-wrapper"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                <SvgIcon className="button-back" fontSize="large">
                  <ArrowLeft />
                </SvgIcon>
              </IconButton>
            </Box>
            <h1 className="post-title">{frontmatter.title}</h1>
            <div className="post-meta">
              <span>{frontmatter.flair}</span>
            </div>
            <div className={classes.author + " post-meta"}>
              <div className={classes.author}>
                <Avatar
                  alt="Zhanarbek Osmonaliev"
                  src={MyPhoto}
                  className={classes.photo}
                />
                <div className={classes.authorInfo}>
                  <span className={classes.name}>Zhanarbek Osmonaliev</span>
                  <span className={classes.date}>{frontmatter.date}</span>
                </div>
              </div>
            </div>
            <img
              src={`${frontmatter.thumbnail}`}
              className="post-thumbnail"
              alt="Post thumbnail"
            ></img>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </article>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        flair
      }
    }
  }
`;

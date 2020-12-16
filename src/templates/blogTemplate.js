import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Avatar from "@material-ui/core/Avatar";
import MyPhoto from "../images/Avatar-sm.png";
import { makeStyles } from "@material-ui/core/styles";

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
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
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
          ></img>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
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

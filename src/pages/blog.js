import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.blog.title}</title>
        <meta name="title" content={site.siteMetadata.blog.title}></meta>
        <meta name="description" content={site.siteMetadata.blog.description} />
        <meta
          name="keywords"
          content="software engineer, blog, software developer"
        ></meta>
        <meta name="viewport" content={site.siteMetadata.viewport}></meta>
        <meta name="image" content={site.siteMetadata.image}></meta>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content={site.siteMetadata.blog.url}></meta>
        <meta property="og:title" content={site.siteMetadata.blog.title}></meta>
        <meta
          property="og:description"
          content={site.siteMetadata.blog.description}
        ></meta>
        <meta property="og:image" content={site.siteMetadata.image}></meta>

        {/* Twitter */}
        <meta property="twitter:card" content={site.siteMetadata.image}></meta>
        <meta
          property="twitter:url"
          content={site.siteMetadata.blog.url}
        ></meta>
        <meta
          property="twitter:title"
          content={site.siteMetadata.blog.title}
        ></meta>
        <meta
          property="twitter:description"
          content={site.siteMetadata.blog.description}
        ></meta>
        <meta property="twitter:image" content={site.siteMetadata.image}></meta>
        <html lang="en" />
      </Helmet>
      <HeroHeader />
      <h2>Blog Posts &darr;</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default BlogPage;
export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
        viewport
        image
        url
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            flair
          }
        }
      }
    }
  }
`;

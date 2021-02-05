import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Canvas from "../three-js/canvas";

const IndexPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="title" content={site.siteMetadata.title}></meta>
        <meta name="description" content={site.siteMetadata.description} />
        <meta
          name="keywords"
          content="computer science, design, resume, developer, software, engineer, UI"
        ></meta>
        <meta name="viewport" content={site.siteMetadata.viewport}></meta>
        <meta name="image" content={site.siteMetadata.image}></meta>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content={site.siteMetadata.siteUrl}></meta>
        <meta property="og:title" content={site.siteMetadata.title}></meta>
        <meta
          property="og:description"
          content={site.siteMetadata.description}
        ></meta>
        <meta property="og:image" content={site.siteMetadata.image}></meta>

        {/* Twitter */}
        <meta property="twitter:card" content={site.siteMetadata.image}></meta>
        <meta property="twitter:url" content={site.siteMetadata.siteUrl}></meta>
        <meta property="twitter:title" content={site.siteMetadata.title}></meta>
        <meta
          property="twitter:description"
          content={site.siteMetadata.description}
        ></meta>
        <meta property="twitter:image" content={site.siteMetadata.image}></meta>
        <html lang="en" />
      </Helmet>

      <Canvas></Canvas>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        viewport
        image
      }
    }
  }
`;

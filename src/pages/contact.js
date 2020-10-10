import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
// import { IconButton, SvgIcon } from "@material-ui/core";
// import { ArrowLeft } from "feather-icons";
const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      {/* <IconButton aria-label="go-back" size="medium">
        <SvgIcon>
          <ArrowLeft />
        </SvgIcon>
      </IconButton> */}
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/contact-img.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Contact Me</h1>
          {/* <p>Let me help you kick start your next project &rarr;</p> */}
        </div>
        <div>
          <form className="form-container" method="post" data-netlify="true">
            <div>
              <label htmlFor="Name">Name</label>
              <input type="text" name="Name" id="Name" />
            </div>
            <div>
              <label htmlFor="Sender">Email</label>
              <input type="email" name="Sender" id="Sender" />
            </div>
            <div>
              <label htmlFor="Subject">Subject</label>
              <input type="text" name="Subject" id="Subject" />
            </div>
            <div>
              <label htmlFor="Message">Message</label>
              <textarea name="Message" id="Message"></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

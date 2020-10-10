import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Avatar from "../images/Avatar.png";
export default () => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              home {
                title
                description
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="hero-header">
          <Grid
            container
            spacing={10}
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} md={7}>
              <div className="headline">
                {data.site.siteMetadata.home.title}
              </div>
              <div
                className="primary-content"
                dangerouslySetInnerHTML={{
                  __html: data.site.siteMetadata.home.description,
                }}
              />
              <Link to="/contact" className="button -primary">
                Get in touch &rarr;
              </Link>
            </Grid>
            <Grid item alignItems="center" justify="center">
              <img
                src={Avatar}
                className="img-avatar"
                loading="lazy"
                width="250px"
                height="250px"
                alt="avatar"
              ></img>
            </Grid>
          </Grid>
        </div>
      )}
    />
  );
};

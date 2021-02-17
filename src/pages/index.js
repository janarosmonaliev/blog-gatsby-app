import React, { useState } from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Canvas from "../three-js/canvas";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/appBar";
// import Scramble from "react-scramble"; TODO Decide on using it
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Grid, SvgIcon, Hidden } from "@material-ui/core";
import { Box, Book, Terminal, X } from "react-feather";
const useStyles = makeStyles({
  text: {
    fontSize: "48px",
    fontWeight: "600",
    marginTop: "24px",
  },
  subText: {
    fontSize: "36px",
    fontWeight: "600",
    marginTop: "24px",
  },
});

function HelmetMeta({ website, ...props }) {
  const site = website;
  return (
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
  );
}

function About(props) {
  let parallax = null;
  const classes = useStyles();
  return (
    <Parallax
      ref={(ref) => (parallax = ref)}
      vertical
      scrolling={false}
      pages={3}
      id="parallax-wrapper"
    >
      <ParallaxLayer
        offset={0}
        speed={1.0}
        // onClick={() => parallax.scrollTo(1)}
      >
        <div className={"parallax-container"}>
          <div>
            <span className="icon-wrapper">
              <SvgIcon fontSize={"default"}>
                <Box color="white"></Box>
              </SvgIcon>
            </span>
            <span className={"label"}>WELCOME</span>
            <h1 className={classes.text}>
              Hi there! <br /> I am{" "}
              <span className="text-highlight">Zhanar</span>, <br /> a web
              developer 🚀
            </h1>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.9}
        speed={0.5}
        onClick={() => parallax.scrollTo(1)}
      >
        <span className="icon-wrapper passive">
          <SvgIcon fontSize={"default"}>
            <Book color="white"></Book>
          </SvgIcon>
        </span>
        <span className={"label passive"}>EDUCATION</span>
        <br></br>
        <div className="label-line"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <div className={"parallax-container"}>
          <div>
            <span className="icon-wrapper">
              <SvgIcon fontSize={"default"}>
                <Book color="white"></Book>
              </SvgIcon>
            </span>
            <span className={"label"}>EDUCATION</span>
            <h1 className={classes.subText}>
              Currently pursuing my degree in{" "}
              <span className="text-highlight">Computer Science</span> with HCI
              specialization from Stony Brook University 🎓
            </h1>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.9}
        speed={0.5}
        onClick={() => parallax.scrollTo(2)}
      >
        <span className="icon-wrapper passive">
          <SvgIcon fontSize={"default"}>
            <Terminal color="white"></Terminal>
          </SvgIcon>
        </span>
        <span className={"label passive"}>SKILLS</span>
        <br></br>
        <div className="label-line"></div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1.0}
        onClick={() => parallax.scrollTo(0)}
      >
        <div className={"parallax-container"}>
          <div>
            <span className="icon-wrapper">
              <SvgIcon fontSize={"default"}>
                <Terminal color="white"></Terminal>
              </SvgIcon>
            </span>
            <span className={"label"}>SKILLS</span>
            <h1 className={classes.subText}>
              I am very passionate about{" "}
              <span className="text-highlight">web development</span> and{" "}
              <span className="text-highlight">design</span> 💻
            </h1>
            <p className="text-secondary">Languages</p>
            <button className="skills-button">JavaScript</button>
            <button className="skills-button">Python</button>
            <button className="skills-button">Java</button>
            <p className="text-secondary">Frameworks, Other</p>
            <button className="skills-button">ReactJS</button>
            <button className="skills-button">GatsbyJS</button>
            <button className="skills-button">ThreeJS</button>
            <button className="skills-button">Git</button>
            <button className="skills-button">Webpack</button>
            <button className="skills-button">react-spring</button>
            <p className="text-secondary">Design Systems</p>
            <button className="skills-button">Material UI</button>
            <button className="skills-button">Bootstrap</button>
            <p className="text-secondary">Software</p>
            <button className="skills-button">Figma</button>
            <button className="skills-button">Adobe Creative Cloud</button>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.9}
        speed={0.5}
        onClick={() => parallax.scrollTo(0)}
      >
        <span className={"icon-wrapper passive-cancel "}>
          <SvgIcon fontSize={"default"}>
            <X color="white"></X>
          </SvgIcon>
        </span>
        <span className={"label passive "}>BACK TO THE TOP</span>
        <br></br>
        <div className={"label-line cancel"}></div>
      </ParallaxLayer>
    </Parallax>
  );
}

const IndexPage = ({ data: { site } }) => {
  const [themeDark, setTheme] = useState(false);
  return (
    <div>
      <HelmetMeta website={site} />
      <div id="navbar-wrapper">
        <Navbar toggleTheme={(e) => setTheme(e)}></Navbar>
      </div>
      <div id="landing-wrapper">
        <Grid container spacing={0} justify="center">
          <Grid item lg={5} sm={12}>
            <About></About>
          </Grid>
          <Grid item lg={7} sm={12}>
            {/* <Hidden mdDown> */}
            <Canvas darkTheme={themeDark}></Canvas>
            {/* </Hidden> */}
          </Grid>
        </Grid>
      </div>
    </div>
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

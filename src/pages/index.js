import React, { useState, useRef, useEffect } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Canvas from "../three-js/canvas";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/appBar";
import GithubGlobeImage from "../images/github-globe-feature.png";
import TinyDeskImage from "../images/tinydesk-feature.png";
import {
  Grid,
  SvgIcon,
  Tooltip,
  Hidden,
  Container,
  Button,
} from "@material-ui/core";
import { GitHub, Dribbble, Camera } from "react-feather";
import TextLoop from "react-text-loop";
import LandingBackground from "../images/landing-page-gradient.png";
import LandingAvatar from "../images/landing-avatar.jpg";
const useStyles = makeStyles({
  // styles here
  textDisplay: {
    fontFamily: "PP Neue Machine, Inter, sans-serif",
    fontSize: "36px",
    lineHeight: "44px",
    "@media(min-width: 768px)": {
      fontSize: "56px",
      lineHeight: "64px",
    },
  },
  textHeading: {
    marginBottom: "28px",
    fontFamily: "PP Neue Machine, Inter, sans-serif",
    fontSize: "28px",
    lineHeight: "28px",
    "@media(min-width: 768px)": {
      fontSize: "36px",
      lineHeight: "32px",
    },
  },
  text: {
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "32px",
  },
});

function HelmetMeta({ website, ...props }) {
  const site = website;
  return (
    <Helmet>
      <title>{site.siteMetadata.home.title}</title>
      <meta name="title" content={site.siteMetadata.home.title}></meta>
      <meta name="description" content={site.siteMetadata.home.description} />
      <meta
        name="keywords"
        content="Janar Osmonaliev, Zhanarbek, Janarbek, Stony Brook, developer, kyrgyzstan, Жанар, Осмоналиев, personal, website"
      ></meta>
      <meta name="viewport" content={site.siteMetadata.viewport}></meta>
      <meta name="image" content={site.siteMetadata.home.image}></meta>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={site.siteMetadata.siteUrl}></meta>
      <meta property="og:title" content={site.siteMetadata.home.title}></meta>
      <meta
        property="og:description"
        content={site.siteMetadata.home.description}
      ></meta>
      <meta property="og:image" content={site.siteMetadata.home.image}></meta>

      {/* Twitter */}
      <meta
        property="twitter:card"
        content={site.siteMetadata.home.image}
      ></meta>
      <meta property="twitter:url" content={site.siteMetadata.siteUrl}></meta>
      <meta
        property="twitter:title"
        content={site.siteMetadata.home.title}
      ></meta>
      <meta
        property="twitter:description"
        content={site.siteMetadata.home.description}
      ></meta>
      <meta
        property="twitter:image"
        content={site.siteMetadata.home.image}
      ></meta>
      <html lang="en" />
    </Helmet>
  );
}

const Avatar = () => {
  const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 40;
  const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 40;

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  useGesture(
    {
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 100, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.05,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <animated.div
      ref={domTarget}
      className={"avatar-card"}
      style={{
        transform: "perspective(1000px)",
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
      }}
    >
      <animated.div
      // style={{ backgroundImage: `url(${LandingAvatar})` }}
      >
        <img src={LandingAvatar} className="img-fluid"></img>
      </animated.div>
    </animated.div>
  );
};

const SocialWidget = () => {
  return (
    <div className="landing-social-widget">
      <Grid
        container
        justifyContent="flex-end"
        alignItems="flex-start"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Tooltip title="Github" placement="right" arrow>
            <a
              className="landing-icon-wrapper"
              href="https://github.com/janarosmonaliev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon fontSize={"small"}>
                <GitHub></GitHub>
              </SvgIcon>
            </a>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip title="Dribbble" placement="right" arrow>
            <a
              className="landing-icon-wrapper"
              href="https://dribbble.com/janarosmonaliev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon fontSize={"small"}>
                <Dribbble></Dribbble>
              </SvgIcon>
            </a>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Unsplash" placement="right" arrow>
            <a
              className="landing-icon-wrapper"
              href="https://unsplash.com/@janarosmonaliev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon fontSize={"small"}>
                <Camera></Camera>
              </SvgIcon>
            </a>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

const Content = () => {
  const classes = useStyles();
  return (
    <Parallax pages={4}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          overflow: "visible",
          top: 0,
        }}
      >
        <div
          className={"landing-page-background"}
          style={{
            backgroundImage: "url(" + LandingBackground + ")",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1.5}
        style={{
          display: "flex",
          width: "100%",
          left: "10px",
          right: "10px",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
        }}
      >
        <h1 className={classes.textDisplay}>
          I am Zhanar.
          <br />I{" "}
          <TextLoop
            delay={300}
            mask={true}
            interval={2000}
            // springConfig={{ stiffness: 180, damping: 10 }}
          >
            <span className={"text-highlight"}>develop</span>
            <span className={"text-highlight"}>design</span>
            <span className={"text-highlight"}>create</span>
          </TextLoop>{" "}
          user-friendly products.
        </h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.9999}
        speed={0}
        style={{
          display: "flex",
          width: "100%",
          left: "10px",
          right: "10px",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={12} md={6}>
            <h1 className={classes.textHeading + " text-highlight"}>
              About me
            </h1>
            <p className={classes.text}>
              Hello! My name is Zhanar Osmonaliev. I am a student software
              developer. I believe in design quality and always pay attention to
              details because that's what makes a great product.
            </p>
            <p className={classes.text}>
              I have led a team of students as a Designer and a Lead Developer
              to create{" "}
              <a href="tinydesk.me" target="_blank">
                TinyDesk
              </a>{" "}
              - a web application to help you manage your bookmarks and boost
              your productivity.
            </p>
            <p className={classes.text}>
              I am currently pursuing an undergraduate degree in Computer
              Science at Stony Brook University.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <Avatar />
          </Grid>
        </Grid>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0}
        style={{
          display: "flex",
          width: "100%",
          left: "10px",
          right: "10px",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "top",
          justifyContent: "start",
        }}
      >
        <h1 className={classes.textDisplay + " text-highlight"}>Projects</h1>{" "}
        <br />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0}
        style={{
          display: "flex",
          width: "100%",
          left: "10px",
          right: "10px",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <div className="project-card" style={{ background: "red" }}> */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
          style={{ flexGrow: "1" }}
          className="project-card"
          style={{ background: "rgba(4, 15, 30, 1)" }}
        >
          <Grid item xs={12} md={5} style={{ color: "white" }}>
            <h1 className={classes.textHeading}>Github Globe</h1>
            <p className={classes.text}>
              Data visualization on globe implemented with ThreeJS. The project
              was inspired by Github's new homepage.
            </p>
            <Link
              to="https://github.com/janarosmonaliev/github-globe"
              className="button -primary"
            >
              Learn more
            </Link>
          </Grid>
          <Grid item xs={12} md={7} order={{ md: 1, lg: 1 }}>
            <img src={GithubGlobeImage} className="img-fluid"></img>
          </Grid>
        </Grid>
        {/* </div> */}
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={0}
        style={{
          display: "flex",
          width: "100%",
          left: "10px",
          right: "10px",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <div className="project-card" style={{ background: "red" }}> */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
          style={{ flexGrow: "1" }}
          className="project-card"
          style={{ background: "rgba(86, 184, 248, 1)" }}
        >
          <Grid item xs={12} md={5} style={{ color: "white" }}>
            <h1 className={classes.textHeading}>TinyDesk</h1>
            <p className={classes.text}>
              An application for bookmark management and productivity. Developed
              and shipped during a CSE416 course at Stony Brook University.
            </p>
            <Link
              to="https://www.behance.net/gallery/125950519/TinyDesk-Product-Design"
              className="button -primary"
            >
              Learn more
            </Link>
          </Grid>
          <Grid item xs={12} md={7} order={{ md: 1, lg: 1 }}>
            <img src={TinyDeskImage} className="img-fluid"></img>
          </Grid>
        </Grid>
        {/* </div> */}
      </ParallaxLayer>
    </Parallax>
  );
};

const IndexPage = ({ data: { site } }) => {
  // const [themeDark, setTheme] = useState(theme);
  return (
    <div>
      <HelmetMeta website={site} />
      <div id="navbar-wrapper">
        <Navbar></Navbar>
      </div>
      <div id="landing-wrapper">
        <Hidden mdDown>
          <SocialWidget />
        </Hidden>
        <Content />
      </div>
    </div>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        siteUrl
        viewport
        image
        home {
          title
          description
          image
        }
      }
    }
  }
`;

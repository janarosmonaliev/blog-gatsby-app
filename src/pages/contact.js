import React from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImgBackground from "../images/contact-img.jpg";
import { IconButton, SvgIcon, Box } from "@material-ui/core";
import { ArrowLeft } from "react-feather";

const useStyles = makeStyles((theme) => ({
  alert: {
    fontFamily: "Inter, sans-serif",
    ["@media(min-width: 768px)"]: {
      padding: "15px 20px 15px 20px",
      fontSize: "16px",
    },
  },
  alertBox: {
    borderRadius: "5px",
    ["@media(min-width: 768px)"]: {
      marginBottom: "35px",
    },
  },
  buttonBack: {
    color: "#f12b46",
  },
}));

export default function ContactPage({ data: { site } }) {
  const classes = useStyles();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    const payload = new FormData(document.querySelector("#contact_form"));

    try {
      await fetch("https://formcarry.com/s/URtIX5tQbi", {
        method: "POST",
        headers: { Accept: "application/x-www-form-urlencoded" },
        body: payload,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            console.log("Message sent successfully");
            reset();
            setSuccess(true);
          } else {
            setError(true);
          }
        });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
    setSuccess(false);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className={"two-grids -contact "}>
        <div
          className="post-thumbnail-contact"
          style={{
            backgroundImage: `url(${ImgBackground})`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Contact Me</h1>
          {/* <p>Let me help you kick start your next project &rarr;</p> */}
        </div>
        <div>
          <form
            className="form-container"
            id="contact_form"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
          >
            <div>
              <label htmlFor="Name">Name</label>
              <input
                // disabled={isSubmitting}
                type="text"
                name="name"
                id="Name"
                ref={register}
                required
              />
            </div>
            <div>
              <label htmlFor="Sender">Email</label>
              <input
                // disabled={isSubmitting}
                type="email"
                name="sender"
                id="Sender"
                ref={register}
                required
              />
            </div>
            <div>
              <label htmlFor="Subject">Subject</label>
              <input
                // disabled={isSubmitting}
                type="text"
                name="subject"
                id="Subject"
                ref={register}
              />
            </div>
            <div>
              <label htmlFor="Message">Message</label>
              <textarea
                // disabled={isSubmitting}
                name="message"
                id="Message"
                type="text"
                ref={register}
                required
              ></textarea>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                disabled={isSubmitting}
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              >
                Submit
              </button>
            </div>
          </form>
          <Snackbar
            open={isSuccess}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            TransitionComponent={Slide}
            key={"topcentersuccess"}
          >
            <Box boxShadow={3} className={classes.alertBox}>
              <Alert
                onClose={handleClose}
                severity="success"
                className={classes.alert}
              >
                Your form has been submitted successfully!
              </Alert>
            </Box>
          </Snackbar>
          <Snackbar
            open={isError}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            TransitionComponent={Slide}
            key={"topcentererror"}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              className={classes.alert}
            >
              An error has occured. Try again later.
            </Alert>
          </Snackbar>
        </div>
      </div>
    </Layout>
  );
}
// export default ContactPage;
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

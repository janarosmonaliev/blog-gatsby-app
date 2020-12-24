import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

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
}));

export default function ContactPage({ data: { site } }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isError, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await fetch("https://sendmail.w3layouts.com/SubmitContactForm", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      reset();
      setOpen(true);
      // console.log("Success!");
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
    setOpen(false);
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
      {/* <IconButton aria-label="go-back" size="medium">
        <SvgIcon>
          <ArrowLeft />
        </SvgIcon>
      </IconButton> */}
      <div className={"two-grids -contact "}>
        <div
          className="post-thumbnail-contact"
          style={{
            backgroundImage: `url('/assets/contact-img.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Contact Me</h1>
          {/* <p>Let me help you kick start your next project &rarr;</p> */}
        </div>
        <div>
          <form
            className="form-container"
            // action="https://sendmail.w3layouts.com/SubmitContactForm"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
          >
            <div>
              <label htmlFor="Name">Name</label>
              <input
                disabled={isSubmitting}
                type="text"
                name="w3lName"
                id="Name"
                ref={register}
                required
              />
            </div>
            <div>
              <label htmlFor="Sender">Email</label>
              <input
                disabled={isSubmitting}
                type="email"
                name="w3lSender"
                id="Sender"
                ref={register}
                required
              />
            </div>
            <div>
              <label htmlFor="Subject">Subject</label>
              <input
                disabled={isSubmitting}
                type="text"
                name="w3lSubject"
                id="Subject"
                ref={register}
              />
            </div>
            <div>
              <label htmlFor="Message">Message</label>
              <textarea
                disabled={isSubmitting}
                name="w3lMessage"
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
            open={open}
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

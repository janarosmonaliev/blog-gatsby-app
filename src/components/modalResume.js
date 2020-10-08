import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../images/janarosmo-resume.jpg";
import Box from "@material-ui/core/Box";
import { X } from "react-feather";
import MenuItem from "@material-ui/core/MenuItem";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles({
  resume: {
    maxWidth: "100%",
    // height: "auto",
    objectFit: "contain",
  },
  closeButton: {
    // position: "absolute",
    // right: "5px",
    textAlign: "right",
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#4209ED",
    },
  },
  close: {
    backgroundColor: red[600],
    color: "white",
    "&:hover": {
      backgroundColor: red[700],
    },
  },
});
export default function ModalResume() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <MenuItem onClick={handleClickOpen} className={classes.link}>
        Quick View
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"body"}
        aria-labelledby="modal-resume"
        aria-describedby="modal-resume-description"
        fullWidth={true}
        maxWidth={"lg"}
      >
        <DialogTitle id="modal-resume-title" className={classes.closeButton}>
          <IconButton aria-label="close" onClick={handleClose} size="medium">
            <SvgIcon>
              <X color="red" />
            </SvgIcon>
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <img src={Resume} className={classes.resume}></img>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.close}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

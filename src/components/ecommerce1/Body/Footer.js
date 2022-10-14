import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import SubscribeInput from "../customs/SubscribeInput";
// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    // height: "0vh",
    width: "100%",
    background: "#555",
    display: "flex",
    flexDirection: "column",
  },
  contact1: {
    background: "#ea3",
    height: 64,
    placeItems: "Center",
  },
  contact2: {
    background: "#f45",
    height: "75%",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  signUp: {
    border: "1px solid blue",
    width: "80%",
    height: 60,
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
  },
  signUpText: {
    // background: "green",
    width: "30%",
    height: "100%",
    display: "flex",
    placeItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
  socialMediaLink: {
    width: "25%",
    height: "100%",
    // background: "crimson",
  },
  signUpInput: {
    height: "100%",
  },
  contactUs: {
    background: "#a95",
    height: "100%",
    width: "24%",
  },
  information: {
    background: "#9aa",
    height: "100%",
    width: "24%",
  },
  myAccount: {
    background: "#df3",
    height: "100%",
    width: "24%",
  },
  customerService: {
    background: "#2dd",
    height: "100%",
    width: "24%",
  },
  otherlinks: {
    background: "#ec2",
    height: "10%",
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.contact1} item>
        <Grid item className={classes.signUp}>
          <Grid item className={classes.signUpText}>
            <Typography
              variant="h6"
              style={{ background: "orange" }}
              color="initial"
            >
              SIGN UP FOR NEWSLETTER
            </Typography>
          </Grid>
          {/* <SubscribeInput className={classes.signUpInput} /> */}
          <Grid item className={classes.socialMediaLink}>
            Social Media
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.contact2} item>
        <Grid item className={classes.contactUs}>
          Contact us
        </Grid>
        <Grid item className={classes.information}>
          Informantion
        </Grid>
        <Grid item className={classes.myAccount}>
          My Account
        </Grid>
        <Grid item className={classes.customerService}>
          Customer Service
        </Grid>
      </Grid>
      <Grid className={classes.otherlinks} item>
        Other links
      </Grid>
    </Grid>
  );
}

export default Footer;

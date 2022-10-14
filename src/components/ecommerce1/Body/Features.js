import React from "react";
import {
  createMuiTheme,
  Grid,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import CallEndIcon from "../../images/icons/CallEndIcon.png";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

// ? Custom  Styling
const useStyles = makeStyles((theme) => ({
  root: {
    // background: "#999",
    width: "80%",
    height: "120px",
    margin: "0 auto",
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid #c5c5c5",
    borderRadius: theme.spacing(3),
  },
  features: {
    // border: "1px solid crimson",
    width: "33%",
    height: "80%",
    display: "flex",
  },
  feature_icon: {
    // border: "1px solid crimson",
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "80%",
    },
  },
  feature_info: {
    // border: "1px solid yellow",
    width: "75%",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  feature_heading: {
    // background: "blue",
    paddingLeft: theme.spacing(0.5),
    textAlign: "left",
  },
  feature_desc: {
    // background: "green",
    paddingLeft: theme.spacing(0.5),
    textAlign: "left",
  },
}));

// override styles
const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body2: {
        // fontFamily: "'Righteous', cursive",
        // fontWeight: 300,
        fontSize: "0.8rem",
      },
      h5: {
        fontFamily: "'Righteous', cursive",
      },
      h6: {
        textTransform: "capitalize",
        fontSize: "1.2rem",
      },
    },
  },
});

// ? Main Function
function Features() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className={classes.root}>
        <Grid item className={classes.features}>
          <Grid item className={classes.feature_icon}>
            <img src={CallEndIcon} alt="Support" />
          </Grid>
          <Grid item className={classes.feature_info}>
            <Grid item className={classes.feature_heading}>
              <Typography variant="h6" color="initial">
                24/7 Free Support
              </Typography>
            </Grid>
            <Grid item className={classes.feature_desc}>
              <Typography variant="body2" color="initial">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.features}>
          <Grid item className={classes.feature_icon}>
            <LocalShippingIcon style={{ fontSize: "60px", color: "#444" }} />
          </Grid>
          <Grid item className={classes.feature_info}>
            <Grid item className={classes.feature_heading}>
              <Typography variant="h6" color="initial">
                Free Countrywide Shipping
              </Typography>
            </Grid>
            <Grid item className={classes.feature_desc}>
              <Typography variant="body2" color="initial">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.features}>
          <Grid item className={classes.feature_icon}>
            <MonetizationOnIcon style={{ fontSize: "60px", color: "#444" }} />
          </Grid>
          <Grid item className={classes.feature_info}>
            <Grid item className={classes.feature_heading}>
              <Typography variant="h6" color="initial">
                Money Back Guarantee
              </Typography>
            </Grid>
            <Grid item className={classes.feature_desc}>
              <Typography variant="body2" color="initial">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default Features;

import React from "react";
import {
  createMuiTheme,
  makeStyles,
  TextField,
  ThemeProvider,
  Button,
  Grid,
} from "@material-ui/core";

// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    // placeItems: "center",
  },
  container: {
    height: "100%",
    background: "grey",
    display: "flex",
  },
}));

// override styles
const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        display: "flex",
        flexDirection: "column",
      },
    },
    MuiInputLabel: {
      outlined: {
        // transform: "translate(28px 20px) scale(2)",
        display: "flex",
      },
    },

    MuiButton: {
      contained: {
        backgroundColor: "rgba(0,0,0,0.87)",
        color: "#9e9e9e",
      },
      root: {
        height: "40px",
        borderRadius: "0px 20px 20px 0px",
        textTransform: "capitalize",
        padding: "6px 20px",
      },
    },
  },
});
function SubscribeInput() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <form className={classes.root}>
        <Grid item className={classes.container}>
          <TextField
            id="outlined-basic"
            label="Your email address"
            variant="outlined"
          />
          <Button variant="contained" color="default">
            Subscribe
          </Button>
        </Grid>
      </form>
    </ThemeProvider>
  );
}

export default SubscribeInput;

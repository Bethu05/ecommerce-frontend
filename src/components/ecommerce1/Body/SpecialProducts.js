import React from "react";
import {
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import Special1 from "./Special1";
import Special2 from "./Special2";

// custom styling
const useStyles = makeStyles((theme) => ({
  specialProducts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: theme.spacing(4),
    // height: "100vh",
  },
  category: {
    // border: "1px solid crimson",
    width: "80%",
    // textAlign: "center",
    color: "#525252",
  },
  title: {
    // border: "1px solid yellow",
    width: "80%",
    textAlign: "center",
    fontWeight: 600,
  },
  advert: {
    background: "yellowgreen",
    width: "100%",
    height: 100,
  },
}));

// override styles
const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontWeight: 500,
      },
      body2: {
        fontFamily: "'Righteous', cursive",
        fontWeight: 300,
      },
      h5: {
        fontFamily: "'Righteous', cursive",
      },
      h6: {
        textTransform: "capitalize",
      },
    },
  },
});

// main Function
function SpecialProducts() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.specialProducts}>
        <div className={classes.category}>
          <Typography variant="body2" color="initial">
            Special Product
          </Typography>
        </div>
        <div className={classes.title}>
          <Typography variant="h5" color="initial">
            Deal Of The Day
          </Typography>
        </div>
        <Special1 />
        <Special2 />
        <Grid item className={classes.advert}>
          Advert
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default SpecialProducts;

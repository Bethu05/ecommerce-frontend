import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 1),
    width: theme.spacing(20),
    height: theme.spacing(7),
    borderRadius: theme.spacing(2),
    background: "#e2e2e2",

    // marginLeft: theme.spacing(1),
    "&.MuiButton-text": {
      color: "white",
      fontSize: "1.2em",
      letterSpacing: "2px",
    },
    "&:hover": {
      backgroundColor: "#009620b0",
      // borderColor: "#0062cc",
      boxShadow: "none",
      // color: "#fff",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#00d12d",
      // borderColor: "#005cbf",
    },
    "&:focus": {
      // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        // some css
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        // background: "linear-gradient(45deg, #051F93 30%, #00C7BD 90%)",
        // background: "linear-gradient(45deg, #dc143c 30%, #00C7BD 90%)",
        // boxShadow: "0 3px 5px 2px rgba(13, 61, 122, 0.3)",
      },
      label: {
        // padding: "0px 10px",
        textTransform: "capitalize",
        fontWeight: 400,
      },
      containedSizeLarge: {
        // padding: "2px 10px",
        fontSize: "1em",
      },
      outlined: {
        border: "none",
      },
    },
  },
});

export default function CategoryButton(props) {
  const classes = useStyles();
  const { text, variant, type, size } = props;
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        className={classes.root}
        variant={variant || "outlined"}
        size={size || "large"}
        // color={color}
        type={type}
      >
        {text}
      </MuiButton>
    </ThemeProvider>
  );
}

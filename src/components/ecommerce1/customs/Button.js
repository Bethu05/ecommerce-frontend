import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: "5px 10px",
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
        padding: "0px",
        borderRadius: "20px",
        // background: "linear-gradient(45deg, #051F93 30%, #00C7BD 90%)",
        // background: "linear-gradient(45deg, #dc143c 30%, #00C7BD 90%)",
        background: "#009620",
        // borderRadius: 3,
        // border: 0,
        // color: "#2b2b2b",
        // height: 40,
        // padding: "0 30px",
        // boxShadow: "0 3px 5px 2px rgba(13, 61, 122, 0.3)",
      },
      label: {
        // padding: "0px 10px",
        textTransform: "capitalize",
        color: "#ffffff",
        fontWeight: 600,
      },
      containedSizeLarge: {
        // padding: "2px 10px",
        fontSize: "1.2em",
      },
      outlined: {
        border: "none",
      },
    },
  },
});

export default function Button(props) {
  const classes = useStyles();
  const { text, variant, type, size } = props;
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        className={classes.button}
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

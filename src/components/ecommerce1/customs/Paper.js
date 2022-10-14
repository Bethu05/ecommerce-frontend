import React from "react";
import { makeStyles, Paper as MuiPaper } from "@material-ui/core";

// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    color: "#fff",
    display: "flex",
    border: "1px solid #c5c5c5",
    borderRadius: theme.spacing(2),
    transition: "transform .3s",
    marginTop: theme.spacing(2),

    "&:hover": {
      transform: "scale(1.05)",
    },
    // opacity: 0.5,
    // background: "linear-gradient(to bottom, #000000, #434343)",
  },
}));

export default function Paper(props) {
  const { elevation, height, width, node } = props;
  const classes = useStyles();

  return (
    <MuiPaper
      className={classes.root}
      elevation={elevation}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      {node}
    </MuiPaper>
  );
}

import React from "react";
import { makeStyles, Paper as MuiPaper } from "@material-ui/core";

// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    // background: "transparent",
    color: "#fff",
    display: "flex",
    border: "1px solid #dddddd",
    borderRadius: theme.spacing(2),
    margin: theme.spacing(2, 3),
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPositionY: "100%",
    // transition: "transform .3s",
    // "&:hover": {
    //   transform: "scale(1.05)",
    // },
    // opacity: 0.5,
    // background: "linear-gradient(to bottom, #000000, #434343)",
  },
}));

export default function Paper(props) {
  const { elevation, height, width, node, background } = props;
  const classes = useStyles();

  return (
    <MuiPaper
      className={classes.root}
      elevation={elevation}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundImage: `url(${background})`,
      }}
    >
      {node}
    </MuiPaper>
  );
}

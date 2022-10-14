import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    height: `280px`,
    width: `23%`,
    background: "transparent",
    color: "#fff",
    display: "flex",
    border: "1px solid #c5c5c5",
    borderRadius: theme.spacing(2),
    margin: theme.spacing(1),
    transition: "transform .4s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    // opacity: 0.5,
    // background: "linear-gradient(to bottom, #000000, #434343)",
  },
}));

function ProductPaper(props) {
  const { node } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      {node}
    </Paper>
  );
}

export default ProductPaper;

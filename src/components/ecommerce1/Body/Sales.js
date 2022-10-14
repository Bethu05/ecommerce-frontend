import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Background from "../../images/ecommerce/products/fruits.png";
import Controls from "../customs/Controls";

// ?custom css
const useStyles = makeStyles((theme) => ({
  sales: {
    // border: "1px solid crimson",
    height: "50vh",
    marginTop: theme.spacing(4),
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPositionY: "100%",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
  },
  sales_info: {
    // border: "1px solid crimson",
    height: 150,
    width: 300,
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  sales_info_title: {
    fontFamily: "'Yellowtail', cursive",
    fontSize: "1.6rem",
    textAlign: "left",
    color: "#333",
  },
  sales_info_offer: {
    fontWeight: "bolder",
    fontSize: "2.5rem",
    textAlign: "left",
  },
  btn: {
    // border: "1px solid blue",
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

function Sales() {
  const classes = useStyles();

  return (
    <Grid container className={classes.sales}>
      <Grid item className={classes.sales_info}>
        <Typography
          variant="h6"
          color="initial"
          className={classes.sales_info_title}
        >
          Natural Product
        </Typography>
        <Typography
          variant="h4"
          color="initial"
          className={classes.sales_info_offer}
        >
          Save <span style={{ color: "crimson" }}>40%</span> OFF
        </Typography>
        <Grid item className={classes.btn}>
          <Controls.Button size="medium" text="Read more" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Sales;

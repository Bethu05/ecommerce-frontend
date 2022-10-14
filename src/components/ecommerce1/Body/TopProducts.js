import React from "react";
import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import Controls from "../customs/Controls";
import TopProductImage from "../../images/ecommerce/png/orange_juice.png";
import { Products } from "../Arrays/Products";
// ? CustomStyles
const useStyles = makeStyles((theme) => ({
  topProducts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#888",
    // height: "100vh",
  },
  category: {
    // border: "1px solid crimson",
    width: "80%",
    // textAlign: "center",
    color: "#525252",
    marginTop: theme.spacing(2),
  },
  title: {
    // border: "1px solid yellow",
    width: "80%",
    textAlign: "center",
    fontWeight: 600,
  },
  links: {
    // border: "1px solid crimson",
    marginTop: theme.spacing(3),
    width: "80%",
  },
  products: {
    // border: "1px solid #000",
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  product_div: {
    // border: "1px solid #000",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
  },
  product_img: {
    // border: "1px solid crimson",
    height: "75%",
    width: "80%",
    marginTop: theme.spacing(1),
    // background: "#555",
    "& img": {
      width: "100%",
      // maxHeight: 180,
      // height: "100%",
    },
  },
  product_category: {
    // fontSize: "0.7rem",
    // border: "1px solid crimson",
    // background: "#ea5555",
    color: "#929292",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  product_name: {
    // fontSize: "0.7rem",
    width: "100%",
    color: "#000",
  },
  product_price: {
    color: "crimson",
    width: "100%",
  },
}));
function TopProducts() {
  const classes = useStyles();
  return (
    <Grid container className={classes.topProducts}>
      <Grid item className={classes.category}>
        <Typography variant="body2" color="initial">
          Add Top Products To Weekly Line Top
        </Typography>
      </Grid>
      <Grid item className={classes.title}>
        <Typography variant="h5" color="initial">
          Top Product
        </Typography>
      </Grid>
      <Grid item className={classes.links}>
        <Link href="#">Featured</Link>
        <Link href="#">Bestseller</Link>
        <Link href="#">Latest</Link>
      </Grid>
      <Grid item className={classes.products}>
        {Products.map((product) => (
          <Controls.ProductPaper
            key={product.id}
            node={
              <Grid container className={classes.product_div}>
                <Grid item className={classes.product_img}>
                  <img src={product.src} alt={product.alt} />
                </Grid>
                <Grid item className={classes.product_category}>
                  <Typography variant="body2" color="initial">
                    Fresh Fruit, Apple
                  </Typography>
                  <Typography
                    className={classes.product_name}
                    variant="h6"
                    color="initial"
                  >
                    {product.alt}
                  </Typography>
                  <Typography
                    className={classes.product_price}
                    variant="h6"
                    color="initial"
                  >
                    $602.00
                  </Typography>
                </Grid>
              </Grid>
            }
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default TopProducts;

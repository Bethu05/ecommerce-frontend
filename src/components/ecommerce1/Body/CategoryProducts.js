import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import CategoryButton from "../customs/CategoryButton";
import Controls from "../customs/Controls";
import Lemon from "../../images/ecommerce/png/lemon.png";
import { Products } from "../Arrays/Products";
// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    // border: "1px solid crimson",
    width: "80%",
    margin: "0 auto",
    flexDirection: "column",
    // height: "100vh",
    marginBottom: theme.spacing(10),
  },
  title: {
    // border: "1px solid blue",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  categories: {
    // background: "#45f",
    padding: theme.spacing(0.5, 0),
  },
  category_Products: {
    // border: "1px solid green",
    padding: theme.spacing(2, 1),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),

    // background: "#8888",
  },
  product_container: {
    // border: "1px solid green",
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: "#333",
  },
  product_image: {
    // background: "yellow",
    width: "40%",
    height: "70%",
    display: "flex",
    flexWap: "wrap",
    alignItems: "center",
    "& img": {
      height: "100%",
      alignItems: "center",
    },
  },
  product_info: {
    // background: "grey",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: theme.spacing(2),
  },
  strikeThrough: {
    color: "#ff2424ab",
    textDecoration: "line-through",
  },
}));

// main function
function CategoryProducts() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.title}>
        <Typography variant="h5" color="initial">
          Category Product
        </Typography>
      </Grid>
      <Grid item className={classes.categories}>
        <CategoryButton variant="contained" text="Vegetables" />
        <CategoryButton variant="contained" text="Fruits" />
        <CategoryButton variant="contained" text="Food" />
        <CategoryButton variant="contained" text="Organic" />
        <CategoryButton variant="contained" text="Tablets" />
        <CategoryButton variant="contained" text="Elementum" />
      </Grid>
      <Grid item className={classes.category_Products}>
        {Products.map((product) => (
          <Controls.Paper
            key={product.id}
            elevation={0}
            height={120}
            width={300}
            node={
              <Grid container className={classes.product_container}>
                <Grid item className={classes.product_image}>
                  <img src={product.src} alt={product.alt} />
                </Grid>
                <Grid item className={classes.product_info}>
                  <Typography
                    variant="body2"
                    color="initial"
                    style={{ fontSize: "0.7rem", color: "#929292" }}
                  >
                    Fresh Fruit, Blackberry
                  </Typography>
                  <Typography variant="body1" color="initial">
                    {product.alt}
                  </Typography>
                  <Typography variant="body1" color="initial">
                    $110.00
                    <span> </span>
                    <span className={classes.strikeThrough}>$122.00</span>
                  </Typography>
                </Grid>
              </Grid>
            }
          />
        ))}
        {/*
        <Controls.Paper
          elevation={0}
          height={120}
          width={300}
          node={
            <Grid container className={classes.product_container}>
              <Grid item className={classes.product_image}>
                <img src={Lemon} width="100%" alt="Product_image" />
              </Grid>
              <Grid item className={classes.product_info}>
                <Typography
                  variant="body2"
                  color="initial"
                  style={{ fontSize: "0.7rem", color: "#929292" }}
                >
                  Fresh Fruit, Blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  Best raspberry, blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  $110.00
                  <span> </span>
                  <span className={classes.strikeThrough}>$122.00</span>
                </Typography>
              </Grid>
            </Grid>
          }
        />
        <Controls.Paper
          elevation={0}
          height={120}
          width={300}
          node={
            <Grid container className={classes.product_container}>
              <Grid item className={classes.product_image}>
                <img src={Lemon} width="100%" alt="Product_image" />
              </Grid>
              <Grid item className={classes.product_info}>
                <Typography
                  variant="body2"
                  color="initial"
                  style={{ fontSize: "0.7rem", color: "#929292" }}
                >
                  Fresh Fruit, Blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  Best raspberry, blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  $110.00
                  <span> </span>
                  <span className={classes.strikeThrough}>$122.00</span>
                </Typography>
              </Grid>
            </Grid>
          }
        />
        <Controls.Paper
          elevation={0}
          height={120}
          width={300}
          node={
            <Grid container className={classes.product_container}>
              <Grid item className={classes.product_image}>
                <img src={Lemon} width="100%" alt="Product_image" />
              </Grid>
              <Grid item className={classes.product_info}>
                <Typography
                  variant="body2"
                  color="initial"
                  style={{ fontSize: "0.7rem", color: "#929292" }}
                >
                  Fresh Fruit, Blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  Best raspberry, blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  $110.00
                  <span> </span>
                  <span className={classes.strikeThrough}>$122.00</span>
                </Typography>
              </Grid>
            </Grid>
          }
        />
        <Controls.Paper
          elevation={0}
          height={120}
          width={300}
          node={
            <Grid container className={classes.product_container}>
              <Grid item className={classes.product_image}>
                <img src={Lemon} width="100%" alt="Product_image" />
              </Grid>
              <Grid item className={classes.product_info}>
                <Typography
                  variant="body2"
                  color="initial"
                  style={{ fontSize: "0.7rem", color: "#929292" }}
                >
                  Fresh Fruit, Blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  Best raspberry, blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  $110.00
                  <span> </span>
                  <span className={classes.strikeThrough}>$122.00</span>
                </Typography>
              </Grid>
            </Grid>
          }
        />
        <Controls.Paper
          elevation={0}
          height={120}
          width={300}
          node={
            <Grid container className={classes.product_container}>
              <Grid item className={classes.product_image}>
                <img src={Lemon} width="100%" alt="Product_image" />
              </Grid>
              <Grid item className={classes.product_info}>
                <Typography
                  variant="body2"
                  color="initial"
                  style={{ fontSize: "0.7rem", color: "#929292" }}
                >
                  Fresh Fruit, Blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  Best raspberry, blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  $110.00
                  <span> </span>
                  <span className={classes.strikeThrough}>$122.00</span>
                </Typography>
              </Grid>
            </Grid>
          }
        />
        <Controls.Paper
          elevation={0}
          height={120}
          width={300}
          node={
            <Grid container className={classes.product_container}>
              <Grid item className={classes.product_image}>
                <img src={Lemon} width="100%" alt="Product_image" />
              </Grid>
              <Grid item className={classes.product_info}>
                <Typography
                  variant="body2"
                  color="initial"
                  style={{ fontSize: "0.7rem", color: "#929292" }}
                >
                  Fresh Fruit, Blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  Best raspberry, blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  $110.00
                  <span> </span>
                  <span className={classes.strikeThrough}>$122.00</span>
                </Typography>
              </Grid>
            </Grid>
          }
        />
        <Controls.Paper
          elevation={0}
          height={120}
          width={300}
          node={
            <Grid container className={classes.product_container}>
              <Grid item className={classes.product_image}>
                <img src={Lemon} width="100%" alt="Product_image" />
              </Grid>
              <Grid item className={classes.product_info}>
                <Typography
                  variant="body2"
                  color="initial"
                  style={{ fontSize: "0.7rem", color: "#929292" }}
                >
                  Fresh Fruit, Blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  Best raspberry, blackberry
                </Typography>
                <Typography variant="body1" color="initial">
                  $110.00
                  <span> </span>
                  <span className={classes.strikeThrough}>$122.00</span>
                </Typography>
              </Grid>
            </Grid>
          }
        />*/}
      </Grid>
    </Grid>
  );
}

export default CategoryProducts;

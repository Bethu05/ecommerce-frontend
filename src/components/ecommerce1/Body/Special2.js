import React from "react";
import Controls from "../customs/Controls";
import { Grid, makeStyles, Typography } from "@material-ui/core";
// import summer from "../../images/ecommerce/wallpaper/summer.png";
// import newseason from "../../images/ecommerce/wallpaper/newseason.png";
import { Seasons } from "../Arrays/Products";

// custom styling
const useStyles = makeStyles((theme) => ({
  special2: {
    // border: "1px solid blue",
    // height: "50%",
    margin: "0 auto",
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  special2_container: {
    // border: "1px solid yellow",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    color: "#000",
  },
  special2_info: {
    // background: "grey",
    height: "80%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "& h6": {
      fontSize: "1.5rem",
      fontFamily: "'Yellowtail', cursive",
      // color: "#148805",
      color: "#fd6500",
      textShadow: "#ffe600 2px 2px 0px, #959e90 4px 4px 0px",
    },
    "& p": {
      color: "#4d4d4d",
      fontSize: "1rem",
      textShadow: "rgba(0,255,89) 0px 0px 15px",
    },
  },
}));

function Special2() {
  const classes = useStyles();
  const random_seasons = [];
  for (let i = 0; i < 2; i++) {
    var random_index = Math.floor(Math.random() * 8);
    // console.log(Seasons[random_index]["src"]);
    random_seasons.push(Seasons[random_index]);
  }
  const getSeasons = () => {
    return random_seasons.map((season) => (
      <Controls.Paper1
        key={season.id}
        elevation={3}
        height={280}
        width={480}
        background={season.src}
        node={
          <Grid container className={classes.special2_container}>
            <Grid item className={classes.special2_info}>
              <Typography variant="h6" color="initial">
                {season.season}
              </Typography>
              <Typography variant="h5" color="initial">
                {season.message}
              </Typography>

              <Typography variant="body2" color="initial">
                Up to 25% off Fruit
              </Typography>
              <Grid item style={{ width: "50%" }}>
                <Controls.Button size="small" text="Shop Now" />
              </Grid>
            </Grid>
          </Grid>
        }
      />
    ));
  };
  console.log(random_seasons);

  return (
    <div className={classes.special2}>
      {getSeasons()}
      {/* {random_seasons.map((season) => (
        <Controls.Paper1
          key={random_seasons["id"]}
          elevation={3}
          height={280}
          width={480}
          background={random_seasons.src}
          node={
            <Grid container className={classes.special2_container}>
              <Grid item className={classes.special2_info}>
                <Typography variant="h6" color="initial">
                  Summer
                </Typography>
                <Typography variant="h5" color="initial">
                  Fresh Fruit juice
                </Typography>

                <Typography variant="body2" color="initial">
                  Up to 25% off Fruit
                </Typography>
                <Grid item style={{ width: "50%" }}>
                  <Controls.Button size="small" text="Shop Now" />
                </Grid>
              </Grid>
            </Grid>
          }
        />
      ))} */}
    </div>
  );
}

export default Special2;

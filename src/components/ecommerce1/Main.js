import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavbarElements from "./Navbar/NavbarElements";
import Background1 from "../images/ecommerce/wallpaper/wallpaper11.jpg";
import Typography from "@material-ui/core/Typography";
import Media from "react-media";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "100vh",
    backgroundImage: `url(${Background1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPositionY: "100%",
  },
  small_desc: {
    color: "#333",
    // marginTop: theme.spacing(10),
    width: "95%",
    margin: "0 auto",
    // height: "60%",
    display: "flex",
    flexWrap: "wrap",
    // flexDirection: "column",
    alignItems: "flex-end",
    border: "1px solid crimson",
  },
  small_desc_info: {
    background: "#45d6",
    width: "95%",
    margin: "0 auto",
    // marginLeft: theme.spacing(10),
  },
  small_desc_intro: {
    fontWeight: "bold",
  },
  small_desc_intro_info: {
    marginTop: theme.spacing(1),
    color: "#111",
  },
  medium_desc: {
    color: "#333",
    marginTop: theme.spacing(10),
    width: "100%",
    height: "60%",
    display: "flex",
    flexWrap: "wrap",
    // flexDirection: "column",
    alignItems: "flex-end",
    // border: "1px solid crimson",
  },
  medium_desc_info: {
    // background: "#45d6",
    width: "100%",
    marginLeft: theme.spacing(10),
  },
  medium_desc_intro: {
    fontWeight: "bold",
    textShadow:
      "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 30px #1eff00, 0 0 40px #1eff00,  0 0 45px #1eff00",
    // "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #1eff00, 0 0 82px #1eff00,  0 0 92px #1eff00,  0 0 102px #1eff00, 0 0 151px #1eff00",
  },
  medium_desc_intro_info: {
    marginTop: theme.spacing(1),
    color: "#111",
  },
  desc: {
    color: "#333",
    marginTop: theme.spacing(10),
    width: "100%",
    height: "60%",
    display: "flex",
    flexWrap: "wrap",
    // flexDirection: "column",
    alignItems: "flex-end",
    // border: "1px solid crimson",
  },
  desc_info: {
    // background: "#45d6",
    width: "450px",
    marginLeft: theme.spacing(10),
  },
  desc_intro: {
    fontWeight: "bold",
    textShadow:
      "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 30px #1eff00, 0 0 40px #1eff00,  0 0 45px #1eff00",
    // "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #1eff00, 0 0 82px #1eff00,  0 0 92px #1eff00,  0 0 102px #1eff00, 0 0 151px #1eff00",
  },
  desc_intro_info: {
    marginTop: theme.spacing(1),
    color: "#111",
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <NavbarElements />
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {/* Renders on small screens eg-mobile */}
            {matches.small && (
              <div className={classes.small_desc}>
                <div className={classes.small_desc_info}>
                  <Typography
                    className={classes.small_desc_intro}
                    variant="h3"
                    color="initial"
                  >
                    Organic Fresh Fruits For Your Health
                  </Typography>
                  <Typography
                    className={classes.small_desc_intro_info}
                    variant="body2"
                    color="initial"
                  >
                    Some of tHe best fruits and vegetables from all over the
                    country. Produced by some of the well reknowed farmers in
                    their firms using the best technology and farming methods
                  </Typography>
                </div>
              </div>
            )}
            {/* Renders on medium screens eg-tablets */}
            {matches.medium && (
              <div className={classes.medium_desc}>
                <div className={classes.medium_desc_info}>
                  <Typography
                    className={classes.medium_desc_intro}
                    variant="h3"
                    color="initial"
                  >
                    Organic Fresh Fruits
                    <br /> For Your Health
                  </Typography>
                  <Typography
                    className={classes.medium_desc_intro_info}
                    variant="body2"
                    color="initial"
                  >
                    Some of tHe best fruits and vegetables from all over the
                    country. Produced by some of the well reknowed farmers in
                    their firms using the best technology and farming methods
                  </Typography>
                </div>
              </div>
            )}
            {/* For Large Screens */}
            {matches.large && (
              <div className={classes.desc}>
                <div className={classes.desc_info}>
                  <Typography
                    className={classes.desc_intro}
                    variant="h3"
                    color="initial"
                  >
                    Organic Fresh Fruits For Your Health
                  </Typography>
                  <Typography
                    className={classes.desc_intro_info}
                    variant="body2"
                    color="initial"
                  >
                    Some of tHe best fruits and vegetables from all over the
                    country. Produced by some of the well reknowed farmers in
                    their firms using the best technology and farming methods
                  </Typography>
                </div>
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}

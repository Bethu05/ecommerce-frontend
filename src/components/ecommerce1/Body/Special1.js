import React from "react";
import Controls from "../customs/Controls";
import { makeStyles, Typography } from "@material-ui/core";
import Lemon from "../../images/ecommerce/png/lemon.png";
import Blackberry from "../../images/ecommerce/png/raspberry_blackberry.png";
import Guavas from "../../images/ecommerce/png/guavas_common.png";

// custom styling
const useStyles = makeStyles((theme) => ({
  special1: {
    // border: "1px solid green",
    // height: "30%",
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: theme.spacing(3),
  },
  special1_container: {
    width: "100%",
    display: "flex",
    color: "#333",
  },
  special1_image: {
    // background: "yellow",
    width: "40%",
    display: "flex",
    alignItems: "center",
  },
  special1_info: {
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
function Special1() {
  const classes = useStyles();

  return (
    <div className={classes.special1}>
      {/* Special1 */}
      <Controls.Paper
        elevation={0}
        height={120}
        width={300}
        node={
          <div className={classes.special1_container}>
            <div className={classes.special1_image}>
              <img src={Lemon} width="100%" alt="Lemon-fruit" />
            </div>
            <div className={classes.special1_info}>
              <Typography
                variant="body2"
                color="initial"
                style={{ fontSize: "0.7rem", color: "#929292" }}
              >
                Fresh seedless Lemon
              </Typography>
              <Typography variant="body1" color="initial">
                Sweet and sour lemon fruit
              </Typography>
              <Typography variant="body1" color="initial">
                $98.00
                <span> </span>
                <span className={classes.strikeThrough}>$122.00</span>
              </Typography>
            </div>
          </div>
        }
      />
      {/* Special2 */}
      <Controls.Paper
        elevation={0}
        height={120}
        width={300}
        node={
          <div className={classes.special1_container}>
            <div className={classes.special1_image}>
              <img src={Blackberry} width="100%" alt="Lemon-fruit" />
            </div>
            <div className={classes.special1_info}>
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
            </div>
          </div>
        }
      />
      {/* Special3 */}
      <Controls.Paper
        elevation={0}
        height={120}
        width={300}
        node={
          <div className={classes.special1_container}>
            <div className={classes.special1_image}>
              <img src={Guavas} width="100%" alt="Lemon-fruit" />
            </div>
            <div className={classes.special1_info}>
              <Typography
                variant="body2"
                color="initial"
                style={{ fontSize: "0.7rem", color: "#929292" }}
              >
                Fresh Fruit, Guavas
              </Typography>
              <Typography variant="body1" color="initial">
                Australian guavas
              </Typography>
              <Typography variant="body1" color="initial">
                $25.00
                <span> </span>
                <span className={classes.strikeThrough}>$122.00</span>
              </Typography>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default Special1;

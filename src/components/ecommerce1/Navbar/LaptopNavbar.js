import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Link,
  InputBase,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SettingsIcon from "@material-ui/icons/Settings";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// custom Styles
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#5f5f5f9c",
  },
  title: {
    padding: theme.spacing(0.5, 1),
    color: "#009620",
  },
  links: {
    listStyle: "none",
    "& li": {
      float: "left",
      padding: theme.spacing(0.5, 1),
      textDecoration: "none",
      "& a": {
        fontSize: "16px",
        textDecoration: "none",
      },
      "& a:hover": {
        textDecoration: "none",
      },
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    border: "1px solid #009620",
    position: "relative",
    borderRadius: 22,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    color: "#009620",
    position: "absolute",
    padding: theme.spacing(0, 1),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 2),
    paddingLeft: `calc(1em + ${theme.spacing(2.5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "150px",
      "&:focus": {
        width: "180px",
      },
    },
  },
  account: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginRight: theme.spacing(5),
  },
  accountIcons: {
    marginLeft: theme.spacing(2),
  },
}));

function LaptopNavbar() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appbar}
      position="fixed"
      color="primary"
      elevation={1}
    >
      <Toolbar>
        <Typography className={classes.title} variant="h5">
          Flavoro
        </Typography>
      </Toolbar>
      <ul className={classes.links}>
        <li>
          <Link href="#" variant="h6" color="inherit">
            Fruits
          </Link>
        </li>
        <li>
          <Link href="#" variant="h6" color="inherit">
            Vegetables
          </Link>
        </li>
        <li>
          <Link href="#" variant="h6" color="inherit">
            Organic
          </Link>
        </li>
        <li>
          <Link href="#" variant="h6" color="inherit">
            Tablets
          </Link>
        </li>
        <li>
          <Link href="#" variant="h6" color="inherit">
            Elementum
          </Link>
        </li>
        <li>
          <Link href="#" variant="h6" color="inherit">
            Food
          </Link>
        </li>
        <li>
          <Link href="#" variant="h6" color="inherit">
            Turpis Nec
          </Link>
        </li>
      </ul>
      <Grid item className={classes.grow}></Grid>

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className={classes.account}>
        <div className={classes.accountIcons}>
          <Link href="#">
            <PermIdentityIcon style={{ fontSize: 30 }} />
          </Link>
        </div>
        <div className={classes.accountIcons}>
          <Link href="#">
            <SettingsIcon style={{ fontSize: 30 }} />
          </Link>
        </div>
        <div className={classes.accountIcons}>
          <Link href="#">
            <ShoppingCartIcon style={{ fontSize: 30 }} />
          </Link>
        </div>
      </div>
    </AppBar>
  );
}

export default LaptopNavbar;

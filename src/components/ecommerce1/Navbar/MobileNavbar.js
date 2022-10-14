import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

// custom Styles
const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(0.5, 1),
    color: "#009620",
  },
  links: {
    listStyle: "none",
    "& li": {
      float: "left",
      padding: theme.spacing(0.5, 1.5),
      textDecoration: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    border: "1px solid crimson",
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
    // background: "blue",
    color: "#ffffff",
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // color: "#ff8800",
    color: "#009620",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "18ch",
      },
    },
  },
  account: {
    // border: "1px solid blue",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    // padding: theme.spacing(0, 2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(5),
  },
  accountIcons: {
    // backgroundColor: "yellow",
    color: "#009620cb",
    marginLeft: theme.spacing(2),
  },
}));

function MobileNavbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Typography className={classes.title} variant="h5">
          Flavoro
        </Typography>
      </Toolbar>
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
    </AppBar>
  );
}

export default MobileNavbar;

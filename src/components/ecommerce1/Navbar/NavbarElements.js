import React from "react";
import { createMuiTheme, Slide, useScrollTrigger } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Media from "react-media";
import MobileNavbar from "./MobileNavbar";
import TabletNavbar from "./TabletNavbar";
import LaptopNavbar from "./LaptopNavbar";

// custom Styles

// ovveride material ui themes
const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        // backgroundColor: "#333333",
        backgroundColor: "transparent",
        height: "50px",
        flexDirection: "row",
        alignItems: "center",
      },
      root: {
        // width: "85%",
        // margin: "0 auto",
      },
    },
    MuiTypography: {
      h5: {
        letterSpacing: "0.08em",
        fontWeight: "500",
        fontSize: "1.8em",
        fontFamily: "'Righteous', cursive",
      },
      h6: {
        // fontSize: "1rem",
        fontSize: "0.8rem",
        textTransform: "uppercase",
        fontFamily: "'Righteous', cursive",
      },
    },
    MuiLink: {
      underlineHover: {
        textDecoration: "none",
        color: "#111",

        "&:hover": {
          textDecoration: "none",
          color: "#ff8800",
          // color: "#009620",
        },
      },
    },
  },
});
// ? Hide on scroll the navbar
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Main function
function NavbarElements(props) {
  return (
    <ThemeProvider theme={theme}>
      <HideOnScroll {...props}>
        {/* The children prop should be a function whose only argument will be a boolean flag that indicates whether the media query matches or not. */}
        <Media query="(max-width: 499px)">
          {(matches) =>
            matches ? (
              // if screen is less than 500px
              <MobileNavbar />
            ) : (
              <Media query="(max-width: 768px)">
                {(matches) =>
                  matches ? (
                    // if screen is less than 769px
                    <TabletNavbar />
                  ) : (
                    // if screen is greater than 768px
                    <LaptopNavbar />
                  )
                }
              </Media>
            )
          }
        </Media>
      </HideOnScroll>
    </ThemeProvider>
  );
}

export default NavbarElements;

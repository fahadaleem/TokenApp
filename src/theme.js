// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

// 2. extend the theme
const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  }
});

export default theme;

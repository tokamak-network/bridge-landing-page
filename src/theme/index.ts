import { extendTheme } from "@chakra-ui/react";

import "@fontsource/open-sans/600.css";
import "@fontsource/poppins";

const fonts = {
  openSans: "Open Sans, sans-serif",
  poppins: "Poppins",
};

const theme = extendTheme({
  fonts,
  breakpoints: {
    sm: "799px",
    md: "1199px",
    lg: "1900px",
  },
});

export default theme;

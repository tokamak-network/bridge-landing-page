import { extendTheme } from "@chakra-ui/react";

import "@fontsource/open-sans";
import "@fontsource/poppins";
import "@fontsource/inter";
import "@fontsource/quicksand";

const fonts = {
  openSans: "Open Sans, sans-serif",
  poppins: "Poppins",
  inter: "Inter",
  quicksand: "Quicksand",
};

const styles = {
  global: () => ({
    "html, body": {
      backgroundColor: "#17181D"
    },
  }),
};

const theme = extendTheme({
  fonts,
  breakpoints: {
    base: "0px",
    xs: "530px",
    sm: "700px",
    md: "1200px",
  },
  styles
});

export default theme;

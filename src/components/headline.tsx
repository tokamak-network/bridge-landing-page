import { Box, Text, useTheme } from "@chakra-ui/react";
import "@fontsource/poppins/700.css"

const Headline = () => {
  const theme = useTheme();

  return (
    <Box fontFamily={theme.fonts.poppins}>
      <Text
        textAlign={{base: "left", sm:"center", md:"center"}}
        fontSize={{base:30, sm: 44, md: 72}}
        fontWeight={700}
        ml={{base:70, sm: "0px", md: -30}}
      >
        UNIFIED SOLUTION{" "}
      </Text>
      <Text
        textAlign={{base: "left", sm:"center", md:"center"}}
        fontSize={{base:30, sm: 44, md: 72}}
        fontWeight={700}
        ml={{base:"20px", sm: -92, md: -180}}
        lineHeight={"115%"}
      >
        for MULTI-NETWORK{" "}
      </Text>
      <Text
        textAlign={{base: "left", sm:"center", md:"center"}}
        fontSize={{base:30, sm: 44, md: 72}}
        fontWeight={700}
        ml={{base:70, sm: -132, md: -240}}
        lineHeight={"145%"}
      >
        EXCHANGES
      </Text>
    </Box>
  );
};

export default Headline;

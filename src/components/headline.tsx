import { Box, Text, useTheme } from "@chakra-ui/react";
import "@fontsource/poppins/700.css"

const Headline = () => {
  const theme = useTheme();

  return (
    <Box fontFamily={theme.fonts.poppins}>
      <Text
        textAlign={"center"}
        fontSize={72}
        fontWeight={700}
      >
        UNIFIED SOLUTION{" "}
      </Text>
      <Text
        textAlign={"center"}
        fontSize={72}
        fontWeight={700}
        ml={"-190px"}
        lineHeight={"115%"}
      >
        for MULTI-NETWORK{" "}
      </Text>
      <Text
        textAlign={"center"}
        fontSize={72}
        fontWeight={700}
        ml={"-230px"}
        lineHeight={"145%"}
      >
        EXCHANGES
      </Text>
    </Box>
  );
};

export default Headline;
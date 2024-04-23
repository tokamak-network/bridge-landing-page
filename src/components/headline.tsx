import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import "@fontsource/poppins/700.css"

const Headline = () => {
  const theme = useTheme();

  return (
    <Box fontFamily={theme.fonts.poppins} paddingTop={{base: "0px", md:"200px"}}>
      <Text
        display={{base: "none", md: "block"}}
        textAlign={"center"}
        fontSize={72}
        fontWeight={700}
      >
        Unified L2 Bridge & Swap
      </Text>

      <Flex display={{base: "flex", md: "none"}} flexDir={"column"}>
        <Text
          textAlign={"center"}
          fontSize={{base:33, sm: 44, md: 72}}
          fontWeight={700}
        >
          Unified L2
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{base:33, sm: 44, md: 72}}
          fontWeight={700}
        >
          Bridge & Swap
        </Text>
      </Flex>
      {/* <Text
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
        ml={{base:69, sm: -132, md: -240}}
        lineHeight={"145%"}
      >
        EXCHANGES
      </Text> */}
    </Box>
  );
};

export default Headline;

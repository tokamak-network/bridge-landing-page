import { Box, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";

import Cards from "@/assets/tradingcards.png";

const TokenCards = () => {
  const theme = useTheme();

  return (
    <Box px={15}>
      <Text
        display={{base:"block", md:"none"}}
        fontFamily={theme.fonts.poppins}
        fontWeight={700}
        fontSize={32}
        textAlign={"center"}
        mb={"80px"}
      >
        BRIDGE
      </Text>
      <Box
        pos={"relative"}
        mb={{base:"120px", sm:"130px"}}
        w={{base:"full", md:974}}
        h={{base:200, sm:300}}
        mx={"auto"}
        border={"2px"}
        p={{base:"40px 30px", sm:"42px"}}
        borderColor={"#23242A"}
        rounded={"20px"}
        bgColor={"#1F2128"}
      >
        <Text
          display={{base:"none", md:"block"}}
          top={-100}
          left={0}
          pos={"absolute"}
          fontFamily={theme.fonts.poppins}
          fontWeight={700}
          fontSize={32}
        >
          BRIDGE
        </Text>
        <Text
          fontFamily={theme.fonts.inter}
          textAlign={{base:"left", sm:"center"}}
          mx={"auto"}
          fontSize={18}
          fontWeight={500}
          mb={65}
        >
          Engage in an interactive trading card experience while swapping,
          depositing and withdrawing funds.
        </Text>

        <Box pos={"absolute"} top={{base: 150, sm:100}} pr={30}>
          <Image alt="trading cards" src={Cards} style={{ margin: "auto" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default TokenCards;

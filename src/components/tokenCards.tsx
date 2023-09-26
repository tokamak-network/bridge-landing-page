import { Box, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";

import Cards from "@/assets/tradingcards.png";

const TokenCards = () => {
  const theme = useTheme();

  return (
    <Box
      pos={"relative"}
      mb={130}
      w={974}
      h={300}
      mx={"auto"}
      border={"2px"}
      p={10}
      borderColor={"#23242A"}
      rounded={"20px"}
      bgColor={"#1F2128"}
    >
      <Text
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
        textAlign={"center"}
        mx={"auto"}
        fontSize={18}
        fontWeight={500}
        mb={65}
      >
        Engage in an interactive trading card experience while swapping,
        depositing and withdrawing funds.
      </Text>

      <Box pos={"absolute"} top={100}>
        <Image alt="trading cards" src={Cards} style={{ margin: "auto" }} />
      </Box>
    </Box>
  );
};

export default TokenCards;

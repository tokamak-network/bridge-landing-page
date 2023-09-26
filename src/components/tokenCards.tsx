import { Box, Text, useTheme } from "@chakra-ui/react"
import Image from "next/image";

import Cards from "@/assets/tradingcards.png"

const TokenCards = () => {
  const theme = useTheme();

  return (
    <Box mb={150}>
      <Text
        fontFamily={theme.fonts.inter}
        textAlign={"center"}
        maxW={630}
        mx={"auto"}
        mt={120}
        fontSize={24}
        fontWeight={600}
        mb={65}
      >
        Engage yourself in a novel interactive trading card experience while
        depositing and withdrawing funds.
      </Text>

      <Image alt="trading cards" src={Cards} style={{ margin: "auto" }} />
    </Box>
  );
};

export default TokenCards;
import { Box, Grid, Text, useTheme, GridItem } from "@chakra-ui/react";
import Image from "next/image";

import SWAP_ETH from "@/assets/swap_eth.png";
import SWAP_WTON from "@/assets/swap_wton.png";

const SwapExplain = () => {
  const theme = useTheme();

  return (
    <Box px={"15px"}>
      <Box
        w={{ base: "full", md: "974px" }}
        p={{ base: "40px 30px", sm: "42px" }}
        border={"2px"}
        borderColor={"#23242A"}
        rounded={"20px"}
        bgColor={"#1F2128"}
        mx={"auto"}
        mb={{ base: "30px", md: "42px" }}
      >
        <Text
          fontFamily={theme.fonts.inter}
          mx={"auto"}
          fontSize={18}
          fontWeight={500}
          mb={"40px"}
        >
          Easily swap tokens within their respective networks.
        </Text>

        <Grid templateColumns="repeat(2, 1fr)" columnGap={"20px"} rowGap={"10px"}>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            p={{ base:"10px", md:"30px"}}
            bg={"#0000000F"}
            rounded={"12px"}
            mx={"auto"}
          >
            <Image alt="swap_eth" src={SWAP_ETH} />
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            p={{ base:"10px", md:"30px"}}
            bg={"#0000000F"}
            mx={"auto"}
            rounded={"12px"}
          >
            <Image alt="swap_eth" src={SWAP_WTON} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default SwapExplain;

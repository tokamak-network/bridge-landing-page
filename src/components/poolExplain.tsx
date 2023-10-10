import { Box, Grid, GridItem, Flex, Stack, VStack, Text, useTheme} from "@chakra-ui/react";
import Image from "next/image";

import Pools from "@/assets/pools.png"
import Claim from "@/assets/claim.png"
import UNISWAP from "@/assets/uniswap.svg"
import ARROWTOPRIGHT from "@/assets/top-right-arrow.svg"

import "@fontsource/inter/300.css"

const PoolExplain = () => {
  const theme = useTheme();

  return (
    <Box mx="15px" mt={{base:"80px", md:"335px"}}>
      <Text
        display={{base:"block", md:"none"}}
        fontFamily={theme.fonts.poppins}
        fontWeight={700}
        fontSize={32}
        textAlign={"center"}
        mb={"80px"}
      >
        POOLS
      </Text>
      <Grid w={{base:"full", md:1170}} templateColumns='repeat(2, 1fr)' pos={"relative"} gap={10} mx={"auto"}>
        <Text
          display={{base:"none", md:"block"}}
          top={-100}
          left={0}
          pos={"absolute"}
          fontFamily={theme.fonts.poppins}
          fontWeight={700}
          fontSize={32}
        >
          POOLS
        </Text>
        <GridItem
          display={"flex"}
          flexDir={"column"}
          colSpan={{base:2, sm:1}}
          w={{base:"full", md:616}}
          border={"2px"}
          pt={10}
          borderColor={"#23242A"}
          rounded={"20px"}
          bgColor={"#1F2128"}
        >
          <Text
            ml={12}
            mb={9}
            fontFamily={theme.fonts.inter}
            fontSize={18}
            fontWeight={500}
            lineHeight={"30px"}
          >
            Analyze your pools position across multiple networks.
          </Text>

          <Image style={{flexGrow:"1"}} alt="pool" src={Pools}></Image>
        </GridItem>

        <GridItem colSpan={{base:2, sm:1}}>
          <Flex flexDir={'column'} rowGap={"42px"}>
            <Stack
              border={"2px"}
              p={10}
              borderColor={"#23242A"}
              rounded={"20px"}
              bgColor={"#1F2128"}
              maxW={"512px"}
            >
              <Text
                mb={2}
                fontFamily={theme.fonts.inter}
                fontSize={18}
                fontWeight={500}
                lineHeight={"30px"}
              >
                Provide liquidity and earn income
              </Text>

              <Text
                mb={2}
                fontFamily={theme.fonts.inter}
                fontSize={14}
                fontWeight={300}
                lineHeight={"20px"}
              >
                The latest advancements are designed to optimise profits for traders
                and liquidity providers, reduce price slippage, and effectively
                handle potential risks.
              </Text>

              <Image alt="claim" src={Claim}></Image>
            </Stack>

            <Stack
              border={"2px"}
              p={"42px"}
              borderColor={"#23242A"}
              rounded={"20px"}
              bgColor={"#1F2128"}
              maxW={"512px"}
              flexGrow={1}
            >
              <Flex align={"center"} gap={4}> 
                <Image alt="uniswap" src={UNISWAP} />
                <Text
                  fontFamily={theme.fonts.inter}
                  fontSize={18}
                  fontWeight={500}
                  lineHeight={"30px"}
                >
                  Based on Uniswap V3
                </Text>
                <Image width={16} alt="arrow-top" src={ARROWTOPRIGHT} />
              </Flex>

              <Text
                mt={4}
                fontFamily={theme.fonts.inter}
                fontSize={14}
                fontWeight={300}
                lineHeight={"20px"}
              >
                The latest advancements are designed to optimise profits for traders
                and liquidity providers, reduce price slippage, and effectively
                handle potential risks.
              </Text>
            </Stack>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PoolExplain;

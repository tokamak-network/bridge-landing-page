import { Flex, Stack, VStack, Text, useTheme} from "@chakra-ui/react";
import Image from "next/image";

import Pools from "@/assets/pools.png"
import Claim from "@/assets/claim.png"
import UNISWAP from "@/assets/uniswap.svg"
import ARROWTOPRIGHT from "@/assets/top-right-arrow.svg"

import "@fontsource/inter/300.css"

const PoolExplain = () => {
  const theme = useTheme();

  return (
    <Flex pos={"relative"} mt={335} justify={"center"} gap={10} mx={"auto"}>
      <Text
        top={-100}
        left={0}
        pos={"absolute"}
        fontFamily={theme.fonts.poppins}
        fontWeight={700}
        fontSize={32}
      >
        POOLS
      </Text>
      <Stack
        w={616}
        border={"2px"}
        pt={10}
        borderColor={"#23242A"}
        rounded={"20px"}
        bgColor={"#1F2128"}
      >
        <Text
          ml={12}
          mb={14}
          fontFamily={theme.fonts.inter}
          fontSize={18}
          fontWeight={500}
          lineHeight={"30px"}
        >
          Analyze your pools position across multiple networks.
        </Text>

        <Image alt="pool" src={Pools}></Image>
      </Stack>

      <VStack rowGap={"42px"}>
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
          p={10}
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
            mt={6}
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
      </VStack>
    </Flex>
  );
};

export default PoolExplain;

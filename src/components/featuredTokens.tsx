import { Box, Text, Wrap, Flex, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import DashContainer from "./dashContainer";
import useMediaView from "@/hooks/useMediaView";

import ETH from "@/assets/symbols/eth.svg";
import WETH from "@/assets/symbols/weth.svg";
import TON from "@/assets/symbols/ton.svg";
import WTON from "@/assets/symbols/wton.svg";
import USDC from "@/assets/symbols/usdc.svg";
import USDT from "@/assets/symbols/usdt.svg";
import TOS from "@/assets/symbols/tos.svg";
import DOC from "@/assets/symbols/doc.svg";
import AURA from "@/assets/symbols/aura.svg";
import LYDA from "@/assets/symbols/lyda.svg";
import ETH2 from "@/assets/symbols/eth2.svg";
import TITAN from "@/assets/symbols/titan.svg";

interface TokenProps {
  icon: string;
  symbol: string;
}

const TokenSymbolItem = ({ icon, symbol }: TokenProps) => {
  const theme = useTheme();
  return (
    <Flex flexDir={"column"} align={"center"} rowGap={"14px"}>
      <Image alt={symbol} src={icon} />
      <Text fontFamily={theme.fonts.quicksand} fontSize={14}>
        {symbol}
      </Text>
    </Flex>
  );
};

const FeturedTokens = () => {
  const { mobileView } = useMediaView();
  const theme = useTheme();

  return (
    <Box
      mt={{ base: "120px", sm: 268 }}
      mb={{ base: "80px", sm: "256px" }}
      px={{ base: "16px" }}
    >
      <Text
        textAlign={"center"}
        fontSize={32}
        fontWeight={700}
        lineHeight={"48px"}
      >
        FEATURED TOKENS & NETWORKS
      </Text>

      <Wrap mt={20} spacing={10} justify={"center"}>
        <DashContainer title="Tokamak Network Ecosystem" columnGap="106px">
          <TokenSymbolItem icon={ETH} symbol="ETH" />
          <TokenSymbolItem icon={WETH} symbol="WETH" />
          <TokenSymbolItem icon={TON} symbol="TON" />
          <TokenSymbolItem icon={WTON} symbol="WTON" />
        </DashContainer>
      </Wrap>

      <Wrap mt={{ base: 10, sm: 20 }} spacing={10} justify={"center"}>
        <DashContainer title="Stable Assets">
          <TokenSymbolItem icon={USDC} symbol="USDC" />
          <TokenSymbolItem icon={USDT} symbol="USDT" />
        </DashContainer>

        <DashContainer
          title="Supported Networks"
          description="*More networks coming soon"
        >
          <TokenSymbolItem icon={ETH2} symbol="ETHEREUM" />
          <TokenSymbolItem icon={TITAN} symbol="TITAN" />
        </DashContainer>
      </Wrap>
    </Box>
  );
};

export default FeturedTokens;

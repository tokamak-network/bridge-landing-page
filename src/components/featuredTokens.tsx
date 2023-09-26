import { Box, Text, Wrap } from "@chakra-ui/react";
import Image from "next/image";
import DashContainer from "./dashContainer";

import ETH from "@/assets/symbols/eth.svg"
import WETH from "@/assets/symbols/weth.svg"
import TON from "@/assets/symbols/ton.svg"
import WTON from "@/assets/symbols/wton.svg"
import USDC from "@/assets/symbols/usdc.svg"
import USDT from "@/assets/symbols/usdt.svg"
import TOS from "@/assets/symbols/tos.svg"
import DOC from "@/assets/symbols/doc.svg"
import AURA from "@/assets/symbols/aura.svg"
import LYDA from "@/assets/symbols/lyda.svg"

const FeturedTokens = () => {
  return (
    <Box my={300} px={"100px"}>
      <Text
        textAlign={"center"}
        fontSize={32}
        fontWeight={700}
        lineHeight={"48px"}
      >
        FEATURED TOKENS
      </Text>

      <Wrap mt={20} spacing={10} justify={"center"}>
        <DashContainer title="Tokamak Network Ecosystem">
          <Image alt="eth" src={ETH} />
          <Image alt="weth" src={WETH} />
          <Image alt="ton" src={TON} />
          <Image alt="wton" src={WTON} />
        </DashContainer>

        <DashContainer title="Stable Assets">
          <Image alt="usdc" src={USDC} />
          <Image alt="usdt" src={USDT} />
        </DashContainer>

        <DashContainer title="TONStarter Ecosystem" mr="424px">
          <Image alt="tos" src={TOS} />
          <Image alt="doc" src={DOC} />
          <Image alt="aura" src={AURA} />
          <Image alt="lyda" src={LYDA} />
        </DashContainer>
      </Wrap>
    </Box>
  );
};

export default FeturedTokens;

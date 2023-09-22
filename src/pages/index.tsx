import Head from "next/head";
import { Inter } from "next/font/google";
import { Box, Button, Flex, Stack, Text, VStack, Wrap, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import ConfirmModal from "@/assets/confirm_modal.png"
import DashContainer from "@/components/dashContainer";

import Cards from "@/assets/tradingcards.png"
import TransactionHistory from "@/assets/txHistory.png"
import Pools from "@/assets/pools.png"
import Claim from "@/assets/claim.png"

import UNISWAP from "@/assets/uniswap.svg"
import ARROWTOPRIGHT from "@/assets/top-right-arrow.svg"

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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Tokamak Bridge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box color={"white"}>
        <Stack
          pt={"220px"}
          fontFamily={theme.fonts.poppins}
          zIndex={100}
          color={"white"}
          bgImage="url('/assets/background.png')"
          bgPos={"top"}
          bgRepeat={"no-repeat"}
          minH={"100vh"}
          >
          <Text textAlign={"center"} fontSize={72} fontWeight={700}>
            UNIFIED SOLUTION{" "}
          </Text>
          <Text
            textAlign={"center"}
            fontSize={72}
            fontWeight={700}
            ml={"-160px"}
            lineHeight={'115%'}
          >
            for MULTI-NETWORK{" "}
          </Text>
          <Text
            textAlign={"center"}
            fontSize={72}
            fontWeight={700}
            ml={"-230px"}
            lineHeight={'115%'}
          >
            Exchanges
          </Text>

          <Text textAlign={"center"} maxW={850} mx={'auto'} mt={100} fontSize={18} fontWeight={400} lineHeight={'200%'}>
            Tokamak Bridge is a unified Dapp that supports both Swap and Bridge
            functionality. With it’s fun card game-like interface, fast
            transaction speeds and reward-full ecosystem, Tokamak Bridge is an
            all-in-one solution for cryptocurrency enthusiasts.
          </Text>

          <Flex justifyContent={"space-between"} mx={"auto"} mt={180} mb={230} gap={100}>
            <Box>
              <Text fontSize={56} fontWeight={600} as={'i'}>$412.7M+</Text>
              <Text fontSize={18} fontWeight={400} color={'#FFFFFF7F'} textAlign={"center"}>TRADE VOLUME</Text>
            </Box>
            <Box>
              <Text fontSize={56} fontWeight={600} as={'i'}>$28.2M+</Text>
              <Text fontSize={18} fontWeight={400} color={'#FFFFFF7F'} textAlign={"center"}>TVL</Text>
            </Box>
            <Box>
              <Text fontSize={56} fontWeight={600} as={'i'}>$19.3M+</Text>
              <Text fontSize={18} fontWeight={400} color={'#FFFFFF7F'} textAlign={"center"}>BRIDGE VOLUME</Text>
            </Box>
            <Box>
              <Text fontSize={56} fontWeight={600} as={'i'}>$17.8M+</Text>
              <Text fontSize={18} fontWeight={400} color={'#FFFFFF7F'} textAlign={"center"}>TRANSACTIONS</Text>
            </Box>
          </Flex>

          <Box mb={150}>
            <Text fontFamily={theme.fonts.inter} textAlign={"center"} maxW={630} mx={'auto'} mt={120} fontSize={24} fontWeight={600} mb={65}>
              Engage yourself in a novel interactive trading card experience while depositing and withdrawing funds.
            </Text>

            <Image alt="trading cards" src={Cards} style={{margin: 'auto'}}/>
          </Box>

          <Box>
            <Flex gap={42} mx={'auto'} justifyContent={"center"}>
              <Stack border={'2px'} p={10} borderColor={'#23242A'} rounded={"20px"} bgColor={'#1F2128'} w={488}>
                <Text fontFamily={theme.fonts.inter} fontSize={18} fontWeight={600} lineHeight={'30px'}>
                  View a thorough breakdown of the withdrawal process and enable calendar notifications for timely claiming alerts.
                </Text>

                <Image alt="confirm modal" src={ConfirmModal}></Image>
              </Stack>

              <Stack border={'2px'} p={10} borderColor={'#23242A'} rounded={"20px"} bgColor={'#1F2128'} w={444}>
                <Text fontFamily={theme.fonts.inter} fontSize={18} fontWeight={600} lineHeight={'30px'}>
                  Access a holistic view of your interactions with the bridge through our Bridge History tab.
                </Text>

                <Image alt="transaction history" src={TransactionHistory} />
              </Stack>
            </Flex>
          </Box>

          <Box my={300} px={"100px"}>
            <Text textAlign={'center'} fontSize={32} fontWeight={700} lineHeight={'48px'}>SUPPORTED TOKENS</Text>

            <Wrap mt={20} spacing={10} justify={"center"}>
              <DashContainer title="Tokamka Network Ecosystem">
                <Image alt="eth" src={ETH}/>
                <Image alt="weth" src={WETH}/>
                <Image alt="ton" src={TON}/>
                <Image alt="wton" src={WTON}/>
              </DashContainer>

              <DashContainer title="Stable Assets">
                <Image alt="usdc" src={USDC}/>
                <Image alt="usdt" src={USDT}/>
              </DashContainer>

              <DashContainer title="TONStarter Ecosystem" mr="424px">
                <Image alt="tos" src={TOS}/>
                <Image alt="doc" src={DOC}/>
                <Image alt="aura" src={AURA}/>
                <Image alt="lyda" src={LYDA}/>
              </DashContainer>

            </Wrap>
          </Box>

          <Flex justify={'center'} gap={10}>
            <Stack border={'2px'} pt={10} borderColor={'#23242A'} rounded={"20px"} bgColor={'#1F2128'} >
              <Text ml={12} mb={9} fontFamily={theme.fonts.inter} fontSize={18} fontWeight={600} lineHeight={'30px'}>
                Analyze your pools position across multiple networks.
              </Text>

              <Image alt="pool" src={Pools}></Image>
            </Stack>

            <VStack>
              <Stack border={'2px'} p={10} borderColor={'#23242A'} rounded={"20px"} bgColor={'#1F2128'} maxW={"512px"}>
                <Text mb={2} fontFamily={theme.fonts.inter} fontSize={18} fontWeight={600} lineHeight={'30px'}>
                  Provide liquidity and earn income
                </Text>

                <Text mb={2} fontFamily={theme.fonts.inter} fontSize={14} fontWeight={300} lineHeight={'20px'}>
                  The latest advancements are designed to optimise profits for traders and liquidity providers, reduce price slippage, and effectively handle potential risks.
                </Text>

                <Image alt="claim" src={Claim}></Image>
              </Stack>

              <Stack border={'2px'} p={10} borderColor={'#23242A'} rounded={"20px"} bgColor={'#1F2128'} maxW={"512px"} flexGrow={1}>
                <Flex align={"center"} gap={4}>
                  <Image alt="uniswap" src={UNISWAP}/>
                  <Text fontFamily={theme.fonts.inter} fontSize={18} fontWeight={600} lineHeight={'30px'}>
                    Based on Uniswap V3
                  </Text>
                  <Image width={16} alt="arrow-top" src={ARROWTOPRIGHT}/>
                </Flex>

                <Text mt={6} fontFamily={theme.fonts.inter} fontSize={14} fontWeight={300} lineHeight={'20px'}>
                  The latest advancements are designed to optimise profits for traders and liquidity providers, reduce price slippage, and effectively handle potential risks.
                </Text>
              </Stack>
            </VStack>
          </Flex>

          <Box mt={"148px"} mb={208}>
            <Text fontSize={32} fontWeight={700} align={"center"}>GET STARTED</Text>

            <Flex justify={"center"} mt={9} gap={30}>
              <Button
                h={12}
                colorScheme="blue"
                bg={"#007AFF"}
                px={8}
                fontWeight={500}
                fontSize={18}
              >
                Launch App
              </Button>

              <Button
                h={12}
                colorScheme="blackAlpha"
                bg={"transparent"}
                px={8}
                borderWidth={1}
                borderColor={"white"}
                fontWeight={500}
                fontSize={18}
                color={"white"}
              >
                User Guides
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

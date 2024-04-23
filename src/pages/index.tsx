import Head from "next/head";
import { Box, Stack, Text, useTheme } from "@chakra-ui/react";
import Headline from "@/components/headline";

import DataProvider from "@/components/dataProvider";
import TokenCards from "@/components/tokenCards";
import BridgeExplain from "@/components/bridgeExplain";
import FeaturedTokens from "@/components/featuredTokens";
import PoolExplain from "@/components/poolExplain";
import StartButtonGroup from "@/components/startButtonGroup";
import SwapExplain from "@/components/swapExplain";
import ButtonGroup from "@/components/ButtonGroup";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Tokamak Bridge</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bridge.tokamak.network" />
        <meta property="og:title" content="Tokamak Bridge" />
        <meta name="description" content="Tokamak Bridge offers a unified bridge and swap experience between Ethereum and Titan Network." />
        <meta
          property="og:description"
          content="Tokamak Bridge offers a unified bridge and swap experience between Ethereum and Titan Network."
        ></meta>
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,shrink-to-fit=n" />
        <meta name="keywords" content="tokamak bridge titan swap pool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box color={"white"}>
        <Stack
          mt={{ base: "120px", sm: 0 }}
          pt={{ base: "0px", sm: "80px" }}
          fontFamily={theme.fonts.poppins}
          zIndex={100}
          color={"white"}
          bgImage={{
            base: "url('/assets/mobilebackground.png')",
            sm: "url('/assets/background.png')",
          }}
          bgPos={"top"}
          bgRepeat={"no-repeat"}
          bgSize={"auto"}
          minH={"100vh"}
          pos={"relative"}
        >
          <Headline />

          <Box
            display={{ base: "block", sm: "none" }}
            top={"70px"}
            zIndex={-1}
            pos={"absolute"}
            style={{ backdropFilter: "blur(2px)" }}
            w={"full"}
            h={"350px"}
            bgGradient="linear(to-b, #17181D00, #17181DFF)"
          ></Box>

          <Text
            w={["full", 820, 820]}
            mx={"auto"}
            px={"20px"}
            // pl={[35, 160, 160]}
            // pr={[35, 0, 0]}
            mt={10}
            fontSize={[16, 18, 18]}
            fontWeight={400}
            lineHeight={"200%"}
            textAlign={"center"}
          >
            With it’s fun card game-like interface, fast transaction speeds and
            reward-full ecosystem, crypto enthusiasts will enjoy an all-in-one
            solution for Bridge and Swap functionality.
          </Text>
          <ButtonGroup />

          <DataProvider />
          <FeaturedTokens />
          <TokenCards />
          <SwapExplain />
          <BridgeExplain />
          {/* <PoolExplain /> */}
          <StartButtonGroup />
        </Stack>
      </Box>
    </>
  );
}

import Image from "next/image";
import { Flex, HStack, Button, Text, useTheme } from "@chakra-ui/react";
import BridgeLogo from "../../assets/bridge_logo.svg";

import "@fontsource/poppins/600.css";

const Header = () => {
  const theme = useTheme();

  return (
    <Flex
      justifyContent={"space-between"}
      px={{ base: "20px", sm: "20px", md: "40px" }}
      mt={{ base: "40px", sm: "46px" }}
      w={"100%"}
      h={"80px"}
      bg={{ base: "#17181D7F", sm: "#0000003F" }}
      alignItems={"center"}
      pos={"absolute"}
      top={0}
      left={0}
      zIndex={10}
    >
      <HStack
        gap={3}
        fontSize={24}
        fontWeight={600}
        letterSpacing={1.44}
        alignItems={"center"}
      >
        <Image width={40} height={40} alt="bridge logo" src={BridgeLogo} />
        <Text
          display={{ base: "none", sm: "block" }}
          fontFamily={theme.fonts.poppins}
          fontSize={21}
          color={"white"}
          fontWeight={600}
        >
          Tokamak Bridge
        </Text>
      </HStack>

      <Button
        w={"148px"}
        onClick={() => window.open("https://bridge.tokamak.network", "_blank")}
        h={"45px"}
        fontFamily={"Poppins"}
        colorScheme="blue"
        bg={"#007AFF"}
        px={8}
        fontWeight={500}
        fontSize={18}
        cursor={"pointer"}
      >
        Enter App
      </Button>
    </Flex>
  );
};

export default Header;

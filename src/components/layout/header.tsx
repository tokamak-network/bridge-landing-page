import { Flex, HStack, Button, Text } from "@chakra-ui/react";
import "@fontsource/poppins";
import BridgeLogo from "../../assets/bridge_logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      px={{ base: "20px", sm: "20px", md: 310 }}
      w={"100%"}
      h={"80px"}
      bg={{ base: "#17181D7F", sm: "#0000007F" }}
      alignItems={"center"}
      pos={"absolute"}
      top={0}
      left={0}
      zIndex={10}
    >
      <HStack
        gap={6}
        fontSize={24}
        fontWeight={600}
        letterSpacing={1.44}
        alignItems={"center"}
      >
        <Image alt="bridge logo" src={BridgeLogo} />
        <Text
          display={{ base: "none", sm: "block" }}
          fontFamily={"Open Sans, sans-serif"}
          color={"white"}
        >
          Tokamak Bridge
        </Text>
      </HStack>

      <Button
        onClick={() => window.open("https://bridge.tokamak.network", "_blank")}
        h={12}
        fontFamily={"Poppins"}
        colorScheme="blue"
        bg={"#007AFF"}
        px={8}
        fontWeight={500}
        fontSize={18}
        cursor={"pointer"}
      >
        Launch App
      </Button>
    </Flex>
  );
};

export default Header;

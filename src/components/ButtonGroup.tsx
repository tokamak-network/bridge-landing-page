import { Box, Flex, Button, Text } from "@chakra-ui/react";

const ButtonGroup = () => {
  return (
    <Box px={"30px"}>
      <Flex flexDir={{ base: "column", sm: "row" }} justify={"center"} align={"center"} mt={"45px"} columnGap={"30px"} rowGap={"16px"}>
        <Button
          display={{ base: "none", md: "block" }}
          w={"148px"}
          h={"45px"}
          colorScheme="blue"
          bg={"#007AFF"}
          px={8}
          fontWeight={500}
          fontSize={18}
          onClick={() => window.open("https://bridge.tokamak.network", '_blank')}
        >
          Enter App
        </Button>

        <Button
          w={"148px"}
          h={"45px"}
          colorScheme="blackAlpha"
          bg={"transparent"}
          px={8}
          borderWidth={1}
          borderColor={"white"}
          fontWeight={500}
          fontSize={18}
          color={"white"}
          onClick={() => window.open("https://tokamaknetwork.gitbook.io/home/02-service-guide/tokamak-bridge", '_blank')}
        >
          User Guide
        </Button>
      </Flex>
    </Box>
  );
};

export default ButtonGroup;
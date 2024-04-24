import { Box, Flex, Button, Text } from "@chakra-ui/react";

const StartButtonGroup = () => {
  return (
    <Box my={{base:"80px", sm:"144px"}} px={"30px"}>
      <Text fontSize={32} fontWeight={700} align={"center"}>
        GET STARTED
      </Text>

      <Flex flexDir={{base:"column", sm:"row"}} justify={"center"} mt={"38px"} columnGap={"30px"} rowGap={"16px"}>
        <Button
          w={{base: "full", md: "172px"}}
          h={"45px"}
          colorScheme="blue" 
          bg={"#007AFF"}
          px={8}
          fontWeight={500}
          fontSize={18}
          onClick={() => window.open("https://app.bridge.tokamak.network", '_blank')}
        >
          Enter App
        </Button>

        <Button
          w={{base: "full", md: "163px"}}
          h={"45px"}
          colorScheme="blackAlpha"
          bg={"transparent"}
          px={8}
          borderWidth={1}
          borderColor={"white"}
          fontWeight={500}
          fontSize={18}
          color={"white"}
          onClick={() => window.open("https://docs.tokamak.network/", '_blank')}
        >
          User Guide
        </Button>
      </Flex>
    </Box>
  );
};

export default StartButtonGroup;
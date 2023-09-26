import { Box, Button, Flex, Text } from "@chakra-ui/react";

const StartButtonGroup = () => {
  return (
    <Box mt={"148px"} mb={208}>
      <Text fontSize={32} fontWeight={700} align={"center"}>
        GET STARTED
      </Text>

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
  );
};

export default StartButtonGroup;
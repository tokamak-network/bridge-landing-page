import { Flex, Box, Text } from "@chakra-ui/react";

const DataProvider = () => {
  return (
    <Flex
      justifyContent={["center", "space-between"]}
      flexWrap={"wrap"}
      mx={"auto"}
      mt={{base:140, sm:200, md:200}}
      gap={100}
    >
      <Box>
        <Text fontSize={56} fontWeight={600} as={"i"}>
          $412.7M+
        </Text>
        <Text
          fontSize={18}
          fontWeight={400}
          color={"#FFFFFF7F"}
          textAlign={"center"}
        >
          TRADE VOLUME
        </Text>
      </Box>
      <Box>
        <Text fontSize={56} fontWeight={600} as={"i"}>
          $28.2M+
        </Text>
        <Text
          fontSize={18}
          fontWeight={400}
          color={"#FFFFFF7F"}
          textAlign={"center"}
        >
          TVL
        </Text>
      </Box>
      <Box>
        <Text fontSize={56} fontWeight={600} as={"i"}>
          $19.3M+
        </Text>
        <Text
          fontSize={18}
          fontWeight={400}
          color={"#FFFFFF7F"}
          textAlign={"center"}
        >
          BRIDGE VOLUME
        </Text>
      </Box>
      <Box>
        <Text fontSize={56} fontWeight={600} as={"i"}>
          $17.8M+
        </Text>
        <Text
          fontSize={18}
          fontWeight={400}
          color={"#FFFFFF7F"}
          textAlign={"center"}
        >
          TRANSACTIONS
        </Text>
      </Box>
    </Flex>
  );
};

export default DataProvider;

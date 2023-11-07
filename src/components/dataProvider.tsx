import { Flex, Box, Text } from "@chakra-ui/react";
import { useFetchBalance } from "@/utils/fetchUserBalance";
import { abbrNum } from "@/utils/shortenNumber";
import GradientSpinner from "./ui/gradientSpinner";

const DataProvider = () => {
  const price = useFetchBalance();
  console.log(price);

  return (
    <Flex
      justifyContent={["center", "space-between"]}
      flexWrap={"wrap"}
      mx={"auto"}
      mt={{ base: 140, sm: 200, md: 200 }}
      gap={100}
    >
      <Flex direction="column" align={"center"}>
        {price ? 
        <Text
          fontSize={56}
          fontWeight={600}
          as={"i"}
          textAlign={"center"}
        >
          {"$" + abbrNum(price, 1) + "+"}
        </Text> :

        <Box width={200} h={"84px"}>
          <GradientSpinner/>
        </Box>
        }
        <Text
          fontSize={18}
          fontWeight={400}
          color={"#FFFFFF7F"}
          textAlign={"center"}
        >
          LOCKED DEPOSIT ON TOKAMAK BRIDGE
        </Text>
      </Flex>
      {/* <Box>
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
      </Box> */}
    </Flex>
  );
};

export default DataProvider;

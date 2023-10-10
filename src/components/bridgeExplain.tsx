import { Box, Grid, GridItem, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";

import ConfirmModal from "@/assets/confirm_modal.png"
import TransactionHistory from "@/assets/txHistory.png"

const BridgeExplain = () => {
  const theme = useTheme();

  return (
    <Box px={"15px"}>
      <Grid w={{base:"full", md:974}} templateColumns='repeat(2, 1fr)' gap={42} mx={"auto"} justifyContent={"center"}>
        <GridItem
          colSpan={{base:2, sm:1}}
          border={"2px"}
          p={{base:"40px 30px", sm:"40px"}}
          borderColor={"#23242A"}
          rounded={"20px"}
          bgColor={"#1F2128"}
          w={{base:"full", md:488}}
        >
          <Text
            fontFamily={theme.fonts.inter}
            fontSize={18}
            fontWeight={500}
            lineHeight={"30px"}
            mb={{base:10, sm:9}}
          >
            An informative withdrawal process with google calendar integration.
          </Text>

          <Image alt="confirm modal" src={ConfirmModal}></Image>
        </GridItem>

        <GridItem
          colSpan={{base:2, sm:1}}
          border={"2px"}
          p={{base:"40px 30px", sm:"40px"}}
          borderColor={"#23242A"}
          rounded={"20px"}
          bgColor={"#1F2128"}
          w={{base:"full", md:444}}
        >
          <Text
            fontFamily={theme.fonts.inter}
            fontSize={18}
            fontWeight={{base:600, sm:500}}
            lineHeight={"30px"}
            mb={{base:10, sm:9}}
          >
            Bridge History Tab provides a holistic view of all of your interactions.
          </Text>

          <Image alt="transaction history" src={TransactionHistory} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default BridgeExplain;

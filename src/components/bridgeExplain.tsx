import { Box, Flex, Stack, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";

import ConfirmModal from "@/assets/confirm_modal.png"
import TransactionHistory from "@/assets/txHistory.png"

const BridgeExplain = () => {
  const theme = useTheme();

  return (
    <Box>
      <Flex gap={42} mx={"auto"} justifyContent={"center"}>
        <Stack
          border={"2px"}
          p={10}
          borderColor={"#23242A"}
          rounded={"20px"}
          bgColor={"#1F2128"}
          w={488}
        >
          <Text
            fontFamily={theme.fonts.inter}
            fontSize={18}
            fontWeight={600}
            lineHeight={"30px"}
          >
            View a thorough breakdown of the withdrawal process and enable
            calendar notifications for timely claiming alerts.
          </Text>

          <Image alt="confirm modal" src={ConfirmModal}></Image>
        </Stack>

        <Stack
          border={"2px"}
          p={10}
          borderColor={"#23242A"}
          rounded={"20px"}
          bgColor={"#1F2128"}
          w={444}
        >
          <Text
            fontFamily={theme.fonts.inter}
            fontSize={18}
            fontWeight={600}
            lineHeight={"30px"}
          >
            Access a holistic view of your interactions with the bridge through
            our Bridge History tab.
          </Text>

          <Image alt="transaction history" src={TransactionHistory} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default BridgeExplain;

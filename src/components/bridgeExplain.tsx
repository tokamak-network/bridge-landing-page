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
            fontWeight={500}
            lineHeight={"30px"}
          >
            An informative withdrawal process with google calendar integration.
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
            fontWeight={500}
            lineHeight={"30px"}
          >
            Bridge History Tab provides a holistic view of all of your interactions.
          </Text>

          <Image alt="transaction history" src={TransactionHistory} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default BridgeExplain;

import {  Flex, Text, useTheme } from "@chakra-ui/react";
import "@fontsource/poppins/300.css"

interface PropsType {
  children: React.ReactNode;
  title: string;
  description?: string;
  mr?: string;
}

const DashContainer = ({ children, title, mr, description }: PropsType) => {
  const theme = useTheme();

  return (
    <Flex
      bgImage={"/assets/dash-border.svg"}
      pos={"relative"}
      rounded={"20px"}
      p={"60px"}
      w={"fit-content"}
      h={"fit-content"}
      gap={20}
      mr={mr}
    >
      <Text
        fontFamily={theme.fonts.quicksand}
        fontSize={20}
        pos={"absolute"}
        top={-4}
        left={8}
        bgColor={"#17181D"}
        px={3}
      >
        {title}
      </Text>

      {description &&
      <Text
        fontFamily={theme.fonts.poppins}
        fontSize={14}
        fontWeight={300}
        pos={"absolute"}
        bottom={-8}
        left={"calc(50% - 110px)"}
        bgColor={"#17181D"}
        px={3}
      >
        {description}
      </Text>}
      {children}
    </Flex>
  );
};

export default DashContainer;

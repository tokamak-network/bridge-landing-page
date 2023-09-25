import {  Flex, Text, useTheme } from "@chakra-ui/react";

interface PropsType {
  children: React.ReactNode;
  title: string;
  mr?: string;
}

const DashContainer = ({ children, title, mr }: PropsType) => {
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
      {children}
    </Flex>
  );
};

export default DashContainer;

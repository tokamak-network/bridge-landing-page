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
      pos={"relative"}
      rounded={"20px"}
      borderWidth={2}
      borderColor={"#FFFFFF7F"}
      p={"60px"}
      borderStyle={"dashed"}
      w={"fit-content"}
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

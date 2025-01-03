import Header from "./header";
import Footer from "./footer";
import { Flex } from "@chakra-ui/react";
import useMediaView from "@/hooks/useMediaView";

interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const { mobileView } = useMediaView();
  return (
    <Flex flexDirection={"column"} bg={"#17181D"}>
      <Header />
      <main style={{ zIndex: "0" }}>{children}</main>
      <Footer />
    </Flex>
  );
};

export default Layout;

import Header from "./header";
import Footer from "./footer";
import { Flex } from "@chakra-ui/react";

interface PropsType {
    children: React.ReactNode;
}

const Layout = ({
    children
}: PropsType) => {
    return (
        <Flex flexDirection={'column'} bg={'#17181D'}>
            <Header/>
            <main style={{zIndex: "0"}}>{children}</main>
            <Footer/>
        </Flex>
    )
}

export default Layout;
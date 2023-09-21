import Header from "./header";
import Footer from "./footer";
import { usePathname } from 'next/navigation';
import { Flex } from "@chakra-ui/react";

interface PropsType {
    children: React.ReactNode;
}

const Layout = ({
    children
}: PropsType) => {
    const pathname = usePathname()
    
    return (
        <Flex flexDirection={'column'} bg={'#17181D'}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </Flex>
    )
}

export default Layout;
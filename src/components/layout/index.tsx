import Header from "./header";
import Footer from "./footer";
import { usePathname } from 'next/navigation';

interface PropsType {
    children: React.ReactNode;
}

const Layout = ({
    children
}: PropsType) => {
    const pathname = usePathname()
    
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;
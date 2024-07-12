import Header from "./Header";
import Principal from "./Principal";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <Header />
            <Principal>
                <Outlet />
            </Principal>
            <Footer />
        </>
    );
}

export default Layout;
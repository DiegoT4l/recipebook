import Principal from "./Principal";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../home/Home";

function Layout() {
    return (
        <>
            <Navbar />
            <Principal>
                <Home/>
            </Principal>
            <Footer />
        </>
    );
}

export default Layout;
import Principal from "./Principal";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../home/Home";
import Details from "../new/Details";

function Layout() {
    return (
        <>
            <Navbar />
            <Principal>
                {/* <Home/> */}
                <Details/>
            </Principal>
            <Footer />
        </>
    );
}

export default Layout;
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;
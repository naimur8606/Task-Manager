import { Outlet } from "react-router-dom";
import Navbar from "../Components/CommonComponents/Navbar";
import Footer from "../Components/CommonComponents/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar Outlet={Outlet}></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
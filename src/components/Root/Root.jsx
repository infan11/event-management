import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./../Navbar/Navbar"
import Footer from '..//footer/Footer'



const Root = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes("/login") || location.pathname.includes("/register")
    return (
        <div className="max-w-6xl mx-auto"> 
         { noNavbarFooter ||  <Navbar></Navbar>}
         <Outlet></Outlet>
        {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;
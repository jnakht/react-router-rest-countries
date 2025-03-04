import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3>This is home component</h3>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;
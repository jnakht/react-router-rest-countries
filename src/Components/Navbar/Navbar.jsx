import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/countries'>Countries</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About Us</Link>
        </div>
    );
};

export default Navbar;
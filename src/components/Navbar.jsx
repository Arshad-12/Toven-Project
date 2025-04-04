import { Link } from "react-router-dom";
import '../styles/navbar.css';

function Navbar(){
    return(
        <nav>
            <h1>Toven</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
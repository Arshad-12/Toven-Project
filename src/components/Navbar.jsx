import { Link } from "react-router-dom";
import '../styles/navbar.css';
function Navbar(){
    return(
        <>
          <nav className="nav">
            <h1 className="site-title">Toven</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/pricing">Subscription</a></li>
                <li><a href="/contact">Add Ons</a></li>
                <li><a href="/contact">Party orders</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
        <hr />
        </>
    );
}
export default Navbar;
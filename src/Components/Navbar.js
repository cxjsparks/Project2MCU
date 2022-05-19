import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <ul className="nav-links">
                <Link to="/Home"  style={{textDecoration: "none"}}><li>Home</li></Link>
                <Link to="/Thor"  style={{textDecoration: "none"}}><li>Characters</li></Link>
                <Link to="/Comics"  style={{textDecoration: "none"}}><li>Comics</li></Link>
            </ul>
        </nav>
    )  
     
}

export default Navbar;




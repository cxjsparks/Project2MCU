import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav-links">
                <Link to="/Home"  style={{textDecoration: "none"}}><li>HOME</li></Link>
                <Link to="/Comics"  style={{textDecoration: "none"}}><li>COMICS</li></Link>
            </ul>
        </nav>
    )  
     
}

export default Navbar;




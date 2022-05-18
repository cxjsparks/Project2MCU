import React from "react"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <nav className="nav">
            <ul className="nav-links">
                <Link to="/Home">
                <li>Home</li>
                </Link>
                <Link to="/Thor">
                <li>Thor</li>
                </Link>
                <Link to="/Comics">
                <li>Comics</li>
                </Link>
            </ul>
        </nav>
    )  
     
}

export default Home;




import React from "react";
import {Link} from "@reach/router";

const NavBar = () => {


    return (
        <div className="navbar">
            <div className="explore-co">
                <h1>EXPLORE</h1>
                <h1>CO.</h1>
            </div>
            <div className="sub-navbar">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/about-us" className="nav-link">ABOUT</Link>
                <Link to="/services" className="nav-link">SERVICES</Link>
                <Link to="/contact-us" className="nav-link">CONTACT</Link>
                <Link to="/login" className="nav-link">LOGIN</Link>
            </div>
        </div>
    )
}

export default NavBar;
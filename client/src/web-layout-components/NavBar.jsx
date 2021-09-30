import React from "react";
import {Link} from "@reach/router";

const NavBar = () => {


    return (
        <div className="navbar">
            <h1>Explore Co</h1>
            <div className="sub-navbar">
                <Link to="/">home</Link>
                <Link to="/about-us">about</Link>
                <Link to="/services">services</Link>
                <Link to="/contact-us">contact</Link>
                <Link to="/login">login</Link>
            </div>
        </div>
    )
}

export default NavBar;
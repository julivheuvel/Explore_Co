import React, { useState, useEffect } from "react";
import {Link} from "@reach/router";
import axios from "axios";

const NavBar = () => {

    const [loggedinuser, setLoggedInUser] = useState(null)

    
    useEffect( () => {
            if (loggedinuser) {
                axios.get("http://localhost8000:/api/users/getloggedinuser", {withCredentials:true})
                    .then(res => {
                        console.log("logged in stuff", res)
                        setLoggedInUser(res.data)
                    })
                    .catch(err => {
                        console.log("error with navigation")
                    })
                }
            }, [loggedinuser]);


    return (
        <div className="navbar">
            <div className="explore-co">
                <h1>EXPLORE CO.</h1>
            </div>
            <div className="sub-navbar">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/about-us" className="nav-link">ABOUT</Link>
                <Link to="/services" className="nav-link">SERVICES</Link>
                <Link to="/contact-us" className="nav-link">CONTACT</Link>

                {!loggedinuser?
                <>
                <Link to="/login" className="nav-link">LOGIN</Link>
                </>
                :<Link to="/" className="nav-link">Logout</Link>
                }

            </div>
        </div>
    )
}

export default NavBar;
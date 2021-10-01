import { Link } from "@reach/router";
import React from "react";
// web-layout-components
import NavBar from '../web-layout-components/NavBar';


const Login = () => {


    return (
        <div className="login">
            <NavBar />
            <h1>Explore Co Login Page</h1>
            <Link to="/register">register</Link>
        </div>
    )
}

export default Login;
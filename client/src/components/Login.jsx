import { Link } from "@reach/router";
import React from "react";
// web-layout-components
import NavBar from '../web-layout-components/NavBar';


const Login = () => {


    return (
        <div className="login">
            <NavBar />
            <h1>Explore Co Login Page</h1>

            <div className = "container">
                <form>
                    <div className="register-form-group">
                        <label>Email:</label>
                        <input type="text" className="" name="email" />
                    </div>
                    <div className="register-form-group">
                        <label>Password:</label>
                        <input type="text" className="" name="password" />
                    </div>
                    <input type = "submit" value = "Login" />
                </form>
            </div>
            
            <Link to="/register">register</Link>
        </div>
    )
}

export default Login;
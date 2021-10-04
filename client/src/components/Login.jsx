import { Link } from "@reach/router";
import e from "express";
import React, { useState } from "react";
// web-layout-components
import NavBar from '../web-layout-components/NavBar';


const Login = () => {

    const [formInfo, setFormInfo] = useState({
        email: "",
        password: ""
    })

    const [errorMsg, setErrorMsg] = useState(null);

    const onChangeHandler = (event) => {
        setFormInfo({
            ...formInfo,
            [event.target.name]:event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/login", formInfo, {withCredentials:true})
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className="login">
            <NavBar />
            <h1>Explore Co Login Page</h1>

            <div className = "container">
                <form onSubmit = {login}>
                    {errorMsg ? <p>{errorMsg}</p> : ""}

                    <div className="register-form-group">
                        <label>Email:</label>
                        <input type="text" className="" name="email" onChange={onChangeHandler}/>
                    </div>
                    <div className="register-form-group">
                        <label>Password:</label>
                        <input type="password" className="" name="password" />
                    </div>
                    <input type = "submit" value = "Login" />
                </form>
            </div>
            
            <Link to="/register">register</Link>
        </div>
    )
}

export default Login;
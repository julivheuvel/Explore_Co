import React, {useState} from "react";
import axios from 'axios';
// import Login from './Login';
// web-layout-components
import NavBar from '../web-layout-components/NavBar';
import { navigate } from "@reach/router";

const Register = () => {

    const [registrationInfo, setRegistrationInfo] = useState({
        parent_first_name:"",
        parent_last_name:"",
        email:"",
        password:"",
        confirm_password:"",
        newsletter: false
    });

    const [errors, setErrors] = useState({

    })

    const regChangeHandler = (e) =>{

        // if else statement to create true/false responses to match boolean in model instead of on/off
        if(e.target.type === "checkbox") {
            setRegistrationInfo({
                ...registrationInfo,
                [e.target.name]:e.target.checked
            })
        }
        else {
            setRegistrationInfo({
                ...registrationInfo,
                [e.target.name]:e.target.value
            })
        }
        
    }

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", registrationInfo, {withCredentials:true})
            .then(res => {

                console.log("*****************")
                console.log(res.data.message)
                console.log("*****************")

                console.log("Registration works", res);
                if(res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    console.log("Registration successful, navigating to contact us for now")
                    navigate("/dashboard")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="register">
            <NavBar />
            <h1>Explore Co Registration</h1>
            <div className = "container">
                <form onSubmit = {register}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input onChange = {regChangeHandler} type="text" className="form-input" name="parent_first_name" />
                    </div>
                    {errors.parent_first_name? <p className = "text-danger error" > {errors.parent_first_name.message}</p>: ""}
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input onChange = {regChangeHandler} type="text" className="form-input" name="parent_last_name" />
                    </div>
                    {errors.parent_last_name? <p className = "text-danger error" > {errors.parent_last_name.message}</p>: ""}
                    <div className="form-group">
                        <label>Email:</label>
                        <input onChange = {regChangeHandler} type="text" className="form-input" name="email" />
                    </div>
                    {errors.email? <p className = "text-danger error" > {errors.email.message}</p>: ""}
                    <div className="form-group">
                        <label>Password:</label>
                        <input onChange = {regChangeHandler} type="password" className="form-input" name="password" />
                    </div>
                    {errors.password? <p className = "text-danger error" > {errors.password.message}</p>: ""}
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input onChange = {regChangeHandler} type="password" className="form-input" name="confirm_password" />
                    </div>
                    {errors.confirm_password? <p className = "text-danger error" > {errors.confirm_password.message}</p>: ""}
                    <div className="form-group">
                        <label>Sigun up for our Newsletter:</label>
                        <input onChange = {regChangeHandler} type="checkbox" className="form-input" name="newsletter" />
                    </div>
                    <input type = "submit" className="register-btn" value = "Register" />
                </form>
            </div>
        </div>
    )
}

export default Register;
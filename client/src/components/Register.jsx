import React, {useState} from "react";
import axios from 'axios';
// import Login from './Login';
// web-layout-components
import NavBar from '../web-layout-components/NavBar';

const Register = () => {

    const [registrationInfo, setRegistrationInfo] = useState({
        parent_first_name:"",
        parent_last_name:"",
        email:"",
        password:"",
        confirm_password:"",
        newsletter:"",
    });

    const [errors, setErrors] = useState({
        parent_first_name:"",
        parent_last_name:"",
        email:"",
        password:"",
        confirm_password:"",
        newsletter:"",
    })

    const regChangeHandler = (e) =>{
        setRegistrationInfo({
            ...registrationInfo,
            [e.target.name]:e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", registrationInfo, {withCredentials:true})
            .then(res => {
                console.log("Registration works", res);
                if(res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    console.log("Registration successful")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="register">
            <NavBar />
            <h1>Explore Co Register Page</h1>
            <div className = "container">
                <form onSubmit = {register}>
                    <div className="register-form-group">
                        <label>First Name:</label>
                        <input onChange = {regChangeHandler} type="text" className="" name="parent_first_name" />
                        {errors.parent_first_name? <p className = "text-danger" > {errors.parent_first_name.message}</p>: ""}
                    </div>
                    <div className="register-form-group">
                        <label>Last Name:</label>
                        <input onChange = {regChangeHandler} type="text" className="" name="parent_last_name" />
                    </div>
                    <div className="register-form-group">
                        <label>Email:</label>
                        <input onChange = {regChangeHandler} type="text" className="" name="email" />
                    </div>
                    <div className="register-form-group">
                        <label>Password:</label>
                        <input onChange = {regChangeHandler} type="text" className="" name="password" />
                    </div>
                    <div className="register-form-group">
                        <label>Confirm Password:</label>
                        <input onChange = {regChangeHandler} type="text" className="" name="confirm_password" />
                    </div>
                    <div className="register-form-group">
                        <label>Sigun up for our Newsletter:</label>
                        <input onChange = {regChangeHandler} type="checkbox" className="" name="newsletter" />
                    </div>
                    <input type = "submit" value = "Register" />
                </form>
            </div>
        </div>
    )
}

export default Register;
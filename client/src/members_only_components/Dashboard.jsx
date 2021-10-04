import { navigate } from "@reach/router";
import React, { useState, useEffect } from "react";
import axios from 'axios';
// web-layout-components
import NavBar from '../web-layout-components/NavBar';

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useState(null);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then (res => {
                console.log(res)
                setLoggedInUser(res.data)
            })
            .catch(err => {
                console.log("errororrorororor", err)
                navigate("/login")
            })
    }, [])


    const logout = (event)=>{
        axios.get("http://localhost:8000/api/logout", {withCredentials:true})
            .then(res=>{
                console.log(res)
                navigate("/")
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            
        {loggedInUser ?
            <div className="dashboard">
                <NavBar />
                <div>
                    <h1>Welcome {loggedInUser.parent_first_name}</h1>

                    <button onClick={logout}>Logout</button>
                </div>
            </div>

            :

            <h1 className="text-danger">Please log in first</h1>
        }
            
        </div>
    )
}

export default Dashboard;
const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {secret} = require("../config/webtoken");

class UserController {
    register(req, res) {
        const user = new User(req.body);
        user.save()
            .then( () => {
                res.cookie("usertoken", jwt.sign({_id:user._id}, secret), {httpOnly: true})
                .json({msg: "success", user: user})
            })
            .catch(err => res.json(err))
    }

    // ============
    //  Find one user
    // ============
    login(req, res) {
        User.findOne({email:req.body.email})
            .then(user => {
                if(user === null){
                    res.json({msg: "Invalid login attempt - user not found"}) //any error with email will show up here; make sure to both the error messages for password and email to be the same later
                } else {
                    bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if(passwordIsValid) {
                            res.cookie("usertoken", jwt.sign({_id:user._id}, secret), {httpOnly:true})
                                .json({msg: "success!"});
                        } else {
                            res.json({msg: "Invalid Password but email is correct"}) // remember to change this to match errors with email
                        }
                    })
                    .catch(err => res.json({msg: "Invalid Login Attempt", err}))
                }
            })
            .catch(err => res.json({msg: "secondary invalid login attempt error thing", err}))
    }

    getLoggedInUser(req,res){
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true});
        User.findById(decodedJWT.payload._id)
            .then(user=> res.json(user))
            .catch(err=> res.json(err))
    }


    // ============
    //  Find All 
    // ============
    findAllUsers = (req, res) => {
        User.find({})
            .then(allUsers => res.json({results: allUsers}))
            .catch(err => res.json({message: "All users not found", error: err}))
    }

    // ============
    //  Logout
    // ============
    logout(req,res){
        res.cookie("usertoken", jwt.sign({_id:""}, secret), {
            httpOnly: true,
            maxAge: 0
        }).json({msg:"ok"})
    }
}

module.exports = new UserController();
const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {secret} = require("../config/webtoken.js");

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

    login(req, res) {

        // ============
        //  Find one user
        // ============
        User.findOne({email:req.body.email})
            .then(user => {
                if(user == null){
                    res.json({msg: "Email issues"}) //any error with email will show up here; make sure to both the error messages for password and email to be the same later
                } else {
                    bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if(passwordIsValid) {
                            res.cookie("usertoken", jwt.sign({_id:user_id}, secret), {httpOnly})
                                .json({msg: "success!"});
                        } else {
                            res.json({msg: "Invalid Password but email is correct"}) // remember to change this to match errors with email
                        }
                    })
                    .catch(err => res.json({msg: "Invalid Login Attempt", err}))
                }
            })
            .catch(err => res.json(err))
    }

    getLoggedInUser(req,res){
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true});
        User.findById(decodedJWT.payload._id)
            .then(user=> res.json(user))
            .catch(err=> res.json(err))
    }
}

module.exports = new UserController();
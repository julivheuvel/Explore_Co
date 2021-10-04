const UserController = require("../controllers/user.controllers");
const {authenticate} = require("../config/webtoken");

module.exports = app => {
    // ============
    //  Register user
    // ============
    app.post("/api/register", UserController.register);

    // ============
    //  Login User
    // ============
    app.post("/api/login", UserController.login);

    // ============
    //  authenticating user
    // ============
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    
    // ============
    //  Login User
    // ============
    app.get("/api/all", UserController.findAllUsers);
}
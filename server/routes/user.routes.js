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
    //  Get All User
    // ============
    app.get("/api/all", UserController.findAllUsers);

    // ============
    //  Logout User
    // ============
    app.get("/api/logout", UserController.logout);
}
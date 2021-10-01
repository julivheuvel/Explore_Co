const UserController = require("../controllers/user.controllers");

model.exports = app => {
    // ============
    //  Register user
    // ============
    app.post("/api/register", UserController.register);

    // ============
    //  Login User
    // ============
    app.post("/api/login", UserController.login);


}
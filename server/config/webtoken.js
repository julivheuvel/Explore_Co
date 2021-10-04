const jwt = require("jsonwebtoken");
const secret = "123" // This will become an environmental variable much later but for simplicity its now 123 

module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
        if (err) { 
            res.status(401).json({verified: false});
        } else {
            next();
        }
    });
}


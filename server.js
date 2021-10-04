const express = require("express");
const app = express();
const port = 8000;
const cookie = require("cookie-parser");
const cors = require("cors");
// const mongoose = require("mongoose");

// ============
//  Login though a different port 
// ============
app.use(cors({
    credentials:true,
    origin: "http://localhost:3000"
}));

// ============
//  Configure to use cookies
// ============
app.use(cookie());
app.use(express.json(), express.urlencoded({extended: true}), cors());


require("./server/config/mongoose.config.users")()
require("./server/routes/user.routes")(app)

// require("./server/config/mongoose.config")

app.listen(
    port,
    ()=> console.log(`listening on port: ${port}`)
)

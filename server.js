const express = require("express");
const app = express();
const port = 8000;


const cors = require("cors");
const mongoose = require("mongoose");


app.use(express.json(), express.urlencoded({extended: true}), cors());


// require("./server/config/mongoose.config")
// require("./server/routes/routes")(app)


app.listen(
    port,
    ()=> console.log("listening on port", port)
)
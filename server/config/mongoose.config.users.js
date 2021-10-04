const mongoose = require("mongoose");
const db_name = "User_Login_Reg";

module.exports = ()=>{
    mongoose.connect(`mongodb://localhost/${db_name}`, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    } )
    .then(() => console.log('Established a connection to the Login/Reg database'))
    .catch(err => console.log('Something went wrong when connecting to the Login/Reg database ', err));
}
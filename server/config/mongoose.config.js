const mongoose = require("mongoose");
const db_name = "Explore_Co";


mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database.. mongoose.config.js'))
    .catch(err => console.log('Something went wrong when connecting to the database .. mongoose.config.js ', err));
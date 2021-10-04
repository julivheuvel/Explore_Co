const mongoose = require("mongoose");
const db_name = "Explore_Co";


mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the Explore_Co database'))
    .catch(err => console.log('Something went wrong when connecting to the Explore_Co database ', err));
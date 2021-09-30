const mongoose = require("mongoose");

const ActivitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
        minLength: [3, "Name must be at least 3 characters."]
    },
    description: {
        type: String,
        required: [true, "Description required"],
        minLength: [3, "Description must be at least 3 characters."]
    },
    group: {
        type: String,
        required: [true, "Age group/category is required"]
    },
    completed: {
        type: Boolean
    },
    tag1: {
        type: String
    },
    tag2: {
        type: String
    },
    tag3: {
        type: String
    },
    tag4: {
        type: String
    },
    tag5: {
        type: String
    }

}, {timestamps:true});

module.exports = mongoose.model("Activities", ActivitiesSchema);
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    parent_first_name: {
        type: String,
        required: [true, "Parent's first name is required"],
        minLength: [2, "Name must be at least 2 characters."]
    },
    parent_last_name: {
        type: String,
        required: [true, "Parent's last name is required"],
        minLength: [2, "Name must be at least 2 characters."]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
        }
    },
    newsletter: {
        type: Boolean,
    },
    password: {
        type: String,
        required: [true, "Password is required"],

        //////
        // minlength: [8, "Password must be 8 characters or longer"],
        // validate: {
        //     validator: val => /^[a-zA-Z]$/.test(val), 
        //     message: "Password must contain at least one letter AND one number"
        //     },
    },
    // CHILD PROFILE    - make more than one child profile?
    child: {
        name: {
            type: String,
            required: [true, "Child's name required"]
        },
        ageGroup: {
            type: String,
            required: [true, "Age Group required"]
        },
        interestTag1: {
            type: String
        },
        interestTag2: {
            type: String
        },
        interestTag3: {
            type: String
        }
    }
}, {timestamps: true});



UserSchema.virtual('confirm')
    .get(() => this._confirm)
    .set(value => this._confirm = value);



UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirm', 'Passwords must match');
    }
    next();
});



UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});



module.exports = mongoose.model("User", UserSchema);
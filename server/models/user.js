const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: false  },
    avatar : { type: String, required: false },
    phone : { type: String, required: false },
    adresse : { type: String, required: false },
    isVerified : { type: Boolean, required: false},
    googleId: { type: String, required: false ,default: null}
    
});



const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require("mongoose");

mongoose.connect(`${process.env}`);

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model("User",userSchema);
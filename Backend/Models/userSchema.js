const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        required: true
    },

    supervisor: {
        type: String,
        required: true
    },


})

const users = new mongoose.model("users", userSchema);
module.exports = users;

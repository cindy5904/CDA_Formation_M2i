const mongoose = require("mongoose");

const user = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
});

const Users = mongoose.model("user", user);

module.exports = Users;
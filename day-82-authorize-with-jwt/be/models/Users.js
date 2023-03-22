const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please provide an Email!"],
    unique: [true, "Email exist"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
  },
});
const user = mongoose.model("user", userSchema);
module.exports = user;

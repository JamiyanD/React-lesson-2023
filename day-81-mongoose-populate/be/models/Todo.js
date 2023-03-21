const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, //foreign key avj baiga heseg
});
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;

const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: String,
});

const Catergory = mongoose.model("Category", categorySchema);
module.exports = Catergory;

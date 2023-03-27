const mongoose = require("mongoose");

const neighborhoodsSchema = new mongoose.Schema(
  {
    name: String,
    geometry: {
      type: {
        type: String,
        enum: ["Polygon"],
        required: true,
      },
      //   coordinates: {
      //     type: [Number],
      //     required: true,
      //   },
    },
  },
  {
    collection: "neighborhoods",
  }
);

const Neighborhoods = mongoose.model("Neighborhoods", neighborhoodsSchema);

module.exports = Neighborhoods;

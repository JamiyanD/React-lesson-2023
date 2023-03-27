const Neighborhoods = require("../models/neighborhoods");
exports.getNeighborhoods = async (req, res) => {
  try {
    const result = await Neighborhoods.find({}).limit(10);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

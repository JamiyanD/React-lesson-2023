const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const restaurantApi = require("./routes/restaurants.routes");
const neighborhoodsApi = require("./routes/neighborhoods.routes");

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/restaurant", restaurantApi);
app.use("/neighborhoods", neighborhoodsApi);

app.get("/", (request, response) => {
  response.json({ data: [] });
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Express app is running on http://localhost:${PORT}`);
});

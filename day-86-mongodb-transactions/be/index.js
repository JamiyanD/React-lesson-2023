const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const transactionsRouter = require("./routes/transactions.route");
const productAPI = require("./routes/product.routes");

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/transaction", transactionsRouter);
app.use("/product", productAPI);

app.get("/", (req, res) => {
  res.send("<h1>Day-86 MongoDB Transactions</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((err) => console.error(err));
  console.log(`Server is running on http://localhost:${PORT}`);
});

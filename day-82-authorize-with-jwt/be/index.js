const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const adminRouter = require("./routes/Admin-api");
const apiRouter = require("./routes/Api");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/api", apiRouter);

app.get("/", (request, response) => {
  response.send("<h1>Authontecation Authorization Day 82</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Express app is running on http://localhost:${PORT}`);
});

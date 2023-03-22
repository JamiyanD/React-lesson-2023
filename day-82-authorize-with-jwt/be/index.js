const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Users");
const adminRouter = require("./routes/Admin-api");
const apiRouter = require("./routes/Api");

const PORT = 8080;
const app = express();
const MONGO_CONNECTION_STRING =
  "mongodb+srv://jamiyan:jamiyan48@jaya.qs1n9nb.mongodb.net/test";

app.use(express.json());
app.use(cors());
app.use(adminRouter);
app.use(apiRouter);

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

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const todoRouter = require("./routes/todo-routes");
const categoryRouter = require("./routes/category-routes");

const PORT = 8080;
const app = express();
const MONGO_CONNECTION_STRING =
  "mongodb+srv://jamiyan:jamiyan48@jaya.qs1n9nb.mongodb.net/test";

app.use(express.json());
app.use(cors());
app.use("/todo", todoRouter);
app.use("/category", categoryRouter);

app.get("/", (request, response) => {
  response.send("<h1>Day 81 Insert/Update/Delete  Many</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express app is running on http://localhost:${PORT}`);
});

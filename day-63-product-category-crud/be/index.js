console.log("day-63 Category CRUD");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { uuid } = require("uuidv4");

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/category", (request, response) => {
  const body = request.body;
  console.log(body);

  const categoryData = fs.readFileSync("./data/category.json", {
    encoding: "utf-8",
    flag: "r",
  });
  const categoryDataObj = JSON.parse(categoryData);
  const newCategory = {
    id: Date.now().toString(),
    name: body.catName,
  };
  categoryDataObj.push(newCategory);
  const writeCategoryData = fs.writeFileSync(
    "./data/category.json",
    JSON.stringify(categoryDataObj)
  );

  if (writeCategoryData) {
    response.json({
      status: "File write error",
      data: [],
    });
  } else {
    response.json({
      status: "success",
      data: categoryDataObj,
    });
  }
});
app.get("/category", (request, response) => {
  const readCategoryData = fs.readFileSync("./data/category.json", {
    encoding: "utf-8",
    flag: "r",
  });
  response.json({
    status: "success",
    data: JSON.parse(readCategoryData),
  });
});

app.listen(PORT, () => [
  console.log(`Server is running on http://localhost:${PORT}`),
]);

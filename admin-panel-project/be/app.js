console.log("it is my app.js");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());

app.post("/user", (request, response) => {
  console.log(request.body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    const newUser = {
      id: Date.now(),
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      phoneNumber: request.body.phoneNumber,
      email: request.body.email,
      password: request.body.password,
      checkbox: request.body.checkbox,
      radio: request.body.radio,
      imgURL: request.body.imgURL,
    };

    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    dataObject.push(newUser);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: `Error during file write`,
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.get("/user", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    // utf-8 n ymr formataar avhig zana
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);
    response.json({
      status: "success",
      data: objectData,
    });
  });
});

app.delete("/user", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.userId);
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

app.put("/user", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);

    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        (d.firstname = request.body.firstname),
          (d.lastname = request.body.lastname),
          (d.phoneNumber = request.body.phoneNumber),
          (d.email = request.body.email),
          (d.password = request.body.password),
          (d.checkbox = request.body.checkbox),
          (d.radio = request.body.radio),
          (d.imgURL = request.body.imgURL);
      }
      return d;
    });

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.post("/product", (request, response) => {
  const newUser = {
    id: Date.now(),
    imgURL: request.body.imgURL,
    title: request.body.title,
    subtitle: request.body.subtitle,
    price: request.body.price,
    discount: request.body.discount,
    description1: request.body.description1,
    description2: request.body.description2,
    code: request.body.code,
    hashtag: request.body.hashtag,
    technology: request.body.technology,
    rating: request.body.rating,
  };
  console.log(newUser);
  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    const dataObject = JSON.parse(readData);
    dataObject.push(newUser);
    fs.writeFile(
      "./data/products.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: `Error during file write`,
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.get("/product", (request, response) => {
  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    // utf-8 n ymr formataar avhig zana
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

app.delete("/product", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.userId);
    fs.writeFile(
      "./data/products.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

app.put("/product", (request, response) => {
  console.log(request.body);
  const savedProducts = fs.readFileSync("./data/products.json", {
    encoding: "utf-8",
    flag: "r",
  });
  const savedProductsObjectArray = JSON.parse(savedProducts);
  const foundProduct = savedProductsObjectArray.filter(
    (product) => product.id == request.body.productId
  )[0];
  response.json({
    status: "success",
    data: foundProduct,
  });

  // const changedData = savedData.map((d) => {
  //   if (d.id === request.body.id) {
  //     (d.imgURL = request.body.imgURL),
  //       (d.title = request.body.title),
  //       (d.subtitle = request.body.subtitle),
  //       (d.price = request.body.price),
  //       (d.discount = request.body.discount),
  //       (d.description1 = request.body.description1),
  //       (d.description2 = request.body.description2),
  //       (d.code = request.body.code);
  //     d.hashtag = request.body.hashtag;
  //     d.technology = request.body.technology;
  //     d.rating = request.body.rating;
  //   }
  //   return d;
  // });
});

app.get("/search", (request, response) => {
  console.log(request.query);
  const savedCategories = fs.readFileSync("./data/products.json", {
    encoding: "utf-8",
    flag: "r",
  });
  const savedCategoriesArrayObject = JSON.parse(savedCategories);
  console.log(savedCategoriesArrayObject);
  const foundCategory = savedCategoriesArrayObject.filter((product) =>
    product.title.includes(request.query.value)
  );
  response.json({
    status: "success",
    data: foundCategory,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

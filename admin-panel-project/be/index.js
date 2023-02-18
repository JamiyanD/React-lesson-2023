console.log("it is my app.js");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

app.post("/user", (request, response) => {
  const body = request.body;
  const isEdit = body.isEdit;
  console.log(body);
  const savedUsers = fs.readFileSync("./data/users.json", {
    encoding: "utf-8",
    flag: "r",
  });
  const dataObject = JSON.parse(savedUsers);
  if (isEdit) {
    dataObject.map((d) => {
      if (d.id === body.id) {
        (d.firstname = body.firstname),
          (d.lastname = body.lastname),
          (d.phoneNumber = body.phoneNumber),
          (d.email = body.email),
          (d.password = body.password),
          (d.checkbox = body.checkbox),
          (d.radio = body.radio),
          (d.imgURL = body.imgURL);
      }
      return d;
    });
  } else {
    const userPassword = body.password;
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
      if (err) {
        response.json({
          status: "generating salt error",
        });
      }
      bcrypt.hash(userPassword, salt, (hashError, hashData) => {
        if (hashError) {
          response.json({
            status: "hashing has error",
            data: [],
          });
        }
        console.log("hashed Data :", hashData);
        const newUser = {
          id: Date.now(),
          firstname: body.firstname,
          lastname: body.lastname,
          phoneNumber: body.phoneNumber,
          email: body.email,
          password: hashData,
          checkbox: body.checkbox,
          radio: body.radio,
          imgURL: body.imgURL,
        };
        dataObject.push(newUser);
      });
    });
  }
  fs.writeFile(
    "./data/users.json",
    JSON.stringify(dataObject),
    (writeError) => {
      if (writeError) {
        response.json({
          status: "success",
          data: "file write error",
        });
      }
      response.json({
        status: "success",
        data: dataObject,
      });
    }
  );
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
  const savedUsers = fs.readFileSync("./data/users.json", {
    encoding: "utf-8",
    flag: "r",
  });
  const savedUsersObj = JSON.parse(savedUsers);
  const foundUser = savedUsersObj.filter((d) => d.id == request.body.userId)[0];
  response.json({
    status: "success",
    data: foundUser,
  });
});

app.post("/product", (request, response) => {
  const isEdit = request.body.isEdit;
  const newProduct = {
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
  const savedProducts = fs.readFileSync("./data/products.json", {
    encoding: "utf-8",
    flag: "r",
  });
  const dataObject = JSON.parse(savedProducts);
  if (isEdit) {
    dataObject.map((d) => {
      if (d.id === request.body.id) {
        (d.imgURL = request.body.imgURL),
          (d.title = request.body.title),
          (d.subtitle = request.body.subtitle),
          (d.price = request.body.price),
          (d.discount = request.body.discount),
          (d.description1 = request.body.description1),
          (d.description2 = request.body.description2),
          (d.code = request.body.code);
        d.hashtag = request.body.hashtag;
        d.technology = request.body.technology;
        d.rating = request.body.rating;
      }
      return d;
    });
  } else {
    dataObject.push(newProduct);
  }

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

app.post("/login", (request, response) => {
  const body = request.body;
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const usersArrayObject = JSON.parse(readData);
    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );
    if (foundUser.length === 0) {
      response.json({
        status: "User Not Found",
        data: [],
      });
    } else {
      console.log(foundUser);
      const foundUserObj = foundUser[0];
      const plainPassword = body.password;
      console.log(plainPassword);
      const savedPassword = foundUserObj.password;
      console.log(savedPassword);
      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          // if (compareError) {
          //   response.json({
          //     status: "User name or password do not match",
          //     data: [],
          //   });
          // }

          if (compareResult) {
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstName: foundUserObj.firstname,
                lastName: foundUserObj.lastname,
              },
            });
          } else {
            response.json({
              status: "Username or Password do not match!!",
              data: [],
            });
          }
        }
      );
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

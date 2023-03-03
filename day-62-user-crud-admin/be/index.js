console.log("Day - 62 User Login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    const readDataObj = JSON.parse(readData);
    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }

      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];
      console.log(roleName);
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
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };
          readDataObj.push(newUser);

          fs.writeFile(
            "./data/users.json",
            JSON.stringify(readDataObj),
            (writeError) => {
              if (writeError) {
                response.json({
                  status: "success",
                  data: "file write error",
                });
              }
              response.json({
                status: "success",
                data: readDataObj,
              });
            }
          );
        });
      });

      const userData = { ...body, role: roleName };
    });
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
      console.log(typeof plainPassword);
      const savedPassword = foundUserObj.password;
      console.log(typeof savedPassword);
      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "User name or password do not match",
              data: [],
            });
          }

          if (compareResult) {
            console.log("it match");
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstName: foundUserObj.firstname,
                lastName: foundUserObj.lastname,
              },
            });
          } else {
            console.log("invalid");
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

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

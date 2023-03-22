const express = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const adminRouter = express.Router();
const jwt = require("jsonwebtoken");

adminRouter.post("/register", async (request, response) => {
  const { email, password } = request.body;
  if (email && password) {
    const oldUser = await Users.findOne({ email: email });
    if (oldUser) {
      return response.json({
        message: "User already existed",
        email: email,
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      Users.create({ email: email, password: hashedPassword })
        .then((data) => {
          response.status(201).json({
            message: "Хэрэглэгч амжилттай үүслээ.",
            email: data.email,
          });
          return;
        })
        .catch((error) => {
          response.status(500).json({
            success: false,
            error,
          });
        });
    }
  } else {
    return response.json({ error: "Input field is empty" });
  }
});

adminRouter.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!(email && password)) {
      return response.json({ message: "Username or password empty" });
    } else {
      const user = await Users.findOne({ email });

      if (user && (await bcrypt.compare(password, user?.password))) {
        const jwtBody = {
          user_id: user._id,
          email,
        };
        const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", {
          expiresIn: "2h",
        });
        return response.status(200).json({ success: true, token: token });
      } else {
        return response.status(400).json({
          success: false,
          status: "Username or password do not match",
        });
      }
    }
  } catch (error) {
    // response.status(200).json({ data: "failed", error: error });
  }
});

module.exports = adminRouter;

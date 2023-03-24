const express = require("express");

const bcrypt = require("bcrypt");
const adminRouter = express.Router();
const jwt = require("jsonwebtoken");
const UserRole = require("../models/UserRole");
const Users = require("../models/Users");

adminRouter.post("/register", async (request, response) => {
  const data = request.body;

  if (data) {
    const oldUser = await Users.findOne({ email: data.email });
    if (oldUser) {
      return response.status(400).json({
        status: "Хэрэглэгч аль хэдийн үүссэн байна",
        success: false,
      });
    }

    var hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    try {
      console.log(data);
      const user = await Users.create(data);
      console.log(user);
      const result = await user.populate("userrole");
      response.status(201).json({
        message: "Хэрэглэгч амжилттай үүслээ.",
        data: result,
      });
    } catch (error) {
      response.status(500).json({ success: false, error: error });
    }

    // Users.create({ email: email, password: hashedPassword })
    //   .then((data) => {
    //     response.status(201).json({
    //       message: "Хэрэглэгч амжилттай үүслээ.",
    //       email: data.email,
    //     });
    //     return;
    //   })
    //   .catch((error) => {
    //     response.status(500).json({
    //       success: false,
    //       error,
    //     });
    //   });
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

adminRouter.post("/role/create", async (req, res) => {
  const { name } = req.body;
  const result = await UserRole.create({ name });

  res.status(200).json({
    data: result,
  });
});

adminRouter.get("/roles/list", async (req, res) => {
  const result = await UserRole.find({});

  res.status(200).json({
    data: result,
  });
});

module.exports = adminRouter;

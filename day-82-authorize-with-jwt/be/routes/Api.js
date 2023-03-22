const express = require("express");
const apiRouter = express.Router();
const auth = require("../Middleware/auth");

apiRouter.post("/protected", auth, async (req, res, next) => {
  res.status(200).json({ data: "Successfully got the protected route" });
});

apiRouter.post("/unprotected", async (req, res, next) => {
  res.status(200).json({ data: "Successfully got the unprotected route" });
});

module.exports = apiRouter;

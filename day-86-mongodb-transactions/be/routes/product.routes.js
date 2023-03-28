const { Router } = require("express");
const { createProduct } = require("../controllers/product.controller");

const route = Router();

route.post("/create", createProduct);

module.exports = route;

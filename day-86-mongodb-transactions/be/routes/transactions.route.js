const { Router } = require("express");
const {
  createTransaction,
  createTransactionWithOutSession,
} = require("../controllers/transaction.controller");

const route = Router();

route.post("/shipping", createTransactionWithOutSession);
route.post("/shippingWithOutTransaction", createTransaction);

module.exports = route;

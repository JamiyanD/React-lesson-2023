const { Router } = require("express");
const { getRestautants } = require("../controllers/restaurant.controller");

const route = Router();

route.get("/restaurants", getRestautants);

module.exports = route;

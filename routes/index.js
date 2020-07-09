const express = require("express");
const routes = express.Router();
const { users } = require("../controllers");
const { login, register, getUserById } = require("../controllers");
const { cronn } = require("../controllers/cronjob");
const { getRawData } = require("../controllers/rawData");

routes.get("/", users);
routes.post("/login", login);
routes.post("/register", register);
routes.get("/:id", getUserById);
// routes.post("/rawData", getRawData);

routes.post("/cron", cronn);

module.exports = routes;

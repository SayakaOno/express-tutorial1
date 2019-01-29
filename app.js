let express = require("express");
let app = express();
let db = require("./db");

let UserController = require("./user/UserController");
app.use("/users", UserController);

module.exports = app;

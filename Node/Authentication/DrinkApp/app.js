const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const passport = require("passport");
const app = express();

//For handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//for request body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//passport initialize
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(require("./routes"));

//Static files
app.use(express.static("public"));

module.exports = app;
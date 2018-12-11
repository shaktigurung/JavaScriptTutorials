const express = require("express");
const app = express();

//This will add "body" property for middleware eg: req.body
app.use(express.urlencoded());//content type of URL 
app.use(express.json()); //content type of json

//Routes
app.use(require("./routes"));

module.exports = app;
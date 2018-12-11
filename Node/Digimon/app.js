const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const methodOverride = require('method-override');
const morgan = require('morgan');

//Setup Handle-bars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Method override with POST having ?_method=DELETE
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));

//This will add "body" property for middleware eg: req.body
app.use(express.urlencoded());//content type of URL 
app.use(express.json()); //content type of json
app.use(morgan("combined")); 

//Routes
app.use(require("./routes"));

module.exports = app;
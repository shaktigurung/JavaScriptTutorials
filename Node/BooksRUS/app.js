const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//Handlebars setup
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Body-parser 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Mongoose
mongoose.connect("mongodb://localhost/books_r_us", {useNewUrlParser: true} );
mongoose.Promise = global.Promise;

//Express server
app.listen(port, ()=> console.log(`Server  is listening on port ${port}`));
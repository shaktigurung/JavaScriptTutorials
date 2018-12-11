const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const methodOverride = require('method-override');
const morgan = require('morgan');
const {errors} = require('celebrate');

//Custom HTTP error
global.HTTPError = class HTTPError extends Error{
    constructor(statusCode, message){
        super(message);
        this.name = "HTTPError";
        this.statusCode = statusCode;

        if (Error.captureStackTrace){
            Error.captureStackTrace(this, HTTPError);
        }
    }
}
//Custom EmptyForm error
global.EMPTYFormError = class EMPTYFormError extends Error{
    constructor(statusCode, message){
        super(message);
        this.name = "EMPTYFormError";
        this.statusCode = statusCode;

        if (Error.captureStackTrace){
            Error.captureStackTrace(this, EMPTYFormError);
        }
    }
}

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

app.use(errors());

//Error handling middleware
app.use((err,req,res,next)=>{
    switch(err.name){
        case "HTTPError":
            return res.status(err.statusCode).send(err.message);
        break;
        case "EMPTYFormError":
            return res.status(err.statusCode).send(err.message);
        break;
    }
    //console.log("Custom error handler:", err);
    next(err);
});

module.exports = app;
const express = require("express");
const bodyParser = require("body-parser");
const exphbs= require("express-handlebars");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const contacts =[];

app.get("/",(req, res)=>{
    //res.send("Home");
    res.render("form");
});

app.get("/contacts",(req, res)=>{
   // res.send(contacts);
     res.json(contacts);
});

app.post("/contacts",(req, res)=>{

});




app.listen(port, ()=> console.log(`Server listening on port ${port}`));

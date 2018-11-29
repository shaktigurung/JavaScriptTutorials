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
    // console.log(req.body);
    // res.send();
    //We can use following way to get name and email
    // let name = req.body.name;
    // let email = req.body.email;
    //Or use destructing like below to get name and email
    let {name, email} = req.body; 
   //this way or
    // contacts.push({
    //     name: name,
    //     email: email
    // });
    //Syntatical way
    contacts.push({name, email});
    res.render("success");
});




app.listen(port, ()=> console.log(`Server listening on port ${port}`));

const express = require("express");
const bodyParser = require("body-parser");
const expressHandleBars = require("express-handlebars");
const app = express();
const port = 3000;

app.engine("handlebars", expressHandleBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

const students = ["Ivan", "Santosh", "Ghalip", "Hamish"];

//Throwing Error
// app.use((req, res, next)=>{
//     next(new Error("test"));
// });

app.get("/", (req, res)=>{
   // res.send(["Ivan", "Santosh", "Ghalip", "Hamish"]);
    //res.send("Matching Student"); 
    let randomIndexOne = Math.floor(Math.random()*students.length);
    let randomIndexTwo = Math.floor(Math.random()*students.length);    
    res.render("home", {name1: students[randomIndexOne],name2: students[randomIndexTwo]})
});

app.get("/students", (req, res)=>{
    res.send(students);
});

app.post("/students",
        (req, res, next) =>{
            console.log("whatever I want");
            next();
        },
    (req, res)=>{
    //console.log(req.body);
    students.push(req.body.name);
    res.send("Creating a student");
});

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})
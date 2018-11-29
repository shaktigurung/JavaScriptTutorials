const express = require("express");
const bodyParser = require("body-parser");
const expressHandleBars = require("express-handlebars");
const students = require("./student");
const restaurants = require("./restaurants");
const app = express();
const port = 3000;

app.engine("handlebars", expressHandleBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());


//const students = ["Ivan", "Santosh", "Ghalip", "Hamish"];

//Throwing Error
// app.use((req, res, next)=>{
//     next(new Error("test"));
// });
app.use(express.static('public'));

app.get("/", (req, res)=>{
   // res.send(["Ivan", "Santosh", "Ghalip", "Hamish"]);
    //res.send("Matching Student"); 
    //console.log(students);
    let randomIndexOne = Math.floor(Math.random()*students.students.length);
    let randomIndexTwo = Math.floor(Math.random()*students.students.length); 
    let randomIndexThree = Math.floor(Math.random()*students.students.length);  
    let randomRestaurant = Math.floor(Math.random()*restaurants.restaurants.length);  
    function count(number){
        let count = 0;
        let std = students.students;
        for(let i = 0 ; i < std.length; i++){
            if (number === students.students[i]){
                count++;
            }
        }
        return count;
    }
    res.render("home", {name1: students.students[randomIndexOne],name2: students.students[randomIndexTwo], name3: students.students[randomIndexThree],
    restaurant: restaurants.restaurants[randomRestaurant]});
});

app.get("/students", (req, res)=>{
    res.send(students);
});
app.get("/api/restaurants",(req, res)=>{
    res.send(restaurants.restaurants);
})

app.post("/students",
        (req, res, next) =>{
            console.log("whatever I want");
            next();
        },
    (req, res)=>{
    //console.log(req.body);
    students.students.push(req.body.name);
    res.send("Creating a student");
});

app.post("/api/restaurants", (req, res)=>{
    restaurants.restaurants.push(req.body.name);
    res.send("Creating a restaurant");
});

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})
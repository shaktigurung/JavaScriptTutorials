const ContactModel = require("./../database/models/contact_model");

function newResource(req, res){
    //res.send("Home");
    res.render("form");
}

function index(req, res){
    // res.send(contacts);
     ContactModel.find()
        .then(contacts => {
            res.json(contacts);
        })
        .catch(err => {
            res.status(500).send(err);
        });
      
 }

 function create(req, res){
    // console.log(req.body);
    // res.send();
    //We can use following way to get name and email
    // let name = req.body.name;
    // let email = req.body.email;
    //Or use destructing like below to get name and email
    let {name, email, enquiry} = req.body; 
   //this way or
    // contacts.push({
    //     name: name,
    //     email: email
    // });
    //Syntatical way
    //contacts.push({name, email});

    //Call the model
    ContactModel.create({name , email, enquiry})
        .then(contact =>{
            res.render("success");
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

module.exports = {
    newResource,
    index,
    create
}
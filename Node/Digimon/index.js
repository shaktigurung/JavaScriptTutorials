
const mongoose = require('mongoose');
const app = require("./app");
const port = 3000;

//Mongoose Database connection
mongoose.connect("mongodb://localhost/digimon", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("Error", err => console.log(err));


app.listen(port, () => console.log(`Server is running on port ${port}`));
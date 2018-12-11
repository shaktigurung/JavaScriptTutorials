const mongoose = require('mongoose');
const DigimonSchema = require("./../schemas/digimon_schema");

//where "digimon" is a collection in a database
const DigimonModel = mongoose.model("digimon", DigimonSchema);

module.exports = DigimonModel;
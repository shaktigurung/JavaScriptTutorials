const mongoose = require("mongoose");
const DrinkSchema = require("./../schemas/user_drink_schema");

const DrinkModel = mongoose.model("drink", DrinkSchema);

module.exports = DrinkModel;
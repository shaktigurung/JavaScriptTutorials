const {Schema} = require("mongoose");

const DrinkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    alcoholPercentage: {
        type: number,
        default:""
    }
});

module.exports = DrinkSchema;
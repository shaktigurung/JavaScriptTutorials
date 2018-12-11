const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DigimonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weapon: {
        type: String,
        required: true,
        default: ""
    },
    kind: {
        type: String,
        required: true
    }
});

module.exports = DigimonSchema;
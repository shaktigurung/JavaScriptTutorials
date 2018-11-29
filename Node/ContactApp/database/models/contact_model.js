const mongoose = require("mongoose");
const ContactSchema = require("./../schemas/contact_schema");
// "./" will be current directory 


//extra model enhancement

const ContactModel = mongoose.model("contact", ContactSchema);

module.exports = ContactModel;
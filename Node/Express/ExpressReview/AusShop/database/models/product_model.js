const mongoose = require("mongoose");
const ProductSchema = require("./../schemas/product_schema");

const ProductModel = mongoose.model("Product", UserSchema);

module.exports = ProductModel;
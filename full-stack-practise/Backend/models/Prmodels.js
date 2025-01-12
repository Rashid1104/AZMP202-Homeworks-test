const mongoose = require("mongoose")

const {Schema} = mongoose

const ProductSchema = new Schema({
    imageUrl: {type: String},
    title: {type: String},
    description: {type: String},
    country: {type: String},
    price: {type: Number},
})

const ProductModel = mongoose.model("products", ProductSchema)

module.exports = ProductModel;
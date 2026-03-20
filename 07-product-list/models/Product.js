const mongoose = require('mongoose');

const productList = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Product = mongoose.model("Product", productList);
module.exports = Product;
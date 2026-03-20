const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.render("home", { products });
}

// Add products
exports.addProducts = async (req, res) => {
    const product = req.body;
    await Product.create(product);
    res.redirect("/");
}


// Delete products
exports.deleteProducts = async (req, res) => {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.redirect("/");
}
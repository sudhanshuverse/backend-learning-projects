const express = require('express');
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.post("/submit", productController.addProducts);
router.get("/delete/:id", productController.deleteProducts);

module.exports = router;
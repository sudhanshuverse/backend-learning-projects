const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

router.get("/", blogController.getBlog);
router.post("/submit", blogController.addBlog);
router.get("/delete/:id", blogController.deleteBlog);

module.exports = router;
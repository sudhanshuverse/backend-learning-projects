const express = require('express');
const router = express.Router();

const contactController = require('../controllers/studentController');

router.get("/", contactController.getAllStudent);
router.post("/submit", contactController.saveStudent);
router.get("/delete/:id", contactController.deleteStudent);


module.exports = router;
const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController"); 

router.get("/", contactController.getContact)
router.post("/submit", contactController.addContact)
router.get("/delete/:id", contactController.deleteContact)

module.exports = router;
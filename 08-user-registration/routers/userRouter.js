const express = require('express');
const router = express.Router();
const userController = require('../controllers/useController');

router.get("/", userController.getUsers);
router.post("/submit", userController.addUser);
router.get("/delete/:id", userController.deleteUser);

module.exports = router;
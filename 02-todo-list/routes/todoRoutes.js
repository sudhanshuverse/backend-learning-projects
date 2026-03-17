const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get("/", todoController.getTodo);
router.post("/submit", todoController.createTodo);
router.get("/toggle/:id", todoController.toggleStatus);
router.get("/delete/:id", todoController.deleteTodo);

module.exports = router;
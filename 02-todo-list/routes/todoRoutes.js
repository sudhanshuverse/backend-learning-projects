const express = require('express');
const router = express.Router();

router.get("/", todoController.getTodo);

module.exports = router;
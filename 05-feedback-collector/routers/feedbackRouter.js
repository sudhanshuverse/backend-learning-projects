const express = require('express');
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

router.get("/", feedbackController.getFeedback);
router.post("/submit", feedbackController.addFeedback);
router.get("/delete/:id", feedbackController.deleteFeedback);

module.exports = router;
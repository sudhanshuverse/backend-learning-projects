const express = require('express');
const {
    handleGenerateNewShortURL,
    handleGetAnalytics
} = require('../controllers/urlController');

const router = express.Router();

// Create short URL
router.post('/', handleGenerateNewShortURL);

// Get analytics
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;
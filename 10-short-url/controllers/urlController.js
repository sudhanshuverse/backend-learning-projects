const shortId = require('shortid');
const URL = require('../models/url');

// Create short URL
async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }

    const shortID = shortId();

    const result = await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({
        id: shortID,
        fullShortURL: `http://localhost:8000/${shortID}`
    });
}

// Get analytics
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOne({ shortId });

    if (!result) {
        return res.status(404).json({ error: "Not found" });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
};
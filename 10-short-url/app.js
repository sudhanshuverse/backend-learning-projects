const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/urlRouter');
const URL = require('./models/url');

const app = express();
const PORT = 8000;

// Connect DB
connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log("MongoDB connected"));

// Middleware
app.use(express.json());

app.get('/test', (req, res) => {
    return res.end('<h1>Hey from server</h1>')
})

// Routes
app.use('/url', urlRoute);

// Redirect route
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        },
        { new: true }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found ❌");
    }

    res.redirect(entry.redirectURL);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
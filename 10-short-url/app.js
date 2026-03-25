const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/urlRouter');
const staticRouter = require('./routes/staticRouter');
const URL = require('./models/url');

const app = express();
const PORT = 8000;

// Connect DB
connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}));


// Test route
app.get('/test', async (req, res) => {
    const allUrls = await URL.find({});
    res.render('home', {urls: allUrls});
});

// Routes
app.use('/url', urlRoute);
app.use('/', staticRouter);
 
// Redirect route
app.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { returnDocument: 'after' } // ✅ FIXED
        );

        if (!entry) {
            return res.status(404).send("Short URL not found ❌");
        }

        return res.redirect(entry.redirectURL);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal Server Error ⚠️");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT} 🚀`);
});
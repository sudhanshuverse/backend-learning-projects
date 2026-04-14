// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local module
const urlRouter = require('./routers/urlRouter');

// Mongo URL
const DB_PATH = "mongodb://localhost:27017//url";

const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Serve static file
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use("/", urlRouter);

const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log("MongoDB is successfully connected");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log(`Error while connecting to database`, err);
    })
// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local modules
const feedbackRouter = require("./routers/feedbackRouter");

const app = express();


// Mongoose URl
const DB_PATH = "mongodb://localhost:27017//feedback";

// view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'))  // Access the static files
app.use(express.urlencoded({ extended: true }));

app.use("/", feedbackRouter);


const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log("Mongodb is successfully connected");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log('Error white connecting to mongo', err);
    })
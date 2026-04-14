// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local module
const studentRouter = require("./Routers/studentRouter");

// Mongoose URL
const DB_PATH = "mongodb://localhost:27017//student";
const app = express();

// view engine ejs
app.set('view engine', 'ejs');

// Routers
app.use(express.static('public'));  // Access static file
app.use(express.urlencoded({ extended: true }));
app.use("/", studentRouter);

const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log("Database is successfully connected");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log(`Error while connecting`, err);
    })
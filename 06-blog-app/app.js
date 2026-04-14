// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local module
const blogRouter = require("./routers/blogRouter");

// Mongo URL
const DB_PATH = "mongodb://localhost:27017//blog";
const app = express();

// view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));   // Access the static file
app.use(express.urlencoded({ extended: true }));

app.use("/", blogRouter)


const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log(`Mongodb is successfully connected`);
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log('Error while connecting to database');
    })

// External module
const express = require('express');
const { default: mongoose } = require('mongoose');
const DB_PATH = "mongodb://localhost:27017//notes";

// Local module
const noteRouters = require('./routes/noteRoutes');

const app = express();

// set view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));  // server static files
app.use(express.urlencoded({ extended: true }));  // This middleware read's form data

// routes
app.use("/", noteRouters);


const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log('Mongodb is successfully connected');
        app.listen(PORT, () => {
            console.log(`Server running on address http://localhost:${PORT}`);
        });
    }).catch(err => {
        console.log('Error while connecting to Mongo: ', err);
    });

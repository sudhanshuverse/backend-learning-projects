// External module
const express = require('express');
const { default: mongoose, set } = require('mongoose');

// Local module
const path = require('path');
const fileRoutes = require('./routers/fileRoutes');

const app = express();

// Mongo URL
const DB_PATH = "mongodb://localhost:27017//file";

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// routes
app.use("/", fileRoutes);


const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log('mongoDB is successfully connected');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log(`Error while connecting to database`, err);
    })

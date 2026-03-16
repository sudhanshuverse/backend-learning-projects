// External modules
const express = require('express');
const mongoose = require('mongoose');

// Local modules
const noteRouters = require('./routes/noteRoutes');

const app = express();

const DB_PATH = process.env.MONGO_URI || "your-mongodb-connection";

// view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", noteRouters);

const PORT = 8000;

mongoose.connect(DB_PATH)
.then(() => {
    console.log("Mongo Connected");
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
.catch(err => console.log(err));
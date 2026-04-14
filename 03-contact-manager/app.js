// External modules
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local module
const contactRouter = require("./routers/contactRouter");

// Mongoose URL
const DB_PATH = "mongodb://localhost:27017//contact";


const app = express();

// set view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public")); // Use to access static files
app.use(express.urlencoded({ extended: true }));

app.use("/", contactRouter);

const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log("Mongodb is successfully connected");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log("Error while connecting mongo", err);
    })
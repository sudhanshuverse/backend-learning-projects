// External modules
const express = require('express');
const { default: mongoose } = require('mongoose');


// Local module
const productRouter = require('./routers/productRouter');

// Mongo URL
const DB_PATH = "mongodb://localhost:27017//product";
const app = express();

// view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));  // Enable to access the static files
app.use(express.urlencoded({ extended: true }));

app.use("/", productRouter);

const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log("Database is successfully completed");
        app.listen(PORT, () => {
            console.log(`Server is running on: http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log('Error while connecting to database', err);
    })
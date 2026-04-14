// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local module
const todoRoutes = require('./routes/todoRoutes');

// Mongodb url
const DB_PATH = "mongodb://localhost:27017//todo";


const app = express();

// view engine ejs
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'))  // server static files
app.use(express.urlencoded({ extended: true }));  // Enable to to access form data

app.use("/", todoRoutes)


const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log("Mongodb is successfully connected");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log('Error while connecting mongoose', err);
    })

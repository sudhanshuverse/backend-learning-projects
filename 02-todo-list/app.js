// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local module


// MongoDB connection string (MongoDB Atlas cluster)
const DB_PATH = "mongodb://root:root@ac-u0nafti-shard-00-00.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-01.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-02.r9jtfbr.mongodb.net:27017/todo?ssl=true&replicaSet=atlas-dvojmu-shard-0&authSource=admin&appName=Practice";

// Create Express application
const app = express();

// Set EJS as the template/view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));  // Serves static files(CSS, JS, Assets)
app.use(express.urlencoded({ extended: true }));  // Parses URL-encoded form data from requests (req.body)

app.use('/', (req, res) => {
    res.render('home');
})

const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log('Error while connecting mongo', err);
    })


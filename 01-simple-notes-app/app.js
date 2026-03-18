// External module
const express = require('express');
const { default: mongoose } = require('mongoose');
const DB_PATH = "mongodb://root:root@ac-u0nafti-shard-00-00.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-01.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-02.r9jtfbr.mongodb.net:27017/notes?ssl=true&replicaSet=atlas-dvojmu-shard-0&authSource=admin&appName=Practice";

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

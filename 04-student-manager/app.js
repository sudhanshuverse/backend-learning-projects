// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local module
const studentRouter = require("./Routers/studentRouter");

// Mongoose URL
const DB_PATH = "mongodb://root:root@ac-u0nafti-shard-00-00.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-01.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-02.r9jtfbr.mongodb.net:27017/student?ssl=true&replicaSet=atlas-dvojmu-shard-0&authSource=admin&appName=Practice";
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
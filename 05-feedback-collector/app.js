// External module
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local modules
const feedbackRouter = require("./routers/feedbackRouter");

const app = express();


// Mongoose URl
const DB_PATH = "mongodb://root:root@ac-u0nafti-shard-00-00.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-01.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-02.r9jtfbr.mongodb.net:27017/feedback?ssl=true&replicaSet=atlas-dvojmu-shard-0&authSource=admin&appName=Practice";

// view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'))  // Access the static files
app.use(express.urlencoded({ extended: true }));

app.use("/", feedbackRouter);


const PORT = 8000;
mongoose.connect(DB_PATH)
    .then(() => {
        console.log("Mongodb is successfully connected");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log('Error white connecting to mongo', err);
    })
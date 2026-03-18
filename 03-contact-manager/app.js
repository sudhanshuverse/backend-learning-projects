// External modules
const express = require('express');
const { default: mongoose } = require('mongoose');

// Local module
const contactRouter = require("./routers/contactRouter");

// Mongoose URL
const DB_PATH = "mongodb://root:root@ac-u0nafti-shard-00-00.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-01.r9jtfbr.mongodb.net:27017,ac-u0nafti-shard-00-02.r9jtfbr.mongodb.net:27017/contact?ssl=true&replicaSet=atlas-dvojmu-shard-0&authSource=admin&appName=Practice";


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
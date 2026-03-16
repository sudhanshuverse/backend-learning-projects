const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const noteRouters = require("../routes/noteRoutes");

const app = express();

const DB_PATH = process.env.MONGO_URI;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", noteRouters);

mongoose.connect(DB_PATH)
    .then(() => console.log("Mongo Connected"))
    .catch(err => console.log(err));

module.exports = serverless(app);
const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    filename: String,
    filepath: String,
    mimetype: String,
    size: Number
});

module.exports = mongoose.model("File", fileSchema);
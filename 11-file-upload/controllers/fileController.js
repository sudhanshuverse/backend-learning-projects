const fs = require("fs");
const path = require("path");
const File = require('../models/File');

// Get all files
exports.getAllFiles = async (req, res) => {
    const allData = await File.find();
    res.render('home', { allData });
};

// Save file
exports.saveFileData = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.send("No file uploaded");
        }

        await File.create({
            filename: file.filename,
            filepath: file.path,
            mimetype: file.mimetype,
            size: file.size
        });

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error uploading file");
    }
};

// Delete files
exports.deleteFile = async (req, res) => {
    try {
        const id = req.params.id;

        const file = await File.findById(id);

        if (!file) {
            return res.send("File not found");
        }

        // delete from uploads folder
        fs.unlink(path.join(__dirname, "..", file.filepath), (err) => {
            if (err) console.log("File delete error:", err);
        });

        // delete from DB
        await File.findByIdAndDelete(id);

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting file");
    }
};
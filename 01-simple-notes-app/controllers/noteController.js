const Note = require("../models/Note");

// Show all notes
exports.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.render("pages/home", { notes });
};

// Save note
exports.createNote = async (req, res) => {
    const { heading, paragraph } = req.body;
    await Note.create({ heading, paragraph });
    res.redirect("/");
};

// Delete note
exports.deleteNote = async (req, res) => {
    const id = req.params.id;
    await Note.findByIdAndDelete(id);
    res.redirect("/");
};
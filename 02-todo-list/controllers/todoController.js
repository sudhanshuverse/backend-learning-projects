const Note = require('../models/Todo');

exports.getTodo = async (req, res) => {
    const todos = await Note.find();
    res.render("home", { todos });
}
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    required: true
})

const Todo = mongoose.model("Note", TodoSchema);

module.exports = Todo;
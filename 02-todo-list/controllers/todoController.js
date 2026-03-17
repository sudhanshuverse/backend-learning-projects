const Todo = require('../models/Todo');

// Get all tasks
exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render("home", { todos });
    } catch (err) {
        res.status(500).send("Error fetching todos");
    }
};

// Save task
exports.createTodo = async (req, res) => {
    const { task } = req.body;
    await Todo.create({ task });
    res.redirect("/");
};

// Task status
exports.toggleStatus = async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    await Todo.findByIdAndUpdate(id, {
        status: !todo.status
    });

    res.redirect("/");
};

// Delete task
exports.deleteTodo = async (req, res) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.redirect("/");
}


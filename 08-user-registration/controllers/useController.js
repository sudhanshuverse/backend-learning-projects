const User = require('../models/User');

// Get all data
exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.render("home", { users })
}

// Add new user
exports.addUser = async (req, res) => {
    const user = req.body;
    await User.create(user);
    res.redirect("/");
}

// Delete user
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.redirect("/");
}

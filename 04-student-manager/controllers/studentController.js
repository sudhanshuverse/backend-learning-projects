const Student = require('../models/Student');

// Get all data
exports.getAllStudent = async (req, res) => {
    const students = await Student.find();
    res.render("home", { students });
}

// Save data
exports.saveStudent = async (req, res) => {
    const data = req.body;
    await Student.create(data);
    res.redirect("/");
}

// Delete data
exports.deleteStudent = async (req, res) => {
    const id = req.params.id;
    await Student.findByIdAndDelete(id);
    res.redirect("/");
}
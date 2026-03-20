const Expense = require('../models/Expense');

// Get all data
exports.getExpense = async (req, res) => {
    const expenses = await Expense.find();
    res.render('home', { expenses });
}


// Add data
exports.addExpense = async (req, res) => {
    const {title, amount, date} = req.body;
    const formattedDate = new Date(date).toISOString().split('T')[0];

    await Expense.create({
        title,
        amount,
        date: formattedDate
    });
    res.redirect("/");
}


// Delete data
exports.deleteExpense = async (req, res) => {
    const id = req.params.id;
    await Expense.findByIdAndDelete(id);
    res.redirect("/");
}
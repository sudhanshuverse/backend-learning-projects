const mongoose = require('mongoose');

const expenseRouter = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Expense = mongoose.model('Expense', expenseRouter);
module.exports = Expense;
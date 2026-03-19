const Feedback = require('../models/Feedback');

// Get all data
exports.getFeedback = async (req, res) => {
    const feedbacks = await Feedback.find();
    res.render("home", { feedbacks })
}

// Add feedback to database
exports.addFeedback = async (req, res) => {
    const feedbacks = req.body;
    await Feedback.create(feedbacks);
    res.redirect("/");
}


// Delete feedback data
exports.deleteFeedback = async (req, res) => {
    const id = req.params.id;
    await Feedback.findByIdAndDelete(id);
    res.redirect("/");
}
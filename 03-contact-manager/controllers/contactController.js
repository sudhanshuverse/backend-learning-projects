const Contact = require("../models/Contact");

// Get all data
exports.getContact = async (req, res) => {
    const contacts = await Contact.find();
    res.render("home", { contacts });
}

// Save data
exports.addContact = async (req, res) => {
    const contact = req.body;
    console.log(contact);
    await Contact.create(contact);
    res.redirect("/");
}

// Delete data
exports.deleteContact = async (req, res) => {
    const id = req.params.id;
    await Contact.findByIdAndDelete(id);
    res.redirect("/");
}
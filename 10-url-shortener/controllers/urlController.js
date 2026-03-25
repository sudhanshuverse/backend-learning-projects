const URL = require('../models/Url');
const { nanoid } = require('nanoid');


exports.getAllUrls = async (req, res) => {
    const allUser = await URL.find();
    res.render('home', { allUser });
}

exports.saveUrl = async (req, res) => {
    const originalUrl = req.body.url;
    const shortId = nanoid(6);
    await URL.create({ url: originalUrl, shortId: shortId });
    res.redirect('/');
}

exports.redirectToUrl = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId });
    if (!entry) {
        return res.status(404).send("URL not found");
    }
    // increase clicks
    entry.clicks += 1;
    // save visit time
    entry.visitHistory.push(new Date());
    await entry.save();
    res.redirect(entry.url);
};


exports.deleteUrl = async (req, res) => {
    const shortId = req.params.shortId;
    await URL.findOneAndDelete({ shortId });
    res.redirect('/');
}

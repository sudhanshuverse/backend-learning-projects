const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    visitHistory: {
        type: [Date]
    }
}, { timestamps: true });

const URL = mongoose.model('URL', urlSchema);
module.exports = URL;
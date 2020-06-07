const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    domains: [String],
    source: String,
    website: String,
    date: Date,
    image: String
})

module.exports = mongoose.model('Resource', resourceSchema);
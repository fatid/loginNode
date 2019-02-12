const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({

    blog_id : Schema.Types.ObjectId,
    title: {
        type: String,
        required : true
    },
    category: String,
    author: String,
    year: Number,
    read: Number,
    date: {

        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('blogView',BlogSchema);
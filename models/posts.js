const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "user", required: true},
    creator: {type: String, required: true},
    title: {type: String, required: true},
    post: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Post", postSchema);
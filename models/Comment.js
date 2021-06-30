const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    author: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
    },
    text: {
        type: String,
        required: true
    },
    post: {
        ref: "Post",
        type: mongoose.Schema.Types.ObjectId,
    },
});

module.exports = mongoose.model("Comment", commentSchema);
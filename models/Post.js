const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'images/www.shhmarket.ru0009_27.png'
    },
    like: [{
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }],
    savePost: [{
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }],
    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model("Post", postSchema);
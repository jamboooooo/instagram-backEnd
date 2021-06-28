const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    describe: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    },
    comments: {
        commentUsers: [{
            ref: 'Comment',
            type: mongoose.Schema.Types.ObjectId
        }],
        quantityComment: {
            type: Number,
            default: 0
        }
    },
    likes: {
        likeUsers: [{
            ref: 'Like',
            type: mongoose.Schema.Types.ObjectId
        }],
        quantityLikes: {
            type: Number,
            default: 0
        }
    }
})

module.exports = mongoose.model('Post', postSchema)
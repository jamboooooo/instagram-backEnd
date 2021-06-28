const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({
    author: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    },
    postId: {
        ref: 'Post',
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('Like', likeSchema)
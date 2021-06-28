const mongoose = require('mongoose')

const saveSchema = ({
    owner: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    },
    posts: [{
        ref: 'Post',
        type: mongoose.Schema.Types.ObjectId
    }]
})
const mongoose = require('mongoose')

const post = mongoose.Schema({
    image: String,
    caption: String
})

const PostModel = mongoose.model('post', post)

module.exports = PostModel

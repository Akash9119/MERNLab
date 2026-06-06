const mongoose = require('mongoose')

const PostsSchema = new mongoose.Schema({
    image: String,
    caption: String
})

const Posts = mongoose.model('Posts', PostsSchema)

module.exports = Posts
const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'music',
        required: true
    }]
})


const playlist = mongoose.model('playlist', playlistSchema)

module.exports = playlist
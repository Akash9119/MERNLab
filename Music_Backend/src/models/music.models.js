const mongoose = require("mongoose")

const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    song: {
        type: String,
        required: true
    }
})


const music = mongoose.model('music', musicSchema)

module.exports = music
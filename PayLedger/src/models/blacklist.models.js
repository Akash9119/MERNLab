const mongoose = require('mongoose')

const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [ true, "Token is required" ],
        unique: true,
        index: true
    },
    expiresAt: {
        type: Date,
        required: [ true, "Token expiry is required" ],
        index: {
            expires: 0
        }
    }
}, {
    timestamps: true
})

const blacklist = mongoose.model("blacklist", blacklistSchema)

module.exports = blacklist

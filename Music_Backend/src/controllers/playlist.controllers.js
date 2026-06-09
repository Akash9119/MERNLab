const jwt = require('jsonwebtoken')
const playlist = require('../models/playlist.models')
const userModel = require('../models/users.models')

const createPlaylist = async (req,res) => {
    try{
        const {name, user, songs} = req.body

        const token = req.cookies.token
        if(!token) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if(decode.role !== 'user') {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const playlistUser = user
            ? await userModel.findOne({ name: user })
            : await userModel.findById(decode.id)

        if(!playlistUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const newPlaylist = await playlist.create({
            name,
            user: playlistUser._id,
            songs: Array.isArray(songs) ? songs : [songs]
        })

        res.status(201).json({
            message: "Playlist created successfully",
            playlist: newPlaylist
        })

    } catch (err) {
        console.log(err)
        if(err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        res.status(500).json({
            message: "Internal server error"
        })
    }
}


module.exports = { createPlaylist }

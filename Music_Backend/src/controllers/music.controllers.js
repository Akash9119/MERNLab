const music = require('../models/music.models')
const uploadFile = require('../services/music.service')
const jwt = require('jsonwebtoken')

async function createMusic(req, res) {
    try{
        const {title} = req.body

        const token = req.cookies.token
        if(!token) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(decoded.role !== 'admin') {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const file = req.file
        if(!file) {
            return res.status(400).json({
                message: "No file uploaded"
            })
        }
        const response = await uploadFile(file.buffer.toString('base64'))
        const songUrl = response.url


        const newMusic = await music.create({
            title,
            user: decoded.id,
            song: songUrl
        })

        res.status(201).json({
            message: "Music created successfully",
            music: newMusic
        })

    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


async function getAllMusic(req,res) {
    try{

        const token = req.cookies.token
        if(!token) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY)

        const allMusic = await music.find()
        res.status(200).json({
            message: "All music retrieved successfully",
            music: allMusic
        })
    } catch (err) {
        console.log(err)

        res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = { createMusic, getAllMusic }

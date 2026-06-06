const express = require('express')
const Posts = require('./models/post.model')
const uploadImageToImageKit = require('../services/posts.services')
const multer = require('multer')
const imagekit = require('@imagekit/nodejs')

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

const app = express()

// app.post('/create-post', upload.single("image"), async (req,res) => {
//     const result = await uploadImageToImageKit(req.file.buffer, req.file.originalname)
//     console.log(req.files)
//     console.log(req.body)

//     res.status(201), ({
//         'message': "File Created successfully",
//         result
//     })
// })

app.post('/create-post', upload.single("image"), async (req, res) => {
    const result = await uploadImageToImageKit(req.file.buffer, req.file.originalname)
    console.log(req.file)
    console.log(req.body)

    res.status(201).json({
        message: "File Created successfully",
        result
    })
})

module.exports = app
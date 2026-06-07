const express = require('express')
const PostModel = require('./Model/post.model')
const multer = require('multer')
const ImageKitStorage = require('./services/post.service')
const cros = require('cors')

const upload = multer({ storage: multer.memoryStorage() })

const app = express()
app.use(cros())
app.use(express.json())

app.post('/create-post' , upload.single('image'), async (req, res) => {
    console.log(req.file)
    console.log(req.body)

    const image = await ImageKitStorage(req.file.buffer)
    await PostModel.create({
        image: image.url,
        caption: req.body.caption
    })

    res.status(200).json({
        message: 'Post Created Successfully'
    })
})

app.get('/get-post', async(req,res) => {
    const response = await PostModel.find()

    res.status(200).json({
        'message': 'Post Fetched Successfully',
        response
    })
})

module.exports = app

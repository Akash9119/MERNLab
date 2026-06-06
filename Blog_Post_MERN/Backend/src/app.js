const express = require('express')
const multer = require('multer')
const app = express()
const uploadImage = require('./service/posts.service')
const PostModel = require('./model/posts.model')

app.use(express.json())

const upload = multer({ storage: multer.memoryStorage()})

app.use(express.json())


app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.file)
    console.log(req.body)
    const file = await uploadImage(req.file.buffer)
    const Posts = await PostModel.create({
        image: file.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: 'Post Created successfully',
        file
    })
})

app.get('/get-posts', async (req,res) => {
    const posts = await PostModel.find() 

    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
} )


module.exports = app

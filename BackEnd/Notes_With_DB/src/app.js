const express = require('express')
const Note = require('../models/note.model')
const app = express()
app.use(express.json())

app.get('/notes',async (req,res) => {
    const notes = await Note.find()
    res.status(200).json({
        'message': "Notes fetched successfully",
        'notes': notes
    })
})


app.post('/notes', async (req,res) => {
    await Note.create({
        title: req.body.title,
        message: req.body.message
    })

    res.status(200).json({
        'message': "Note created successfully"
    })
})

app.delete('/note/:id', async (req,res) => {
    const _id = req.params.id
    await Note.findOneAndDelete(_id)
    res.status(200).json({
        'message': "Note deleted successfully"
    })
})

app.patch('/note/:id', async (req,res) => {

    const _id = req.params.id
    const message = req.body.message
    await Note.findOneAndUpdate(
        {_id: _id},
        {message: message}
    )

    res.status(200).json({
        'message': "Note updated successfully"
    })
})

module.exports = app
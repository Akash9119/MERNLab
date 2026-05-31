const express = require('express')

const app = express()

app.use(express.json())

const Notes = []

app.get('/notes', (req,res) => {
    res.status(201).json({
        'message': "API call successfull",
        Notes: Notes
    })
})

app.post('/notes', (req,res) => {
    Notes.push(req.body)

    res.status(200).json({
        'message': "Note created successfully"
    })
})

app.delete('/note/:index', (req,res) => {
    const index = req.params.index
    delete Notes[index]

    res.send(200).json({
        'message': "Note delted succssfully"
    })
})

app.patch('/note/:index', (req,res) => {
    const index = req.params.index
    const message = req.body.message

    Notes[index].message = message

    res.status(200).json({
        'message': "Message updated successfully"
    })
})

module.exports = app
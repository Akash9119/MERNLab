const express = require('express')
const user = require('./model/user.model')
const userRoutes = require('./routes/user.routes')

const app = express()
app.use(express.json())

app.use('/api/user', userRoutes)


module.exports = app
const express = require('express')
const user = require('./model/user.model')
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/api/user', userRoutes)


module.exports = app
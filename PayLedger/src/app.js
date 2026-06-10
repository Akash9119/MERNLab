const express = require('express')
const userRoute = require('./routes/auth.routes')

const app = express()

app.use('/api/auth' ,userRoute)


module.exports = app
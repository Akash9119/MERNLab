const express = require('express')
const testRoute = require('../src/routes/test.routes')

const app = express()
app.use(express.json())

app.use(testRoute)

module.exports = app
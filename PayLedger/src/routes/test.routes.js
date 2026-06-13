const express = require('express')
const testController = require('../controllers/test.controller')

const route = express.Router()

route.get('/test', testController.testRoute)

module.exports = route
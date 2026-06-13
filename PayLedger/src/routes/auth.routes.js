const express = require('express')
const authController = require('../controllers/auth.controllers')

const router = express.Router()


router.post('/sign-up', authController.registerUser)
router.post('/log-in', authController.loginUser)

module.exports = router
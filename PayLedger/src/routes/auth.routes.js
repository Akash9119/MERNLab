const express = require('express')
const authController = require('../controllers/auth.controllers')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()


router.post('/sign-up', authController.registerUser)
router.post('/log-in', authController.loginUser)
router.post('/log-out', authMiddleware, authController.logoutUser)

module.exports = router

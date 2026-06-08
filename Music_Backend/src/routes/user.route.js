const express = require("express")
const mongoose = require("mongoose")
const { registerUser, loginUser, logoutUser } = require('../controllers/auth.controllers')
const router = express.Router()

router.post('/signup' , registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)


module.exports = router
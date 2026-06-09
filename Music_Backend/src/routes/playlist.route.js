const express = require('express')
const { createPlaylist } = require('../controllers/playlist.controllers') 
const router = express.Router()

router.post('/create', createPlaylist)

module.exports = router
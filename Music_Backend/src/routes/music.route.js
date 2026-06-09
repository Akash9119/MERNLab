const mongoose = require("mongoose")
const express = require("express")
const upload = require('../middlewares/multer')
const { createMusic, getAllMusic} = require('../controllers/music.controllers')

const router = express.Router()


router.post('/add', upload.single('song'), createMusic)
router.get('/get', getAllMusic)

module.exports = router

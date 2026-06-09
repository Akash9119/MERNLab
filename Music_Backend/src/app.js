const express = require("express")
const cookieParser = require("cookie-parser")
const userRouter = require('./routes/user.route')
const musicRouter = require('./routes/music.route')
const playlistRouter = require('./routes/playlist.route')

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/users', userRouter)
app.use('/api/music', musicRouter)
app.use('/api/playlist', playlistRouter)


module.exports = app

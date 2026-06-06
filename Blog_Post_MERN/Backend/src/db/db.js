const mongoose = require('mongoose')
require('dotenv').config()

const connectToDB = async function () {
    await mongoose.connect(process.env.DATABASE_URI,
        console.log("DB connected")
    )
}

module.exports = connectToDB
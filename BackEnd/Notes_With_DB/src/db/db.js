const mongoose = require('mongoose')
require('dotenv').config()

async function connectToDB() {
    await mongoose.connect(process.env.DATABASE_URI,
        console.log("Connected to DB")
    )
}

module.exports = connectToDB
const mongoose = require('mongoose')
require('dotenv').config()

const ConnectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URI,
        console.log("Connected to DB")
    )
}

module.exports = ConnectDB
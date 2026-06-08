const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, 
            console.log("Connected to MongoDB")
        )
    }
    catch (err) {
        await console.error("Error connecting to MongoDB:" + err)
    }
}

module.exports = connectDB
const mongoose = require("mongoose")
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI,
             console.log("Conncted to MongoDB successfully")
            )
    }
    catch (err) {
        console.log("Error connecting to MongoDB: " , err)
    }
}

module.exports = connectDB
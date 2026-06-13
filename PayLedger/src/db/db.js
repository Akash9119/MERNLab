const mongoose = require('mongoose')
require('dotenv').config()


async function ConnectDB () {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to the Database")
    })} catch (err) {
        console.log("Error connecting with Database: " , err)
        process.exit(1)
    }    
}

module.exports = ConnectDB
const mongoose = require('mongoose')

async function connectToDB() {
    await mongoose.connect('mongodb+srv://akash:Akash%4012345@notes.lmf5f8p.mongodb.net/notes',
        console.log("Connected to DB")
    )
}

module.exports = connectToDB
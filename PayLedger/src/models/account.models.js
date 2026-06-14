const mongoose = require('mongoose')

const accoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [ true , "User is required to create an account"],
        index: true
    },
    status: {
        type: String,
        enum: {
            values: ['ACTIVE', 'FROZEN', 'DELETED'],
            message: "Account can be ACTIVE, FROZEN or DELETED"
        },
        default: "ACTIVE"
    },
    currency: {
        type: String,
        required: [ true, "Currency type is required to create a account"],
        default: "INR"
    }
}, {
    timestamps: true
})

accoutSchema.index({ user: 1, status: 1 })

const account = mongoose.model("account" ,  accoutSchema )

module.exports = account
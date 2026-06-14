const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    senderAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [ true, "Sender account is required" ],
        index: true
    },
    receiverAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [ true, "Receiver account is required" ],
        index: true
    },
    amount: {
        type: Number,
        required: [ true, "Amount is required" ],
        min: [ 1, "Amount must be greater than 0" ]
    },
    currency: {
        type: String,
        required: [ true, "Currency is required" ],
        default: "INR"
    },
    status: {
        type: String,
        enum: {
            values: [ 'PENDING', 'COMPLETED', 'FAILED' ],
            message: "Transaction status can be PENDING, COMPLETED or FAILED"
        },
        default: "PENDING",
        index: true
    },
    idempotencyKey: {
        type: String,
        required: [ true, "Idempotency key is required" ],
        unique: true,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [ true, "User is required to create transaction" ],
        index: true
    }
}, {
    timestamps: true
})

transactionSchema.index({ idempotencyKey: 1 }, { unique: true })

const transaction = mongoose.model("transaction", transactionSchema)

module.exports = transaction

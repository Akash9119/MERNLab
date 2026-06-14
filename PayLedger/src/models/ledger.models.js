const mongoose = require('mongoose')

const ledgerSchema = new mongoose.Schema({
    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "transaction",
        required: [ true, "Transaction is required" ],
        immutable: true,
        index: true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [ true, "Account is required" ],
        immutable: true,
        index: true
    },
    entryType: {
        type: String,
        enum: {
            values: [ 'DEBIT', 'CREDIT' ],
            message: "Ledger entry can be DEBIT or CREDIT"
        },
        required: [ true, "Ledger entry type is required" ],
        immutable: true
    },
    amount: {
        type: Number,
        required: [ true, "Amount is required" ],
        min: [ 1, "Amount must be greater than 0" ],
        immutable: true
    },
    currency: {
        type: String,
        required: [ true, "Currency is required" ],
        default: "INR",
        immutable: true
    }
}, {
    timestamps: true
})

ledgerSchema.index({ account: 1, createdAt: 1 })
ledgerSchema.index({ transaction: 1, entryType: 1 }, { unique: true })

const ledger = mongoose.model("ledger", ledgerSchema)

module.exports = ledger

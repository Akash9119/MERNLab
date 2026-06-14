const mongoose = require('mongoose')
const account = require('../models/account.models')
const transaction = require('../models/transaction.models')
const ledger = require('../models/ledger.models')
const emailService = require('../services/email.services')


async function sendTransactionNotification(senderAccount, receiverAccount, amount, currency) {
    try {
        if(senderAccount.user?.email) {
            await emailService.sendEmail(
                senderAccount.user.email,
                'PayLedger transaction debited',
                `Your account was debited with ${currency} ${amount}`,
                `<p>Your account was debited with <b>${currency} ${amount}</b>.</p>`
            )
        }

        if(receiverAccount.user?.email) {
            await emailService.sendEmail(
                receiverAccount.user.email,
                'PayLedger transaction credited',
                `Your account was credited with ${currency} ${amount}`,
                `<p>Your account was credited with <b>${currency} ${amount}</b>.</p>`
            )
        }
    } catch (err) {
        console.log("Transaction notification failed: ", err)
    }
}


/**
 *  - Controller to create transaction
 *  - POST /api/transaction/create
 */
async function createTransactionController(req,res) {
    const { senderAccount, receiverAccount, amount, currency = "INR", idempotencyKey } = req.body
    const requestKey = idempotencyKey || req.headers['idempotency-key']

    if(!senderAccount || !receiverAccount || !amount || !requestKey) {
        return res.status(400).json({
            message: "Sender account, receiver account, amount and idempotency key are required"
        })
    }

    if(!mongoose.isValidObjectId(senderAccount) || !mongoose.isValidObjectId(receiverAccount)) {
        return res.status(400).json({
            message: "Sender account and receiver account should be valid"
        })
    }

    if(Number(amount) <= 0) {
        return res.status(400).json({
            message: "Amount should be greater than 0"
        })
    }

    if(senderAccount === receiverAccount) {
        return res.status(400).json({
            message: "Sender and receiver account cannot be same"
        })
    }

    const existingTransaction = await transaction.findOne({ idempotencyKey: requestKey })

    if(existingTransaction) {
        return res.status(409).json({
            message: "Duplicate transaction request",
            transaction: existingTransaction
        })
    }

    const sender = await account.findById(senderAccount).populate('user')

    if(!sender) {
        return res.status(404).json({
            message: "Sender account not found"
        })
    }

    if(sender.user._id.toString() !== req.user._id.toString()) {
        return res.status(403).json({
            message: "Sender account does not belong to logged in user"
        })
    }

    if(sender.status !== "ACTIVE") {
        return res.status(422).json({
            message: "Sender account is not active"
        })
    }

    const receiver = await account.findById(receiverAccount).populate('user')

    if(!receiver) {
        return res.status(404).json({
            message: "Receiver account not found"
        })
    }

    if(receiver.status !== "ACTIVE") {
        return res.status(422).json({
            message: "Receiver account is not active"
        })
    }

    if(sender.currency !== receiver.currency || sender.currency !== currency) {
        return res.status(422).json({
            message: "Currency should be same for sender and receiver account"
        })
    }

    const newTransaction = await transaction.create({
        senderAccount,
        receiverAccount,
        amount,
        currency,
        idempotencyKey: requestKey,
        createdBy: req.user._id
    })

    try {
        await ledger.create([
            {
                transaction: newTransaction._id,
                account: senderAccount,
                entryType: "DEBIT",
                amount,
                currency
            },
            {
                transaction: newTransaction._id,
                account: receiverAccount,
                entryType: "CREDIT",
                amount,
                currency
            }
        ])

        newTransaction.status = "COMPLETED"
        await newTransaction.save()
    } catch (err) {
        newTransaction.status = "FAILED"
        await newTransaction.save()

        return res.status(500).json({
            message: "Transaction failed",
            error: err.message
        })
    }

    await sendTransactionNotification(sender, receiver, amount, currency)

    res.status(201).json({
        message: "Transaction created successfully",
        transaction: newTransaction
    })
}


/**
 *  - Controller to get account balance from ledger
 *  - GET /api/transaction/balance/:accountId
 */
async function getBalanceController(req,res) {
    const { accountId } = req.params

    if(!mongoose.isValidObjectId(accountId)) {
        return res.status(400).json({
            message: "Account id should be valid"
        })
    }

    const userAccount = await account.findById(accountId)

    if(!userAccount) {
        return res.status(404).json({
            message: "Account not found"
        })
    }

    if(userAccount.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({
            message: "Account does not belong to logged in user"
        })
    }

    const balance = await ledger.aggregate([
        {
            $match: {
                account: new mongoose.Types.ObjectId(accountId)
            }
        },
        {
            $group: {
                _id: "$account",
                credit: {
                    $sum: {
                        $cond: [ { $eq: [ "$entryType", "CREDIT" ] }, "$amount", 0 ]
                    }
                },
                debit: {
                    $sum: {
                        $cond: [ { $eq: [ "$entryType", "DEBIT" ] }, "$amount", 0 ]
                    }
                }
            }
        },
        {
            $project: {
                _id: 0,
                account: "$_id",
                credit: 1,
                debit: 1,
                balance: { $subtract: [ "$credit", "$debit" ] }
            }
        }
    ])

    res.status(200).json({
        message: "Account balance",
        balance: balance[0] || {
            account: accountId,
            credit: 0,
            debit: 0,
            balance: 0
        }
    })
}


module.exports = { createTransactionController, getBalanceController }

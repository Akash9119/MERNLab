const account = require('../models/account.models')


/**
 *  - Controller to create user account
 *  - POST /api/account/create
 */
async function accountCreateController (req,res) {
    const newAccount = await account.create({
        user: req.user._id
    })

    res.status(201).json({
        message: "Account created successfully",
        account: newAccount
    })
}


/**
 *  - To get the account of existing user
 *  - GET /api/account/get
 */
async function getAccountController (req,res) {
    
    const user = req.body

    res.status(200).json({
        message: "User account exists",
        user
    })

}


module.exports = { accountCreateController, getAccountController }
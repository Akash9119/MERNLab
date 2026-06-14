const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')

const accountController = require('../controllers/account.controllers')

const router = express.Router()


router.post( '/create',authMiddleware , accountController.accountCreateController)
router.get(  '/get', authMiddleware, accountController.getAccountController)


module.exports = router
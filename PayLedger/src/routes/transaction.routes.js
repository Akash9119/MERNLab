const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')

const transactionController = require('../controllers/transaction.controllers')

const router = express.Router()


router.post('/create', authMiddleware, transactionController.createTransactionController)
router.get('/balance/:accountId', authMiddleware, transactionController.getBalanceController)


module.exports = router

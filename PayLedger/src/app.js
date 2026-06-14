const express = require('express')
const cookieParser = require('cookie-parser')


const testRoute = require('../src/routes/test.routes')
const authRoute = require('../src/routes/auth.routes')
const accountRoute = require('../src/routes/account.routes')
const transactionRoute = require('../src/routes/transaction.routes')


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use( '/api' ,testRoute)
app.use('/api/auth', authRoute)
app.use('/api/account', accountRoute)
app.use('/api/transaction', transactionRoute)

module.exports = app

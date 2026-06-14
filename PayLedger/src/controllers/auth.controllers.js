const users = require('../models/users.models')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const cookie = require('cookie-parser')
const emailService = require('../services/email.services')
const blacklist = require('../models/blacklist.models')

const cookieOptions = {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000
}

/**
 *  - User registration path
 *  - /api/auth/sign-up
 */
async function registerUser(req,res) {
    try {
        const {user, email, password} = req.body

    const isExist = await users.findOne({email})

    if(isExist) {
        return res.status(422).json({
            message: "User already exists"
        })
    }

    const newUser = await users.create({user, email, password})

    const token = jwt.sign({user_id:newUser._id}, process.env.JWT_SECRET)

    res.cookie('token', token, cookieOptions)

    res.status(201).json({
        message: "New user Created",
        newUser
    })
    } catch (err) {
        console.log("Internal server error: ", err)
    }

    // Example usage
    await emailService.sendEmail(
    'akashj.vasava@gmail.com',
    'PayLedger User Registraion',
    'This email notifies a user registration from PayLeger',
    '<p>This is a test email sent with <b>Nodemailer</b> using OAuth2.</p>'
    );


}


/**
 *  - User login path
 *  - /api/auth/log-in
 */
async function loginUser(req,res) {
    const { email, password} = req.body

    const userExist = await users.findOne({email}).select('+password')

    if(!userExist) {
        return res.status(401).json({
            message: "User name or password is invalid"
        })
    }
    
    const passwordMatch = await userExist.comparePassword(password)

    if(!passwordMatch) {
        return res.status(401).json({
            message: "User name or password is invalid"
        })
    } 

    const token = jwt.sign({user_id: userExist._id}, process.env.JWT_SECRET)
    res.cookie('token', token, cookieOptions)

    res.status(200).json({
        message: "User logged in successfully"
    })


}


/**
 *  - User logout path
 *  - /api/auth/log-out
 */
async function logoutUser(req,res) {
    const token = req.token
    const decoded = jwt.decode(token)
    const expiresAt = decoded?.exp ? new Date(decoded.exp * 1000) : new Date(Date.now() + 3600000)

    const tokenExist = await blacklist.findOne({ token })

    if(!tokenExist) {
        await blacklist.create({
            token,
            expiresAt
        })
    }

    res.clearCookie('token', {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production"
    })

    res.status(200).json({
        message: "User logged out successfully"
    })
}


module.exports = { registerUser, loginUser, logoutUser }

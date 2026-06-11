const userModel = require('../models/user.model')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()

/**
 * - User Register Controller
 * - Post /api/auth/register
 */
async function registerUserController (req,res) {
    const {name, email, password } = req.body

    const userExist = await userModel.findOne({ email: email })
    if(userExist) {
        return res.status(422).json({
            message: "User already exists with this email",
            status: "failed"
        })
    }

    const user = await userModel.create({ name, email, password})

    const token = jwt.sign({User_id: user._id}, process.env.JWT_SECRET, {expiresIn: '3d'})

    res.cookie('token', token)

    res.status(201).json({
        user : {
            _id: user._id,
            user: user.name,
            email: user.email,
            password: user.password
        },
        token
    })



}


module.exports = { registerUserController }
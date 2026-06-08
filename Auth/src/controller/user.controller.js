const user = require('../model/user.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const registerUser = async (req, res) => {
    const {user_name, email, password} = req.body
    const newUser = {
        user_name,
        email,
        password
    }
    try{
        const existingUser = await user.findOne({email})
        if(existingUser) {
            return res.status(400).json({
                message: 'User with this email already exists'
            })
        }
        const userData = await user.create(newUser)
        const token = jwt.sign({
            id: userData._id,
            email: userData.email
        }, process.env.JWT_SECRET)

        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        }
        res.cookie('token', token, cookieOptions)
        res.status(201).json({
            message: 'User resgistered successfully',
            data: userData
        })
    }
    catch(err) {
        console.log("Error in registering user", err)
        res.status(500).json({
            message: 'Error in registering user'
        })
    }
}


module.exports = {
    registerUser
}
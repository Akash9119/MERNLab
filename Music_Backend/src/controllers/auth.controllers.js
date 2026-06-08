const express = require('express')
const mongoose = require('mongoose')
const user = require('../models/users.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

async function registerUser(req,res) {
    const {name, email, password, role} = req.body

    try {
        const existingUser = await user.findOne({
            $or: [
                { name: name },
                { email: email }
            ]
        })
        if(existingUser) {
            return res.status(401).json({
                message: "User already exists"
            })
        }

        const pass = await bcrypt.hash(password, 10)

        const newUser = await user.create({
            name,
            email,
            password: pass,
            role
        })
        const token = jwt.sign({
            id: newUser._id,
            role: newUser.role
        }, process.env.JWT_SECRET_KEY)

        res.cookie('token', token)

        res.status(201).json({
            message: "User created successfully",
            user: newUser
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
 }


async function loginUser(req,res) {
    try {
        const {name, email, password} = req.body
        
        const existingUser = await user.findOne({
            $or: [
                { name: name },
                { email: email }
            ]
        })
        if(!existingUser) {
            return res.status(401).json({
                message: "User not found"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordValid) {
            res.status(401).json({
                message: "Invalid password"
            })
        }
        const token = jwt.sign({
            id: existingUser._id,
            role: existingUser.role
        }, process.env.JWT_SECRET_KEY)
        res.cookie('token', token)

        res.status(200).json({
            message: "User logged in successfully",
            user: existingUser
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

async function logoutUser(req,res) {
    res.clearCookie('token')
    res.status(200).json({
        message: "User logged out successfully"
    })
}

module.exports = { registerUser, loginUser, logoutUser }
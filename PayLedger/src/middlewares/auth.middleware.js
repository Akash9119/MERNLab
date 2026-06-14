const userModel = require('../models/users.models')
const jwt = require('jsonwebtoken')
const blacklist = require('../models/blacklist.models')


/**
 *  - User Auth Check middleware
 *  - Compares jwt token and provides user
 */
async function authMiddleware(req,res,next) {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.status(401).json({
            message: "Authorized access, token is required"
        })
    }

    try{
        const blacklistedToken = await blacklist.findOne({ token })

        if(blacklistedToken) {
            return res.status(401).json({
                message: "Token is expired or logged out"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.user_id)

        if(!user) {
            return res.status(401).json({
                message: "User not found"
            })
        }

        req.token = token
        req.user = user

        return next()

    } catch (err) {
        if(err.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Token expired"
            })
        }

        if(err.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Invalid token"
            })
        }

        return res.status(401).json({
            message: "Access denied"
        })
    }
}


module.exports = authMiddleware

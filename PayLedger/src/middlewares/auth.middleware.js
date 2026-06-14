const userModel = require('../models/users.models')
const jwt = require('jsonwebtoken')


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

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.user_id)

        req.user = user

        return next()

    } catch (err) {
        return res.status(401).json({
            message: "Access denied"
        })
    }
}


module.exports = authMiddleware